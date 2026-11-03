import { code } from '../code.js';

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
            {
              type: 'alert',
              variant: 'info',
              title: 'Usar TypeScript con React',
              paragraphs: [
                'De manera predeterminada, TypeScript <b>soporta JSX</b> (React) y puedes obtener soporte completo para React Web añadiendo <b>@types/react</b> y <b>@types/react-dom</b> a tu proyecto React.',
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
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: ARCHIVOS TS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-archivos-ts',
      title: 'Archivos TS',
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
                '<b>string</b>: Cadena de texto.',
                '<b>number</b>: Numero.',
                '<b>boolean</b>: Booleano.',
                '<b>null</b>: Null.',
                '<b>undefined</b>: Undefined.',
                '<b>object</b>: Objeto (incluye arrays, funciones, objetos, etc.)',
                '<b>function</b>: Funcion.',
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
                '<b>unknown</b>',
                '<b>never</b>',
                '<b>arrays</b>',
                '<b>tuples</b>',
                '<b>enums</b>',
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
                `let extincionDinosaurios: number = 76_000_000; // Podemos escribir numeros de esta forma para que sea mas legible
                // let extincionDinosaurios: number = 76000000;
                let dinosaurioFavorito: string = "T-Rex";
                let extintos: boolean = true;
                
                // Luego si quisieramos reasignarlas, esto se debe hacer al mismo tipo de dato que la variable original 
                extincionDinosaurios = "76000000"; // Error: Type 'string' is not assignable to type 'number'.
                dinosaurioFavorito = 123; // Error: Type 'number' is not assignable to type 'string'.
                extintos = "true"; // Error: Type 'string' is not assignable to type 'boolean'.
                
                dinosaurioFavorito = "Triceratops"; // Esto no dara error, ya que el nuevo dato es de tipo string`
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
              text: 'Además de los tipos de datos nativos de Javascript, tambien existe una funcionalidad en Typescript llamada <b>tipos inferidos</b>.'
            },
            {
              type: 'p',
              text: 'Esto permite que el compilador <b>infiera el tipo de dato</b> de una variable basado en el <b>valor que se le asigna</b>.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// El compilador infiere el tipo de dato basado en el valor que se le asigna
                let extincionDinosaurios = 76_000_000; // Tipo: number
                let dinosaurioFavorito = "T-Rex"; // Tipo: string
                let extintos = true; // Tipo: boolean`
              ])
            },
            {
              type: 'p',
              text: 'Al cambiar el valor de las variables con tipos inferidos, <b>estas funcionan igual que las variables con tipo de dato especificado</b>, es decir, <b>arrojará un error si se intenta reasignar a un tipo de dato diferente al original</b>.'
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
                `// El compilador infiere el tipo de dato basado en el valor que se le asigna
                let miVariable; // Tipo: any
                miVariable = "Hola mundo!"; // No se arrojara error
                miVariable = 123; // No se arrojara error
                miVariable = true; // No se arrojara error`
              ])
            },
            {
              type: 'alert',
              variant: 'warning',
              paragraphs: [
                'Usar variables de tipo `any` es una <b>mala practica</b>, ya que se pierde la <b>seguridad del tipo de dato</b>. Por lo tanto, se debe evitar usar variables de tipo `any` siempre que sea posible.',
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
              text: 'Para declarar un <b>array</b>, se debe usar el símbolo `[]` seguido del <b>tipo de dato</b> de los elementos del array.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Declaracion de un array de strings
                let animales: string[] = ["Perro", "Gato", "Pajaro"];
                // Declaracion de un array de numeros
                let numeros: number[] = [1, 2, 3, 4, 5];
                // Declaracion de un array de booleanos
                let booleanos: boolean[] = [true, false, true];
                // Declaracion de un array de objetos
                let objetos: { nombre: string, edad: number }[] = [{ nombre: "Juan", edad: 20 }, { nombre: "Maria", edad: 25 }];
                // Declaracion de un array de arrays
                let arrays: string[][] = [["Perro", "Gato"], ["Pajaro", "Pez"]];
                
                // Si inicializamos un arreglo vacío sin especificar el tipo de dato, el compilador inferira el tipo de dato como "any"
                let miArreglo = []; // Tipo: any`
              ])
            },
            {
              type: 'p',
              text: 'Otra forma alternativa de declarar un array con su tipo de dato es usando el tipo `Array<tipo>`, donde <b>tipo</b> es el tipo de dato de los elementos del array.'
            },
            {
              type: 'code',
              ...code('ts', [
                `// Declaracion de un array de strings
                let animales: Array<string> = ["Perro", "Gato", "Pajaro"];
                // Declaracion de un array de numeros
                let numeros: Array<number> = [1, 2, 3, 4, 5];
                // Declaracion de un array de booleanos
                let booleanos: Array<boolean> = [true, false, true];
                // Declaracion de un array de objetos
                let objetos: Array<{ nombre: string, edad: number }> = [{ nombre: "Juan", edad: 20 }, { nombre: "Maria", edad: 25 }];
                // Declaracion de un array de arrays
                let arrays: Array<Array<string>> = [["Perro", "Gato"], ["Pajaro", "Pez"]];`
              ])
            },
            {
              type: 'p',
              text: 'Si inicializamos un array vacío sin especificar el tipo de dato, el compilador <b>inferira el tipo de dato</b> como `any`.'
            },
            {
              type: 'code',
              ...code('ts', [
                `let miArreglo = []; // Tipo: any`
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
                `// Declaracion de un enum de tallas de ropa
                // Por defecto, cada posicion del enum tiene un valor numerico que se incrementa de 1 en 1
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
}
