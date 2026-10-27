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
              text: 'Para instalar TypeScript, primero debemos instalar <b>Node.js y npm</b>'
            },
            {
              type: 'alert',
              variant: 'info',
              title: '¿Para qué necesito Node.js?',
              paragraphs: [
                'TypeScript no necesita estrictamente <b>Node.js</b> ni <b>npm</b> para funcionar en producción, pero sí se utilizan durante el desarrollo para procesar, empaquetar y gestionar las herramientas de tu proyecto',
                'npm es el gestor de paquetes de Node.js. y lo usaremos para instalar TypeScript y otras librerías.',
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
              text: 'Esto instalará TypeScript en el proyecto.'
            },
            {
              type: 'p',
              text: 'Tambien puedes usar el siguiente comando para instalar Typescript de manera global:'
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
              text: 'Si se muestra la version de TypeScript, la instalacion fue exitosa.'
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: PRIMEROS PASOS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'typescript-primeros-pasos',
      title: 'Primeros pasos',
      keywords: ['typescript', 'javascript', 'primeros pasos', 'compilacion', 'tipado', 'tipado estatico'],
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
              text: 'Luego, si queremos utilizar este archivo en un proyecto debemos compilarlo a JavaScript. Para hacer esto, podemos ejecutar el siguiente comando en la terminal (en la ubicacion del archivo TS):'
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
              text: 'Esto instalará TypeScript en el proyecto.'
            },
            {
              type: 'p',
              text: 'Tambien puedes usar el siguiente comando para instalar Typescript de manera global:'
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
              text: 'Si se muestra la version de TypeScript, la instalacion fue exitosa.'
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
