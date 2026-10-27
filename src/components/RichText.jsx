// Convierte el texto de un apunte en nodos de React.
// No usa HTML libre: solo reconoce negrita, cursiva y código en línea.
//
// En cualquier párrafo, viñeta, nota, alerta o pie de imagen se puede escribir:
//   **negrita**     o   <b>negrita</b>        o   <strong>negrita</strong>
//   *cursiva*       o   <i>cursiva</i>        o   <em>cursiva</em>
//   `código`        o   <code>código</code>
//   ***ambas***     negrita y cursiva a la vez
//   [texto](https://...)   o   <a href="https://...">texto</a>
//   El enlace abre otra ventana. Entre ] y ( puede haber un espacio.
// Se pueden anidar: **negrita con *cursiva* dentro**.
// Si falta el cierre, el marcador se muestra como texto.

const HTML_KIND = {
  b: 'strong',
  strong: 'strong',
  i: 'em',
  em: 'em',
  code: 'code',
};

// El primer asterisco de un par ** no cierra una cursiva.
function findSingleStar(text, from) {
  for (let index = from; index < text.length; index += 1) {
    if (text[index] === '*' && text[index - 1] !== '*' && text[index + 1] !== '*') return index;
  }
  return -1;
}

// Primer marcador con cierre, leyendo desde `from`.
// `start` es donde empieza el marcador; `innerStart`/`innerEnd` es el contenido.
function nextMarker(text, from) {
  for (let index = from; index < text.length; index += 1) {
    if (text.startsWith('***', index)) {
      const end = text.indexOf('***', index + 3);
      if (end !== -1) {
        return { kind: 'both', start: index, innerStart: index + 3, innerEnd: end, end: end + 3 };
      }
    }

    if (text.startsWith('**', index)) {
      const end = text.indexOf('**', index + 2);
      if (end !== -1) {
        return { kind: 'strong', start: index, innerStart: index + 2, innerEnd: end, end: end + 2 };
      }
    }

    if (text[index] === '*' && text[index + 1] !== '*') {
      const end = findSingleStar(text, index + 1);
      if (end !== -1) {
        return { kind: 'em', start: index, innerStart: index + 1, innerEnd: end, end: end + 1 };
      }
    }

    if (text[index] === '`') {
      const end = text.indexOf('`', index + 1);
      if (end > index + 1) {
        return { kind: 'code', start: index, raw: text.slice(index + 1, end), end: end + 1 };
      }
    }

    if (text[index] === '[') {
      const markdown = /^\[([^\]]+)\]\s*\(([^)\s]+)\)/.exec(text.slice(index));
      const href = markdown ? safeHref(markdown[2]) : null;
      if (markdown && href) {
        return {
          kind: 'link',
          start: index,
          href,
          innerStart: index + 1,
          innerEnd: index + 1 + markdown[1].length,
          end: index + markdown[0].length,
        };
      }
    }

    const anchor = /^<a\s+href=(?:"([^"]+)"|'([^']+)')\s*>/i.exec(text.slice(index));
    if (anchor) {
      const href = safeHref(anchor[1] ?? anchor[2]);
      const rest = text.slice(index + anchor[0].length);
      const close = /<\/a>/i.exec(rest);
      if (href && close) {
        const innerStart = index + anchor[0].length;
        const innerEnd = innerStart + close.index;
        return { kind: 'link', start: index, href, innerStart, innerEnd, end: innerEnd + close[0].length };
      }
    }

    const tag = /^<(b|strong|i|em|code)>/i.exec(text.slice(index));
    if (tag) {
      const name = tag[1].toLowerCase();
      const rest = text.slice(index + tag[0].length);
      const close = new RegExp(`</${name}>`, 'i').exec(rest);
      if (close) {
        const innerStart = index + tag[0].length;
        const innerEnd = innerStart + close.index;
        return {
          kind: HTML_KIND[name],
          start: index,
          raw: name === 'code' ? rest.slice(0, close.index) : undefined,
          innerStart,
          innerEnd,
          end: innerEnd + close[0].length,
        };
      }
    }
  }

  return null;
}

// Solo direcciones web, correo o una ruta de este sitio. El resto se deja como texto.
function safeHref(raw) {
  const href = raw.trim();
  if (href.startsWith('/') && !href.startsWith('//')) return href;

  try {
    const url = new URL(href);
    if (url.protocol === 'http:' || url.protocol === 'https:' || url.protocol === 'mailto:') return href;
  } catch {
    return null;
  }

  return null;
}

// Lista de strings y de marcas. El código en línea no se vuelve a interpretar.
function parseInline(text) {
  const nodes = [];
  let cursor = 0;

  while (cursor < text.length) {
    const marker = nextMarker(text, cursor);
    if (!marker) {
      nodes.push(text.slice(cursor));
      break;
    }

    if (marker.start > cursor) nodes.push(text.slice(cursor, marker.start));

    if (marker.kind === 'code') nodes.push({ kind: 'code', raw: marker.raw });
    else if (marker.kind === 'link') {
      nodes.push({ kind: 'link', href: marker.href, children: parseInline(text.slice(marker.innerStart, marker.innerEnd)) });
    } else nodes.push({ kind: marker.kind, children: parseInline(text.slice(marker.innerStart, marker.innerEnd)) });

    cursor = marker.end;
  }

  return nodes;
}

function renderInline(nodes, keyPrefix) {
  return nodes.map((node, index) => {
    const key = `${keyPrefix}-${index}`;
    if (typeof node === 'string') return <span key={key}>{node}</span>;
    if (node.kind === 'code') return <code key={key}>{node.raw}</code>;
    if (node.kind === 'link') {
      return (
        <a key={key} href={node.href} target="_blank" rel="noopener noreferrer">
          {renderInline(node.children, key)}
        </a>
      );
    }
    if (node.kind === 'both') {
      return (
        <strong key={key}>
          <em>{renderInline(node.children, key)}</em>
        </strong>
      );
    }
    if (node.kind === 'strong') return <strong key={key}>{renderInline(node.children, key)}</strong>;
    return <em key={key}>{renderInline(node.children, key)}</em>;
  });
}

export default function RichText({ text }) {
  if (!text) return null;
  return renderInline(parseInline(String(text)), 't');
}
