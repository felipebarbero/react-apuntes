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
// en el orden de este archivo y siguen de una categoría a la siguiente.

// Atajo para no repetir { language, value } y para escribir el código como líneas sueltas.
// La sangría con la que el ejemplo se alinea en este archivo no se muestra:
// la página la quita y deja solo la sangría de dentro del ejemplo.
function code(language, lines) {
  return { language, value: lines.join('\n') };
}

export const catalog = [
  {
    id: 'react',
    title: 'React',
    icon: '/imagenes/categorias-iconos/React.svg.webp',
    description: 'Libreria de JavaScript para crear interfaces de usuario.',
    version: '19.2',
    items: [
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: INTRODUCCION ::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-introduccion',
        title: '   Introducción',
        keywords: ['react', 'javascript', 'framework', 'frontend', 'ui', 'user interface'],
        summary:
          'Introducción a React e instalación.',
        sections: [
          // :::::::::::::::: QUE ES REACT? ::::::::::::::::
          {
            title: 'Que es React?',
            content: [
              { 
                type: 'p', 
                text: '<b>React</b> (también conocido como <b>React.js</b> o <b>ReactJS</b>) es una `biblioteca de JavaScript de código abierto creada por Meta` (anteriormente Facebook). Su objetivo principal es facilitar la <b>creación de interfaces de usuario (UI)</b> para aplicaciones web y móviles.' 
              },
              {
                type: 'alert',
                variant: 'secondary',
                paragraphs: [
                  '<b>Basado en componentes:</b> Divide la interfaz en bloques de código pequeños, independientes y reutilizables (como botones, menús o formularios) que gestionan su propio estado.',
                  '<b>Actualización reactiva:</b> La interfaz está conectada directamente a los datos. Si los datos cambian, la vista se actualiza de forma automática en la pantalla sin necesidad de modificar el DOM manualmente.',
                  '<b>Aplicaciones de una sola página (SPA):</b> Permite navegar e interactuar con una aplicación web de forma fluida sin tener que recargar la página completa en el navegador.',
                  '<b>Multiplataforma:</b> Aunque se usa principalmente para la web, con herramientas como React Native permite crear aplicaciones móviles nativas para iOS y Android.',
                  '<b>Enfoque modular:</b> A diferencia de un framework completo como Angular, React se concentra exclusivamente en la capa visual; para funciones como enrutamiento o manejo de datos, suele combinarse con otras librerías o frameworks full-stack como Next.js o Remix.',
                ],
              },
              {
                type: 'alert',
                variant: 'secondary',
                title: 'Elementos principales',
                paragraphs: [
                  'Componentes, Props, Estado, Eventos, Lifecycle, Hooks, Context y Router',
                ],
              },
            ],
          },
          // :::::::::::::::: PORQUE USAR COMPONENTES? ::::::::::::::::
          {
            title: 'Porque usar componentes?',
            content: [
              {
                type: 'p',
                text: 'Los componentes son la base de React. Son piezas de UI que se pueden reutilizar y componer para crear interfaces de usuario complejas, y que ademas cuando hacemos modificaciones en el componente, se reflejan en todas las partes de la aplicacion donde se use. Ademas, cuando recargamos el componente la pagina no se recarga, sino que se actualiza solo la parte del componente que se modifico.'
              },
              {
                type: 'alert',
                variant: 'info',
                title: 'Atomic Design',
                paragraphs: [
                  'Es un patron de diseño que se basa en la creacion de <b>componentes pequenos y reutilizables</b>. ',
                  'Es un enfoque de diseño de las interfaces de usuario, la cual se basa en la creacion y organizacion de componentes reutilizables. ',
                  'La idea es hacer componentes muy pequeños (botones, inputs, etc.) y luego combinarlos para crear interfaces de usuario mas complejas.',
                ],
              }
            ],
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: INSTALACION ::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-instalacion',
        title: 'Instalación',
        keywords: ['react', 'javascript', 'framework', 'frontend', 'ui', 'user interface'],
        summary:
          'Instalacion de React y Vite.',
        sections: [
          // :::::::::::::::: NODE.JS Y NPM ::::::::::::::::
          {
            title: 'NODE.JS Y NPM',
            content: [
              {
                type: 'p',
                text: 'Para instalar React, primero debemos instalar <b>Node.js y npm</b>'
              },
              {
                type: 'alert',
                variant: 'info',
                title: '¿Para qué necesito Node.js?',
                paragraphs: [
                  'React no necesita estrictamente <b>Node.js</b> ni <b>npm</b> para funcionar en producción, pero sí se utilizan durante el desarrollo para procesar, empaquetar y gestionar las herramientas de tu proyecto',
                  'npm es el gestor de paquetes de Node.js. y lo usaremos para instalar React y otras librerías.',
                ],
              },
              {
                type: 'p',
                text: 'Para instalar Node.js y npm, podemos seguir los pasos de la siguiente manera:'
              },
              { 
                type: 'ul', 
                items: [
                  'Descargar Node.js desde el sitio oficial: https://nodejs.org/', 
                  'Ejecutar el instalador y seguir los pasos.',
                  'Verificar la instalación ejecutando el siguiente comando en la terminal:'
                ] 
              },
              {
                type: 'code',
                ...code('terminal', [
                  'node -v',
                  'npm -v'
                ])
              },
              {
                type: 'p',
                text: 'Si se muestran las versiones de Node.js y npm, la instalación fue exitosa.'
              },
            ],
          },
          // :::::::::::::::: VITE (REACT) ::::::::::::::::
          {
            title: 'VITE (REACT)',
            content: [
              {
                type: 'p',
                text: 'Para instalar React, podemos usar <b>Vite</b>.'
              },
              {
                type: 'p',
                text: 'Vite es un bundler (empaquetador) de JavaScript que nos permite crear proyectos de React de forma rapida y sencilla.'
              },
              {
                type: 'p',
                text: 'Para crear un nuevo proyecto de React con Vite, podemos ejecutar el siguiente comando en la terminal:'
              },
              {
                type: 'code',
                ...code('terminal', [
                  'npm create vite@latest nombre-del-proyecto -- --template react'
                ])
              },
              {
                type: 'p',
                text: 'Esto creará un nuevo proyecto de React con Vite.'
              },
              {
                type: 'p',
                text: 'Luego, podemos seguir los pasos para crear el proyecto.'
              },
              {
                type: 'p',
                text: 'Para iniciar el proyecto, podemos ejecutar el siguiente comando en la terminal:'
              },
              {
                type: 'code',
                ...code('terminal', [
                  'npm run dev'
                ])
              },
              {
                type: 'p',
                text: 'Si se muestra el mensaje "Server is running on http://localhost:5173", el proyecto se ha iniciado correctamente.'
              },
              {
                type: 'p',
                text: 'El script "npm run dev" es un script que se encuentra en el archivo "package.json" y que nos permite iniciar el proyecto.'
              },
            ],
          },
          // :::::::::::::::: INSTALAR DEPENDENCIAS ::::::::::::::::
          {
            title: 'Instalar dependencias',
            content: [
              {
                type: 'p',
                text: 'Para instalar las dependencias del proyecto, podemos ejecutar el siguiente comando en la terminal:'
              },
              {
                type: 'code',
                ...code('terminal', [
                  'npm install'
                ])
              },
              {
                type: 'p',
                text: 'Esto nos instalará las dependencias del proyecto. Las dependencias se encuentran en el archivo <b>"package.json"</b>.'
              },
              {
                type: 'p',
                text: 'Las dependencias se instalan en la carpeta <b>"node_modules"</b>.'
              },
              {
                type: 'p',
                text: 'Para instalar una dependencia especifica, podemos ejecutar el siguiente comando en la terminal:'
              },
              {
                type: 'code',
                ...code('terminal', [
                  'npm install nombre-de-la-dependencia'
                ])
              },
              {
                type: 'p',
                text: 'Esto nos instalará la dependencia especifica.'
              },
              {
                type: 'p',
                text: '<b>"package.json"</b> (ARCHIVO DE CONFIGURACIÓN DEL PROYECTO)'
              },
              {
                type: 'code',
                ...code('json', [
                  `{
                    "name": "curso-react",
                    "private": true,
                    "version": "0.0.0",
                    "type": "module",
                    "scripts": {
                      "dev": "vite", // Script para iniciar el proyecto en modo desarrollo (localhost:5173)
                      "build": "vite build", // Script para crear la versión de producción del proyecto (dist/)
                      "lint": "oxlint", // Script para ejecutar el linter (oxlint)
                      "preview": "vite preview" // Script para previsualizar el proyecto (localhost:4173)
                    },
                    "dependencies": { // Dependencias de producción
                      "react": "^19.2.8", // Dependencia de React
                      "react-dom": "^19.2.8" // Dependencia de React para la parte Web
                    },
                    "devDependencies": { // Dependencias de desarrollo (no se deberian subir a producción)
                      "@types/react": "^19.2.18",
                      "@types/react-dom": "^19.2.7",
                      "@vitejs/plugin-react": "^6.1.1",
                      "oxlint": "^1.81.0",
                      "vite": "^8.3.0"
                    }
                  }`
                ])
              },
            ],
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: COMPONENTES ::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-componentes',
        title: 'Componentes',
        keywords: ['funcion', 'props', 'children', 'composicion', 'lista', 'key'],
        summary: 'Creacion de componentes en React.',
        sections: [
          // :::::::::::::::: QUE ES UN COMPONENTE? ::::::::::::::::
          {
            title: 'Que es un componente?',
            content: [
              {
                type: 'p',
                text: 'Los componentes en React son <b>bloques de construcción de la interfaz de usuario</b>. Encapsulan la lógica y estructura visual de una parte de lo que ve el usuario final.'
              },
              {
                type: 'p',
                text: 'Entonces, en vez de tener una interfaz de usuario compleja, la dividimos en partes mas pequeñas para manejar la lógica de una forma mas eficiente.'
              },
              {
                type: 'p',
                text: 'Para crear un componente basta con crear un archivo `nombreComponente.jsx` (con el nombre que quieras) en el proyecto y luego llamarlo en el archivo principal `App.jsx` (o el archivo que quieras) usando la sintaxis:',
              },
              {
                type: 'code',
                ...code('jsx', [
                  'import nombreComponente from "./nombreComponente.jsx";'
                ])
              },
            ],
          },
          // :::::::::::::::: CREAR UN COMPONENTE ::::::::::::::::
          {
            title: 'Crear un componente',
            content: [
              {
                type: 'p',
                text: 'Anteriormente los componentes se definian de esta manera:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `function PrimerComponente() {
                    return (
                      <div>
                        <h1>Hola Mundo!</h1>
                      </div>
                    )
                  }
                  export default PrimerComponente`
                ])
              },
              {
                type: 'p',
                text: 'Pero ahora, se definen de esta manera usando una <b>arrow function</b> y <b>export default</b>:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import React from 'react'

                  export const PrimerComponente = () => {
                    return (
                      <div>
                        <h1>Hola Mundo!</h1>
                      </div>
                    )
                  }`
                ])
              },
            ]
          },
          // :::::::::::::::: LLAMAR UN COMPONENTE ::::::::::::::::
          {
            title: 'Llamar un componente',
            content: [
              {
                type: 'p',
                text: 'Para llamar un componente, debemos importarlo en el archivo principal `App.jsx` (o el archivo que quieras) usando la sintaxis:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  'import { PrimerComponente } from "./PrimerComponente.jsx";',
                  '',
                  'export default function App() {',
                  '  return (',
                  '    <div>',
                  '      <PrimerComponente />',
                  '    </div>',
                  '  );',
                  '}'
                ])
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: FRAGMENTS ::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-fragments',
        title: 'Fragments',
        keywords: ['fragmento', 'fragment', 'jsx', 'html'],
        summary: 'Fragments en React.',
        sections: [
          // :::::::::::::::: QUE ES UN FRAGMENT? ::::::::::::::::
          {
            title: 'Que es un fragment?',
            content: [
              {
                type: 'p',
                text: 'Un <b>fragment</b> en JSX es un elemento que no tiene un tag de apertura ni de cierre. Se utiliza para retornar multiples elementos sin necesidad de envolverlos en un tag padre.'
              },
              {
                type: 'p',
                text: 'Se pueden usa con los tags `<fragment>` y `</fragment>`, pero es mejor utilizarlos con `<>` y `</>` de la siguiente manera:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `export const PrimerComponente = () => {
                    return (
                      <>
                        <h1>Hola Mundo!</h1>
                        <h2>Hola Mundo!</h2>
                      </>
                    )
                  }`
                ])
              },
              {
                type: 'p',
                text: 'El problema que resuelven es que en JSX <b>no se pueden retornar multiples elementos sin envolverlos en un tag padre</b>.'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// ESTO DARA UN ERROR
                  return (
                    <h1>Hola Mundo!</h1>
                    <h2>Hola Mundo!</h2>
                  )`
                ])
              },
              {
                type: 'p',
                text: 'Puedo usar un tag `<div></div>` para envolver los elementos, pero esto creará un <div> adicional envolviendo tus componentes y puede ser problemático para el rendimiento y el SEO.'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// ESTO FUNCIONARA, PEROCREARA UN <div> ADICIONAL
                  return (
                    <div>
                      <h1>Hola Mundo!</h1>
                      <h2>Hola Mundo!</h2>
                    </div>
                  )`
                ])
              },
            ],
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: VARIABLES :::::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-variables',
        title: 'Variables',
        keywords: ['const', 'let', 'var', 'hoisting', 'scope', 'temporal dead zone'],
        summary: 'Creacion de variables en React.',
        sections: [
          // :::::::::::::::: QUE ES UNA VARIABLE? ::::::::::::::::
          {
            title: 'Que es una variable?',
            content: [
              {
                type: 'p',
                text: 'Las <b>variables</b> en React son una forma de <b>almacenar datos</b> en el componente y se definen igual que en un archivo JavaScript.'
              },
            ],
          },
          // :::::::::::::::: DEFINIR UNA VARIABLE ::::::::::::::::
          {
            title: 'Definir una variable',
            content: [
              {
                type: 'p',
                text: 'Defino mis variables igual que en un archivo JavaScript'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `const string = 'esto es un texto';
                    const number = 123456;
                    const array = ['Ejemplo', 'React', 1, 10.14];
                    const boolean = true;
                    const funcion = () => 1+1;
                    const objeto = { nombre: 'Curso de React', duracion: 4 };
                    const fecha = new Date();`
                ])
              },
              {
                type: 'p',
                text: 'Todas las variables se pueden renderizar en el navegador salvo algunas excepciones'
              },
              {
                type: 'ul',
                items: [
                  'Los "booleanos" no se muestran en el navegador',
                  'Los "objetos" tampoco se muestran en el navegador (ejemplo: fecha y objeto)',
                  'Las funciones deben ser llamadas para que el navegador muestre el resultado'
                ]
              },
              {
                type: 'alert',
                variant: 'info',
                paragraphs: [
                  'Se recomienda definir las variables afuera del componente para evitar re-definirlas en cada actualización del componente (por un tema de performance)',
                ]
              },
              {
                type: 'code',
                ...code('jsx', [
                  `export const PrimerComponente = () => {
                    return (
                      <div>
                        {/* Puedo usar codigo javascript dentro de las llaves "{}" */}
                        <h1>{string}</h1> {/* "esto es un texto" */}
                        <h1>{number}</h1> {/* 123456 */}
                        <h1>{array}</h1> {/* ['Ejemplo', 'React', 1, 10.14] */}
                        <h1>{boolean}</h1> {/* NO SE MUESTRA */}
                        <h1>{funcion()}</h1> {/* 2 */}
                        <h1>{objeto.nombre}</h1> {/* 'Curso de React' (si no llamamos alguna propiedad del objeto no se muestra) */}
                        <h1>{fecha.toLocaleDateString()}</h1> {/* 11/10/2026 (si no usamos "toLocaleDateString()" no se muestra la fecha) */}
                      </div>
                    )
                  }`
                ])
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: JSX :::::::::::::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-jsx',
        title: 'JSX',
        keywords: ['xml', 'fragmento', 'expresion', 'llaves', 'html'],
        summary:
          'JSX es la sintaxis que mezcla marcado y JavaScript. Las llaves abren una expresión. El archivo se compila a llamadas de React; el navegador no entiende JSX directo.',
        sections: [
          {
            title: 'Expresiones, no sentencias',
            paragraphs: [
              'Dentro de las llaves va algo que produce un valor: una variable, una llamada, un ternario o un `&&`. Un `if` o un `for` no van ahí; esos viven antes del `return`, o se reemplazan con un ternario y con `.map()`.',
              'Un componente devuelve un solo nodo. Si necesitas varios hermanos sin envolverlos en un `div`, usa un fragmento: `<>...</>`.',
            ],
            code: code('jsx', [
              "const tecnologia = 'React';",
              'const visible = true;',
              '',
              'export default function Encabezado() {',
              '  return (',
              '    <>',
              '      <h1>{tecnologia}</h1>',
              '      {visible && <p>Apuntes en construcción.</p>}',
              '      <button type="button" disabled={false}>',
              '        Abrir',
              '      </button>',
              '    </>',
              '  );',
              '}',
            ]),
          },
          {
            title: 'Atributos',
            paragraphs: [
              'Los atributos que en HTML van en minúsculas y con guion, en JSX suelen ir en camelCase: `className`, `htmlFor`, `onClick`. Un atributo sin valor, como `disabled`, equivale a `disabled={true}`.',
            ],
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: ESTILOS :::::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-estilos',
        title: 'Estilos (CSS)',
        keywords: ['css', 'styled-components', 'css-in-js', 'tailwind', 'bootstrap'],
        summary: '',
        sections: [
          // :::::::::::::::: ESTILOS EN REACT ::::::::::::::::
          {
            title: 'Estilos en React',
            content: [
              {
                type: 'p',
                text: 'En React, los estilos se pueden aplicar de varias maneras.'
              },
              {
                type: 'ul',
                items: [
                  'Inline Styles',
                  'CSS Classes',
                  'CSS Modules',
                  'Styled Components',
                ]
              },
              {
                type: 'alert',
                variant: 'info',
                title: 'Importante',
                paragraphs: [
                  'los nombres de las propiedades de los estilos deben ser escritos en <b>camelCase</b>, es decir, cada vez que haya un guion en el nombre de una propiedad, se debe escribir el nombre de la propiedad en camelCase.',
                  'ejemplo: <b>background-color</b> -> <b>backgroundColor</b>',
                  'ejemplo: <b>font-size</b> -> <b>fontSize</b>',
                  'ejemplo: <b>font-weight</b> -> <b>fontWeight</b>',
                  'ejemplo: <b>text-align</b> -> <b>textAlign</b>',
                ]
              }
            ],
          },
          // :::::::::::::::: INLINE STYLES ::::::::::::::::
          {
            title: 'Inline Styles',
            content: [
              {
                type: 'p',
                text: 'Los estilos inline son los que se aplican directamente en el componente.'
              },
              {
                type: 'p',
                text: 'Esta <b>NO ES LA MANERA RECOMENDADA DE APLICAR ESTILOS EN REACT</b>, pero es una manera de hacerlo. Ademas, estos no soportan animaciones ni funcionalidades avanzadas de css.'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Se definen de la siguiente manera:
                  const estilos = {
                    color: 'red',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }
                  export const PrimerComponente = () => {
                    return (
                      <>
                        <h1 style={estilos}>Hola Mundo!</h1>
                      </>
                    )
                  }`
                ])
              },
            ]
          },
          // :::::::::::::::: CSS CLASSES ::::::::::::::::
          {
            title: 'CSS Classes',
            content: [
              {
                type: 'p',
                text: 'Si quisiera añadir estilos a toda la aplicacion, simplemente podria importar el archivo CSS en el archivo `main.jsx` o `App.jsx`, y luego usar las clases en los componentes que correspondan.'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { StrictMode } from 'react'
                    import { createRoot } from 'react-dom/client'
                    import { PrimerComponente } from './PrimerComponente.jsx'
                    import './styles.css'; // Archivo CSS importado

                    createRoot(document.getElementById('root')).render(
                      <StrictMode>
                        <PrimerComponente />
                      </StrictMode>,
                    )`
                ])
              },
              {
                type: 'p',
                text: 'O tambien, si quisiera añadir estilos a un componente específico, simplemente podría importar el archivo CSS en el componente.'
              },
              {
                type: 'p',
                text: 'como recomendacion, usa siempre el mismo nombre del componente para el archivo CSS (para evitar confusiones).'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import './PrimerComponente.css';
                    export const PrimerComponente = () => {
                      return (
                        <>
                          <h1 className="titulo">Hola Mundo!</h1>
                        </>
                      )
                    }`
                ])
              },
            ]
          },
          // :::::::::::::::: CSS MODULES ::::::::::::::::
          {
            title: 'CSS Modules',
            content: [
              {
                type: 'p',
                text: 'Los <b>CSS Modules</b> son una manera de aplicar estilos a un componente de manera local.'
              },
              {
                type: 'p',
                text: 'Esto significa que los estilos SOLO se aplican a ese componente y no a otros componentes.'
              },
              {
                type: 'alert',
                variant: 'info',
                title: 'Importante',
                paragraphs: [
                  'todos los nombres de archivos de CSS deben terminar en <b>".module.css"</b>',
                ]
              },
              {
                type: 'p',
                text: 'Se definen de la siguiente manera:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Primero, importamos el archivo con el CSS de mi componente (en este caso, "PrimerComponente.module.css")
                    // y le asigno la importacion a una variable "styles".
                    import styles from './PrimerComponente.module.css';

                    export const PrimerComponente = () => {
                        return (
                        <>
                            // Luego, en el componente, uso la variable "styles" junto a la clase que quiero aplicar.
                            // En este caso "style.titulo" implica que estoy llamando la clase "titulo" del archivo "PrimerComponente.module.css".
                            <h1 className={styles.titulo}>Hola Mundo!</h1>
                            // Si quisiera aplicar varias clases de estilos, se podria hacer de la siguiente manera:
                            <h1 className={[styles.titulo, styles.subtitulo].join(' ')}>Hola Mundo!</h1>
                        </>
                        )
                    }`
                ])
              },
              {
                type: 'p',
                text: 'El archivo de clase CSS debe tener el siguiente formato:'
              },
              {
                type: 'code',
                ...code('css', [
                  `<!-- Archivo "PrimerComponente.module.css" -->
                  .titulo {
                      color: red;
                      font-size: 20px;
                      font-weight: bold;
                  }`
                ])
              },
            ]
          },
          // :::::::::::::::: STYLED COMPONENTS ::::::::::::::::
          {
            title: 'Styled Components',
            content: [
              {
                type: 'p',
                text: 'Los <b>Styled Components</b> son una manera de aplicar estilos a un componente de manera mas sencilla y organizada. Ademas, los Styled Components son mas eficientes que los CSS Modules, ya que no se aplican a toda la aplicacion.'
              },
              {
                type: 'p',
                text: 'Para usarlos, primero debemos instalar el paquete "styled-components":'
              },
              {
                type: 'code',
                ...code('bash', [
                  `npm install styled-components`
                ])
              },
              {
                type: 'p',
                text: 'Luego, podemos crear un componente de styled components de la siguiente manera:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  "import styled from 'styled-components';",
                  "// Luego, creo un componente styled con el nombre de la etiqueta que quiero estilizar.",
                  "// En este caso, 'styled.h1' implica que estoy creando un componente styled para el elemento 'h1'.",
                  "// Luego, dentro de las comillas invertidas (``` backticks ```), escribo los estilos que quiero aplicar:",
                  "const Titulo = styled.h1`",
                  "  color: red;",
                  "  font-size: 20px;",
                  "  font-weight: bold;",
                  "`;",
                  "export const PrimerComponente = () => {",
                  "  return (",
                  "    <>",
                  "      <Titulo>Hola Mundo!</Titulo>",
                  "    </>",
                  "  );",
                  "};"
                ])
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: PROPS :::::::::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-props',
        title: 'Props',
        keywords: ['props', 'props children', 'props pasadas'],
        //summary: 'Las props entran desde afuera y el componente no las reescribe. Las props pueden ser de tipo string, number, boolean, array, object, function, etc.',
        sections: [
          // :::::::::::::::: QUE SON LAS PROPS? ::::::::::::::::
          {
            title: 'Que son las props?',
            content: [
              {
                type: 'p',
                text: 'Las <b>props (properties)</b> son un mecanismo para pasar datos desde un componente padre a un componente hijo.'
              },
              {
                type: 'p',
                text: 'Son objetos que tienen valores que permiten la comunicación entre componentes. Pueden ser de tipo string, number, boolean, array, object, function, etc.'
              },
              {
                type: 'p',
                text: 'Se definen dandole un <b>nombre</b> a la prop y un <b>valor</b> de la siguiente manera:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `<Componente nombreProp={valorProp} />`
                ])
              },
              {
                type: 'p',
                text: 'Tambien se puede pasar <b>mas de una prop</b> a la vez:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `<Componente nombreProp1={valorProp1} nombreProp2={valorProp2} />`
                ])
              },
              {
                type: 'alert',
                variant: 'secondary',
                paragraphs: [
                  'Si el valor de la propiedad va entre comillas dobles (<b>"juan"</b>), se considera un <b>string</b>.',
                  'Si el valor de la propiedad va entre llaves (<b>{variable}</b>), se considera un <b>número</b>, <b>objeto</b>, <b>array</b>, <b>function</b>, etc.',
                ]
              },
            ]
          },
          // :::::::::::::::: VALIDACIÓN DE PROPS ::::::::::::::::
          {
            title: 'Validación de props con PropTypes',
            content: [
              {
                type: 'p',
                text: 'Podemos usar <b>PropTypes</b> para validar los tipos de las props. (en caso de usar <b>TypeScript</b>, no es necesario, ya que TypeScript usa otro mecanismo para esto)'
              },
              {
                type: 'p',
                text: 'Para esto debo instalar la libreria <b>"prop-types"</b> con el siguiente comando en terminal:'
              },
              {
                type: 'code',
                ...code('terminal', [
                  `npm install prop-types`
                ])
              },
              {
                type: 'p',
                text: 'Luego debo importar la libreria en el componente y usarlo de la siguiente manera::'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import PropTypes from 'prop-types';

                  PrimerComponente.propTypes = {
                    propiedadString: PropTypes.string.isRequired,
                    propiedadNumber: PropTypes.number.isRequired,
                  };`
                ])
              },
              {
                type: 'p',
                text: 'Puedes encontrar la lista completa de tipos de variables y su documentacion oficial en su enlace oficial de npm [prop-types] (https://www.npmjs.com/package/prop-types).'
              },
              {
                type: 'alert',
                variant: 'info',
                paragraphs: [
                  'La validación de datos es importante para <b>poder ver errores en el navegador</b>. Ademas, es una buena practica para poder mantener el codigo mas limpio y organizado.',
                ]
              }
            ]
          },
          // :::::::::::::::: VALORES POR DEFECTO ::::::::::::::::
          {
            title: 'Valores por defecto',
            content: [
              {
                type: 'p',
                text: 'En versiones actuales de React, podemos definir valores por defecto para las props dentro del mismo componente en los <b>argumentos del componente</b>.'
              },
              {
                type: 'p',
                text: 'Esto significa que si no se pasa una prop, se usara el valor por defecto definido.'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `export const PrimerComponente = ({
                      propiedadString = 'Valor por defecto', 
                      propiedadNumber = 10
                    }) => {
                    return (
                      <>
                        <h1>{propiedadString}</h1>
                        <h1>{propiedadNumber + 77}</h1>
                      </>
                    )
                  }`
                ])
              },
              {
                type: 'alert',
                variant: 'secondary',
                paragraphs: [
                  'Esto es muy util para cuando se pasa una prop opcional y no se quiere que se rompa la aplicacion si no se pasa el valor.',
                ]
              }
            ]
          },
          // :::::::::::::::: EJEMPLO (CON PROPTYPES) ::::::::::::::::
          {
            title: 'Ejemplo (con PropTypes)',
            content: [
              {
                type: 'p',
                text: 'Veamos un ejemplo de como se puede usar props con valores por defecto:'
              },
              {
                type: 'p',
                text: '<b>Componente padre (App.jsx)</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { PrimerComponente } from './componentes/PrimerComponente';

                    // Asumiendo en el archivo "main.jsx" tengo algo como:
                    createRoot(document.getElementById('root')).render(
                      <StrictMode>
                        <PrimerComponente propiedadString="Usando Props por primera vez!" propiedadNumber={10} />
                      </StrictMode>,
                    )`
                ])
              },
              {
                type: 'p',
                text: '<b>Componente hijo (PrimerComponente.jsx)</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Importamos PropTypes
                  import PropTypes from 'prop-types';
                  
                  // Luego en el componente, se pueden acceder a las props de la siguiente manera:
                  export const PrimerComponente = (props) => {
                    // Recibimos las props como un objeto y lo "desestructuramos" para obtener las propiedades.
                    const {propiedadString, propiedadNumber} = props;
                    return (
                      <div>
                        <h1>{propiedadString}</h1>
                        <h1>{propiedadNumber}</h1>
                      </div>
                    )
                  }
                    
                  // Validamos las props con PropTypes (en caso de no usar Typescript)
                  PrimerComponente.propTypes = {
                    propiedadString: PropTypes.string.isRequired,
                    propiedadNumber: PropTypes.number.isRequired,
                  };`
                ])
              },
              {
                type: 'p',
                text: 'Tambien podemos usar la <b>desestructuracion de objetos</b> para obtener las props de la siguiente manera:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `export const PrimerComponente = ({propiedadString, propiedadNumber}) => {
                    return (
                      <div>
                        <h1>{propiedadString}</h1>
                        <h1>{propiedadNumber}</h1>
                      </div>
                    )
                  }`
                ])
              },
            ]
          },
          // :::::::::::::::: EJEMPLO (CON TYPESCRIPT) ::::::::::::::::
          {
            title: 'Ejemplo (con TypeScript)',
            content: [
              {
                type: 'p',
                text: 'Veamos un ejemplo de como se puede usar props con valores por defecto en TypeScript:'
              },
              {
                type: 'p',
                text: '<b>Componente hijo (PrimerComponente.tsx)</b>'
              },
              {
                type: 'code',
                ...code('tsx', [
                  `interface Props {
                      propiedadString: string;
                      propiedadNumber: number;
                    }
                    export const PrimerComponente = (props: Props) => {
                      const {propiedadString, propiedadNumber} = props;
                      return (
                        <div>
                          <h1>{propiedadString}</h1>
                          <h1>{propiedadNumber}</h1>
                        </div>
                      )
                    }`
                ])
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: EVENTOS :::::::::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-eventos',
        title: 'Eventos',
        keywords: ['eventos', 'eventos en react', 'eventos en react hooks'],
        //summary: 'Los eventos son acciones que el usuario realiza en la interfaz de usuario. Por ejemplo, un click, un hover, un submit, etc.',
        sections: [
          // :::::::::::::::: QUE SON LOS EVENTOS? ::::::::::::::::
          {
            title: 'Que son los eventos?',
            content: [
              {
                type: 'p',
                text: 'Los <b>eventos en React</b> son mecanismos por los cuales los componentes pueden reaccionar a la interaccion del usuario con el navegador, como un click, hover, scroll, etc.'
              },
              {
                type: 'p',
                text: 'Primero debemos definir la <b>funcion que se ejecutará cuando el evento ocurra</b>. Luego debemos asignar la funcion a la <b>propiedad del componente</b> (por ejemplo "onClick", "onChange", "onSubmit", etc.).'
              },
              {
                type: 'code',
                ...code('tsx', [
                  `export const ContadorApp = () => {
                      function miFuncion(event) {
                          console.log(event)
                      }
                      return (
                          <>
                              <h1>Contador App</h1>
                              <button onClick={miFuncion}>
                                  Soy un boton
                              </button>
                          </>
                      )
                  }`
                ])
              },
              {
                type: 'p',
                text: 'En el caso de que si se necesite enviar argumentos a la funcion, se debe llamar a la funcion con parentesis usando la <b>arrow function</b> de la forma `{() => miFuncion(argumento1, argumento2, ...)}`.'
              },
              {
                type: 'code',
                ...code('tsx', [
                  `export const ContadorApp = () => {
                      const miFuncion = (argumento1, argumento2, ...) => {
                          console.log(argumento1, argumento2, ...)
                      }
                      return (
                        <>
                          <h1>Contador App</h1>
                          <button onClick={() => miFuncion(argumento1, argumento2, ...)}>
                            Soy un boton
                          </button>
                        </>
                      )
                  }`
                ])
              },
              {
                type: 'alert',
                variant: 'secondary',
                paragraphs: [
                  'En caso de que no se necesiten argumentos y solo se necesite el valor de <b>"event"</b>, se puede llamar a la funcion sin parentesis, de la forma `onClick={miFuncion}`, que sería lo mismo que `onClick={(event) => miFuncion(event)}`.',
                ]
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: HOOKS Y ESTADO ::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-hooks-y-estado',
        title: 'Hooks y estado',
        keywords: ['hooks', 'estado', 'inmutable', 'input controlado'],
        //summary: 'Los hooks son funciones de React que enganchan estado y efectos a un componente. Se llaman en el nivel superior, siempre en el mismo orden.',
        sections: [
          // :::::::::::::::: QUE SON LOS HOOKS? ::::::::::::::::
          {
            title: 'Que son los hooks?',
            content: [
              {
                type: 'p',
                text: 'Los <b>hooks</b> son funciones especiales que nos permiten usar caracteristicas de React en un componente de tipo funcion.'
              },
              {
                type: 'p',
                text: 'Fueron introducidos en React 16.8. para poder manejar el estado y otras caracteristicas de React sin la necesidad de usar clases.'
              },
              {
                type: 'p',
                text: 'Los hooks vienen de 2 formas:'
              },
              {
                type: 'ul',
                items: [
                  'Los hooks propios de React (<b>useState</b>, <b>useEffect</b>, <b>useContext</b>, etc).',
                  'Los hooks de terceros (<b>nuestros propios hooks</b>).',
                ]
              },
              {
                type: 'alert',
                variant: 'secondary',
                paragraphs: [
                  'Son una forma de hacer una funcion fácil, legible y reutilizable.',
                ]
              },
            ]
          },
          // :::::::::::::::: QUE ES EL ESTADO? ::::::::::::::::
          {
            title: 'Que es el estado?',
            content: [
              {
                type: 'p',
                text: 'Los <b>estados</b> en React son objetos que contienen datos y representan la informacion que una interfaz de usuario necesita para ser renderizada. Son una forma de guardar la informacion de un componente.'
              },
              {
                type: 'p',
                text: 'El estado es mutable (se puede cambiar) y tiene todos los datos que necesita un componente para funcionar correctamente.'
              },
              {
                type: 'p',
                text: 'A traves de <b>hooks</b> (funcional components) o el <b>constructor</b> (componentes de clase) se puede acceder al estado de un componente.'
              },
              {
                type: 'p',
                text: 'Se definen de la siguiente manera usando el hook <b>useState</b>:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `const [estado, setEstado] = useState(valorInicial)
                  
                  // Ejemplo de estado
                  const [contador, setContador] = useState(0) // Inicializo "contador" en 0`
                ])
              },
              {
                type: 'p',
                text: 'En el caso anterior, la variable "contador" es el estado, que se inicializa con el valor 0, y la variable "setContador" es la funcion para modificar que usaremos para cambiar el valor del estado.'
              },
              {
                type: 'alert',
                variant: 'secondary',
                paragraphs: [
                  'Por convención, el nombre del estado se define en <b>camelCase</b> y la funcion para modificar el estado se define en <b>camelCase</b> pero con el prefijo <b>"set"</b> (por ejemplo, <b>"setContador"</b>).',
                ]
              },
              {
                type: 'p',
                text: 'Cuando se ejecute esta funcion, <b>se actualizara el estado</b> y se <b>renderizara el componente con el nuevo valor</b>.'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Ejemplo de actualizacion de estado
                  setContador(contador + 1)`
                ])
              },
              {
                type: 'p',
                text: 'En el ejemplo anterior, se incrementa el valor del estado <b>"contador"</b> en 1 y <b>se volverá a renderizar el componente</b> con el nuevo valor.'
              },
            ]
          },
          // :::::::::::::::: USESTATE (HOOK PROPIO DE REACT) ::::::::::::::::
          {
            title: 'useState (Hook propio de React)',
            content: [
              {
                type: 'p',
                text: 'El hook <b>useState</b> es el hook propio de React que nos permite manejar el estado de un componente.'
              },
              {
                type: 'p',
                text: 'Como vimos anteriormente, se define de la siguiente manera:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Importamos el hook useState
                  import { useState } from 'react';
                  
                  // Definimos el estado
                  const [estado, setEstado] = useState(valorInicial)`
                ])
              },
              {
                type: 'p',
                text: '<b>Ejemplo de uso:</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useState } from 'react' // importo el hook useState

                    export const ContadorApp = ({valor = 1}) => {

                        // defino el estado (contador) y la funcion para modificarlo (setContador) con el valor inicial (valor)
                        // La funcion para modificar el estado suele llamarse setEstado o setNombreDelEstado.
                        const [contador, setContador] = useState(valor)

                        const handleClick = () => {
                            // modifico el estado (contador) con la funcion (setContador) y le paso el nuevo valor (contador + 1)
                            setContador(contador + 1) 
                            // imprimo el nuevo valor del estado (contador)
                            console.log(contador) 
                        };

                        return (
                        <>
                            <h1>Contador App</h1>
                            <h2>{contador}</h2>
                            <button onClick={handleClick}>
                                Soy un boton
                            </button>
                        </>
                      )
                    }`
                ])
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: CONDICIONALES TERNARIOS :::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-condicionales-ternarios',
        title: 'Condicionales ternarios',
        keywords: ['condicionales', 'ternarios', 'condicionales ternarios'],
        //summary: 'Los condicionales ternarios son una forma de escribir condicionales de una manera mas corta y legible.',
        sections: [
          // :::::::::::::::: QUE SON LOS CONDICIONALES TERNARIOS? ::::::::::::::::
          {
            title: 'Que son los condicionales ternarios?',
            content: [
              {
                type: 'p',
                text: 'Los <b>condicionales ternarios</b> son formas de controlar el flujo de ejecucion de un programa.'
              },
              {
                type: 'p',
                text: 'Se definen de la siguiente manera:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Si "valor" es true, se muestra "true", si es false, se muestra "false"
                  valor ? 'true' : 'false'`
                ])
              },
              {
                type: 'p',
                text: '<b>Ejemplo:</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Este componente recibe dos props: nombre y visto
                  const Items = ({nombre, visto}) => {
                      // Si "visto" es true, se muestra el emoji "✅", si es false, se muestra el emoji "❌"
                      return (
                          <li>{nombre} - {visto ? '✅' : '❌'}</li>
                      )
                  }`
                ])
              },
              {
                type: 'p',
                text: 'Tambien se pueden usar <b>&&</b> para salir de una condicional.'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Si "valor" es true, se muestra "true", si es false, se sale de la condicional
                  valor && 'true'`
                ])
              },
              {
                type: 'p',
                text: '<b>Ejemplo:</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Este componente recibe dos props: nombre y visto
                  const Items = ({nombre, visto}) => {
                      // Si "visto" es true, se muestra el emoji "✅", si es false, se sale de la condicional
                      return (
                          <li>{nombre} - {visto && '✅'}</li>
                      )
                  }`
                ])
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: MAP :::::::::::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-map',
        title: 'Map',
        keywords: ['map', 'array', 'array de objetos'],
        //summary: 'El metodo map es una forma de iterar sobre un array y devolver un nuevo array con los valores modificados.',
        sections: [
          // :::::::::::::::: QUE ES EL METODO MAP? ::::::::::::::::
          {
            title: 'Que es el metodo map?',
            content: [
              {
                type: 'p',
                text: 'El metodo <b>map</b> (Array.map) es una forma de iterar sobre un array y devolver un nuevo array con los valores modificados.'
              },
              {
                type: 'p',
                text: 'Se usa de la siguiente manera:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `arreglo.map(elemento => {
                    return <li>{elemento}</li>
                  })`
                ])
              },
              {
                type: 'p',
                text: 'Al iterar cada elemento del arreglo, React necesita un <b>key</b> para identificar cada elemento de manera unica, para ello se puede usar el <b>indice del elemento</b> o el <b>id del elemento</b>.'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `key={elemento.id} // Esto es muy importante para React para identificar cada elemento del arreglo.`
                ])
              },
            ]
          },
          // :::::::::::::::: EJEMPLO DE USO DE MAP ::::::::::::::::
          {
            title: 'Ejemplo de uso de Map',
            content: [
              {
                type: 'p',
                text: '<b>Componente padre (App.jsx):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useState } from 'react';
                    import { Items } from './Items';

                    export const ListadoApp = () => {

                        // Funcion para agregar una tarea.
                        const agregarTarea = () => {
                            // Al usar el spread operator (...arreglo), se crea un nuevo arreglo
                            // con los elementos del arreglo original y el nuevo elemento.
                            setArreglo([...arreglo, {id: 4, nombre: 'Nueva seccion', visto: false}]);
                        }

                        // Arreglo de objetos con los datos de las secciones.
                        let listadoSecciones = [
                            {id: 1, nombre: 'Seccion 1', visto: true},
                            {id: 2, nombre: 'Seccion 2', visto: false},
                            {id: 3, nombre: 'Seccion 3', visto: false},
                        ];
                        // Estado para el arreglo de secciones.
                        const [arreglo, setArreglo] = useState(listadoSecciones);
                        return (
                            <>
                                <h1>Listado de temas del curso</h1>
                                <ol>
                                    {arreglo.map(seccion => (
                                        // key={seccion.id} es importante para React para identificar cada elemento del arreglo.
                                        <Items key={seccion.id} nombre={seccion.nombre} visto={seccion.visto} />
                                    ))}
                                </ol>

                                <button onClick={() => agregarTarea()}>Agregar tarea</button>
                            </>
                        )
                    }`
                ])
              },
              {
                type: 'p',
                text: '<b>Componente hijo (Items.jsx):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `export const Items = ({nombre, visto}) => {
                        // Con el atajo "Windows + ." podemos insertar el emoji de la letra que queramos.
                        return (
                            <li>{nombre} - {visto ? '✅' : '❌'}</li>
                        )
                    }`
                ])
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: FORMULARIOS :::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-formularios',
        title: 'Formularios',
        keywords: ['formularios', 'input', 'textarea', 'select', 'form', 'formularios'],
        //summary: 'El metodo map es una forma de iterar sobre un array y devolver un nuevo array con los valores modificados.',
        sections: [
          // :::::::::::::::: QUE ES UN FORMULARIO? ::::::::::::::::
          {
            title: 'Manejo de formularios en React',
            content: [
              {
                type: 'p',
                text: 'En React, para manejar <b>formularios</b> se usa el elemento `<form></form>` y se maneja el estado del formulario con el hook <b>useState</b>.'
              },
              {
                type: 'p',
                text: 'Se debe utilizar el evento <b>"onSubmit"</b> que se ejecuta cuando se envía el formulario.'
              },
              {
                type: 'p',
                text: '<b>Ejemplo de formulario:</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useState } from 'react';

                  // Componente para agregar una tarea nueva a un listado.
                  export const AgregarTarea = () => {

                    // Estado para el valor del input.
                    const [inputValue, setInputValue] = useState('');

                    // Funcion para manejar el cambio en el input.
                    const onInputChange = (event) => {
                      setInputValue(event.target.value);
                    }

                    // Funcion para manejar el envio del formulario.
                    const onSubmit = (event) => {
                      // Prevenir el comportamiento por defecto del formulario. (En este caso, recargar la pagina).
                      event.preventDefault();
                      console.log('Tarea agregada: ', inputValue);
                    }

                    return (
                      <form onSubmit={onSubmit}>
                        <input 
                          type="text" 
                          placeholder="Agregar tarea nueva"
                          value={inputValue}
                          onChange={onInputChange}
                        />
                      </form>
                    )
                  }`
                ])
              },
              {
                type: 'alert',
                variant: 'info',
                text: 'Al tratar con el evento <b>"onSubmit"</b>, puedes usar `event.preventDefault();` para prevenir el comportamiento por defecto del formulario y evitar que se recargue la pagina.'
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: USEEFFECT :::::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-useeffect',
        title: 'useEffect y Fetch',
        keywords: ['useEffect', 'fetch', 'api', 'api rest', 'api restful', 'api restful', 'useeffect'],
        //summary: 'El hook useEffect es un hook que se usa para ejecutar una funcion cuando el componente se monta, se actualiza o se desmonta.',
        sections: [
          // :::::::::::::::: QUE ES EL HOOK USEEFFECT? ::::::::::::::::
          {
            title: 'Que es el hook useEffect?',
            content: [
              {
                type: 'p',
                text: '<b>useEffect</b> es un Hook que se usa para ejecutar una funcion cuando el componente se monta, una sola vez.'
              },
              {
                type: 'p',
                text: 'Esta funcion cuenta con dos argumentos:'
              },
              {
                type: 'ul',
                items: [
                  'La funcion a ejecutar.',
                  'Un arreglo de dependencias.',
                ]
              },
              {
                type: 'alert',
                variant: 'info',
                paragraphs: [
                  'Si el <b>arreglo de dependencias esta vacio</b>, la funcion se ejecutara una sola vez cuando el componente se monta.',
                  'Si el <b>arreglo de dependencias NO esta vacio</b>, la funcion se ejecutara cada vez que el estado de los elementos del arreglo cambie.',
                ]
              },
              {
                type: 'p',
                text: '<b>Ejemplo de uso de useEffect:</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import React from 'react'
                  import { useState, useEffect } from 'react'

                  export const UsersApp = () => {

                      // Estado para la lista de usuarios.
                      const [users, setUsers] = useState([]);

                      // Funcion para obtener la lista de usuarios.
                      const fetchUsers = async () => {
                          try {
                              // Fetch de la API de prueba de JSONPlaceholder, la cual contiene un arreglo de 10 usuarios.
                              const response = await fetch('https://jsonplaceholder.typicode.com/users')
                              const data = await response.json()
                              // Seteo el estado con los datos obtenidos de la API.
                              setUsers(data)
                          } catch (error) {
                              console.log(error)
                          }
                      }

                      // useEffect se ejecuta una sola vez cuando el componente se monta.
                      // Si le asignamos un arreglo de dependencias, se ejecutara cada vez que el estado de los elementos del arreglo cambie.
                      useEffect(() => {
                          fetchUsers()
                      }, [])

                      return (
                          <>
                              <h1>Lista de Usuarios</h1>
                              <ul>
                                  {users.map(user => (
                                      <li key={user.id}>{user.name}</li>
                                  ))}
                              </ul>
                          </>
                      )
                  }`
                ])
              },
            ]
          },
          // :::::::::::::::: FUNCION FETCH ::::::::::::::::
          {
            title: 'Funcion Fetch',
            content: [
              {
                type: 'p',
                text: '<b>Fetch</b> es una función <b>asíncrona</b> que se usa para obtener datos de una API.'
              },
              {
                type: 'alert',
                variant: 'secondary',
                paragraphs: [
                  '<b>Asíncrona</b> significa que la funcion no se ejecuta de manera inmediata, sino que se ejecuta cuando la <b>promesa</b> (objeto que representa el resultado de una operacion asincrona) se resuelva.',
                ]
              },
              {
                type: 'p',
                text: 'La funcion fetch se debe usar siempre dentro de una funcion asincrona, denotada con la palabra clave <b>"async"</b>, y para esperar a que la promesa se resuelva, se debe usar la palabra clave <b>"await"</b>.'
              },
              {
                type: 'p',
                text: '<b>Ejemplo de uso de Fetch:</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `// Funcion para obtener datos de una API.
                  const fetchData = async () => {
                    // Try catch para manejar el error de la API.
                    try {
                      // Fetch de la API de prueba de JSONPlaceholder, la cual contiene un arreglo de 10 usuarios.
                      const response = await fetch('https://jsonplaceholder.typicode.com/users')
                      // Esperamos a que la respuesta de la API se convierta en un objeto JSON.
                      const data = await response.json()
                      // Imprimimos los datos obtenidos de la API.
                      console.log(data)
                      } catch (error) {
                        console.log(error)
                      }
                    }
                  }`
                ])
              },
            ]
          },
        ],
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: CUSTOM HOOKS :::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-custom-hooks',
        title: 'Custom Hooks',
        keywords: ['custom hooks', 'hooks', 'hooks personalizados', 'hooks personalizados', 'hooks personalizados'],
        //summary: 'El hook useEffect es un hook que se usa para ejecutar una funcion cuando el componente se monta, se actualiza o se desmonta.',
        sections: [
          // :::::::::::::::: QUE ES UN CUSTOM HOOK? ::::::::::::::::
          {
            title: 'Que es un Custom Hook?',
            content: [
              {
                type: 'p',
                text: 'Los <b>Custom Hooks</b> son funciones que se crean para reutilizar codigo.'
              },
              {
                type: 'p',
                text: 'Estos hooks usualmente se crean en la carpeta "hooks" y se importan en el componente donde se van a usar.'
              },
              {
                type: 'p',
                text: 'Por convencion,los archivos suelen tener el nombre <b>"use" seguido del nombre del hook</b> y la extension ".js" (ya que son archivos de JavaScript). Ejemplo: `useFetchData.js`'
              },
              {
                type: 'p',
                text: 'Dentro del Hook se debe retornar un <b>objeto</b> con las variables y funciones que se van a usar en el componente.'
              },
            ]
          },
          // :::::::::::::::: EJEMPLO DE USO DE CUSTOM HOOK ::::::::::::::::
          {
            title: 'Ejemplo de uso de Custom Hook',
            content: [
              {
                type: 'p',
                text: '<b>Componente (UserApp.jsx):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useFetchData} from './hooks/useFetchData' // Importamos el custom hook.

                  export const UsersApp = () => {

                      // Custom hook para obtener los datos de la API.
                      const { data, isLoading, error } = useFetchData()

                      return (
                          <>
                              <h1>Lista de Usuarios</h1>
                              <ul>
                                  {isLoading && <p>Cargando...</p>}
                                  {data.map(user => (
                                      <li key={user.id}>{user.name}</li>
                                  ))}
                              </ul>
                          </>
                      )
                  }`
                ])
              },
              {
                type: 'p',
                text: 'Desde el componente UsersApp, importamos el custom hook "useFetchData" el cual nos retorna un objeto con las variables y funciones que se van a usar en el componente.'
              },
              {
                type: 'p',
                text: '<b>Custom Hook (useFetchData.js):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useState, useEffect } from 'react'

                  export const useFetchData = () => {

                      // Estado para la lista de usuarios.
                      const [data, setData] = useState([]);
                      const [isLoading, setIsLoading] = useState(true);
                      const [error, setError] = useState(false);

                      // Funcion para obtener la lista de usuarios.
                      const fetchUsers = async () => {
                          try {
                              // Fetch de la API de prueba de JSONPlaceholder, la cual contiene un arreglo de 10 usuarios.
                              const response = await fetch('https://jsonplaceholder.typicode.com/users')
                              const data = await response.json()
                              // Seteo el estado con los datos obtenidos de la API.
                              setData(data)
                              setIsLoading(false)
                              setError(false)
                              console.log(data)
                          } catch (error) {
                              console.log(error)
                              setError(true)
                              setIsLoading(false)
                              setData([])
                          }
                      }

                      // useEffect se ejecuta una sola vez cuando el componente se monta.
                      useEffect(() => {
                          fetchUsers()
                      }, [])

                      return {
                        data,
                        isLoading,
                        error
                      }
                  }`
                ])
              },
            ]
          },
        ]
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: USECOUNTER (CUSTOM HOOK) :::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-usecounter',
        title: 'useCounter (Custom Hook)',
        keywords: ['custom hooks', 'hooks', 'hooks personalizados', 'hooks personalizados', 'hooks personalizados', 'usecounter'],
        //summary: 'El hook useEffect es un hook que se usa para ejecutar una funcion cuando el componente se monta, se actualiza o se desmonta.',
        sections: [
          // :::::::::::::::: EJEMPLO DE CUSTOM HOOK (useCounter) ::::::::::::::::
          {
            title: 'Ejemplo de Custom Hook',
            content: [
              {
                type: 'p',
                text: 'Como otro ejemplo de <b>Custom Hooks</b>, ahora veremos como crear un hook para manejar un contador, al cual llamaremos <b>"useCounter"</b>.'
              },
              {
                type: 'p',
                text: '<b>Componente (ContadorComponent.jsx):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useCounter } from './hooks/useCounter'

                  export const ContadorComponent = () => {

                    const { contador, incrementar, decrementar, resetear } = useCounter(0)

                    return (
                      <>
                        <h1>Contador: {contador}</h1>
                        <button className='btn btn-primary m-1' onClick={() => incrementar(1)}>+1</button>
                        <button className='btn btn-info m-1' onClick={() => resetear()}>Reset</button>
                        <button className='btn btn-primary m-1' onClick={() => decrementar(1)}>-1</button>
                      </>
                    )
                  }`
                ])
              },
              {
                type: 'p',
                text: '<b>Hook (useCounter.js):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useState } from 'react'

                  export const useCounter = (valorInicial = 0) => {

                      const [contador, setContador] = useState(valorInicial)

                      const incrementar = (valor = 1) => {
                          setContador(contador + valor)
                      }
                      const decrementar = (valor = 1) => {
                          setContador(contador - valor)
                      }
                      const resetear = () => {
                          setContador(0)
                      }

                      return {
                          contador,
                          incrementar,
                          decrementar,
                          resetear
                      }
                  }`
                ])
              },
            ]
          },
        ]
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: USEFORM (CUSTOM HOOK) :::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-useform',
        title: 'useForm (Custom Hook)',
        keywords: ['custom hooks', 'hooks', 'hooks personalizados', 'hooks personalizados', 'hooks personalizados', 'useform'],
        //summary: 'El hook useEffect es un hook que se usa para ejecutar una funcion cuando el componente se monta, se actualiza o se desmonta.',
        sections: [
          // :::::::::::::::: EJEMPLO DE CUSTOM HOOK (useForm) ::::::::::::::::
          {
            title: 'Ejemplo de Custom Hook',
            content: [
              {
                type: 'p',
                text: 'Como otro ejemplo de <b>Custom Hooks</b>, ahora veremos como crear un hook para manejar un formulario, al cual llamaremos <b>"useForm"</b>.'
              },
              {
                type: 'p',
                text: '<b>Componente (FormularioComponent.jsx):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useForm } from "./hooks/useForm";

                  export const FormularioComponent = () => {

                      // Estado inicial del formulario (un objeto con los campos del formulario)
                      const initialForm = { username: '', email: '', password: '' }

                      // Llamo al Hook useForm y le paso el estado inicial (objeto con los campos del formulario)
                      // Luego el Hook me devuelve el estado del formulario y la función para manejar los cambios en el formulario
                      const {formState, onInputChange} = useForm(initialForm);

                      // Luego, desde el objeto de estado del formulario (formState), extraigo los valores de los campos del formulario
                      // como variables individuales (username, email, password)
                      const { username, email, password } = formState;

                      // Función para manejar el envío del formulario (evito que el formulario se recargue)
                      const onSubmit = (event) => {
                          event.preventDefault();
                          console.log(formState);
                      };

                    return (
                      <>
                          <h1>Formulario</h1>
                          <form onSubmit={onSubmit}>
                              <div className="form-group">
                                  <label htmlFor="exampleInputUsername1">Username</label>
                                  <input 
                                  type="text" 
                                  className="form-control" 
                                  id="exampleInputUsername1" 
                                  placeholder="Enter username"
                                  name="username"
                                  value={username}
                                  onChange={onInputChange}
                                  />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Email address</label>
                                  <input 
                                  type="email" 
                                  className="form-control" 
                                  id="exampleInputEmail1" 
                                  placeholder="Enter email" 
                                  name="email"
                                  value={email}
                                  onChange={onInputChange}
                                  />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Password</label>
                                  <input 
                                  type="password" 
                                  className="form-control" 
                                  id="exampleInputPassword1" 
                                  placeholder="Password" 
                                  name="password"
                                  value={password}
                                  onChange={onInputChange}
                                  />
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                      </>
                    )
                  }`
                ])
              },
              {
                type: 'p',
                text: '<b>Hook (useForm.js):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useState } from "react";

                  // initialForm es el estado inicial del formulario (un objeto con los campos del formulario)
                  export const useForm = (initialForm = {}) => {

                      // Estado para el formulario (un objeto con los campos del formulario)
                      const [formState, setFormState] = useState(initialForm);

                      // Función para manejar los cambios en el formulario (target es el evento del input)
                      const onInputChange = ({target}) => {
                          const {name, value} = target;
                          setFormState({
                              ...formState, // ...formState es el estado anterior
                              [name]: value // name es el nombre del input y value es el valor del input
                          });
                      };

                      return {
                          formState,
                          onInputChange
                      }
                  }`
                ])
              },
            ]
          },
        ]
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: USEFETCH (CUSTOM HOOK) :::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-usefetch',
        title: 'useFetch (Custom Hook)',
        keywords: ['custom hooks', 'hooks', 'hooks personalizados', 'hooks personalizados', 'hooks personalizados', 'usefetch'],
        //summary: 'El hook useEffect es un hook que se usa para ejecutar una funcion cuando el componente se monta, se actualiza o se desmonta.',
        sections: [
          // :::::::::::::::: EJEMPLO DE CUSTOM HOOK (useFetch) ::::::::::::::::
          {
            title: 'Ejemplo de Custom Hook',
            content: [
              {
                type: 'p',
                text: 'Como otro ejemplo de <b>Custom Hooks</b>, ahora veremos como crear un hook para manejar una peticion a una API, al cual llamaremos <b>"useFetch"</b>.'
              },
              {
                type: 'p',
                text: '<b>Componente (UsuariosComponent.jsx):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useFetch } from "./hooks/useFetch"

                  export const UsuariosComponent = () => {

                      const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

                    return (
                      <>
                          <h1>Lista deUsuarios</h1>
                          {isLoading ? <h4>Cargando...</h4>
                          : error ? <h4>Error: {error}</h4>
                          :
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th scope="col">id</th>
                                      <th scope="col">name</th>
                                      <th scope="col">email</th>
                                      <th scope="col">website</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {data.map((user) => (
                                      <tr key={user.id}>
                                          <th scope="row">{user.id}</th>
                                          <td>{user.name}</td>
                                          <td>{user.email}</td>
                                          <td>{user.website}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                          }
                          
                      </>
                    )
                  }`
                ])
              },
              {
                type: 'p',
                text: '<b>Hook (useFetch.js):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useState, useEffect } from "react"

                  // url es la URL de la API que se va a consumir
                  export const useFetch = (url) => {

                      // Estado para la respuesta de la petición HTTP
                      const [estado, setEstado] = useState({
                          data: null,
                          isLoading: true,
                          error: null
                      })

                      // Función para obtener la respuesta de la petición HTTP
                      const getFetch = async () => {
                          if (!url) return // Si no hay URL, no se hace la petición
                          try {
                              const response = await fetch(url) // Realizo la petición HTTP
                              const data = await response.json() // Convierto la respuesta a JSON
                              setEstado({
                                  data,
                                  isLoading: false, // Establezco el estado de carga en false
                                  error: null // Establezco el estado de error en null
                              })
                              
                          } catch (error) {
                              setEstado({
                                  data: null,
                                  isLoading: false,
                                  error: error // Establezco el estado de error en el error
                              })
                          }
                      }

                      // useEffect para ejecutar la función getFetch cuando el valor de url cambie
                      useEffect(() => {
                          getFetch()
                      }, [url])

                      return {
                          data: estado.data,
                          isLoading: estado.isLoading,
                          error: estado.error
                      }
                  }`
                ])
              },
            ]
          },
        ]
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: USEREF (HOOK) :::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-useref',
        title: 'useRef (Hook)',
        keywords: ['hooks', 'hooks personalizados', 'hooks personalizados', 'hooks personalizados', 'useref'],
        //summary: 'El hook useEffect es un hook que se usa para ejecutar una funcion cuando el componente se monta, se actualiza o se desmonta.',
        sections: [
          // :::::::::::::::: EJEMPLO DE HOOK (useRef) ::::::::::::::::
          {
            title: 'Uso de useRef (Hook nativo de React)',
            content: [
              {
                type: 'p',
                text: 'El hook <b>useRef</b> es un hook que se encarga de <b>mantener una referencia a un elemento del DOM</b>.'
              },
              {
                type: 'p',
                text: 'Se utiliza normalmente para referenciar una parte del jsx (el HTML) a una informacion para retenerla como referencia (en memoria) y no perderla cuando el componente se renderiza nuevamente.'
              },
              {
                type: 'p',
                text: 'En este ejemplo se muestra como usar el hook useRef:'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useForm } from "./hooks/useForm";
                  import { useRef, useEffect } from "react"; // Importamos el hook useRef y useEffect.

                  export const FormularioComponent = () => {

                      // Referencia para el input de email
                      const focusRef = useRef();

                      // Estado inicial del formulario
                      const initialForm = {
                          username: '',
                          email: '',
                          password: ''
                      }

                      // Hook para el formulario (se llama el hook y se le pasa el estado inicial)
                      const {formState, onInputChange} = useForm(initialForm);

                      // Desestructuración del estado para el formulario
                      const { username, email, password } = formState;

                      // Función para manejar el envío del formulario
                      const onSubmit = (event) => {
                          event.preventDefault();
                          console.log(formState);
                      };

                      // useEffect para hacer "focus" al input referenciado cuando el componente se renderiza
                      useEffect(() => {
                          focusRef.current.focus();
                      }, []);

                    return (
                      <>
                          <h1>Formulario</h1>
                          <form onSubmit={onSubmit}>
                              <div className="form-group">
                                  <label htmlFor="exampleInputUsername1">Username</label>
                                  <input 
                                  type="text" 
                                  className="form-control" 
                                  id="exampleInputUsername1" 
                                  placeholder="Enter username"
                                  name="username"
                                  value={username}
                                  onChange={onInputChange}
                                  />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Email address</label>
                                  <input 
                                  ref={focusRef}
                                  type="email" 
                                  className="form-control" 
                                  id="exampleInputEmail1" 
                                  placeholder="Enter email" 
                                  name="email"
                                  value={email}
                                  onChange={onInputChange}
                                  />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Password</label>
                                  <input 
                                  type="password" 
                                  className="form-control" 
                                  id="exampleInputPassword1" 
                                  placeholder="Password" 
                                  name="password"
                                  value={password}
                                  onChange={onInputChange}
                                  />
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                      </>
                    )
                  }`
                ])
              },
              {
                type: 'alert',
                variant: 'secondary',
                paragraphs: [
                  'En el ejemplo anterior, se muestra como usar el hook <b>useRef</b> para referenciar un input de email y hacer <b>"focus"</b> al input cuando el componente se renderiza.',
                ]
              },
            ]
          },
        ]
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: USEMEMO (HOOK) :::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-usememo',
        title: 'useMemo (Hook)',
        keywords: ['hooks', 'hooks personalizados', 'hooks personalizados', 'hooks personalizados', 'usememo'],
        //summary: 'El hook useEffect es un hook que se usa para ejecutar una funcion cuando el componente se monta, se actualiza o se desmonta.',
        sections: [
          // :::::::::::::::: EJEMPLO DE HOOK (useMemo) ::::::::::::::::
          {
            title: 'Uso de useMemo (Hook nativo de React)',
            content: [
              {
                type: 'p',
                text: 'El hook <b>useMemo</b> es un hook que se encarga de <b>memorizar un valor</b> para evitar recalcularlo cuando el componente se renderiza nuevamente.'
              },
              {
                type: 'p',
                text: 'Se utiliza normalmente para memorizar un valor que es costoso de calcular y guardarlo en cache.'
              },
              {
                type: 'p',
                text: 'En el siguiente ejemplo, se muestra como usar el hook <b>useMemo</b> para memorizar un valor que es <b>costoso de calcular</b>.'
              },
              {
                type: 'p',
                text: 'Se crea una funcion para calcular el producto de los numeros de la lista y se memoriza el resultado.'
              },
              {
                type: 'p',
                text: 'Se muestra el resultado en pantalla y se puede agregar un nuevo numero a la lista.'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { useState, useMemo } from "react"

                  export const CalculosPesados = () => {
                      
                      // Estado para una lista de numeros
                      const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                      
                      // Estado para mostrar u ocultar el calculo
                      const [show, setShow] = useState(true)

                      // Funcion para calcular el producto de los numeros de la lista
                      // Como estoy usando el hook useMemo, se va a recalcular el valor solo si el estado "listaNumeros" cambia
                      const getCalculo = (listaNumeros) => useMemo(() => {
                          // Aplico la funcion reduce para multiplicar todos los numeros de la lista
                          return listaNumeros.reduce((total, numero) => total * numero) // Multiplica todos los numeros de la lista
                      }, [listaNumeros])

                      const agregarNumero = () => {
                          // Agrego un nuevo numero a la lista (por ejemplo, el ultimo numero + 1)
                          // Uso el spread operator para copiar el estado anterior y agregar el nuevo numero
                          setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
                      }

                      return (
                          <>
                          <h1>Calculo:</h1>
                          <p>{ getCalculo(listaNumeros) }</p>
                          <button className="btn btn-primary m-2" onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
                          <button className="btn btn-primary m-2" onClick={() => agregarNumero()}>Agregar numero</button>
                          </>
                      )
                  }`
                ])
              },
            ]
          },
        ]
      },
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      // :::::::::::::::::::::::::::: USECALLBACK (HOOK) :::::::::::::::::::::::::::::
      // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      {
        slug: 'react-usecallback',
        title: 'useCallback (Hook)',
        keywords: ['hooks', 'hooks personalizados', 'hooks personalizados', 'hooks personalizados', 'usecallback'],
        //summary: 'El hook useEffect es un hook que se usa para ejecutar una funcion cuando el componente se monta, se actualiza o se desmonta.',
        sections: [
          // :::::::::::::::: EJEMPLO DE HOOK (useCallback) ::::::::::::::::
          {
            title: 'Uso de useCallback (Hook nativo de React)',
            content: [
              {
                type: 'p',
                text: 'El hook <b>useCallback</b> es un hook que se encarga de <b>memorizar una funcion</b> para evitar recalcularla cuando el componente se renderiza nuevamente.'
              },
              {
                type: 'p',
                text: 'Es un hook de memorización de funciones (parecido a useMemo).'
              },
              {
                type: 'p',
                text: 'En el siguiente <b>ejemplo</b>, se muestra como usar el hook useCallback para memorizar una funcion.'
              },
              {
                type: 'p',
                text: 'Se crea una funcion para incrementar el contador y se memoriza la funcion.'
              },
              {
                type: 'p',
                text: 'Se muestra el contador en pantalla y se puede incrementar el contador.'
              },
              {
                type: 'p',
                text: '<b>Componente padre (CallBackComponent.jsx):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import { Incrementar } from './Incrementar'
                  import { useState, useCallback } from 'react'

                  export const CallBackComponent = () => {

                      // Estado para el contador
                      const [contador, setContador] = useState(0)

                      // Funcion para incrementar el contador
                      // Uso el hook useCallback para memorizar la funcion
                      const incrementarPadre = useCallback((valor) => {
                          // Incremento el contador con el valor pasado por parametro
                          setContador(valorNuevo => valorNuevo + valor)
                      }, [])

                    return (
                      <>
                        <h1>Contador: {contador}</h1>
                        <Incrementar incrementar={incrementarPadre}/>
                      </>
                    )
                  }`
                ])
              },
              {
                type: 'p',
                text: '<b>Componente hijo (Incrementar.jsx):</b>'
              },
              {
                type: 'code',
                ...code('jsx', [
                  `import React from 'react'

                  // Uso el hook React.memo para memorizar el componente
                  // Solo se va a redibujar el componente si el props "incrementar" cambia
                  export const Incrementar = React.memo(({ incrementar }) => {
                      console.log('Me estoy redibujando')
                    return (
                      <button className="btn btn-primary m-2" onClick={() => incrementar(5)}>+5</button>
                    )
                  })`
                ])
              },
            ]
          },
        ]
      },
    ],
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Tipos que documentan el código y atrapan errores antes de ejecutarlo.',
    items: [
      {
        slug: 'tipos-basicos',
        title: 'Tipos básicos',
        keywords: ['string', 'number', 'boolean', 'array', 'anotacion', 'inferencia'],
        summary:
          'TypeScript suma anotaciones al JavaScript. El compilador las usa para revisar el código y después las borra: en el navegador no queda ningún tipo.',
        sections: [
          {
            title: 'Anotar e inferir',
            paragraphs: [
              'Puedes anotar una variable o dejar que TypeScript infiera el tipo desde el valor. Anota los bordes: parámetros, valor de retorno y objetos que cruzan funciones. Dentro de una función, la inferencia suele alcanzar.',
            ],
            code: code('typescript', [
              "const titulo: string = 'Apuntes';",
              'const paginas: number = 12;',
              'const publicado: boolean = false;',
              "const etiquetas: string[] = ['react', 'tipos'];",
              '',
              'function saludar(nombre: string): string {',
              '  return `Hola, ${nombre}`;',
              '}',
            ]),
          },
          {
            title: 'Qué no hace',
            paragraphs: [
              'Los tipos no validan datos que llegan en runtime, como un JSON de `fetch`. Ahí el compilador te cree la afirmación. Si ese dato viene de afuera, revísalo con una guarda o un esquema antes de tratarlo como un tipo concreto.',
            ],
          },
        ],
      },
      {
        slug: 'interfaces',
        title: 'Interfaces y types',
        keywords: ['interface', 'type', 'alias', 'opcional', 'readonly', 'objeto'],
        summary:
          '`interface` y `type` describen formas de datos. Para un objeto, cualquiera de los dos sirve. La diferencia aparece en uniones, extensiones y fusión de declaraciones.',
        sections: [
          {
            title: 'La forma de un apunte',
            paragraphs: [
              '`publicado?` significa que la propiedad puede faltar. `readonly` impide reasignar esa propiedad a través del tipo. No congela el objeto en runtime: solo avisa en compilación si intentas reasignarla.',
            ],
            code: code('typescript', [
              'interface Apunte {',
              '  id: string;',
              '  titulo: string;',
              '  etiquetas: readonly string[];',
              '  publicado?: boolean;',
              '}',
              '',
              "type Estado = 'borrador' | 'publicado';",
              '',
              'function abrir(apunte: Apunte, estado: Estado): string {',
              "  if (estado === 'borrador' || !apunte.publicado) {",
              '    return `${apunte.titulo} (borrador)`;',
              '  }',
              '',
              '  return apunte.titulo;',
              '}',
            ]),
          },
          {
            title: 'Cuándo usar cada uno',
            paragraphs: [
              'Usa `interface` para un objeto que otras interfaces van a extender con `extends`. Usa `type` para uniones, intersecciones, tuplas y alias de primitivos. En un mismo proyecto, elige una convención y no mezcles las dos para la misma clase de problema.',
              'Una `interface` con el mismo nombre se fusiona con otra del mismo nombre. Un `type` no: volver a declararlo es un error. Esa fusión es útil en tipos de librerías y sorprendente en el código de la app.',
            ],
          },
        ],
      },
      {
        slug: 'genericos',
        title: 'Genéricos',
        keywords: ['generics', 'genericos', 'T', 'reusable', 'parametro de tipo'],
        summary:
          'Un genérico es un parámetro de tipo. La función o el tipo no decide qué dato maneja: lo decide quien lo llama, y esa decisión se conserva en el resultado.',
        sections: [
          {
            title: 'Conservar el tipo de entrada',
            paragraphs: [
              'Sin genérico, `primero` tendría que devolver `unknown` o `any`, y el que llama perdería el tipo. Con `<T>`, si pasas `string[]` el resultado es `string | undefined`.',
            ],
            code: code('typescript', [
              'function primero<T>(items: readonly T[]): T | undefined {',
              '  return items[0];',
              '}',
              '',
              "const titulo = primero(['Hooks', 'JSX']);",
              'const cantidad = primero([3, 1, 4]);',
              '',
              'interface Respuesta<T> {',
              '  datos: T;',
              '  ok: boolean;',
              '}',
            ]),
          },
          {
            title: 'No lo uses de más',
            paragraphs: [
              'Si una función solo trabaja con `string`, no la hagas genérica. El genérico se justifica cuando el tipo de salida depende del tipo de entrada, o cuando una estructura (`Respuesta`, una lista, una caja) debe servir para más de un tipo sin perderlo.',
            ],
          },
        ],
      },
      {
        slug: 'uniones',
        title: 'Uniones y narrowing',
        keywords: ['union', 'narrowing', 'discriminada', 'switch', 'typeof', 'in'],
        summary:
          'Una unión dice que el valor es uno de varios tipos. Narrowing es el momento en que TypeScript descarta opciones porque ya comprobaste cuál es.',
        sections: [
          {
            title: 'Unión discriminada',
            paragraphs: [
              'Un campo compartido, aquí `estado`, parte la unión. Dentro de `case \'listo\'` el tipo ya tiene `apuntes`. Dentro de `case \'error\'` tiene `mensaje`. Pedir `apuntes` en el caso de error no compila.',
            ],
            code: code('typescript', [
              'type Carga =',
              "  | { estado: 'cargando' }",
              "  | { estado: 'listo'; apuntes: string[] }",
              "  | { estado: 'error'; mensaje: string };",
              '',
              'function texto(carga: Carga): string {',
              '  switch (carga.estado) {',
              "    case 'cargando':",
              "      return 'Buscando apuntes…';",
              "    case 'listo':",
              '      return `${carga.apuntes.length} apuntes`;',
              "    case 'error':",
              '      return carga.mensaje;',
              '  }',
              '}',
            ]),
          },
          {
            title: 'Otras guardas',
            paragraphs: [
              '`typeof valor === "string"` estrecha primitivos. `"titulo" in apunte` comprueba una propiedad. `Array.isArray` separa un array de un valor suelto. Después de la guarda, el editor ofrece los campos que de verdad existen.',
            ],
          },
        ],
      },
    ],
  },
  {
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
  },
  {
    id: 'ia',
    title: 'Inteligencia artificial',
    description: 'Modelos de lenguaje, prompts y cómo darles contexto antes de preguntar.',
    items: [
      {
        slug: 'modelos-de-lenguaje',
        title: 'Modelos de lenguaje',
        keywords: ['llm', 'token', 'contexto', 'chat', 'modelo', 'gpt'],
        summary:
          'Un modelo de lenguaje predice el siguiente token a partir del texto que ya vio. No consulta una base de datos de hechos y no recuerda tus chats anteriores salvo que ese texto vaya en el mensaje.',
        sections: [
          {
            title: 'Tokens y contexto',
            paragraphs: [
              'El modelo no lee letras sueltas. Parte el texto en tokens, trozos que a veces son una palabra y a veces un pedazo. La ventana de contexto es el máximo de tokens que entran en una sola llamada, sumando instrucciones, ejemplos y la respuesta que está generando.',
              'Si el dato no está en esa ventana ni en el entrenamiento, el modelo igual puede escribir algo convincente. Por eso una respuesta fluida no es una fuente verificada.',
            ],
            code: code('json', [
              '{',
              '  "messages": [',
              '    {',
              '      "role": "system",',
              '      "content": "Respondes en español y en pocas líneas."',
              '    },',
              '    {',
              '      "role": "user",',
              '      "content": "¿Qué es un hook en React?"',
              '    }',
              '  ]',
              '}',
            ]),
          },
          {
            title: 'Roles del mensaje',
            paragraphs: [
              '`system` fija el marco: idioma, tono, límites. `user` es la petición. `assistant` es un turno anterior del modelo, útil cuando reenvías la conversación. Muchas APIs esperan exactamente esta lista ordenada.',
            ],
          },
        ],
      },
      {
        slug: 'prompts',
        title: 'Prompts',
        keywords: ['prompt', 'instruccion', 'few-shot', 'formato', 'rol'],
        summary:
          'Un prompt es el texto de la tarea. Mejora cuando separas rol, contexto, pedido, formato y límites, en vez de dejarlo todo en una frase ambigua.',
        sections: [
          {
            title: 'Partes que conviene separar',
            paragraphs: [
              'El rol dice desde dónde responde. El contexto dice lo que ya es verdad para esta tarea. La tarea es un verbo concreto. El formato dice cómo debe verse la salida. La restricción corta lo que no quieres: APIs inventadas, pasos de más, otro idioma.',
            ],
            code: code('markdown', [
              '## Rol',
              '',
              'Editor técnico.',
              '',
              '## Contexto',
              '',
              'El lector ya programa en JavaScript.',
              '',
              '## Tarea',
              '',
              'Explica `useEffect` en un párrafo corto y un ejemplo mínimo.',
              '',
              '## Restricción',
              '',
              'No inventes APIs. Si falta un dato, dilo.',
            ]),
          },
          {
            title: 'Ejemplos',
            paragraphs: [
              'Un ejemplo de entrada y salida (few-shot) enseña el formato mejor que un adjetivo como "breve" o "profesional". Dos ejemplos consistentes suelen bastar. Si los ejemplos se contradicen, el modelo imita la contradicción.',
            ],
          },
        ],
      },
      {
        slug: 'embeddings',
        title: 'Embeddings',
        keywords: ['embedding', 'vector', 'similitud', 'coseno', 'busqueda semantica'],
        summary:
          'Un embedding convierte un texto en una lista de números. Textos parecidos quedan cerca en ese espacio, aunque no compartan las mismas palabras.',
        sections: [
          {
            title: 'Cercanía, no igualdad',
            paragraphs: [
              'La búsqueda de este sitio compara el texto que escribes con títulos y palabras clave. Un embedding haría otra cosa: "memoria del componente" podría acercarse a "estado" aunque la palabra no aparezca.',
              'La similitud del coseno vale 1 cuando los vectores apuntan igual, 0 cuando son ortogonales y valores negativos cuando apuntan en sentidos opuestos. No es una búsqueda de substring.',
            ],
            code: code('javascript', [
              'function similitud(a, b) {',
              '  let producto = 0;',
              '  let normaA = 0;',
              '  let normaB = 0;',
              '',
              '  for (let i = 0; i < a.length; i += 1) {',
              '    producto += a[i] * b[i];',
              '    normaA += a[i] ** 2;',
              '    normaB += b[i] ** 2;',
              '  }',
              '',
              '  return producto / (Math.sqrt(normaA) * Math.sqrt(normaB));',
              '}',
            ]),
          },
          {
            title: 'Para qué sirven aquí',
            paragraphs: [
              'Sirven para ordenar notas por cercanía a una pregunta, agrupar temas y detectar duplicados aproximados. No sustituyen un dato exacto: si necesitas el nombre de una función, una búsqueda literal sigue siendo la herramienta correcta.',
            ],
          },
        ],
      },
      {
        slug: 'rag',
        title: 'RAG',
        keywords: ['rag', 'retrieval', 'recuperacion', 'contexto', 'chunk', 'fuente'],
        summary:
          'RAG (retrieval-augmented generation) busca trozos relevantes en tus documentos y se los pasa al modelo junto con la pregunta. El modelo responde con ese contexto, no con la memoria sola.',
        sections: [
          {
            title: 'El recorrido',
            bullets: [
              'Partes los apuntes en trozos con un tamaño que quepa en la ventana de contexto.',
              'Calculas el embedding de cada trozo y lo guardas.',
              'Cuando llega una pregunta, calculas su embedding y te quedas con los trozos más cercanos.',
              'Armas el prompt con esos trozos y la pregunta, y le pides al modelo que se ciña a ese texto.',
            ],
            paragraphs: [
              'Si ningún trozo alcanza, el prompt tiene que permitirlo. Si no, el modelo rellena el hueco.',
            ],
            code: code('javascript', [
              'function construirPrompt(pregunta, apuntes) {',
              '  const contexto = apuntes',
              '    .map((apunte, index) => `[${index + 1}] ${apunte.titulo}\\n${apunte.texto}`)',
              '    .join("\\n\\n");',
              '',
              '  return [',
              "    'Responde solo con el contexto. Si no alcanza, dilo.',",
              '    contexto,',
              '    `Pregunta: ${pregunta}`,',
              "  ].join('\\n\\n');",
              '}',
            ]),
          },
          {
            title: 'Qué no resuelve',
            paragraphs: [
              'RAG no corrige un documento falso: si el trozo recuperado está mal, la respuesta hereda ese error. Tampoco decide solo qué fuente es mejor. La calidad depende de cómo partes el texto, de qué recuperas y de la instrucción de no salir de ese material.',
            ],
          },
        ],
      },
    ],
  },
];

// Quita tildes y pasa a minúsculas para que "módulo" coincida con "modulo".
// NFD separa la letra del acento; el replace borra esas marcas.
function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

// Arma la URL de un apunte. La usan el panel, el inicio y las flechas.
export function articlePath(categoryId, slug) {
  return `/docs/${categoryId}/${slug}`;
}

// Busca la pareja categoría + apunte. null si la URL no corresponde a nada del catálogo.
export function getDoc(categoryId, slug) {
  const category = catalog.find((item) => item.id === categoryId);
  const article = category?.items.find((item) => item.slug === slug);

  if (!category || !article) return null;

  return { category, article };
}

// Devuelve el apunte de antes y el de después, en el orden en que están escritos arriba.
// El último de una categoría tiene como siguiente el primero de la categoría que sigue.
// Si el slug no existe, los dos son null.
export function getNeighbors(categoryId, slug) {
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
export function filterCatalog(query) {
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
export function countArticles(categories) {
  return categories.reduce((total, category) => total + category.items.length, 0);
}
