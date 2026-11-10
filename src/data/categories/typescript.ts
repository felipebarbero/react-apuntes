import { code } from '../code.ts';

// Categoría TypeScript. El formato de cada apunte está descrito en src/data/catalog.js.

export const typescript = {
  id: 'typescript',
  title: 'TypeScript',
  icon: '/imagenes/categorias-iconos/typescript-official-svgrepo-com.svg',
  description: 'Lenguaje de programación que agrega tipos a JavaScript.',
  version: '7.0',
  items: [
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: INTRODUCCION ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-introduccion',
      title: 'Introducción',
      keywords: ['TypeScript', 'javascript', 'tipos', 'tipado', 'tipado estatico', 'tipado dinamico'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES TYPESCRIPT? ::::::::::::::::
        {
          title: 'Que es TypeScript?',
          content: [
            { 
              type: 'p', 
              text: '<b>Typescript</b> es un lenguaje de programación opensource, creado por Microsoft en 2012. Su objetivo principal es agregar <b>tipado estático a JavaScript</b>, en variables, objetos, funciones, etc.' 
            },
            { 
              type: 'p', 
              text: 'Esto es útil ya que permite <b>detectar errores en el codigo</b> en <b>tiempo de compilacion</b>, además de tener un <b>código mas legible y mantenible</b>.' 
            },
            {
              type: 'alert',
              variant: 'secondary',
              title: 'Tipado estatico VS Tipado dinamico',
              paragraphs: [
                'El <b>tipado estático</b> es cuando el tipo de una variable se define en tiempo de compilación, mientras que el <b>tipado dinámico</b> es cuando el tipo de una variable se define en tiempo de ejecución.',
                'El <b>tipado estático</b> es más seguro y permite detectar errores en el código en tiempo de compilación, mientras que el <b>tipado dinámico</b> es menos seguro y permite detectar errores en el código en tiempo de ejecución.',
                '<b>Ejemplos de tipado estático:</b> TypeScript, Java, C#, etc. (Ej: `const nombre: string = "Juan";`)',
                '<b>Ejemplos de tipado dinámico:</b> JavaScript, Python, Ruby, etc. (Ej: `const nombre = "Juan";`)',
              ]
            },
            {
              type: 'alert',
              variant: 'warning',
              title: 'Importante: Debes saber Javascript',
              paragraphs: [
                'TypeScript es un superconjunto de <b>JavaScript</b>, por lo que todo lo que sepas de JavaScript, tambien sabras de TypeScript.',
                'Sabiendo Javascript ya sabes el 90% de TypeScript, y solo necesitas aprender los conceptos adicionales que TypeScript tiene sobre JavaScript.',
              ]
            },
          ],
        },
        // :::::::::::::::: DONDE USAR TYPESCRIPT? ::::::::::::::::
        {
          title: 'Donde usar TypeScript?',
          content: [
            { 
              type: 'p', 
              text: 'Typescript sirve como <b>capa de validación de datos</b> tanto en el <b>frontend</b> como en el <b>backend</b>, validando los datos antes de que lleguen a la base de datos o a la capa de negocio.' 
            },
            { 
              type: 'p', 
              text: 'A continuación puedes ver un ejemplo de como <b>Typescript</b> se utiliza en distintas herramientas de desarrollo para la validación de datos.' 
            },
            {
              type: 'image',
              src: '/imagenes/typescript/typescript_que-esta-pasando-con-typescript.jpg',
              alt: 'Que esta pasando con TypeScript',
            },

          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: INSTALACION ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-instalacion',
      title: 'Instalación',
      keywords: ['typescript', 'javascript', 'instalacion', 'compilacion', 'tipado', 'tipado estatico'],
      summary: '',
      sections: [
        // :::::::::::::::: INSTALAR NODE.JS Y NPM ::::::::::::::::
        {
          title: 'NODE.JS Y NPM',
          content: [
            {
              type: 'p',
              text: 'Para instalar TypeScript, primero debemos instalar <b>Node.js</b> y <b>npm</b>'
            },
            {
              type: 'alert',
              variant: 'info',
              title: '¿Para qué necesito Node.js?',
              paragraphs: [
                'TypeScript no necesita estrictamente <b>Node.js</b> ni <b>npm</b> para funcionar en producción, pero sí se utilizan durante el desarrollo para procesar, empaquetar y gestionar las herramientas de tu proyecto',
                'npm es el gestor de paquetes de Node.js. y lo usaremos para instalar TypeScript.',
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
        // :::::::::::::::: INSTALAR TYPESCRIPT ::::::::::::::::
        {
          title: 'Instalar TypeScript',
          content: [
            {
              type: 'p',
              text: 'Para instalar TypeScript, podemos usar <b>npm</b> (gestor de paquetes de Node.js).'
            },
            {
              type: 'p',
              text: 'Simplemente posicionate en el proyecto donde instalaste nodejs y ejecuta el siguiente comando en la terminal:'
            },
            {
              type: 'code',
              ...code('terminal', [
                'npm install typescript --save-dev'
              ])
            },
            {
              type: 'p',
              text: 'Esto instalará TypeScript <b>en el proyecto</b>.'
            },
            {
              type: 'p',
              text: 'Tambien puedes usar el siguiente comando para instalar Typescript <b>de manera global</b>:'
            },
            {
              type: 'code',
              ...code('terminal', [
                'npm install -g typescript'
              ])
            },
            {
              type: 'p',
              text: 'Finalmente, puedes verificar que la instalacion fue exitosa ejecutando el siguiente comando en la terminal:'
            },
            {
              type: 'code',
              ...code('terminal', [
                'tsc -v'
              ])
            },
            {
              type: 'p',
              text: 'Si se muestra la <b>version de TypeScript</b>, la instalacion fue exitosa.'
            },
          ],
        },
        // :::::::::::::::: INSTALAR TYPESCRIPT EN UN PROYECTO REACT ::::::::::::::::
        {
          title: 'Instalar TypeScript en React',
          content: [
            {
              type: 'p',
              text: 'Si ya tenemos un proyecto <b>React</b>, podemos instalar TypeScript de la misma manera que en un proyecto normal, pero a esto hay que agregar las <b>dependencias adicionales de React</b>.'
            },
            {
              type: 'p',
              text: 'Simplemente posicionate en la <b>raiz del proyecto React</b> y ejecuta el siguiente comando en la terminal:'
            },
            {
              type: 'code',
              ...code('terminal', [
                'npm install --save-dev typescript @types/react @types/react-dom'
              ])
            },
            {
              type: 'p',
              text: 'Esto instalará <b>TypeScript</b> en el proyecto <b>React</b>, incluyendo las <b>definiciones de tipo de React</b>, que le enseñan a Typescript qué es un componente, un useState o un evento de React.'
            },
            {
              type: 'alert',
              variant: 'warning',
              paragraphs: [
                'Posterior a esto deberás crear el archivo de configuracion <b>tsconfig.json</b> en la raiz del proyecto, como se explica en la sección de <b>Configuración</b>, y cambiar la extensión de los archivos a `.tsx` según corresponda.',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: ARCHIVOS TS/TSX ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-archivos-ts',
      title: 'Archivos TS/TSX',
      keywords: ['typescript', 'javascript', 'archivos', 'compilacion', 'tipado', 'tipado estatico'],
      summary: '',
      sections: [
        // :::::::::::::::: ARCHIVOS TS ::::::::::::::::
        {
          title: 'Archivos TS',
          content: [
            {
              type: 'p',
              text: 'En <b>TypeScript</b>, los archivos tienen la extension `.ts` (TypeScript puro).'
            },
            {
              type: 'p',
              text: 'Como toda la logica de TypeScript se basa en <b>archivos TS</b>, pero lo que se ejecuta en el navegador es <b>JavaScript</b>, es necesario <b>compilar los archivos TS a JavaScript</b>. '
            },
            {
              type: 'p',
              text: 'Supongamos de ejemplo que tenemos un archivo <b>`index.ts`</b> que tiene lo siguiente:'
            },
            {
              type: 'code',
              ...code('ts', [
                `let mensaje: string = "Hola mundo!";
                // mensaje = 123; // Si intento reasignar el valor a un numero, me dara error.
                mensaje = "Variable reasignada!"; // Esto no dara error, ya que el nuevo dato es de tipo string`
              ])
            },

            {
              type: 'p',
              text: 'Entonces, si queremos utilizar este archivo en un proyecto debemos <b>compilarlo a JavaScript</b>. Para hacer esto, podemos ejecutar el siguiente comando en la terminal (en la ubicacion del archivo TS):'
            },

            {
              type: 'code',
              ...code('terminal', [
                'tsc index.ts'
              ])
            },
            {
              type: 'p',
              text: 'Esto compilará (transpilará) el archivo `index.ts` a `index.js`, y se guardara en la misma ubicación (ahora tendremos ambos archivos TS y JS).'
            },
            {
              type: 'p',
              text: 'Ahora, si vemos el archivo `index.js`, veremos que se ha transpilado a <b>JavaScript</b>, y ya podemos utilizarlo en nuestro proyecto.'
            },
            {
              type: 'code',
              ...code('js', [
                `var mensaje = "Hola mundo!";
                mensaje = "Variable reasignada!";`
              ])
            },
          ],
        },
        // :::::::::::::::: ARCHIVOS TSX ::::::::::::::::
        {
          title: 'Archivos TSX (React)',
          content: [
            {
              type: 'p',
              text: 'En <b>TypeScript</b>, los archivos con extension `.tsx` son archivos de <b>React</b> (TypeScript con JSX).'
            },
            {
              type: 'p',
              text: 'Esta extension es necesaria si el archivo es un <b>componente de React</b> y vas a devolver un <b>JSX (HTML en JavaScript)</b>, en caso contrario, se puede usar el archivo con extension `.ts` sin problemas.'
            },
            {
              type: 'code',
              ...code('tsx', [
                `const MiComponente = () => {
                  return (
                    <div>
                      <h1>Hola mundo!</h1>
                    </div>
                  );
                };
                export default MiComponente;`
              ])
            },
            {
              type: 'alert',
              variant: 'warning',
              paragraphs: [
                'Recuerda que si en <b>React</b> tenias archivos `.jsx`, deberás cambiar la extension a `.tsx`, para que <b>Typescript</b> pueda entenderlos como <b>componentes de React</b>.',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: CONFIGURACION ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-configuracion',
      title: 'Configuración',
      keywords: ['typescript', 'javascript', 'configuracion', 'compilacion', 'tipado', 'tipado estatico'],
      summary: '',
      sections: [
        // :::::::::::::::: CONFIGURACION ::::::::::::::::
        {
          title: 'Configuración del Compilador',
          content: [
            {
              type: 'p',
              text: 'Como vimos en la sección anterior, para utilizar TypeScript en un proyecto primero debemos <b>compilar los archivos TS a JavaScript</b>. Pero tambien podemos configurar el compilador para que se comporte de manera diferente.'
            },
            {
              type: 'p',
              text: 'Para <b>modificar el comportamiento del compilador</b>, podemos crear un archivo de configuración llamado <b>`tsconfig.json`</b> en la raiz del proyecto, el cual contiene las configuraciones del compilador.'
            },
            {
              type: 'p',
              text: 'Podemos generarlo de forma automatica ejecutando el siguiente <b>comando en la terminal</b>:'
            },
            {
              type: 'code',
              ...code('terminal', [
                'tsc -init'
              ])
            },
            {
              type: 'p',
              text: 'Al hacer esto, aparecera un archivo `tsconfig.json` en la raiz del proyecto con las configuraciones por defecto.'
            },
            {
              type: 'code',
              ...code('json', [
                `{
                // Visit https://aka.ms/tsconfig to read more about this file
                "compilerOptions": {
                  // File Layout
                  // "rootDir": "./src",
                  // "outDir": "./dist",

                  // Environment Settings
                  // See also https://aka.ms/tsconfig/module
                  "module": "nodenext",
                  "target": "esnext",
                  "types": [],
                  // For nodejs:
                  // "lib": ["esnext"],
                  // "types": ["node"],
                  // and npm install -D @types/node

                  // Other Outputs
                  "sourceMap": true,
                  "declaration": true,
                  "declarationMap": true,

                  // Stricter Typechecking Options
                  "noUncheckedIndexedAccess": true,
                  "exactOptionalPropertyTypes": true,

                  // Style Options
                  // "noImplicitReturns": true,
                  // "noImplicitOverride": true,
                  // "noUnusedLocals": true,
                  // "noUnusedParameters": true,
                  // "noFallthroughCasesInSwitch": true,
                  // "noPropertyAccessFromIndexSignature": true,

                  // Recommended Options
                  "strict": true,
                  "jsx": "react-jsx",
                  "verbatimModuleSyntax": true,
                  "isolatedModules": true,
                  "noUncheckedSideEffectImports": true,
                  "moduleDetection": "force",
                  "skipLibCheck": true,
                }
              }`
              ])
            },
            {
              type: 'p',
              text: 'A continuacion se mencionan algunas de las configuraciones mas importantes que podemos modificar en el archivo `tsconfig.json`:'
            },
            {
              type: 'ul',
              items: [
                '<b>`module`</b>: Define el modulo de Node.js que se va a usar.',
                '<b>`target`</b>: Indica a que version de Javascript se va a transpilar el codigo.',
                '<b>`rootDir`</b>: Indica donde se encuentran los archivos de Typescript (.ts) (por defecto es "./src")',
                '<b>`outDir`</b>: Indica donde se van a guardar los archivos compilados (.js) (por defecto es "./dist")',
                '<b>`strict`</b>: Habilita todas las opciones de verificación de tipos estricta.',
              ]
            },
            {
              type: 'alert',
              variant: 'info',
              paragraphs: [
                'Si configuraste correctamente el archivo `tsconfig.json` habilitando <b>"rootDir"</b> y <b>"outDir"</b>, podras ejecutar el comando <b>"tsc"</b> en la <b>raiz del proyecto</b> sin necesidad de especificar el archivo o directorio.',
              ],
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: TIPOS DE DATOS ::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-tipos-de-datos',
      title: 'Tipos de Datos',
      keywords: ['typescript', 'javascript', 'configuracion', 'compilacion', 'tipado', 'tipado estatico'],
      summary: '',
      sections: [
        // :::::::::::::::: TIPOS DE DATOS ::::::::::::::::
        {
          title: 'Tipos de Datos',
          content: [
            {
              type: 'p',
              text: 'Existen varios tipos de datos que son <b>nativos de Javascript</b>, como los siguientes:'
            },
            {
              type: 'ul',
              items: [
                '<b>string</b>: Cadena de texto. (Ej. "Hola mundo")',
                '<b>number</b>: Numero. (Ej. 123)',
                '<b>boolean</b>: Booleano. (Ej. true o false)',
                '<b>null</b>: Null. (Ej. null)',
                '<b>undefined</b>: Undefined. (Ej. undefined)',
                '<b>object</b>: Objeto (incluye arrays, funciones, objetos, etc.). (Ej. { nombre: "Juan", edad: 20 })',
                '<b>function</b>: Funcion. (Ej. function() { console.log("Hola mundo"); })',
              ]
            },
            {
              type: 'p',
              text: 'Y luego tenemos algunos tipos de datos que son <b>adicionales de TypeScript</b>, como los siguientes:'
            },
            {
              type: 'ul',
              items: [
                '<b>any</b>: Cualquier tipo de dato. (tratar de no usarlo)',
                '<b>unknown</b>: Cualquier tipo de dato. (mas seguro que any)',
                '<b>never</b>: Tipo que no devuelve ningun valor. (Ej. void)',
                '<b>arrays</b>: Arreglo de elementos. (Ej. [1, 2, 3])',
                '<b>tuples</b>: Tupla de elementos. (Ej. ["Hola", 123])',
                '<b>enums</b>: Enumerado de constantes. (Ej. enum Color { ROJO, VERDE, AZUL })',
              ]
            },
            {
              type: 'p',
              text: 'Para asociar un <b>tipo de dato</b> a una <b>variable</b>, se debe usar el símbolo `:` seguido del <b>tipo de dato</b>.'
            },
            {
              type: 'p',
              text: '<b>Ejemplo de variables con tipos de datos:</b>'
            },
            {
              type: 'code',
              ...code('ts', [
                `let variableNumber: number = 12345;
                let variableNumber2: number = 123_456; // Podemos escribir numeros con "_" para que sea mas legible
                let variableString: string = "Hola a todos!";
                let variableBoolean: boolean = true;

                // Para reasignar una variable, se debe asignar el mismo tipo de dato que la variable original
                variableNumber = 123456789;
                variableNumber2 = 911;
                variableString = "Juan Gonzalez";
                variableBoolean = false;
                
                // Si intentamos reasignar una variable a un tipo de dato diferente al original, arrojara un error
                variableNumber = "76000000"; // Error: Type 'string' is not assignable to type 'number'.
                variableString = 123; // Error: Type 'number' is not assignable to type 'string'.
                variableBoolean = "true"; // Error: Type 'string' is not assignable to type 'boolean'.`
              ])
            },
          ],
        },
        // :::::::::::::::: TIPOS INFERIDOS ::::::::::::::::
        {
          title: 'Tipos Inferidos',
          content: [
            {
              type: 'p',
              text: 'Además de los tipos de datos nativos de Javascript, Typescript tambien es capas de <b>inferir el tipo de dato</b> de una variable basado en el <b>valor que se le asigna inicialmente</b>.'
            },
            {
              type: 'p',
              text: 'Esto permite que el compilador <b>infiera el tipo de dato</b> de una variable basado en el <b>valor que se le asigna inicialmente</b>.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// El compilador infiere el tipo de dato basado en el valor que se le asigna
                let variable1 = 123; // Tipo: number
                let variable2 = "Rodrigo"; // Tipo: string
                let variable3 = true; // Tipo: boolean
                
                // Tambien se puede inferir el tipo de dato en base al resultado de una operacion
                let a = 5; // Number
                let b = 3; // Number
                let c = a + b; // Number
                
                `
              ])
            },
            {
              type: 'p',
              text: 'Al cambiar el valor de las variables con tipos inferidos, estas funcionan igual que las variables con tipo de dato especificado, es decir, <b>arrojará un error si se intenta reasignar a un tipo de dato diferente al original</b>.'
            },
          ],
        },
        // :::::::::::::::: TIPOS ANY ::::::::::::::::
        {
          title: 'Variables tipo "any"',
          content: [
            {
              type: 'p',
              text: 'Si inicializamos una variable y no le asignamos un tipo de dato o valor, el compilador <b>inferira el tipo de dato</b> como `any`. Tambien podemos asignarle el tipo `any` <b>explicitamente</b>.'
            },
            {
              type: 'p',
              text: 'Cuando la variable es de tipo <b>any</b>, podemos asignarle cualquier tipo de dato o valor, y <b>no se arrojara un error de tipo</b>.'
            },
            {
              type: 'code',
              ...code('ts', [
                `let miVariable; // Tipo: any
                miVariable = "Hola mundo!"; // No arrojara error
                miVariable = 123; // No arrojara error
                miVariable = true; // No arrojara error
                
                // Tambien podemos definir variables de tipo any explicitamente
                let miVariable: any = 123456; // Esto puede ser cambiado a cualquier tipo de dato`
              ])
            },
            {
              type: 'alert',
              variant: 'warning',
              paragraphs: [
                'Usar variables de tipo `any` es una <b>MALA PRACTICA</b>, ya que se pierde la <b>seguridad del tipo de dato</b>. Por lo tanto, se debe evitar usar variables de tipo `any` siempre que sea posible.',
              ],
            },
          ],
        },
        // :::::::::::::::: TIPOS ARRAY ::::::::::::::::
        {
          title: 'Variables tipo "array"',
          content: [
            {
              type: 'p',
              text: 'Para declarar un <b>array</b> (arreglo) con tipado, se debe usar el símbolo `[]` seguido del <b>tipo de dato</b> de los elementos del array.'
            },
            {
              type: 'code',
              ...code('ts', [
                `let arrayStrings: string[] = ["Perro", "Gato", "Pajaro"]; // Array de strings
                let arrayNumeros: number[] = [1, 2, 3, 4, 5]; // Array de numeros
                let arrayBooleanos: boolean[] = [true, false, true]; // Array de booleanos
                let arrayObjetos: { nombre: string, edad: number }[] = [{ nombre: "Juan", edad: 20 }, { nombre: "Maria", edad: 25 }];
                let arrayArrays: string[][] = [["Perro", "Gato"], ["Pajaro", "Pez"]];

                // Si declaro un arreglo vacio, sin especificar el tipo de dato, entonces el tipo de dato sera "any[]"
                const miArreglo = []; // tipo de dato: any[]
                const miArreglo2: string[] = []; // tipo de dato: string[]

                // Si no declaro el tipo de dato, pero tiene todos sus elementos de un solo tipo, entonces el tipo de dato sera "tipo[]"
                // En este caso, Typescript esta "infiriendo" el tipo de dato del arreglo
                const arregloNumeros = [1, 2, 3]; // tipo de dato: number[]

                // Si el arreglo tiene elementos de diferentes tipos, entonces el tipo de dato sera "(tipo | tipo | tipo)[]"
                const miArreglo3 = [1, "Hola", true]; // tipo de dato: (number | string | boolean)[]

                // Tambien se puede declarar el tipo de un arreglo con un type (explicado en la seccion de "Types")
                type MiArreglo = (number | string | boolean)[];
                const miArreglo4: MiArreglo = [1, "Hola", true]; // tipo de dato: (number | string | boolean)[]
                `
              ])
            },
            {
              type: 'p',
              text: 'Otra forma alternativa de declarar un array con su tipo de dato es usando el tipo `Array<tipo>`, donde <b>tipo</b> es el tipo de dato de los elementos del array.'
            },
            {
              type: 'code',
              ...code('ts', [
                `let arrayStrings: Array<string> = ["Perro", "Gato", "Pajaro"];
                let arrayNumeros: Array<number> = [1, 2, 3, 4, 5];
                let arrayBooleanos: Array<boolean> = [true, false, true];
                let arrayObjetos: Array<{ nombre: string, edad: number }> = [{ nombre: "Juan", edad: 20 }, { nombre: "Maria", edad: 25 }];
                let arrayArrays: Array<Array<string>> = [["Perro", "Gato"], ["Pajaro", "Pez"]];`
              ])
            },
          ],
        },
        // :::::::::::::::: TIPOS TUPLES ::::::::::::::::
        {
          title: 'Variables tipo "tuples"',
          content: [
            {
              type: 'p',
              text: 'Una <b>tupla</b> (tuple) es una variable que contiene un set de datos que se encuentran ordenados y que no pueden ser modificados.'
            },
            {
              type: 'p',
              text: 'Para definir una <b>tupla</b>, se debe usar el símbolo `[]` con el <b>tipo de dato</b> de los elementos de la tupla entre los corchetes.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Declaracion de una tupla de strings y numeros
                let ejemploTupla: [string, number] = ["Hola", 123];

                // Si la tupla contiene mas elementos que los definidos en la declaracion, arrojara un error
                let ejemploTupla2: [string, number] = ["Hola", 123, "Mundo"]; // Error: Type '[string, number, string]' is not assignable to type '[string, number]'.

                // Si dentro de la tupla se desea agregar mas elementos, se debe agregar un "..." seguido del tipo de dato de los elementos de la tupla.
                let ejemploTupla3: [string, number, ...string] = ["Hola", 123, "Mundo", "Hola", "Mundo"];

                // Tambien se pueden crear tuplas con un type (explicado en la seccion de "Types")
                type RGB = [number, number, number];
                let ejemploTupla4: RGB = [255, 255, 0]; // tipo de dato: [number, number, number]
                `
              ])
            },
            {
              type: 'alert',
              variant: 'info',
              paragraphs: [
                'Como recomendacion, lo ideal es <b>acotar la cantidad de elementos</b> dentro de la tupla (Ejemplo 2 o 3 elementos). Si se requiere agregar mas elementos, se recomienda buscar otras soluciones como usar un objeto o un array.',
              ],
            },
          ],
        },
        // :::::::::::::::: TIPOS ENUMS ::::::::::::::::
        {
          title: 'Variables tipo "enums"',
          content: [
            {
              type: 'p',
              text: 'El tipo <b>enum</b> (enumerado) es un tipo de dato que representa un <b>conjunto de constantes con nombre</b>.'
            },
            {
              type: 'p',
              text: 'Se usan normalmente para representar estados, tallas de ropa, etc.'
            },
            {
              type: 'p',
              text: 'Para definir un <b>enum</b>, se debe usar el símbolo `enum` seguido del <b>nombre del enum</b> (en PascalCase) y los valores de las constantes entre llaves `{}`.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Por defecto, cada posicion del enum tiene un valor numerico que se incrementa de 1 en 1
                const enum Talla {
                  CHICA, // 0
                  MEDIANA, // 1
                  GRANDE, // 2
                  EXTRA_GRANDE, // 3
                }
                  
                // Tambien puedo asignarle valores explicitos a cada posicion del enum
                const enum Talla {
                  CHICA = 1,
                  MEDIANA = 2,
                  GRANDE = 3,
                  EXTRA_GRANDE = 4,
                }
                  
                // Tambien puedo asignarle valores de tipo string a cada posicion del enum
                const enum Talla {
                  CHICA = "S",
                  MEDIANA = "M",
                  GRANDE = "L",
                  EXTRA_GRANDE = "XL",
                }
                
                // Para acceder a los valores de un enum, se debe usar el nombre del enum seguido del nombre de la constante
                let miTalla = Talla.CHICA; // miTalla sera 0
                let miTalla2 = Talla.MEDIANA; // miTalla2 sera 1
                let miTalla3 = Talla.GRANDE; // miTalla3 sera 2
                let miTalla4 = Talla.EXTRA_GRANDE; // miTalla4 sera 3
                `
              ])
            },
            {
              type: 'alert',
              variant: 'info',
              paragraphs: [
                'Al declarar un <b>enum</b> puedes hacerlo con "<b>const</b>" para que el enum sea <b>inmutable</b> y no se pueda modificar (esto tambien generará menos código Javascript compilado).',
                'Pero tambien puedes hacerlo sin "<b>const</b>" para que el enum sea <b>mutable</b>. Esto se recomienda cuando necesites consumir el enum en otro archivo o modulo.',
              ],
            },
          ],
        },
        // :::::::::::::::: TIPOS OBJECT ::::::::::::::::
        {
          title: 'Variables tipo "object"',
          content: [
            {
              type: 'p',
              text: 'En Javascript, los <b>objetos</b> son una coleccion de propiedades (key-value pairs) que se encuentran ordenadas, pero <b>no tienen un tipo de dato especifico</b>.'
            },
            {
              type: 'p',
              text: 'Es por esto que en Typescript, se debe <b>definir el tipo de dato</b> de los objetos usando una <b>interface</b> o un <b>type</b>.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Declaracion de un objeto en javascript, donde se infieren los tipos de dato de las propiedades
                let ejemploObjeto = {
                  nombre: "Juan", // string
                  edad: 20, // number
                  casado: true, // boolean
                };
                // En el caso anterior, se pueden modificar sus propiedades despues de la declaracion a cualquier tipo de dato
                ejemploObjeto.nombre = 123; // No se arrojara error

                // Pero en Typescript, se debe definir el tipo de dato de las propiedades del objeto de la siguiente forma:
                let ejemploObjeto: { nombre: string, edad: number, casado: boolean } = {
                  nombre: "Juan",
                  edad: 20,
                  casado: true,
                };

                // En el caso anterior, no se pueden modificar las propiedades del objeto a cualquier tipo de dato
                ejemploObjeto.nombre = 123; // Error: Type 'number' is not assignable to type 'string'.

                // Tambien, si quisieramos declarar propiedades opcionales, se debe usar el símbolo "?" despues del nombre de la propiedad
                let ejemploObjeto: { nombre: string, edad: number, casado: boolean, email?: string } = {
                  nombre: "Juan",
                  edad: 20,
                  casado: true,
                };

                // Tambien podemos declarar propiedades de tipo readonly, que no se pueden modificar despues de la declaracion
                let ejemploObjeto: { readonly nombre: string, edad: number, casado: boolean, email?: string } = {
                  nombre: "Juan",
                  edad: 20,
                  casado: true,
                };
                // En el caso anterior, no se pueden modificar las propiedades readonly
                ejemploObjeto.nombre = "Pedro"; // Error: Cannot assign to 'nombre' because it is a read-only property.
                `
              ])
            },
            {
              type: 'p',
              text: 'Tambien, podemos separar la definicion de tipos del objeto en un <b>type</b>.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Defino el tipo "Persona"
                type Persona = {
                  nombre: string;
                  edad: number;
                  casado: boolean;
                };

                // Y ahora puedo usar el tipo "Persona" en el objeto
                let ejemploObjeto: Persona = {
                  nombre: "Juan",
                  edad: 20,
                  casado: true,
                };
                `
              ])
            },
          ],
        },
        // :::::::::::::::: ASERCION DE TIPO ::::::::::::::::
        {
          title: 'Asercion de tipo',
          content: [
            {
              type: 'p',
              text: 'La <b>asercion de tipo</b> es una manera de <b>indicarle a Typescript</b> que un valor es de un tipo de dato específico, aunque Typescript no lo pueda inferir automáticamente.'
            },
            {
              type: 'p',
              text: 'Para hacer una asercion de tipo, se debe usar el símbolo "<b>as</b>" seguido del tipo de dato deseado.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Digamos que quiero obtener un elemento de tipo HTMLCanvasElement
                const canvas = document.getElementById("canvas");
                // "canvas" sera de tipo null si no lo encuentra
                // "canvas" sera de tipo HTMLElement si lo encuentra (un tipo de elemento generico de HTML)

                // Lo que necesitamos es que este dato sea de tipo HTMLCanvasElement, para usar sus metodos y propiedades
                // Entonces, para indicarle a Typescript que el valor es de un tipo de dato específico, hacemos una asercion de tipo:
                const canvas = document.getElementById("canvas") as HTMLCanvasElement;

                // Ahora "canvas" sera de tipo HTMLCanvasElement y podemos usar sus metodos y propiedades
                canvas.getContext("2d")?.fillStyle = "red";

                // Tambien podemos hacer la asercion de tipo de la siguiente forma:
                const canvas = document.getElementById("canvas");
                if (canvas instanceof HTMLCanvasElement) {
                  const ctx = canvas.getContext("2d");
                  ctx?.fillStyle = "red";
                }
                `
              ])
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: FUNCIONES ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-funciones',
      title: 'Funciones',
      keywords: ['typescript', 'javascript', 'funciones', 'parametros', 'retorno', 'tipado', 'tipado estatico'],
      summary: '',
      sections: [
        // :::::::::::::::: CONFIGURACION ::::::::::::::::
        {
          title: 'Funciones en Typescript',
          content: [
            {
              type: 'p',
              text: 'Para usar <b>funciones con tipado</b> en Typescript, se debe definir el tipo de dato de los <b>parametros</b> de la funcion.'
            },
            {
              type: 'p',
              text: 'Esto se puede hacer de varias formas:'
            },
            {
              type: 'p',
              text: 'Una forma es con tipado explicito dentro de la declaracion de la funcion.'
            },
            {
              type: 'code',
              ...code('ts', [
                '// Se puede definir el tipo dentro de los argumentos de la funcion (forma mas sencilla)',
                'function saludar(nombre: string, edad: number) {',
                ' console.log(`Hola ${nombre}, tienes ${edad} años.`);',
                '}',
                'saludar("Juan", 20);',
                '',
                '// Tambien se puede definir el tipo de dato con un objeto (forma mas explicita)',
                'function saludar({ nombre, edad }: { nombre: string, edad: number }) {',
                ' console.log(`Hola ${nombre}, tienes ${edad} años.`);',
                '}',
                'saludar({ nombre: "Juan", edad: 20 });',
              ])
            },
            {
              type: 'p',
              text: 'Tambien se puede hacer con un <b>type</b>.'
            },
            {
              type: 'code',
              ...code('ts', [
                '// Se puede definir el tipo de los argumentos de la siguiente forma',
                'function saludar(persona: { nombre: string, edad: number }) {',
                ' const { nombre, edad } = persona;',
                ' console.log(`Hola ${nombre}, tienes ${edad} años.`);',
                '}',
                'saludar({ nombre: "Juan", edad: 20 });',
                '',
                '// Tambien se puede definir el tipo de los argumentos de la siguiente forma',
                'type Persona = {',
                ' nombre: string,',
                ' edad: number',
                '};',
                'function saludar(persona: Persona) {',
                ' console.log(`Hola ${persona.nombre}, tienes ${persona.edad} años.`);',
                '}',
                'saludar({ nombre: "Juan", edad: 20 });',
              ])
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: TYPES ::::::::::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-type',
      title: 'Types',
      keywords: ['typescript', 'javascript', 'types', 'alias', 'opcional', 'readonly', 'objeto'],
      summary: '',
      sections: [
        // :::::::::::::::: Types Alias ::::::::::::::::
        {
          title: 'Types Alias',
          content: [
            {
              type: 'p',
              text: 'Un <b>Type Alias</b> (tipo) es un <b>nombre alternativo</b> que se le da a una estructura de <b>datos personalizada</b>.'
            },
            {
              type: 'p',
              text: 'Esto no crea un objeto nuevo en la ejecución del programa; solo le dice a TypeScript qué forma deben tener los datos para revisar que no cometas errores antes de compilar'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Se puede definir un type alias de la siguiente forma (siempre en PascalCase)
                type UserId = string;
                const id: UserId = "abc-123";

                // Si queremos que una variable acepte tipos especificos, se debe usar el símbolo "|" (union de tipos)
                type Estado = "activo" | "inactivo" | "pendiente";
                const miEstado: Estado = "activo"; // valido
                const miEstado2: Estado = "durmiendo"; // invalido, dara un error de tipo
                
                // Tambien podemos crear un type alias de un objeto (siempre en PascalCase)
                type Persona = { 
                  nombre: string, 
                  edad: number,
                  isActive?: boolean, // El signo "?" indica que la propiedad es opcional
                };
                const persona: Persona = {
                  nombre: "Juan",
                  edad: 20
                };
                
                // Y tambien podemos usar tipos en funciones
                // En este ejemplo recibimos un objeto de tipo "Persona" y retornamos un objeto de tipo "Persona"
                function crearPersona(persona: Persona): Persona {
                  const { nombre, edad } = persona; // Destructuracion de objeto
                  return { nombre, edad, isActive: true }; // Retorno de objeto de tipo "Persona"
                }
                const felipe = crearPersona({ nombre: "Felipe", edad: 35 }); // la variable felipe sera de tipo "Persona"

                // Si quisieramos obtener una propiedad opcional de un objeto y no sabemos si esta existe, podemos usar el símbolo "?"
                // Esto se llama "optional chaining"
                felipe.isActive?.toString(); // Esto no dara un error de tipo si la propiedad isActive no existe
                `
              ])
            },
            {
              type: 'p',
              text: 'Tambien podemos usar <b>Types</b> con <b>Props de React</b>.'
            },
            {
              type: 'code',
              ...code('tsx', [
                `// Primero defino el type
                type ButtonProps = {
                  text: string,
                  color?: string, // El signo "?" indica que la propiedad es opcional
                  onClick: () => void
                };

                // Luego defino el componente (hijo) que recibe las props como tipo "ButtonProps"
                function Button({ text, onClick }: ButtonProps) {
                  return <button onClick={onClick}>{text}</button>;
                }

                // Otra forma de hacer el boton es la siguiente:
                const Button = (props: ButtonProps) => {
                  return <button></button>;
                }

                // Luego puedo usar el componente (hijo) en el componente padre
                function Page() {
                  return (
                    <div>
                      <Button text="Click me" color="red" onClick={() => console.log("Click")} />
                    </div>
                  );
                }
                `
              ])
            },
          ],
        },
        // :::::::::::::::: Mutabilidad ::::::::::::::::
        {
          title: 'Mutabilidad',
          content: [
            {
              type: 'p',
              text: 'La <b>mutabilidad</b> es la capacidad de un objeto para ser modificado.'
            },
            {
              type: 'p',
              text: 'En Typescript, se puede definir si una propiedad de un objeto es modificable (<b>mutable</b>) o solo de lectura (<b>readonly</b>).'
            },
            {
              type: 'code',
              ...code('ts', [
                `type Persona = { 
                  readonly id: number, // La propiedad id es readonly y no se puede modificar
                  nombre: string, 
                  edad: number,
                  isActive?: boolean, // El signo "?" indica que la propiedad es opcional
                };
                const persona: Persona = {
                  id: 1,
                  nombre: "Juan",
                  edad: 20,
                  isActive: true,
                };
                persona.id = 5; // Cannot assign to 'id' because it is a read-only property.
                persona.nombre = "Pedro"; // Esto no dara un error de tipo porque la propiedad nombre es mutable`
              ])
            },
            {
              type: 'p',
              text: 'Al usar <b>readonly</b> esto nos marcará un error de tipo si intentamos modificar la propiedad, pero no hace que el objeto sea inmutable en runtime.'
            },
            {
              type: 'p',
              text: 'Para lograr que el objeto sea <b>realmente inmutable</b>, se puede usar el metodo <b>Object.freeze</b>, el cual nos marcara un error de tipo si intentamos modificar la propiedad.'
            },
            {
              type: 'code',
              ...code('ts', [
                `const persona: Persona = Object.freeze({
                  id: 1,
                  nombre: "Juan",
                  edad: 20,
                  isActive: true,
                });
                persona.id = 5; // Cannot assign to 'id' because it is a read-only property.
                persona.nombre = "Pedro"; // Cannot assign to 'nombre' because it is a read-only property.
                `
              ])
            },
          ],
        },
        // :::::::::::::::: Union Types ::::::::::::::::
        {
          title: 'Union Types',
          content: [
            {
              type: 'p',
              text: 'Los <b>Union Types</b> son tipos que se pueden definir usando el símbolo "|" (union de tipos).'
            },
            {
              type: 'p',
              text: 'Esto es util cuando se quiere definir un tipo que puede ser uno de varios tipos, como por ejemplo un tipo que puede ser un string o un number.'
            },
            {
              type: 'code',
              ...code('ts', [
                `type Estado = "activo" | "inactivo" | "pendiente";
                const miEstado: Estado = "activo"; // valido
                const miEstado2: Estado = "durmiendo"; // invalido, dara un error de tipo

                // Tambien podemos usar Union Types para decidir entre 2 o mas tipos de datos
                // Por ejemplo, si queremos definir un tipo que puede ser un string o un number, podemos usar el siguiente type:
                type MiTipo = string | number;
                const miTipo: MiTipo = "Hola"; // valido
                const miTipo2: MiTipo = 123; // valido
                const miTipo3: MiTipo = true; // invalido, dara un error de tipo

                // O derechamente un tipo de dato y un valor concreto
                type MiTipo = string | 56;
                const miTipo: MiTipo = "Hola"; // valido
                const miTipo2: MiTipo = 56; // valido
                const miTipo3: MiTipo = 123; // invalido, dara un error de tipo
                `
              ])
            },
            {
              type: 'p',
              text: 'Tambien podemos usar <b>Template Union Types</b> para validar el formato de un string.'
            },
            {
              type: 'p',
              text: 'Por ejemplo, si queremos validar que un string es un email, podemos usar el siguiente type:'
            },
            {
              type: 'code',
              ...code('ts', [
                'type Email = \`${string}@${string}.${string}\`;',
                'const miEmail: Email = "juan@gmail.com"; // valido',
                'const miEmail2: Email = "juan@gmail.com.ar"; // invalido, dara un error de tipo',
                '',
                '// Otro ejemplo, para validar que un string lleve un simbolo de dolar al inicio',
                'type SimboloDolar = `$${string}`;',
                'const miSimboloDolar: SimboloDolar = "$100"; // valido',
                'const miSimboloDolar2: SimboloDolar = "100"; // invalido, dara un error de tipo',
              ])
            },
            {
              type: 'p',
              text: 'Tambien podemos usar <b>Union Types</b> para validar <b>Props de React</b>.'
            },
            {
              type: 'code',
              ...code('tsx', [
                `// Primero defino el type
                type ButtonProps = {
                  text: string,
                  backgroundColor?: 'red' | 'blue' | 'green'; // Defino los colores posibles del prop
                };

                // Luego defino el componente (hijo) que recibe las props como tipo "ButtonProps"
                function Button({ text, onClick }: ButtonProps) {
                `
              ])
            },
          ],
        },
        // :::::::::::::::: Intersection Types ::::::::::::::::
        {
          title: 'Intersection Types',
          content: [
            {
              type: 'p',
              text: 'Los <b>Intersection Types</b> (interseccion de tipos) son tipos que se pueden definir usando el símbolo <b>"&"</b>.'
            },
            {
              type: 'p',
              text: 'Esto es util cuando quiere tener tipos que se <b>combinen de diferentes tipos</b>, o se quiera <b>extender un tipo de dato</b> con otro tipo de dato.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Defino los tipos de datos
                type Persona = {
                  nombre: string,
                  edad: number
                };
                type Usuario = {
                  email: string,
                  password: string
                };
                // Defino el tipo de dato que se combinara con los tipos de datos anteriores
                type UsuarioPersona = Persona & Usuario; // Interseccion de tipos
                const usuarioPersona: UsuarioPersona = {
                  nombre: "Juan"
                  edad: 20,
                  email: "juan@gmail.com",
                  password: "123456"
                };
                `
              ])
            },
          ],
        },
        // :::::::::::::::: Type Indexing ::::::::::::::::
        {
          title: 'Type Indexing',
          content: [
            {
              type: 'p',
              text: 'El <b>Type Indexing</b> (o Indexed Access Types / tipos de acceso indexados) es una característica que permite consultar el tipo de una propiedad específica de otro tipo, interfaz o objeto, utilizando una sintaxis similar a la de acceder a una propiedad en JavaScript (`Objeto["propiedad"]`)'
            },
            {
              type: 'p',
              text: 'Si tienes un tipo o interfaz con varias propiedades, puedes <b>extraer el tipo de una de ellas</b> para reutilizarlo en otra parte de tu código:'
            },
            {
              type: 'code',
              ...code('ts', [
                `type Usuario = {
                  id: number,
                  nombre: string,
                  activo: boolean
                };

                // Obtenemos el tipo de la propiedad 'nombre' (que es string)
                type NombreUsuario = Usuario['nombre']; // Equivale a: type NombreUsuario = string;

                const miNombre: NombreUsuario = "Ana"; // Correcto`
              ])
            },
            {
              type: 'p',
              text: 'Tambien se puede <b>reutilizar tipos de datos</b> para crear nuevos tipos de datos, o para <b>validar el tipo de una propiedad de un objeto</b>.'
            },
            {
              type: 'code',
              ...code('ts', [
                `type Usuario = {
                  nombre: string,
                  direccion: {
                    calle: string,
                    numero: number,
                    ciudad: string
                  };
                };

                // Obtenemos el tipo de la propiedad 'direccion' (que es un objeto)
                const direccionUsuario: Usuario['direccion'] = { 
                  calle: "Calle 123",
                  numero: 123,
                  ciudad: "Santiago"
                };`
              ])
            },
            {
              type: 'p',
              text: 'Tambien podemos usar el utility <b>ReturnType</b> para obtener el <b>tipo de retorno</b> de una funcion.'
            },  
            {
              type: 'code',
              ...code('ts', [
                `function createAdress() {
                  return {
                    calle: "Calle 123",
                    numero: 123,
                  };
                };

                type CreateAdressReturnType = ReturnType<typeof createAdress>;
                const direccionUsuario: CreateAdressReturnType = createAdress();`
              ])
            },
          ],
        },
        // :::::::::::::::: Type vs Interface ::::::::::::::::
        {
          title: 'Type vs Interface',
          content: [
            {
              type: 'p',
              text: 'Las <b>interfaces</b> y los <b>types</b> son muy similares, pero hay algunas diferencias entre ellos.'
            },
            {
              type: 'p',
              text: 'Las interfaces se usan para definir el <b>esquema</b> de un objeto, y luego se puede usar para crear objetos que cumplan con ese esquema. Los types se usan para definir un <b>tipo de dato</b>.'
            },
            {
              type: 'p',
              text: '<b>Diferencias entre interfaces y types:</b>'
            },
            {
              type: 'alert',
              variant: 'warning',
              title: 'Fusión de declaraciones (Declaration Merging)',
              paragraphs: [
                '<b>interface:</b> Si declaras dos interfaces con el mismo nombre en el mismo ámbito, TypeScript las fusiona automáticamente en una sola agregando sus propiedades.',
                '<b>type:</b> Si intentas declarar un alias de tipo con el mismo nombre dos veces, obtendrás un error de identificador duplicado.'
              ] 
            },
            {
              type: 'alert',
              variant: 'warning',
              title: 'Extensibilidad y herencia',
              paragraphs: [
                '<b>interface:</b> Se extienden usando la palabra clave "<b>extends</b>" (ej. `interface Admin extends User`).',
                '<b>type:</b>  Se extienden simulando herencia mediante intersecciones con el <b>&</b> (ej. `type Admin = User & { role: string }`).'
              ] 
            },
            {
              type: 'alert',
              variant: 'warning',
              title: 'Capacidades únicas de type',
              paragraphs: [
                'Pueden definir tipos primitivos (string, number, etc.). (ej. `type MiString = string`).',
                'Permiten crear <b>tipos de unión</b> (string | number) e <b>intersecciones complejos</b>. (ej. `type Admin = User & { role: string }`).',
                'Pueden definir <b>tuplas</b> y <b>tipos mapeados (mapped types)</b>. (ej. `type MiMap = { [key: string]: number }`).',
              ] 
            },
            {
              type: 'alert',
              variant: 'info',
              title: 'Cual usar?',
              paragraphs: [
                'Usa <b>interface</b> por defecto cuando estés modelando <b>objetos o clases</b>, especialmente si estás construyendo <b>librerías</b> donde otros usuarios necesiten extender las definiciones.',
                'Usa <b>type</b> cuando necesites trabajar con <b>tipos primitivos, uniones, tuplas o funciones complejas</b> que una interfaz no puede expresar.'
              ] 
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: INTERFACES ::::::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-interface',
      title: 'Interfaces',
      keywords: ['typescript', 'javascript', 'interfaces', 'opcional', 'readonly', 'objeto'],
      summary: '',
      sections: [
        // :::::::::::::::: Interfaces ::::::::::::::::
        {
          title: 'Interfaces',
          content: [
            {
              type: 'p',
              text: 'Una <b>Interface</b> es un <b>tipo de dato</b> que se define como una estructura de <b>datos personalizada</b> (parecido a un <b>type</b>).'
            },
            {
              type: 'p',
              text: 'Las interfaces se usan para definir el <b>esquema</b> de un objeto, y luego se puede usar para crear objetos que cumplan con ese esquema.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Se puede definir una interface de la siguiente forma (siempre en PascalCase)
                interface Producto { 
                  id: number, 
                  nombre: string,
                  precio: number
                }
                const producto: Producto = {
                  id: 1,
                  nombre: "Producto 1",
                  precio: 100
                };

                // Tambien podemos tener interfaces dentro de interfaces
                interface CarritoDeCompras {
                  productos: Producto[],
                  total: number,
                  fecha: Date
                }
                const carrito: CarritoDeCompras = {
                  productos: [{
                    id: 1,
                    nombre: "Producto 1",
                    precio: 100
                  }, {
                    id: 2,
                    nombre: "Producto 2",
                    precio: 200
                  }],
                  total: 300,
                  fecha: new Date()
                };
                `
              ])
            },
            {
              type: 'p',
              text: 'Tambien podemos <b>extender</b> las interfaces para crear nuevas interfaces. Para esto usamos el símbolo "<b>extends</b>".'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Se puede definir una interface de la siguiente forma (siempre en PascalCase)
                interface Producto { 
                  id: number, 
                  nombre: string,
                  precio: number
                }
                // Luego definimos la interface que extiende de la interface Producto
                interface ProductoConDescuento extends Producto {
                  descuento: number
                }
                const productoConDescuento: ProductoConDescuento = {
                  id: 1,
                  nombre: "Producto 1",
                  precio: 100,
                  descuento: 10
                };`
              ])
            },
            {
              type: 'p',
              text: 'Tambien podemos definir <b>metodos</b> en las interfaces.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Se puede definir una interface de la siguiente forma (siempre en PascalCase)
                interface CarritoDeCompras { 
                  agregarProducto(producto: Producto): void
                  eliminarProducto(producto: Producto): void
                  calcularTotal(): number
                }
                `
              ])
            },
          ],
        },
        // :::::::::::::::: Type vs Interface ::::::::::::::::
        {
          title: 'Type vs Interface',
          content: [
            {
              type: 'p',
              text: 'Las <b>interfaces</b> y los <b>types</b> son muy similares, pero hay algunas diferencias entre ellos.'
            },
            {
              type: 'p',
              text: 'Las interfaces se usan para definir el <b>esquema</b> de un objeto, y luego se puede usar para crear objetos que cumplan con ese esquema. Los types se usan para definir un <b>tipo de dato</b>.'
            },
            {
              type: 'p',
              text: '<b>Diferencias entre interfaces y types:</b>'
            },
            {
              type: 'alert',
              variant: 'warning',
              title: 'Fusión de declaraciones (Declaration Merging)',
              paragraphs: [
                '<b>interface:</b> Si declaras dos interfaces con el mismo nombre en el mismo ámbito, TypeScript las fusiona automáticamente en una sola agregando sus propiedades.',
                '<b>type:</b> Si intentas declarar un alias de tipo con el mismo nombre dos veces, obtendrás un error de identificador duplicado.'
              ] 
            },
            {
              type: 'alert',
              variant: 'warning',
              title: 'Extensibilidad y herencia',
              paragraphs: [
                '<b>interface:</b> Se extienden usando la palabra clave "<b>extends</b>" (ej. `interface Admin extends User`).',
                '<b>type:</b>  Se extienden simulando herencia mediante intersecciones con el <b>&</b> (ej. `type Admin = User & { role: string }`).'
              ] 
            },
            {
              type: 'alert',
              variant: 'warning',
              title: 'Capacidades únicas de type',
              paragraphs: [
                'Pueden definir tipos primitivos (string, number, etc.). (ej. `type MiString = string`).',
                'Permiten crear <b>tipos de unión</b> (string | number) e <b>intersecciones complejos</b>. (ej. `type Admin = User & { role: string }`).',
                'Pueden definir <b>tuplas</b> y <b>tipos mapeados (mapped types)</b>. (ej. `type MiMap = { [key: string]: number }`).',
              ] 
            },
            {
              type: 'alert',
              variant: 'info',
              title: 'Cual usar?',
              paragraphs: [
                'Usa <b>interface</b> por defecto cuando estés modelando <b>objetos o clases</b>, especialmente si estás construyendo <b>librerías</b> donde otros usuarios necesiten extender las definiciones.',
                'Usa <b>type</b> cuando necesites trabajar con <b>tipos primitivos, uniones, tuplas o funciones complejas</b> que una interfaz no puede expresar.'
              ] 
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: NARROWING ::::::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-narrowing',
      title: 'Narrowing',
      keywords: ['typescript', 'javascript', 'narrowing', 'discriminated', 'switch', 'typeof', 'in'],
      summary: '',
      sections: [
        // :::::::::::::::: Narrowing ::::::::::::::::
        {
          title: 'Narrowing',
          content: [
            {
              type: 'p',
              text: 'El <b>narrowing</b> es el proceso de <b>reducir</b> el <b>tipo de una variable</b> a un <b>tipo mas específico</b>.'
            },
            {
              type: 'p',
              text: 'El narrowing se puede hacer de varias formas, una de ellas es usando el operador <b>typeof</b>, el cual se utiliza para comprobar el tipo de una variable.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Usando el operador typeof
                function getTipo(valor: string | number) {
                  // Al entrar a la funcion, el tipo de la variable puede ser string o number
                  if (typeof valor === 'string') {
                    // En este punto el tipo de la variable es string
                    let upperVariable = valor.toUpperCase(); // Puedo acceder al metodo toUpperCase porque es string
                    return 'El valor es un string';
                  }
                  // En este punto el tipo de la variable es number
                  let fixedVariable = valor.toFixed(2); // Puedo acceder al metodo toFixed porque es number
                  return 'El valor es un number';
                }
                `
              ])
            },
            {
              type: 'p',
              text: 'Otra forma, si se usan tipos o interfaces, es usando alguna <b>propiedad</b> del objeto o interface.'
            },
            {
              type: 'code',
              ...code('ts', [
                `type Sonic = {
                  company: 'Sega', // Propiedad que identifica al personaje
                  name: string,
                  correr: () => void,
                }
                type Mario {
                  company: 'Nintendo', // Propiedad que identifica al personaje
                  name: string,
                  saltar: () => void,
                }
                // Creamos una union de los dos tipos
                const Personaje = Mario | Sonic;
                function jugar(personaje: Personaje) {
                  if (personaje.company === 'Sega') {
                    // En este punto el tipo de la variable es Sonic
                    return personaje.correr();
                  }
                  // En este punto el tipo de la variable es Mario
                  return personaje.saltar();
                }

                // Otra forma de hacerlo es haciendo "Type Guard"
                // Las siguientes funciones comprueban si el personaje es Sonic
                function isSonic(personaje: Personaje): personaje is Sonic {
                  return (personaje as Sonic).saltar === undefined;
                }
                function jugar(personaje: Personaje) {
                  if (isSonic(personaje)) {
                    // En este punto el tipo de la variable es Sonic
                    return personaje.correr();
                  }
                  // En este punto el tipo de la variable es Mario
                  return personaje.saltar();
                }
                `
              ])
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: CSS PROPERTIES (REACT) ::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-css-properties-react',
      title: 'CSS Properties (React)',
      keywords: ['typescript', 'javascript', 'css', 'properties', 'react'],
      summary: '',
      sections: [
        // :::::::::::::::: CSS Properties (React) ::::::::::::::::
        {
          title: 'CSS Properties (React)',
          content: [
            {
              type: 'p',
              text: 'Si quisieramos pasar <b>Props</b> asociados a <b>estilos css (style)</b> a un Componente, una forma de hacerlo es usar un tipo especial de React llamado <b>React.CSSProperties</b>'
            },
            {
              type: 'p',
              text: 'Con esto ya no sera necesario definir todas las propiedades dentro de un type para asignar css a un componente'
            },
            {
              type: 'code',
              ...code('tsx', [
                `// Creo un type que incluye todas las propiedades css desde React.CSSProperties
                type ButtonProps = {
                  style: React.CSSProperties;
                }
                // Creo un componente que recibe las propiedades css como props
                function Button({style}: ButtonProps) {
                  return (
                    <button style={style}>
                      Click me
                    </button>
                  )
                }
                // Luego simplemente le mando las propiedades css que quiera dentro de style a mi componente Button
                function page(){
                  return (
                    <Button style={{ backgroundColor: 'red', color: 'white' }}>
                      Click me
                    </Button>
                  )
                }
                `
              ])
            },
          ],
        },
      ],
    },
  ],
}
