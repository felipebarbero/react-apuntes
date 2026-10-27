import { code } from '../code.js';

// Categoría React. El formato de cada apunte está descrito en src/data/catalog.js.

export const react = {
  id: 'react',
  title: 'React',
  icon: '/imagenes/categorias-iconos/react-svgrepo-com.svg',
  description: 'Libreria de JavaScript para crear interfaces de usuario.',
  version: '19.1',
  items: [
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: INTRODUCCION ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'react-introduccion',
      title: 'Introducción',
      keywords: ['react', 'javascript', 'framework', 'frontend', 'ui', 'user interface'],
      summary: 'Introducción a React e instalación.',
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
              title: 'Caracteristicas principales',
              paragraphs: [
                '<b>Basado en componentes:</b> Divide la interfaz en bloques de código pequeños, independientes y reutilizables (como botones, menús o formularios) que gestionan su propio estado.',
                '<b>Actualización reactiva:</b> La interfaz está conectada directamente a los datos. Si los datos cambian, la vista se actualiza de forma automática en la pantalla sin necesidad de modificar el DOM manualmente.',
                '<b>Página que no se recarga sola:</b> Al cambiar datos, React vuelve a pintar la interfaz. El enrutamiento no viene incluido: lo aporta react-router o un framework como Next.js o Remix.',
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
              text: 'Los componentes son la base de React. Son piezas de UI que se pueden reutilizar y componer. Si cambian sus props o su estado, React vuelve a pintar ese componente. El navegador no recarga la página.'
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
              text: 'Vite es la herramienta de desarrollo y de build que arma el proyecto. En desarrollo sirve los módulos al momento; para producción genera el paquete.'
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
              text: 'Vite no imprime "Server is running". Muestra una línea `Local: http://localhost:5173/`. Si esa dirección abre la app, el proyecto arrancó. El puerto puede cambiar si 5173 ya está ocupado.'
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
                      "react": "^19.1.1", // React 19.1, la versión de estos apuntes
                      "react-dom": "^19.1.1" // React para el DOM del navegador
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
              text: 'Un componente es un archivo `.jsx`. Cómo se importa depende del export: sin llaves si es `export default`, con llaves si es `export const`.'
            },
            {
              type: 'code',
              ...code('jsx', [
                'import PrimerComponente from "./PrimerComponente.jsx"; // export default',
                'import { PrimerComponente } from "./PrimerComponente.jsx"; // export const'
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
                `export const PrimerComponente = () => {
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
              text: 'Para llamar un componente, hay que importarlo. `export default` se importa sin llaves. `export const` se importa con llaves, como aquí:'
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
              text: 'Un <b>fragment</b> agrupa varios elementos sin añadir un nodo al DOM. Sirve para devolver varios hermanos cuando JSX exige un solo padre.'
            },
            {
              type: 'p',
              text: 'La forma corta es `<>` y `</>`. Si necesitas una `key`, importa `Fragment` desde `react` y usa `<Fragment>`. No existe la etiqueta HTML `<fragment>`.'
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
              text: 'Un `<div>` también agrupa, pero deja un nodo real en el DOM. Eso estorba en una tabla, en flex o en grid, y cambia el HTML. No es, por sí mismo, un problema de SEO.'
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
                '`true`, `false`, `null` y `undefined` no pintan nada.',
                'Un objeto o un `Date` puestos directo entre llaves hacen fallar el render. Hay que mostrar una propiedad (`objeto.nombre`) o pasar la fecha a texto.',
                'Una función hay que llamarla. Si devuelve un número o un elemento, eso sí se puede pintar.'
              ]
            },
            {
              type: 'alert',
              variant: 'info',
              paragraphs: [
                'Una constante que no usa props ni estado puede vivir fuera del componente. Si depende de props o de estado, tiene que declararse dentro.',
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
                        <h1>{boolean}</h1> {/* true, false, null y undefined no pintan nada */}
                        <h1>{funcion()}</h1> {/* 2 */}
                        <h1>{objeto.nombre}</h1> {/* 'Curso de React'. {objeto} lanzaría un error */}
                        <h1>{fecha.toLocaleDateString()}</h1> {/* texto. {fecha} también lanzaría un error */}
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
                'En el objeto de `style={{ }}`, las propiedades van en camelCase. En un archivo `.css` se escriben con guion.',
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
              text: 'Sirven cuando un valor depende del estado, por ejemplo un color. No cubren selectores, pseudo-elementos ni media queries. La propiedad `animation` sí se puede poner, pero los `@keyframes` tienen que estar definidos en una hoja CSS.'
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
                            {/* styles.titulo es la clase "titulo" de PrimerComponente.module.css */}
                            <h1 className={styles.titulo}>Hola Mundo!</h1>
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
                `/* Archivo PrimerComponente.module.css */
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
                'Si va entre llaves (<b>{variable}</b>), es una expresión de JavaScript. Puede ser un string, un número, un booleano, un objeto, un array o una función.',
              ]
            },
          ]
        },

        // :::::::::::::::: VALORES POR DEFECTO ::::::::::::::::
        {
          title: 'Valores por defecto',
          content: [
            {
              type: 'p',
              text: 'En React 19 los valores por defecto van en los <b>parámetros de la función</b>. `defaultProps` en un componente de función ya no se aplica. En componentes de clase, `defaultProps` sigue existiendo.'
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
              text: 'Si la función necesita argumentos propios, no pongas `onClick={miFuncion(1)}`: eso la ejecuta al renderizar. Envuelve la llamada y usa "arrow function": `onClick={() => miFuncion(1, 2)}`.'
            },
            {
              type: 'code',
              ...code('tsx', [
                `export const ContadorApp = () => {
                      const miFuncion = (argumento1, argumento2) => {
                          console.log(argumento1, argumento2)
                      }
                      return (
                        <>
                          <h1>Contador App</h1>
                          <button onClick={() => miFuncion(1, 2)}>
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
                'Los de React: <b>useState</b>, <b>useEffect</b>, <b>useContext</b>, <b>use</b>, y el resto de la referencia.',
                'Los custom hooks, que escribes tú y cuyo nombre empieza por `use`. Una librería también puede publicar los suyos.',
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
              text: 'No se modifica el objeto o el array que ya está en el estado. Se reemplaza con un valor nuevo usando la función `set`. React compara ese valor y vuelve a pintar el componente.'
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
                            // contador sigue siendo el valor de este render.
                            // El número nuevo aparece en el siguiente render, no en este console.log.
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
              text: 'También se puede usar <b>&&</b> para mostrar algo solo si la condición es verdadera. Si la condición es `0`, React pinta el número 0. Para un sí o no, conviene un booleano.'
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
              text: 'El metodo <b>map</b> (Array.map) es una forma de iterar sobre un array y <b>devolver un nuevo array con los valores modificados</b>.'
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
              text: 'Cada hermano de la lista necesita una <b>key</b> estable y única. Usa el id del dato. El índice del array solo sirve si la lista no se reordena, no se filtra y no se insertan elementos en el medio.'
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
              text: 'Un formulario sigue siendo un `<form>`. El patrón de abajo es un input controlado: el valor vive en el estado con `useState` y el envío se escucha con `onSubmit`. En React 19.1 también puedes pasar una función a la prop `action` del form. React evita la recarga y esa función recibe un `FormData`.'
            },
            {
              type: 'p',
              text: 'En el ejemplo controlado, el envío se escucha con <b>onSubmit</b>.'
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
              text: '<b>useEffect</b> es un Hook que sincroniza el componente con algo de fuera de React: una petición, una suscripción o el título de la pestaña. React lo ejecuta después de pintar la pantalla.'
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
                'Si el <b>arreglo está vacío</b>, el efecto corre al montar el componente. En desarrollo, con StrictMode, React lo ejecuta, lo limpia y lo vuelve a ejecutar para detectar limpiezas que faltan. En producción, con el arreglo vacío, corre una vez por montaje.',
                'Si el arreglo <b>tiene valores</b>, el efecto vuelve a correr cuando cambia alguno de esos valores (estado, props u otro dato usado dentro).',
                'Si <b>omites el arreglo</b>, el efecto corre después de cada render.',
              ]
            },
            {
              type: 'p',
              text: '<b>Ejemplo de uso de useEffect:</b>'
            },
            {
              type: 'code',
              ...code('jsx', [
                `import { useState, useEffect } from 'react'

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

                      // Arreglo vacío: corre al montar. En desarrollo StrictMode lo repite una vez.
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
              text: '<b>fetch</b> es una función <b>asíncrona</b> del navegador, no de React. Arranca la petición en el momento y devuelve una <b>promesa</b> con la respuesta.'
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
              text: 'Para leer la respuesta puedes usar `await` dentro de una función `async`, o encadenar `.then()`. No hace falta que el componente sea `async`: en React 19 un componente de cliente sigue siendo una función normal, y la petición vive en un efecto o en un manejador de evento.'
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
              text: 'Puede devolver un array, como hace `useState`, o un objeto. No tiene que ser un objeto. Lo que sí exige React es llamarlo en el nivel superior del componente, no dentro de un `if`, un bucle o una función anidada.'
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

                      // Arreglo vacío: corre al montar. En desarrollo StrictMode lo repite una vez.
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

                      // target es el elemento del input (event.target), no el evento completo.
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
              text: 'El hook <b>useRef</b> guarda un valor que sobrevive a los renders y cuyo cambio no vuelve a pintar el componente. El uso más habitual es apuntar a un nodo del DOM con la prop `ref`.'
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

                      // useEffect para enfocar el input al montar el componente. El arreglo vacío no lo repite en cada render.
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
              text: 'El producto de la lista se calcula con <b>useMemo</b> en el cuerpo del componente. El hook no puede ir dentro de otra función.'
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

                      // useMemo va en el nivel superior del componente, no dentro de otra función.
                      // Recalcula el producto solo cuando cambia listaNumeros.
                      const calculo = useMemo(() => {
                          return listaNumeros.reduce((total, numero) => total * numero)
                      }, [listaNumeros])

                      const agregarNumero = () => {
                          // Agrego un nuevo numero a la lista (por ejemplo, el ultimo numero + 1)
                          // Uso el spread operator para copiar el estado anterior y agregar el nuevo numero
                          setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
                      }

                      return (
                          <>
                          <h1>Calculo:</h1>
                          <p>{ calculo }</p>
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
                `import { memo } from 'react'

                  // memo evita que este hijo se vuelva a pintar si la prop "incrementar" es la misma función.
                  export const Incrementar = memo(({ incrementar }) => {
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
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: USEREDUCER (HOOK) :::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'react-usereducer',
      title: 'useReducer (Hook)',
      keywords: ['hooks', 'hooks personalizados', 'hooks personalizados', 'hooks personalizados', 'usereducer'],
      //summary: '',
      sections: [
        // :::::::::::::::: USO DE USEREDUCER (useReducer) ::::::::::::::::
        {
          title: 'Uso de useReducer (Hook nativo de React)',
          content: [
            {
              type: 'p',
              text: 'El hook <b>useReducer</b> es un hook que se utiliza para manejar el <b>estado de un componente</b>. Es una alternativa a useState para manejar el estado de un componente.'
            },
            {
              type: 'p',
              text: 'El hook useReducer recibe un <b>reducer</b> y un <b>estado inicial</b>, y devuelve un <b>estado</b> y una <b>funcion para actualizar el estado</b>.'
            },
            {
              type: 'alert',
              variant: 'secondary',
              title: 'Reducer',
              paragraphs: [
                'Un <b>reducer</b> es un <b>patrón</b> que ayuda a gestionar la logica de estado compleja en aplicaciones React. Como el nombre sugiere, reduce la complejidad de la gestion de estado <b>centralizando la logica de actualizacion de estado en una sola funcion</b>.',
                'Es una funcion que recibe un <b>estado actual</b> y una <b>accion a realizar</b>, y devuelve un <b>nuevo estado</b>. El estado inicial es el estado inicial del componente.',
                '<b>Porque es importante?</b> A medida que tu aplicación crece, la gestión de estado con múltiples hooks <b>useState</b> puede volverse incómoda y propensa a errores',
              ]
            },
            {
              type: 'p',
              text: '<b>Ejemplo simple de un reducer:</b>'
            },
            {
              type: 'code',
              ...code('jsx', [
                `// Defino el estado inicial de las tareas
                  const estadoInicial = [{
                      id: 1,
                      tarea: 'Explicar Reducers',
                      completada: false
                  }]
                      
                  // Defino el reducer
                  // El reducer recibe el estado actual y la accion a realizar, y devuelve un nuevo estado.
                  const tareaReducer = (state = estadoInicial, action = {}) => {
                      // Verifico el tipo de accion a realizar
                      switch(action.type) {
                          case '[TAREAS] Agregar Tarea':
                              return [...state, action.payload]
                          case '[TAREAS] Editar Tarea':
                              return state.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
                          case '[TAREAS] Eliminar Tarea':
                              return state.filter(tarea => tarea.id !== action.payload)
                          default:
                              return state
                      }
                  }`
              ])
            },
          ]
        },
        // :::::::::::::::: EJEMPLO DE USEREDUCER ::::::::::::::::
        {
          title: 'Ejemplo de useReducer',
          content: [
            {
              type: 'code',
              ...code('jsx', [
                `import { useForm } from "./hooks/useForm"
                  import { useReducer } from "react"

                  // Defino el estado inicial de las tareas
                  const estadoInicial = [{
                      id: new Date().getTime(),
                      tarea: 'Explicar Reducers',
                      completada: false
                  }]

                  // Defino el reducer
                  // El reducer recibe el estado actual y la accion a realizar, y devuelve un nuevo estado.
                  // En este caso, el estado es un arreglo de objetos (tareas), por lo que el reducer debe devolver un nuevo arreglo de objetos.
                  const tareaReducer = (state = estadoInicial, action = {}) => {
                      // Verifico el tipo de accion a realizar
                      switch(action.type) {
                          case '[TAREAS] Agregar Tarea':
                              return [...state, action.payload]
                          case '[TAREAS] Completar Tarea':
                              // Mapear el estado actual y cambiar el estado de la tarea a completada y viceversa
                              return state.map(tarea => {
                                  if(tarea.id === action.payload) {
                                      return {
                                          ...tarea,
                                          completada: !tarea.completada // Cambio el estado de la tarea a completada y viceversa
                                      }
                                  }
                                  return tarea
                              })
                          case '[TAREAS] Eliminar Tarea':
                              // Filtro las tareas que no coinciden con el id de la tarea a eliminar
                              return state.filter(tarea => tarea.id !== action.payload)
                          default:
                              return state
                      }
                  }

                  export const ListaTareas = () => {

                      // Uso el useReducer para manejar el estado de las tareas
                      const [tareasState, dispatch] = useReducer(tareaReducer, estadoInicial)

                      // Estado para el formulario
                      const {tarea, formState, onInputChange} = useForm({tarea: ''})

                      // Funcion para agregar una nueva tarea
                      const agregarTarea = (event) => {
                          // Evito que el formulario se recargue
                          event.preventDefault()

                          // Evito agregar tareas con nombre vacio
                          if(formState.tarea.trim() === '') return

                          // Creo la nueva tarea
                          const nuevaTarea = {
                              id: new Date().getTime(),
                              tarea: formState.tarea,
                              completada: false
                          }
                          // Creo la accion a realizar
                          const action = {
                              type: '[TAREAS] Agregar Tarea',
                              payload: nuevaTarea
                          }
                          // Ejecuto la accion
                          dispatch(action)
                      }

                      // Funcion para completar una tarea
                      const completarTarea = ({id}) => {
                          const action = {
                              type: '[TAREAS] Completar Tarea',
                              payload: id
                          }
                          dispatch(action)
                      }

                      // Funcion para eliminar una tarea
                      const eliminarTarea = ({id}) => {
                          const action = {
                              type: '[TAREAS] Eliminar Tarea',
                              payload: id
                          }
                          dispatch(action)
                      }

                      return (
                          <>
                              <form onSubmit={agregarTarea}>
                                  <div className="mb-3">
                                      <label htmlFor="tarea" className="form-label">Ingresa nueva tarea</label>
                                      <input 
                                      type="text" 
                                      className="form-control" 
                                      id="tarea" 
                                      name="tarea" 
                                      placeholder="Ingrese la tarea" 
                                      value={tarea}
                                      onChange={onInputChange}
                                      />
                                  </div>
                                  <button type="submit" className="btn btn-primary">Agregar</button>
                              </form>

                              <br />

                              <ul className="list-group">
                                  {tareasState.map((tarea) => (
                                      <li key={tarea.id} className="list-group-item d-flex justify-content-between">
                                          <span>{tarea.tarea} {tarea.completada ? <span> ✅</span> : <span> ⛔</span>}</span>
                                          <span>
                                              <button className="btn btn-success mx-2" onClick={() => completarTarea(tarea)}>Completar</button>
                                              <button className="btn btn-danger mx-2" onClick={() => eliminarTarea(tarea)}>Eliminar</button>
                                          </span>
                                      </li>
                                  ))}
                              </ul>
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
    // :::::::::::::::::::::::::::: USECONTEXT (HOOK) :::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'react-usecontext',
      title: 'useContext (Hook)',
      keywords: ['hooks', 'hooks personalizados', 'hooks personalizados', 'hooks personalizados', 'usecontext'],
      //summary: '',
      sections: [
        // :::::::::::::::: USO DE USECONTEXT (useContext) ::::::::::::::::
        {
          title: 'Uso de useContext (Hook nativo de React)',
          content: [
            {
              type: 'p',
              text: 'El hook <b>useContext</b> lee un contexto y se suscribe a él desde el componente que lo llama. Si un ancestro provee un valor, el componente recibe ese valor.'
            },
            {
              type: 'p',
              text: 'Nos permite <b>compartir datos entre componentes</b> sin tener que pasar las props manualmente en cada nivel de la jerarquía de componentes.'
            },
            {
              type: 'p',
              text: 'Este enfoque es especialmente útil cuando tenemos valores que necesitan ser accesibles por muchos componentes en diferentes niveles de la aplicación, como el tema de la interfaz, el idioma de la aplicación o la autenticación del usuario.'
            },
            {
              type: 'alert',
              variant: 'secondary',
              title: 'Contexto',
              paragraphs: [
                'El <b>contexto</b> en React es como una "caja" que almacena valores globales para nuestra aplicación.',
                'Estos valores pueden ser accedidos por cualquier componente que esté <b>"suscrito"</b> a este contexto',
                'Sin embargo, a diferencia de otras técnicas como pasar props, el contexto permite que cualquier componente, sin importar lo profundo que esté en el árbol de componentes, acceda a estos valores sin la necesidad de que sus padres los pasen manualmente.'
              ]
            },
          ]
        },
        // :::::::::::::::: EJEMPLO DE USECONTEXT ::::::::::::::::
        {
          title: 'Ejemplo de useContext',
          content: [
            {
              type: 'p',
              text: 'Primero definimos el contexto con un valor por defecto, y creamos el componente padre que provee un valor diferente al contexto.'
            },
            {
              type: 'code',
              ...code('jsx', [
                `import { createContext } from 'react';
                  import { ComponenteHijo } from './ComponenteHijo';

                  // Creamos el contexto con un valor por defecto y lo exportamos
                  export const TemaContexto = createContext('claro');

                  export const ComponentePadre = () => {
                    // Proveemos un valor diferente al contexto
                    return (
                      <TemaContexto value="oscuro">
                        <ComponenteHijo />
                      </TemaContexto>
                    );
                  }`
              ])
            },
            {
              type: 'p',
              text: 'Luego, en el componente hijo, leemos el valor del contexto usando useContext.'
            },
            {
              type: 'code',
              ...code('jsx', [
                `import { useContext } from 'react';
                  import { TemaContexto } from './ComponentePadre';

                  export const ComponenteHijo = () => {
                    // Accedemos al valor del contexto usando useContext
                    const tema = useContext(TemaContexto);

                    // Usamos el valor del contexto en el componente
                    return (
                      <div style={{ background: tema === 'claro' ? '#fff' : '#333', color: tema === 'claro' ? '#000' : '#fff' }}>
                        {/* Mostramos el tema actual */}
                        El tema actual es {tema}
                      </div>
                    );
                  };`
              ])
            },
            {
              type: 'p',
              text: '<b>Explicacion del ejemplo:</b>'
            },
            {
              type: 'p',
              text: '<b>1. Definición del Contexto:</b> Usamos <b>createContext</b> para crear un nuevo contexto llamado "TemaContexto". El valor inicial es "claro", lo que significa que si un componente no tiene un proveedor de contexto, utilizará este valor por defecto.'
            },
            {
              type: 'p',
              text: '<b>2. Proveer el Contexto:</b> En React 19 el propio contexto es el proveedor: `<TemaContexto value="oscuro">`. `<TemaContexto.Provider>` sigue funcionando, pero la documentación de 19.1 usa la forma nueva. Los hijos de ese componente leen "oscuro".'
            },
            {
              type: 'p',
              text: '<b>3. Consumir el Contexto:</b> En <b>ComponenteHijo</b>, usamos <b>useContext(TemaContexto)</b> para acceder al valor del tema. Dependiendo del valor del tema, el fondo y el color del texto del <b>div</b> cambiarán.'
            },
            {
              type: 'alert',
              variant: 'secondary',
              title: 'Beneficios de usar useContext',
              paragraphs: [
                '<b>Simplicidad:</b> useContext elimina la necesidad de pasar props manualmente a través de múltiples niveles de componentes.',
                '<b>Mantenimiento:</b> Con useContext, es más fácil mantener el código, ya que no necesitas modificar múltiples componentes solo para pasar una prop.',
                '<b>Desempeño:</b> Aunque useContext es potente, debes usarlo con cuidado. Cuando el valor del contexto cambia, todos los componentes que consumen ese contexto se vuelven a renderizar, lo que podría impactar el rendimiento si no se gestiona adecuadamente.',
              ]
            },
          ]
        },
      ]
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: BROWSERROUTER Y RUTAS :::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'react-browserrouter-y-rutas',
      title: 'BrowserRouter y Rutas',
      keywords: ['browserrouter', 'rutas', 'react-router-dom', 'routes', 'router', 'router-dom'],
      //summary: '',
      sections: [
        // :::::::::::::::: USO DE BROWSERROUTER Y RUTAS ::::::::::::::::
        {
          title: 'Uso de BrowserRouter y Rutas',
          content: [
            {
              type: 'p',
              text: 'El <b>enrutamiento DOM</b> es una forma de navegar entre las diferentes rutas de una aplicación.'
            },
            {
              type: 'p',
              text: 'Para ello, se utiliza el componente `<BrowserRouter>` que se encuentra en la libreria <b>react-router-dom</b>.'
            },
            {
              type: 'p',
              text: 'Para instalar la libreria, se debe ejecutar el siguiente comando:'
            },
            {
              type: 'code',
              ...code('terminal', [
                `npm install react-router-dom`
              ])
            },
            {
              type: 'p',
              text: 'Luego, se debe importar el componente `<BrowserRouter>` en el archivo principal de la aplicación.'
            },
            {
              type: 'code',
              ...code('jsx', [
                `import { BrowserRouter } from 'react-router-dom';`
              ])
            },
            {
              type: 'p',
              text: '<b><BrowserRouter></b> es un componente que se encarga de manejar el historial de navegación del navegador, el cual recibe como hijo un componente <b><Routes></b> que se encarga de manejar las diferentes rutas de la aplicación.'
            },
            {
              type: 'p',
              text: 'Luego, <b><Routes></b> recibe como hijo un componente <b><Route></b> para cada ruta de la aplicación.'
            },
            {
              type: 'p',
              text: 'Usando esto es posible crear una aplicaciones de una sola pagina (SPA) con React.'
            },
          ]
        },
        // :::::::::::::::: EJEMPLO DE BROWSERROUTER Y RUTAS ::::::::::::::::
        {
          title: 'Ejemplo de BrowserRouter y Rutas',
          content: [
            {
              type: 'p',
              text: '<b>MAIN (main.jsx)</b>'
            },
            {
              type: 'code',
              ...code('jsx', [
                `// Primero importamos el componente BrowserRouter desde react-router-dom.
                  // BrowserRouter envuelve la app para que Link, Routes y useNavigate conozcan la URL.
                  // StrictMode no es un requisito del router: es el modo estricto de React.
                  // El componente App.jsx es el componente principal de la aplicación.
                  import { StrictMode } from 'react'
                  import { createRoot } from 'react-dom/client'
                  import { App } from './App.jsx'
                  import './styles.css'; // Archivo CSS importado
                  import { BrowserRouter } from 'react-router-dom'

                  createRoot(document.getElementById('root')).render(
                    <StrictMode>
                      <BrowserRouter>
                        <App />
                      </BrowserRouter>
                    </StrictMode>
                  )`
              ])
            },
            {
              type: 'p',
              text: '<b>APP (App.jsx)</b>'
            },
            {
              type: 'code',
              ...code('jsx', [
                `// Routes elige la ruta. Route declara una. Navigate redirige si ninguna coincide.
                  import { Routes, Route, Navigate } from 'react-router-dom'
                  import { Navbar } from './components/Navbar'
                  import { Home } from './routes/Home'
                  import { About } from './routes/About'
                  import { Contact } from './routes/Contact'

                  export const App = () => {
                    return (
                      <>
                      <Navbar />
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="*" element={ <Navigate to="/" /> } />
                      </Routes>
                      </>
                    )
                  }`
              ])
            },
            {
              type: 'p',
              text: '<b>NAVBAR (components/Navbar.jsx)</b>'
            },
            {
              type: 'code',
              ...code('jsx', [
                `// Primero importamos el componente Link y NavLink desde react-router-dom.
                  // El componente Link se utiliza para crear un enlace a una ruta.
                  // El componente NavLink se utiliza para crear un enlace a una ruta, y se puede usar para marcar la ruta activa.
                  import { Link, NavLink } from 'react-router-dom'

                  export const Navbar = () => {
                    return (
                      <>
                      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                          <div className="container-fluid">
                              <Link className="navbar-brand" to="/">Aplicación de Enrutamiento</Link>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                  <ul className="navbar-nav">
                                      <li className="nav-item">
                                          <NavLink className="nav-link active" to="/">Home</NavLink>
                                      </li>
                                      <li className="nav-item">
                                          <NavLink className="nav-link" to="/about">About</NavLink>
                                      </li>
                                      <li className="nav-item">
                                          <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </nav>  
                      </>
                    )
                  }`
              ])
            },
          ]
        },
      ]
    },
  ],
}
