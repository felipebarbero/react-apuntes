// Bloque de código con resaltado y botón para copiarlo.
import { useEffect, useRef, useState } from 'react';
// PrismLight registra solo los lenguajes que se importan, en vez de cargar todos.
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';
import oneLight from 'react-syntax-highlighter/dist/esm/styles/prism/one-light';
import { useTheme } from '../theme/theme-context.js';

// Quita la sangría del archivo y deja la del ejemplo.
// Si todas las líneas comparten espacios, se restan esos.
// Si la primera línea (por ejemplo "{") no tiene y el resto tiene más de 4,
// esos espacios son la columna del catálogo, no el código.
function dedent(text) {
  const lines = text.split('\n');
  let start = 0;
  let end = lines.length;
  while (start < end && lines[start].trim() === '') start += 1;
  while (end > start && lines[end - 1].trim() === '') end -= 1;
  const body = lines.slice(start, end);
  if (body.length === 0) return '';

  const leading = (line) => line.match(/^ */)[0].length;
  const indents = body.filter((line) => line.trim() !== '').map(leading);
  const minAll = Math.min(...indents);
  let base = minAll;

  if (minAll === 0) {
    const positive = indents.filter((count) => count > 0);
    const minPositive = positive.length > 0 ? Math.min(...positive) : 0;
    base = minPositive > 4 ? minPositive : 0;
  }

  return body.map((line) => line.slice(Math.min(base, leading(line)))).join('\n');
}

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);

// Nombre visible en la cabecera del bloque. Si el lenguaje no está, se muestra tal cual viene.
const LABELS = {
  jsx: 'JSX',
  tsx: 'TSX',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  python: 'Python',
  markdown: 'Markdown',
  json: 'JSON',
  bash: 'Shell',
  terminal: 'Terminal',
  text: 'Texto',
};

export default function CodeBlock({ language = 'text', value }) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  // Id del temporizador que vuelve a poner el botón en "Copiar".
  const resetRef = useRef(0);
  const code = dedent(value).trim();
  const isTerminal = language === 'terminal';
  const label = LABELS[language] ?? language;

  // Si el componente se desmonta con el aviso "Copiado" todavía visible, cancela el temporizador.
  useEffect(() => () => window.clearTimeout(resetRef.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.clearTimeout(resetRef.current);
      resetRef.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Sin permiso del portapapeles el botón no cambia de texto.
      setCopied(false);
    }
  }

  return (
    <figure className={isTerminal ? 'code-block code-block-terminal card my-3 overflow-hidden' : 'code-block card my-3 overflow-hidden'}>
      <figcaption className="card-header d-flex justify-content-between align-items-center py-1 px-3">
        {isTerminal ? (
          <span className="terminal-caption">
            <span className="terminal-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            Terminal
          </span>
        ) : (
          <span className="small fw-semibold text-secondary text-uppercase">{label}</span>
        )}
        <button type="button" className="btn btn-link btn-sm text-decoration-none" onClick={copy}>
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </figcaption>
      {isTerminal ? (
        <TerminalScreen text={code} />
      ) : (
      <SyntaxHighlighter
        language={language === 'text' ? undefined : language}
        style={theme === 'dark' ? oneDark : oneLight}
        showLineNumbers
        wrapLongLines={false}
        customStyle={{
          margin: 0,
          padding: '0.95rem 1rem 1.05rem',
          background: theme === 'dark' ? '#282c34' : '#fafafa',
          fontSize: '0.86rem',
          lineHeight: 1.65,
        }}
        codeTagProps={{
          style: {
            fontFamily: '"IBM Plex Mono", "Cascadia Code", ui-monospace, monospace',
          },
        }}
        lineNumberStyle={{
          minWidth: '2.4em',
          paddingRight: '1em',
          color: theme === 'dark' ? '#6b7380' : '#9aa0a6',
          // Los números de línea no deben copiarse al seleccionar el código.
          userSelect: 'none',
        }}
      >
        {code}
      </SyntaxHighlighter>
      )}
    </figure>
  );
}

// Consola. El $ es decorativo: no entra en la selección ni en el texto que copia el botón.
// Si la línea ya trae "$ ", no se añade otro.
function TerminalScreen({ text }) {
  const lines = text.split('\n');

  return (
    <pre className="terminal-screen">
      {lines.map((line, index) => {
        const ownPrompt = /^\s*\$\s?/.test(line);
        const command = ownPrompt ? line.replace(/^\s*\$\s?/, '') : line;

        return (
          <div className="terminal-line" key={index}>
            {command.length > 0 && (
              <span className="terminal-prompt" aria-hidden="true">
                $
              </span>
            )}
            <span>{command}</span>
          </div>
        );
      })}
    </pre>
  );
}
