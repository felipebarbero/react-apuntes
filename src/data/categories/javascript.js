import { code } from '../code.js';

// Categoría JavaScript. El formato de cada apunte está descrito en src/data/catalog.js.

export const javascript = {
  id: 'javascript',
  title: 'JavaScript',
  description: 'El lenguaje que corre por debajo de React y de TypeScript.',
  items: [
    {
      slug: 'modulos',
      title: 'Módulos',
      keywords: ['import', 'export', 'esm', 'default', 'named'],
      summary:
        'Un módulo ES es un archivo con sus propias variables. Nada es global salvo que lo importes. Este proyecto usa módulos nativos, los que Vite entiende con `import` y `export`.',
      sections: [
        {
          title: 'Export con nombre y por defecto',
          paragraphs: [
            'El export con nombre se importa entre llaves y el nombre tiene que coincidir. El export por defecto se importa con el nombre que tú elijas. Un archivo puede tener un default y varios con nombre.',
          ],
          code: code('javascript', [
            'export function slug(titulo) {',
            "  return titulo.trim().toLowerCase().replaceAll(' ', '-');",
            '}',
            '',
            'export default function crearApunte(titulo) {',
            '  return { titulo, slug: slug(titulo) };',
            '}',
          ]),
        },
        {
          title: 'Importar',
          paragraphs: [
            'La extensión `.js` en el import es la forma nativa de los módulos del navegador. Vite también resuelve imports sin extensión; en este proyecto los archivos locales la incluyen para que el origen quede explícito.',
          ],
          code: code('javascript', [
            "import crearApunte, { slug } from './apunte.js';",
            '',
            "const nota = crearApunte('Props y estado');",
            'console.log(slug(nota.titulo));',
          ]),
        },
      ],
    },
    {
      slug: 'async-await',
      title: 'Async y await',
      keywords: ['promesa', 'promise', 'fetch', 'await', 'try', 'catch', 'asincrono'],
      summary:
        '`async` hace que una función devuelva una promesa. `await` pausa esa función hasta que la promesa termina. El resto de la página sigue respondiendo.',
      sections: [
        {
          title: 'Leer un recurso',
          paragraphs: [
            '`fetch` no lanza si el servidor responde 404. `respuesta.ok` es la comprobación. `await respuesta.json()` es otra promesa: el cuerpo todavía hay que leerlo.',
            'Quien llama a una función `async` recibe una promesa. Puede esperarla con `await` dentro de otra función `async`, o encadenar `.then()` y `.catch()`.',
          ],
          code: code('javascript', [
            'async function cargarApunte(slug) {',
            '  const respuesta = await fetch(`/apuntes/${slug}.json`);',
            '',
            '  if (!respuesta.ok) {',
            '    throw new Error(`No se pudo cargar ${slug}`);',
            '  }',
            '',
            '  return respuesta.json();',
            '}',
            '',
            "cargarApunte('hooks')",
            '  .then((apunte) => console.log(apunte.titulo))',
            '  .catch((error) => console.error(error));',
          ]),
        },
        {
          title: 'Errores',
          paragraphs: [
            'Dentro de la función `async`, un `try/catch` alrededor del `await` captura el rechazo. Sin ese `catch`, el error viaja a quien esté esperando la promesa. Una promesa rechazada y no atendida queda como un error en la consola.',
          ],
        },
      ],
    },
  ],
}
