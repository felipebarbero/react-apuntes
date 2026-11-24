import { code } from '../code.ts';

// Categoría Tailwind. El formato de cada apunte está descrito en src/data/catalog.js.

export const tailwind = {
  id: 'tailwind',
  title: 'Tailwind',
  icon: '/imagenes/categorias-iconos/tailwind-svgrepo-com.svg',
  description: 'Framework CSS que permite crear diseños rapidos y consistentes.',
  version: '4.3',
  items: [
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: INTRODUCCION ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'tailwind-introduccion',
      title: 'Introducción',
      keywords: ['Tailwind', 'css', 'framework', 'css framework', 'css framework tailwind', 'css framework tailwind css'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES TAILWIND? ::::::::::::::::
        {
          title: 'Que es Tailwind?',
          content: [
            { 
              type: 'p', 
              text: '<b>Tailwind</b> es un framework CSS que permite crear diseños rapidos y consistentes.' 
            },
            { 
              type: 'p', 
              text: 'Se le llama tambien un framework <b>"utility-first"</b> porque se basa en clases utilitarias (utility classes) de bajo nivel que se aplican a los elementos HTML.' 
            },
            { 
              type: 'p', 
              text: '<b>Ejemplo:</b>' 
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
                  <div>
                    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
                    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
                  </div>
                </div>`
                ]), 
                { src: '/imagenes/tailwind/tailwindcss_ejemplo.PNG', alt: 'qué se ve'}],
              ],
            },
            { 
              type: 'alert', 
              variant: 'info',
              title: 'Archivo CSS sólo con lo necesario',
              paragraphs: [
                `<b>Tailwind</b> trabaja escaneando todos tus archivos HTML, componentes Javascript, y cualquier otra plantilla con nombres de clases, generando los estilos correspondientes y luego añadiendolos a un archivo CSS estático.`,
              ]
            },
            { 
              type: 'alert', 
              variant: 'warning',
              title: 'Documentación oficial',
              paragraphs: [
                `La documentación oficial de <b>Tailwind</b> puedes encontrarla en: <a href="https://tailwindcss.com/docs" target="_blank">https://tailwindcss.com/docs</a>`,
              ]
            },
          ],
        },
        // :::::::::::::::: DIFERENCIAS CON BOOTSTRAP ::::::::::::::::
        {
          title: 'Diferencias con Bootstrap',
          content: [
            { 
              type: 'p', 
              text: 'Ademas de Tailwind, hay otros frameworks CSS que permiten usar clases para aplicar estilos, como <b>Bootstrap</b>, el cual tambien es un framweork popular.' 
            },
            { 
              type: 'p', 
              text: 'La principal diferencia es que Tailwind es un framework CSS que se basa en <b>clases utilitarias</b>, mientras que Bootstrap es un framework CSS que se basa en <b>componentes</b>.' 
            },
            { 
              type: 'p', 
              text: 'Es decir, en tailwind las clases estan asociadas a propiedades particulares de CSS con un cierto valor, mientras que en bootstrap las clases estan asociadas a un conjunto de propiedades CSS que sirven para armar una estructura de diseño particular.' 
            },
            { 
              type: 'p', 
              text: '<b>Ejemplo de Boton en Bootstrap vs Tailwind:</b>' 
            },
            {
              type: 'table',
              headers: ['Bootstrap', 'Tailwind'],
              rows: [
                [code('html', [
                  `<button type="button" class="btn btn-primary">
                    Primary
                  </button>`
                ]), 
                code('html', [
                  `<button class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                    Primary
                  </button>`
                ]),
                ],
              ],
            },
            { 
              type: 'alert', 
              variant: 'secondary',
              title: 'Ventajas de Bootstrap',
              paragraphs: [
                `Código mas corto, limpio y rápido de escribir si te gusta el estilo predeterminado de Bootstrap.`,
              ]
            },
            { 
              type: 'alert', 
              variant: 'secondary',
              title: 'Ventajas de Tailwind',
              paragraphs: [
                `Control total sobre el diseño sin tener que sobrescribir estilos de una plantilla.`,
                `Las clases de CSS que utilices son las que estaran (se compilarán) en el archivo CSS, por lo que no hay que preocuparse por que se sobreescriban estilos de una plantilla.`,
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: INSTALACION ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'tailwind-instalacion',
      title: 'Instalación',
      keywords: ['Tailwind', 'instalacion', 'instalacion tailwind', 'instalacion tailwind css'],
      summary: '',
      sections: [
        // :::::::::::::::: USANDO VITE ::::::::::::::::
        {
          title: 'Usando Vite',
          content: [
            { 
              type: 'p', 
              text: 'Para usar <b>Tailwind</b> con <b>Vite</b>, se debe tener un proyecto Node.js y ejecutar el siguiente comando:' 
            },
            {
              type: 'code',
              ...code('terminal', [
                `npm install tailwindcss @tailwindcss/vite`
              ])
            },
            { 
              type: 'p', 
              text: 'Luego debes añadir el plugin a tu configuración de Vite (<b>vite.config.ts</b>):' 
            },
            {
              type: 'code',
              ...code('ts', [
                `// vite.config.ts
                import { defineConfig } from 'vite'
                import tailwindcss from '@tailwindcss/vite'
                export default defineConfig({
                  plugins: [
                    tailwindcss(),
                  ],
                })`
              ])
            },
            { 
              type: 'p', 
              text: 'Luego, añade un <b>@import</b> a tu archivo CSS que importa Tailwind (<b>tailwind.css</b>):' 
            },
            {
              type: 'code',
              ...code('css', [
                `@import "tailwindcss";`
              ])
            },
            { 
              type: 'p', 
              text: 'Ejecuta tu proceso de compilación con <b>"npm run dev"</b> o el comando configurado en tu archivo <b>package.json</b>.' 
            },
            {
              type: 'code',
              ...code('terminal', [
                `npm run dev`
              ])
            },
            { 
              type: 'p', 
              text: 'Ahora ya puedes usar <b>Tailwind en tu HTML</b>. Asegúrate de que tu archivo CSS compilado esté incluido en el <head> (tu framework puede manejar esto para ti), y luego comienza a usar las clases utilitarias de Tailwind para estilizar tu contenido.' 
            },
            {
              type: 'code',
              ...code('html', [
                `<!doctype html>
                <html>
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="/src/style.css" rel="stylesheet">
                  </head>
                  <body>
                    <h1 class="text-3xl font-bold underline">
                      Hello world!
                    </h1>
                  </body>
                </html>`
              ])
            },
          ],
        },
        // :::::::::::::::: USANDO CDN ::::::::::::::::
        {
          title: 'Usando CDN',
          content: [
            { 
              type: 'p', 
              text: 'Usa el <b>"Play CDN"</b> para probar <b>Tailwind</b> directamente en el navegador sin ningún paso de compilación.' 
            },
            { 
              type: 'alert', 
              variant: 'warning',
              title: 'Importante',
              paragraphs: [
                `El Play CDN está diseñado solo para propósitos de <b>desarrollo</b>, y no está destinado para <b>producción</b>.`,
              ]
            },
            { 
              type: 'p', 
              text: 'Añade el <b>script de CDN</b> a la etiqueta <b><head></b> de tu archivo HTML, y comienza a usar las clases utilitarias de Tailwind para estilizar tu contenido.' 
            },
            {
              type: 'code',
              ...code('html', [
                `<!doctype html>
                  <html>
                    <head>
                      <meta charset="UTF-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
                    </head>
                    <body>
                      <h1 class="text-3xl font-bold underline">
                        Hello world!
                      </h1>
                    </body>
                  </html>`
              ])
            },
          ],
        },
      ]
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: ARCHIVO SVG UNICO ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'tailwind-archivo-svg-unico',
      title: 'Archivo SVG único',
      keywords: ['Tailwind', 'svg', 'svg tailwind', 'archivo svg unico', 'archivo svg unico tailwind'],
      summary: '',
      sections: [
        // :::::::::::::::: ARCHIVO SVG UNICO ::::::::::::::::
        {
          title: 'Archivo SVG único (truco)',
          content: [
            { 
              type: 'p', 
              text: 'Si tienes un proyecto con <b>muchos iconos SVG</b>, puede ser lento y tedioso el cargarlos individualmente desde sus archivos SVG. En su lugar, puedes <b>cargarlos una unica vez desde un solo archivo</b> y luego <b>referenciarlos en el lugar donde los necesites</b> para mejorar el rendimiento de tu aplicación.'
            },
            { 
              type: 'p', 
              text: 'Un sprite SVG de redes sociales agrupa varios íconos vectoriales en un solo archivo (sprite.svg) usando etiquetas <b><symbol></b> con un id único para insertarlos con <b><use></b> en HTML. Esto reduce peticiones HTTP, mantiene escalabilidad y permite estilizar colores con CSS (currentColor).' 
            },
            {
              type: 'table',
              headers: ['Etiqueta', 'Para qué sirve'],
              rows: [
                ['`<symbol>`', 'Define un icono dentro del sprite, con un `id` único.'],
                ['`<use>`', 'Inserta ese icono en el HTML referenciando el `id`.'],
              ],
            },
            { 
              type: 'p', 
              text: '<b>Ejemplo de archivo SVG:</b>' 
            },
            {
              type: 'code',
              ...code('svg', [
                `<svg xmlns="http://w3.org" style="display: none;">
                  <symbol id="icon-instagram" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/>
                  </symbol>

                  <symbol id="icon-github" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                  </symbol>
                </svg>`
              ])
            },
            { 
              type: 'p', 
              text: '<b>Ejemplo de uso en HTML:</b>' 
            },
            {
              type: 'code',
              ...code('html', [
                `<a href="https://instagram.com" aria-label="Instagram" class="social-link">
                  <svg class="icon" aria-hidden="true">
                    <use href="./assets/sprite.svg#icon-instagram"></use>
                  </svg>
                </a>

                <a href="https://github.com" aria-label="GitHub" class="social-link">
                  <svg class="icon" aria-hidden="true">
                    <use href="./assets/sprite.svg#icon-github"></use>
                  </svg>
                </a>`
              ])
            },
          ],
        },
      ]
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: CLASES MÁS USADAS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'tailwind-clases-mas-usadas',
      title: 'Clases más usadas',
      keywords: ['Tailwind', 'clases', 'clases mas usadas', 'clases mas usadas tailwind'],
      summary: '',
      sections: [
        // :::::::::::::::: DISEÑO Y DISTRIBUCIÓN (LAYOUT) ::::::::::::::::
        {
          title: 'Diseño y distribución (Layout)',
          content: [
            { 
              type: 'p', 
              text: 'A continuación se listan las clases más usadas de <b>Tailwind</b> para <b>diseñar y distribuir</b> tu contenido.'
            },
            {
              type: 'table',
              headers: ['Clase Tailwind', 'Equivalente CSS', 'Descripción'],
              rows: [
                ['`flex`', 'display: flex;', 'Define un contenedor flexbox.'],
                ['`flex-row`', 'flex-direction: row;', 'Define la dirección de los elementos posicionados en fila.'],
                ['`flex-col`', 'flex-direction: column;', 'Define la dirección de los elementos posicionados en columna.'],
                ['`justify-center`', 'justify-content: center;', 'Centra horizontalmente los elementos del contenedor.'],
                ['`justify-end`', 'justify-content: end;', 'Alinea los elementos del contenedor al final.'],
                ['`justify-start`', 'justify-content: start;', 'Alinea los elementos del contenedor al inicio.'],
                ['`justify-between`', 'justify-content: space-between;', 'Distribuye el espacio entre los elementos del contenedor.'],
                ['`justify-around`', 'justify-content: space-around;', 'Distribuye el espacio alrededor de los elementos del contenedor.'],
                ['`justify-evenly`', 'justify-content: space-evenly;', 'Distribuye el espacio equitativamente entre los elementos del contenedor.'],
                ['`items-center`', 'align-items: center;', 'Centra verticalmente los elementos del contenedor.'],
                ['`items-end`', 'align-items: end;', 'Alinea los elementos del contenedor al final.'],
                ['`items-start`', 'align-items: start;', 'Alinea los elementos del contenedor al inicio.'],
                ['`items-stretch`', 'align-items: stretch;', 'Estira los elementos del contenedor para ocupar el espacio disponible.'],
              ],
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<div class="flex items-center">
                  <img src="path/to/image.jpg" />
                  <div>
                    <strong>Andrew Alfred</strong>
                    <span>Technical advisor</span>
                  </div>
                </div>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_flex.png', alt: 'qué se ve'}],
              ],
            },
            {
              type: 'table',
              headers: ['Clase Tailwind', 'Equivalente CSS', 'Descripción'],
              rows: [
                ['`grid`', 'display: grid;', 'Define un contenedor grid.'],
                ['`grid-cols-2`', 'grid-template-columns: repeat(2, 1fr);', 'Define el número de columnas del contenedor grid.'],
                ['`grid-rows-3`', 'grid-template-rows: repeat(3, 1fr);', 'Define el número de filas del contenedor grid.'],
                ['`gap-4`', 'gap: 1rem; (16px);', 'Define el espacio entre los elementos del contenedor grid.'],
                ['`hidden`', 'display: none;', 'Oculta el elemento.'],
              ],
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<div class="grid grid-cols-3 grid-rows-3 gap-4">
                    <!-- ... -->
                  </div>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_grid.png', alt: 'qué se ve'}],
              ],
            },
          ],
        },
        // :::::::::::::::: DIMENSIONES Y ESPACIADO ::::::::::::::::
        {
          title: 'Dimensiones y espaciado',
          content: [
            { 
              type: 'p', 
              text: 'A continuación se listan las clases más usadas de <b>Tailwind</b> para <b>definir</b> el <b>tamaño y el espaciado</b> de tu contenido.'
            },
            {
              type: 'table',
              headers: ['Clase Tailwind', 'Equivalente CSS', 'Descripción'],
              rows: [
                ['`w-full`', 'width: 100%;', 'Define el ancho del elemento.'],
                ['`h-full`', 'height: 100%;', 'Define la altura del elemento.'],
                ['`w-xl`', 'width: 32rem;', 'Define el ancho del elemento como 32rem (512px).'],
                ['`h-screen`', 'height: 100vh;', 'Define la altura del elemento como el alto de la pantalla.'],
                ['`max-w-md`', 'max-width: 28rem;', 'Define el ancho máximo del elemento como 28rem (448px).'],
                ['`w-1/2`', 'width: 50%;', 'Define el ancho del elemento como la mitad de su contenedor.'],
                ['`mx-auto`', 'margin-left: auto; margin-right: auto;', 'Centra horizontalmente el elemento.'],
                ['`p-4`', 'padding: 1rem;', 'Añade 1rem (16px) de padding a los cuatro lados del elemento.'],
                ['`px-6`', 'padding-left: 1.5rem; padding-right: 1.5rem;', 'Añade 1.5rem (24px) de padding a la izquierda y derecha del elemento.'],
                ['`py-2`', 'padding-top: 0.5rem; padding-bottom: 0.5rem;', 'Añade 0.5rem (8px) de padding a la parte superior y inferior del elemento.'],
                ['`mt-4`', 'margin-top: 1rem;', 'Añade 1rem (16px) de margen a la parte superior del elemento.'],
                ['`mb-2`', 'margin-bottom: 0.5rem;', 'Añade 0.5rem (8px) de margen a la parte inferior del elemento.']
              ],
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<div class="w-xl ...">w-xl</div>
                  <div class="w-lg ...">w-lg</div>
                  <div class="w-md ...">w-md</div>
                  <div class="w-sm ...">w-sm</div>
                  <div class="w-xs ...">w-xs</div>
                  <div class="w-2xs ...">w-2xs</div>
                  <div class="w-3xs ...">w-3xs</div>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_sizes.png', alt: 'qué se ve'}],
              ],
            },
          ],
        },
        // :::::::::::::::: TIPOGRAFÍA ::::::::::::::::
        {
          title: 'Tipografía',
          content: [
            { 
              type: 'p', 
              text: 'A continuación se listan las clases más usadas de <b>Tailwind</b> para <b>definir</b> la <b>tipografía</b> de tu contenido.'
            },
            {
              type: 'table',
              headers: ['Clase Tailwind', 'Equivalente CSS', 'Descripción'],
              rows: [
                ['`text-sm`', 'font-size: 0.875rem; line-height: 1.25rem;', 'Define el tamaño de la fuente como 0.875rem (14px) y la altura de la línea como 1.25rem (20px).'],
                ['`text-lg`', 'font-size: 1.125rem; line-height: 1.75rem;', 'Define el tamaño de la fuente como 1.125rem (18px) y la altura de la línea como 1.75rem (28px).'],
                ['`text-xl`', 'font-size: 1.5rem; line-height: 2rem;', 'Define el tamaño de la fuente como 1.5rem (24px) y la altura de la línea como 2rem (32px).'],
              ]
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<p class="text-sm ...">The quick brown fox ...</p>
                  <p class="text-base ...">The quick brown fox ...</p>
                  <p class="text-lg ...">The quick brown fox ...</p>
                  <p class="text-xl ...">The quick brown fox ...</p>
                  <p class="text-2xl ...">The quick brown fox ...</p>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_font_sizes.png', alt: 'qué se ve'}],
              ],
            },
            {
              type: 'table',
              headers: ['Clase Tailwind', 'Equivalente CSS', 'Descripción'],
              rows: [
                ['`font-bold`', 'font-weight: 700;', 'Define el peso de la fuente como bold (700).'],
                ['`font-normal`', 'font-weight: 400;', 'Define el peso de la fuente como normal (400).'],
                ['`font-medium`', 'font-weight: 500;', 'Define el peso de la fuente como medium (500).'],
                ['`font-light`', 'font-weight: 300;', 'Define el peso de la fuente como light (300).'],
                ['`font-thin`', 'font-weight: 100;', 'Define el peso de la fuente como thin (100).'],
                ['`font-italic`', 'font-style: italic;', 'Define el estilo de la fuente como italic.'],
              ]
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<p class="font-light ...">The quick brown fox ...</p>
                  <p class="font-normal ...">The quick brown fox ...</p>
                  <p class="font-medium ...">The quick brown fox ...</p>
                  <p class="font-semibold ...">The quick brown fox ...</p>
                  <p class="font-bold ...">The quick brown fox ...</p>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_font_weight.png', alt: 'qué se ve'}],
              ],
            },
            {
              type: 'table',
              headers: ['Clase Tailwind', 'Equivalente CSS', 'Descripción'],
              rows: [
                ['`text-center`', 'text-align: center;', 'Centra el texto horizontalmente.'],
                ['`text-left`', 'text-align: left;', 'Alinea el texto a la izquierda.'],
                ['`text-right`', 'text-align: right;', 'Alinea el texto a la derecha.'],
                ['`text-justify`', 'text-align: justify;', 'Justifica el texto.'],
                ['`text-nowrap`', 'white-space: nowrap;', 'No permite el salto de línea.'],
                ['`text-red-500`', 'color: #ef4444;', 'Define el color del texto como rojo 500.'],
                ['`uppercase`', 'uppercase', 'Convierte el texto en mayúsculas.'],
                ['`lowercase`', 'lowercase', 'Convierte el texto en minúsculas.'],
                ['`capitalize`', 'capitalize', 'Convierte la primera letra de cada palabra en mayúscula.'],
                ['`underline`', 'text-decoration: underline;', 'Añade una línea debajo del texto.'],
                ['`line-through`', 'text-decoration: line-through;', 'Añade una línea sobre el texto.'],
                ['`italic`', 'font-style: italic;', 'Define el estilo de la fuente como italic.'],
                ['`font-size-sm`', 'font-size: 0.875rem;', 'Define el tamaño de la fuente como 0.875rem (14px).'],
                ['`font-size-lg`', 'font-size: 1.125rem;', 'Define el tamaño de la fuente como 1.125rem (18px).'],
              ]
            },
          ],
        },
        // :::::::::::::::: COLORES, BORDES Y EFECTOS ::::::::::::::::
        {
          title: 'Colores, bordes y efectos',
          content: [
            { 
              type: 'p', 
              text: 'A continuación se listan las clases más usadas de <b>Tailwind</b> para <b>definir</b> los <b>colores, bordes y efectos</b> de tu contenido.'
            },
            {
              type: 'table',
              headers: ['Clase Tailwind', 'Equivalente CSS', 'Descripción'],
              rows: [
                ['`bg-white`', 'background-color: #ffffff;', 'Define el color de fondo del elemento como blanco.'],
                ['`bg-blue-600`', 'background-color: #2563eb;', 'Define el color de fondo del elemento como azul 600.'],
                ['`border`', 'border-width: 1px;', 'Define el ancho del borde del elemento como 1px.'],
                ['`border-gray-300`', 'border-color: #d1d5db;', 'Define el color del borde del elemento como gris 300.'],
                ['`rounded-lg`', 'border-radius: 0.5rem;', 'Define el radio de los bordes del elemento como 0.5rem (8px).'],
                ['`rounded-full`', 'border-radius: 9999px;', 'Define el radio de los bordes del elemento como 9999px (circular).'],
              ]
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<div class="rounded-sm ..."></div>
                  <div class="rounded-md ..."></div>
                  <div class="rounded-lg ..."></div>
                  <div class="rounded-xl ..."></div>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_rounded.png', alt: 'qué se ve'}],
                [code('html', [
                  `<div class="rounded-tl-lg ..."></div>
                  <div class="rounded-tr-lg ..."></div>
                  <div class="rounded-br-lg ..."></div>
                  <div class="rounded-bl-lg ..."></div>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_rounded2.png', alt: 'qué se ve'}],
                [code('html', [
                  `<button class="rounded-full ...">Save Changes</button>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_rounded3.png', alt: 'qué se ve'}],
              ],
            },
            {
              type: 'table',
              headers: ['Clase Tailwind', 'Equivalente CSS', 'Descripción'],
              rows: [
                ['`shadow-sm`', 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);', 'Define el efecto de sombra del elemento como pequeña sombra.'],
                ['`shadow-md`', 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);', 'Define el efecto de sombra del elemento como sombra media.'],
                ['`shadow-lg`', 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);', 'Define el efecto de sombra del elemento como sombra grande.'],
                ['`cursor-pointer`', 'cursor: pointer;', 'Define el cursor del elemento como puntero.'],
              ]
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<div class="shadow-md ..."></div>
                  <div class="shadow-lg ..."></div>
                  <div class="shadow-xl ..."></div>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_shadow.png', alt: 'qué se ve'}],
                [code('html', [
                  `<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
                  <button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
                  <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_shadow2.png', alt: 'qué se ve'}],
              ],
            },
            {
              type: 'table',
              headers: ['Clase Tailwind', 'Equivalente CSS', 'Descripción'],
              rows: [
                ['`bg-gradient-to-tr`', '--tw-gradient-position: to top right in oklab; background-image: linear-gradient(var(--tw-gradient-stops));', 'Define un gradiente de color desde la esquina superior derecha a la esquina inferior izquierda.'],
                ['`bg-gradient-to-tl`', '--tw-gradient-position: to top left in oklab; background-image: linear-gradient(var(--tw-gradient-stops));', 'Define un gradiente de color desde la esquina superior izquierda a la esquina inferior derecha.'],
                ['`bg-gradient-to-br`', '--tw-gradient-position: to bottom right in oklab; background-image: linear-gradient(var(--tw-gradient-stops));', 'Define un gradiente de color desde la esquina inferior derecha a la esquina superior izquierda.'],
                ['`bg-gradient-to-bl`', '--tw-gradient-position: to bottom left in oklab; background-image: linear-gradient(var(--tw-gradient-stops));', 'Define un gradiente de color desde la esquina inferior izquierda a la esquina superior derecha.'],
                ['`from-yellow-300`', 'background-color: #fef9c3;', 'Define el color de inicio del gradiente como amarillo 300.'],
                ['`via-pink-500`', 'background-color: #f472b6;', 'Define el color de medio del gradiente como rosa 500.'],
                ['`to-purple-600`', 'background-color: #7e3af2;', 'Define el color de fin del gradiente como morado 600.'],
                ['`transition-transform`', 'transition-property: transform;', 'Define la propiedad de transición del elemento como transform.'],
                ['`duration-300`', 'transition-duration: 300ms;', 'Define la duración de la transición del elemento como 300ms.'],
                ['`ease-in-out`', 'transition-timing-function: ease-in-out;', 'Define la función de timing de la transición del elemento como ease-in-out.'],
              ]
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<a class="flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-600 p-2 transition-transform hover:scale-110" href="">
                    <img src="/img/logo.svg" class="m-2 h-6 dark:hidden" alt="Tailwind Play" />
                  </a>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_transition.png', alt: 'qué se ve'}],
              ],
            },
          ],
        },
      ]
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: COLORES ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'tailwind-colores',
      title: 'Colores',
      keywords: ['Tailwind', 'colores', 'colores tailwind', 'colores tailwind css'],
      summary: '',
      sections: [
        // :::::::::::::::: COLORES ::::::::::::::::
        {
          title: 'Colores disponibles',
          content: [
            { 
              type: 'p', 
              text: 'A continuación se listan los <b>colores disponibles en Tailwind</b> a traves de sus clases.'
            },
            { 
              type: 'image', 
              src: '/imagenes/tailwind/tailwind_colors.png',
              alt: 'Colores disponibles en Tailwind',
            },
            { 
              type: 'image', 
              src: '/imagenes/tailwind/tailwind_colors2.png',
              alt: 'Colores disponibles en Tailwind 2',
            },
            { 
              type: 'p', 
              text: 'Tambien es posible añadir niveles de <b>transparencia</b> a los colores mediante el uso de la sintaxis `bg-black/75`, donde 75 establece el canal alfa del color al 75%:.'
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<div>
                  <div class="bg-sky-500/10"></div>
                  <div class="bg-sky-500/20"></div>
                  <div class="bg-sky-500/30"></div>
                  <div class="bg-sky-500/40"></div>
                  <div class="bg-sky-500/50"></div>
                  <div class="bg-sky-500/60"></div>
                  <div class="bg-sky-500/70"></div>
                  <div class="bg-sky-500/80"></div>
                  <div class="bg-sky-500/90"></div>
                  <div class="bg-sky-500/100"></div>
                </div>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_colors_opacity.png', alt: 'qué se ve'}],
              ],
            },
          ],
        },
        // :::::::::::::::: GRADIENTES DE COLOR ::::::::::::::::
        {
          title: 'Gradientes de color',
          content: [
            { 
              type: 'p', 
              text: ' Para agregar un gradiente de color lineal, se pueden usar utilidades como `bg-linear-to-r` y `bg-linear-<angle>` con las utilidades de color de inicio y fin para agregar un gradiente de color lineal a un elemento:'
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<div class="h-14 bg-linear-to-r from-cyan-500 to-blue-500"></div>
                  <div class="h-14 bg-linear-to-t from-sky-500 to-indigo-500"></div>
                  <div class="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>
                  <div class="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_colors_gradient.png', alt: 'qué se ve'}],
              ],
            },
            { 
              type: 'p', 
              text: 'Para establecer los colores de paradas de una gradiente de color, puedes usar utilidades como `from-indigo-500`, `via-purple-500` y `to-pink-500`'
            },
            {
              type: 'table',
              rows: [
                [code('html', [
                  `<div class="h-14 bg-linear-to-r from-cyan-500 to-blue-500"></div>
                  <div class="h-14 bg-linear-to-t from-sky-500 to-indigo-500"></div>
                  <div class="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>
                  <div class="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>`
                ]), 
                { src: '/imagenes/tailwind/tailwind_colors_gradient2.png', alt: 'qué se ve'}],
              ],
            },
          ],
        },
      ]
    },
  ],
}
