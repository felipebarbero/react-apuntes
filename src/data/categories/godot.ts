import { code } from '../code.ts';

// Categoría Godot. El formato de cada apunte está descrito en src/data/catalog.js.

export const godot = {
  id: 'godot',
  title: 'Godot',
  icon: '/imagenes/categorias-iconos/godot.svg',
  description: 'Motor de videojuegos multiplataforma de código abierto.',
  version: '4.7',
  items: [
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: INTRODUCCION ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-introduccion',
      title: 'Introducción',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES GODOT? ::::::::::::::::
        {
          title: 'Que es Godot?',
          content: [
            { 
              type: 'p', 
              text: '<b>Godot</b> es un motor de videojuegos gratuito, multiplataforma y de código abierto (bajo licencia MIT) utilizado para crear juegos y aplicaciones en 2D y 3D. Fue creado originalmente por los desarrolladores argentinos Juan Linietsky y Ariel Manzur y liberado como código abierto en 2014' 
            },
            { 
              type: 'alert', 
              variant: 'secondary',
              title: 'Características principales',
              paragraphs: [
                `<b>Gratis y sin regalías:</b> Puedes usar, modificar y publicar proyectos comerciales sin pagar licencias ni comisiones`,
                `<b>Nodos y escenas:</b> Su arquitectura organiza los elementos del juego en nodos (bloques con funciones específicas, como sprites, colisiones o cuerpos físicos) agrupados en escenas reutilizables en forma de árbol`,
                `<b>Lenguajes de programación:</b> Destaca GDScript (un lenguaje propio con sintaxis similar a Python), además de admitir C# y C++ (mediante GDExtension)`,
                `<b>Multiplataforma y ligero:</b> Permite exportar proyectos a PC, web, móviles y consolas, con un ejecutable compacto y fácil de instalar`
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: CONCEPTOS BASICOS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-conceptos-basicos',
      title: 'Conceptos básicos',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot concepts', 'godot concepts basicos'],
      summary: '',
      sections: [
        // :::::::::::::::: NODOS Y ESCENAS ::::::::::::::::
        {
          title: '1. Que es un Game Engine?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que quieres hacer un <b>videojuego sencillo</b>, nada complejo. Un personaje y un muro. Presionas un boton y el personaje se mueve hacia la derecha, choca contra el muro y se detiene. ¿Cómo lo haces? ¿Que hace que todo eso funcione?' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_1-1.png',
              alt: 'Juego sencillo de un personaje y un muro',
            },
            { 
              type: 'p', 
              text: 'Algo tiene que <b>mostrar las imagenes</b>, <b>leer las entradas del teclado</b>, <b>detectar colisiones</b>, y <b>emitir sonidos</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_1-2.png',
              alt: 'Juego sencillo de un personaje y un muro',
            },
            { 
              type: 'p', 
              text: 'Podrías construir esos sistemas por tu cuenta, pero eso sería un monton de trabajo antes de que siquiera puedas tener un videojuego, y es ahí donde entra <b>Godot (Game Engine)</b> a ayudar. Te da esos sistemas, ademas de un <b>editor</b>, donde puedes colocar todas las partes de tu juego juntas y hacerlo funcionar.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_1-3.png',
              alt: 'Juego sencillo de un personaje y un muro',
            },
            { 
              type: 'p', 
              text: '<b>Godot es un Motor de Videojuegos gratuito y de código abierto</b>. Usas sus herramientas para construir tu videojuego y decidir como se comporta cada parte.' 
            },
            { 
              type: 'p', 
              text: '<b>Godot es un Motor de Videojuegos gratuito y de código abierto</b>. Usas sus herramientas para construir tu videojuego y decidir como se comporta cada parte.' 
            },
          ],
        },
      ],
    },
  ],
}
