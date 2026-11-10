// Catálogo de apuntes. Es la única fuente de las rutas, del panel y de las páginas.
//
// Cada categoría tiene:
//   id           segmento de la URL, por ejemplo "react"
//   title        nombre visible
//   icon         opcional. Imagen a la izquierda del nombre.
//                Local: el archivo va en public/imagenes y la ruta es '/imagenes/react.svg'
//                Externa: 'https://...'
//   version      opcional. Texto a la derecha del botón, más pequeño y sin negrita.
//                Por ejemplo '19.2' o 'ES2024'.
//   description  texto de la tarjeta en el inicio
//   items        apuntes de esa categoría
//
// Cada apunte tiene:
//   slug         segundo segmento de la URL, por ejemplo "hooks"
//   title        nombre visible
//   keywords     palabras extra para el buscador, sin tildes
//   summary      párrafo de apertura
//   sections     bloques. Cada uno tiene title y, según haga falta, el resto de campos.
//
// Texto con formato, en summary, paragraphs, bullets, note, alerts y caption:
//   **negrita**    *cursiva*    ***ambas***    `código`
//   <b>negrita</b>  <i>cursiva</i>  <code>código</code>
//   [texto](https://...)  o  <a href="https://...">texto</a>
//   El enlace abre otra ventana. Entre ] y ( puede haber un espacio.
//   También valen <strong>, <em> y se pueden anidar.
//
// Dentro de una sección, el orden de pantalla es el de `content`.
// Cada ítem es un párrafo, una lista, un aviso, una imagen, una nota o código:
//   content: [
//     { type: 'p', text: 'Primero este párrafo.' },
//     { type: 'alert', variant: 'info', title: 'opcional', text: 'Un aviso entre los párrafos.' },
//     { type: 'image', src: '/imagenes/foto.png', alt: 'qué se ve', width: 420 },
//     { type: 'p', text: 'Otro párrafo, después de la imagen.' },
//     { type: 'ul', items: ['una viñeta', 'otra'] },
//     { type: 'note', text: 'una nota' },
//     { type: 'code', ...code('terminal', ['npm install']) },
//   ]
//
// Sin `content`, estos campos siguen funcionando, pero siempre en este orden:
// párrafos, viñetas, avisos, imágenes, nota y al final el código.
//   paragraphs: ['...']
//   bullets: ['...']
//   alerts: [{
//     variant: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary',
//     title: 'opcional, un poco más grande que el texto',
//     paragraphs: ['primer párrafo', 'segundo párrafo'],
//     text: 'un solo párrafo; también puede ser una lista de párrafos',
//   }]
//   images: [{ src, alt, width, height, caption }]
//   note: '...'
//   code: code('jsx', ['linea'])
//
// En un aviso, title es opcional. paragraphs y text se pueden usar juntos o por separado.
// Imagen local: el archivo va en public/imagenes y la ruta es '/imagenes/foto.png'.
// Imagen externa: 'https://...'. width y height: un número son pixeles; un string se usa tal cual ('50%', '12rem').
// El clic abre la imagen a su tamaño original.
// code('terminal', ['npm install']) se ve como una consola. El $ lo añade la página.
//
// La ruta queda /docs/<id>/<slug>. Las flechas anterior/siguiente recorren items
// en el orden del arreglo `catalog` y siguen de una categoría a la siguiente.

// Cada categoría está en src/data/categories/. El atajo code() está en src/data/code.js.

import { react } from './categories/react.ts';
import { typescript } from './categories/typescript.ts';
import { tailwind } from './categories/tailwind.ts';
import { nextjs } from './categories/nextjs.ts';
import { nodejs } from './categories/nodejs.ts';

// Una sección puede traer `content` (orden libre) o los campos sueltos.
// El tipo los deja todos opcionales para que cada apunte use solo los que necesita.
export type FlowBlock = {
  type: string;
  text?: string;
  items?: readonly string[];
  variant?: string;
  title?: string;
  paragraphs?: readonly string[];
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  caption?: string;
  language?: string;
  value?: string;
};

export type Section = {
  title: string;
  content?: readonly FlowBlock[];
  blocks?: readonly FlowBlock[];
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  alerts?: readonly {
    variant?: string;
    title?: string;
    paragraphs?: readonly string[];
    text?: string | readonly string[];
  }[];
  images?: readonly {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    caption?: string;
  }[];
  note?: string;
  code?: { language: string; value: string };
};

type DocArticle = {
  slug: string;
  title: string;
  keywords: readonly string[];
  summary?: string;
  sections: readonly Section[];
};

function asDocArticle<T extends DocArticle>(article: T): DocArticle {
  return article;
}
//import { javascript } from './categories/javascript.js';
//import { ia } from './categories/ia.js';

export const catalog = [react, typescript, tailwind, nextjs, nodejs];

// Quita tildes y pasa a minúsculas para que "módulo" coincida con "modulo".
// NFD separa la letra del acento; el replace borra esas marcas.
function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

// Arma la URL de un apunte. La usan el panel, el inicio y las flechas.
export function articlePath(categoryId: string, slug: string) {
  return `/docs/${categoryId}/${slug}`;
}

// Busca la pareja categoría + apunte. null si la URL no corresponde a nada del catálogo.
export function getDoc(categoryId: string, slug: string) {
  const category = catalog.find((item) => item.id === categoryId);
  const article = category?.items.find((item) => item.slug === slug);

  if (!category || !article) return null;

  return { category, article: asDocArticle(article) };
}

// Devuelve el apunte de antes y el de después, en el orden en que están escritos arriba.
// El último de una categoría tiene como siguiente el primero de la categoría que sigue.
// Si el slug no existe, los dos son null.
export function getNeighbors(categoryId: string, slug: string) {
  const flat = catalog.flatMap((category) =>
    category.items.map((article) => ({ category, article })),
  );
  const index = flat.findIndex(
    (entry) => entry.category.id === categoryId && entry.article.slug === slug,
  );

  if (index === -1) return { previous: null, next: null };

  return {
    previous: flat[index - 1] ?? null,
    next: flat[index + 1] ?? null,
  };
}

// Filtra el catálogo para el buscador.
// Sin texto, devuelve todo. Si el título o la descripción de la categoría coinciden,
// conserva todos sus apuntes. Si no, deja solo los apuntes cuyo título, resumen
// o keywords contienen el texto. Las categorías que quedan vacías se descartan.
export function filterCatalog(query: string) {
  const normalizedQuery = normalize(query.trim());

  if (!normalizedQuery) return catalog;

  return catalog
    .map((category) => {
      const categoryHit = normalize(`${category.title} ${category.description}`).includes(
        normalizedQuery,
      );
      const items = categoryHit
        ? category.items
        : category.items.filter((article) => {
            const haystack = [article.title, article.summary, ...article.keywords].join(' ');
            return normalize(haystack).includes(normalizedQuery);
          });

      return { ...category, items };
    })
    .filter((category) => category.items.length > 0);
}

// Cuenta apuntes de la lista que se está mostrando, ya filtrada o completa.
export function countArticles(categories: { items: { length: number } }[]) {
  return categories.reduce((total, category) => total + category.items.length, 0);
}

