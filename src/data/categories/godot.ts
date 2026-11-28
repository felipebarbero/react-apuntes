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
            {
              type: 'alert',
              variant: 'warning',
              title: 'Documentación oficial',
              paragraphs: [
                `Puedes encontrar la documentación oficial en <a href="https://docs.godotengine.org/en/stable/index.html" target="_blank">https://docs.godotengine.org/en/stable/index.html</a>`,
              ]
            },
          ],
        },
        // :::::::::::::::: CONCEPTOS BÁSICOS DE GODOT ::::::::::::::::
        {
          title: 'Conceptos básicos de Godot',
          content: [
            { 
              type: 'p', 
              text: 'Dentro de este resumen encotrarás secciones con <b>conceptos basicos de Godot</b>. A continuacion menciono cada concepto y una breve descripcion de lo que es.' 
            },
            {
              type: 'table',
              headers: ['Nº', 'Concepto', 'Descripción'],
              rows: [
                ['1', 'Game Engine', 'Un motor de videojuego es un entorno de software que reúne herramientas y sistemas listos para crear videojuegos sin programarlos desde cero.'],
                ['2', 'Nodos', 'Un nodo es un bloque de construcción en Godot que puede contener propiedades y métodos. Un nodo puede ser un sprite, un audio, un collider, un script, etc.'],
                ['3', 'Escenas', 'Una escena es una colección de nodos que se pueden reutilizar en diferentes partes de un juego. Una escena puede ser un nivel, un menú, un HUD, etc.'],
                ['4', 'Padre e hijo', 'Un nodo padre es un nodo que tiene nodos hijos. Un nodo hijo es un nodo que tiene un nodo padre. Un nodo padre puede tener muchos nodos hijos y un nodo hijo puede tener muchos nodos padres.'],
                ['5', 'Árbol de escenas', 'Un árbol de escenas es una estructura de nodos que se pueden reutilizar en diferentes partes de un juego. Un árbol de escenas puede tener muchas escenas y una escena puede tener muchos árboles de escenas.'],
                ['6', 'Instancias', 'Una instancia es una copia de un nodo. Una instancia puede tener sus propias propiedades y métodos. Una instancia puede ser un personaje, un enemigo, un objeto, etc.'],
                ['7', 'Propiedades', 'Una propiedad es un valor que puede tener un nodo. Una propiedad puede ser un color, un tamaño, una posición, etc.'],
                ['8', 'Métodos', 'Un método es una acción que puede realizar un nodo. Un método puede ser un movimiento, un salto, un ataque, etc.'],
                ['9', 'Scripts', 'Un script es un archivo que contiene código que puede ser ejecutado por un nodo. Un script puede ser un script de movimiento, un script de ataque, un script de UI, etc.'],
                ['10', 'Inspector', 'El inspector es una ventana que permite ver y editar las propiedades de un nodo. El inspector puede ser un inspector de movimiento, un inspector de ataque, un inspector de UI, etc.'],
                ['11', 'Árbol de nodos', 'Un árbol de nodos es una estructura de nodos que se pueden reutilizar en diferentes partes de un juego. Un árbol de nodos puede tener muchos nodos y un nodo puede tener muchos árboles de nodos.'],
                ['12', 'Árbol de escenas', 'Un árbol de escenas es una estructura de escenas que se pueden reutilizar en diferentes partes de un juego. Un árbol de escenas puede tener muchas escenas y una escena puede tener muchos árboles de escenas.'],
                ['13', 'Árbol de nodos', 'Un árbol de nodos es una estructura de nodos que se pueden reutilizar en diferentes partes de un juego. Un árbol de nodos puede tener muchos nodos y un nodo puede tener muchos árboles de nodos.'],
              ],
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: GAME ENGINE ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-game-engine',
      title: 'Game Engine',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot concepts', 'godot concepts basicos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES UN GAME ENGINE? ::::::::::::::::
        {
          title: 'Que es un Game Engine?',
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
              text: 'Debe haber algun sistema que te ayude a <b>mostrar imagenes</b>, <b>leer entradas del teclado</b>, <b>detectar colisiones</b>, <b>emitir sonidos</b>, etc.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_1-2.png',
              alt: 'Juego sencillo de un personaje y un muro',
            },
            { 
              type: 'p', 
              text: 'Podrías construir esos sistemas por tu cuenta, pero eso sería un monton de trabajo antes de que siquiera puedas tener un videojuego, y es ahí donde entran los <b>Motores de Videojuegos (Game Engine)</b> como <b>Godot</b> a ayudarte. Te da esos sistemas, ademas de un <b>editor</b>, donde puedes colocar todas las partes de tu juego juntas y hacerlo funcionar.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_1-3.png',
              alt: 'Juego sencillo de un personaje y un muro',
            },
            { 
              type: 'alert',
              variant: 'info',
              title: 'Game Engine',
              paragraphs: [
                'Un <b>Game Engine</b> (o motor de videojuego) es un entorno de software que reúne herramientas y sistemas listos para crear videojuegos sin programarlos desde cero. Algunas de sus funciones son:',
                '<b>- Renderizado gráfico:</b> Dibuja escenas en 2D y 3D, iluminación y texturas en pantalla.',
                '<b>- Físicas y colisiones:</b> Simula gravedad, peso, rebotes y choques entre objetos',
                '<b>- Scripting y lógica:</b> Permite programar reglas, comportamientos e inteligencia artificial.',
                '<b>- Audio y entradas:</b> Gestiona sonidos, música y respuestas a teclado, ratón o mandos.',
                '<b>- Exportación multiplataforma:</b> Facilita adaptar el juego a PC, consolas, móviles o web',
                'Algunos ejemplos de Game Engines son <b>Unreal Engine</b>, <b>Unity</b>, <b>Godot</b> y <b>GameMaker</b>, los cuales son opciones muy usadas para distintos estilos y niveles.',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: NODOS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-nodos',
      title: 'Nodos',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot nodos', 'godot nodos conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES UN NODO? ::::::::::::::::
        {
          title: 'Que es un Nodo?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que estas construyendo un personaje de videojuego hecho de <b>bloques de lego</b>. Un bloque controla como se ve el personaje, otro bloque maneja las colisiones, otro reproduce sonidos y otro maneja la camara. En Godot estos bloques de construcción se llaman <b>Nodos</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_2-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Cada nodo tiene una función específica. Por ejemplo, <b>Sprite2D</b> puede mostrar una imagen, <b>Camera2D</b> funciona como una cámara, <b>CollisionShape2D</b> define la forma de las colisiones. ' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_2-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Ahora viene la parte importante, <b>puedes conectar los nodos entre si para que funcionen juntos</b>, en algo parecido a un árbol. Entonces, en vez de tener un único objeto que haga todo, simplemente lo construyes desde muchos bloques pequeños, <b>nodos</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_2-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, tu personaje puede ser un <b>nodo</b> con <b>gráficos</b>, <b>colisiones</b>, <b>sonido</b>, y <b>varios otros nodos debajo de este</b>, y así es básicamente como funciona Godot. Tu videojuego completo esta construido con nodos interconectados.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_2-4.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"En Godot, todo es un nodo."</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: ESCENAS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-escenas',
      title: 'Escenas',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot escenas', 'godot escenas conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES UNA ESCENA? ::::::::::::::::
        {
          title: 'Que es una Escena?',
          content: [
            { 
              type: 'p', 
              text: 'Entonces, si un <b>nodo</b> es un único bloque de lego, que es una <b>escena</b>? Una <b>escena</b> es simplemente <b>algo que contruyes a partir de esos nodos</b>.' 
            },
            { 
              type: 'p', 
              text: 'Por ejemplo, tu <b>personaje</b> podría tener un nodo para movimiento, otro para gráficos, otro para colisiones y quizas otro para sonido. Si pones todo eso junto, y lo guardas, ya tienes una <b>escena</b>. Entonces, los nodos son sólo los bloques y una <b>escena</b> es el <b>objeto terminado</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_3-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Las escenas también son <b>reutilizables</b>, lo que significa que puedes crear una escena para un personaje, otra para un enemigo, y <b>usarlas muchas veces en tu juego</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_3-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Tambien puedes colocar <b>escenas dentro de otras escenas</b>, lo que te permite crear <b>escenas complejas</b> y <b>reutilizables</b>. Entonces, tu <b>nivel</b> puede ser una escena que contenga a tu <b>personaje</b>, <b>enemigos</b>, <b>armas</b>, <b>ui</b> y <b>muchas otras escenas</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_3-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Es por esto que en Godot no construyes una unica cosa gigante, sino que <b>construyes muchas escenas pequeñas reutilizables y las combinas entre si</b>.' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"Construye pequeño, reutiliza y combina."</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: PADRE E HIJO ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-padre-hijo',
      title: 'Padre e hijo',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot padre', 'godot padre hijos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES UN PADRE E HIJO? ::::::::::::::::
        {
          title: 'Que es un nodo Padre y un nodo Hijo?',
          content: [
            { 
              type: 'p', 
              text: 'En Godot existe una relación entre los <b>nodos</b>, en donde algunos son llamados <b>"Padre"</b> y otros son llamados <b>"Hijo"</b>. Esto tiene que ver con la forma en que se <b>organizan los nodos en la escena</b>.' 
            },
            { 
              type: 'p', 
              text: 'Imagina que tienes un <b>nodo que es el padre</b>, y tienes otros <b>nodos que son sus hijos</b>. El padre esta mas <b>arriba</b> en el árbol de nodos, y los nodos hijos estan <b>conectados por debajo</b> de este.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_4-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Por ejemplo, el Jugador podría ser el <b>nodo padre</b>, y su <b>sprite</b>, <b>colisiones</b> y <b>cámara</b> serían sus <b>nodos hijos</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_4-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Ahora viene la parte importante, si el <b>padre se mueve</b>, los <b>hijos se moveran con el</b>. No necesitas mover cada hijo de forma separada, por eso los nombres de padre e hijo tienen sentido. El padre controla la estructura mas grande, y los hijos son parte de esta. Juntos forman el <b>árbol de nodos</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_4-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"El padre lidera, los hijos siguen."</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: ARBOL DE ESCENAS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-arbol-escenas',
      title: 'Árbol de escenas',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot arbol de escenas', 'godot arbol de escenas conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES UN ARBOL DE ESCENAS? ::::::::::::::::
        {
          title: 'Que es el Árbol de Escenas?',
          content: [
            { 
              type: 'p', 
              text: 'El <b>Árbol de Escenas</b> es una estructura que representa la jerarquía de escenas en Godot. Se llama asi porque los <b>nodos</b> estan <b>organizados como un árbol</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_5-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'En la cima del árbol tienes un <b>nodo principal</b>, puedes pensar en el como la <b>"raiz"</b> del árbol. Luego, debajo del nodo principal estan sus <b>nodos hijos</b>, los que a su vez tambien pueden tener sus propios hijos, y asi sucesivamente, por lo que la estructura se sigue ramificando y volviendo mas compleja.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_5-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Por ejemplo, el Jugador puede tener su <b>sprite</b>, <b>colisiones</b> y <b>cámara</b>, y quizas la cámara tiene otro nodo debajo de ella. La jerarquia completa se llama <b>Árbol de Escenas</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_5-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"Raiz arriba, ramas debajo."</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: INSTANCIAS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-instancias',
      title: 'Instancias',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot instancias', 'godot instancias conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES UNA INSTANCIA? ::::::::::::::::
        {
          title: 'Que es una Instancia?',
          content: [
            { 
              type: 'p', 
              text: 'Piensa en un calabozo en un videojuego online. Ahora imagina dos grupos diferentes de jugadores entrando a ese mismo calabozo. A primera vista, parece que estan entrando al mismo lugar, mismas habitaciones, mismos enemigos, etc.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_6-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Pero, bueno, en realidad cada grupo esta en un <b>calabozo diferente</b>. Verás, cada grupo tiene su propia <b>instancia</b> de calabozo, con sus propios <b>nodos</b> y <b>escenas hijas</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_6-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Puedes pensar en el calabozo mismo como un <b>plano o modelo detallado</b> (blueprint), el cual define como deberia verse el calabozo y que es lo que hay en su interior. Cada vez que el videojuego necesita un nuevo calabozo, crea una <b>instancia</b> de este plano, con sus propios <b>nodos</b> y <b>escenas hijas</b>, y ahora esa instancia puede vivir de forma independiente a las demas instancias.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_6-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Puedes crear una escena para representar a un <b>enemigo</b>, ese enemigo es el <b>plano o modelo detallado (blueprint)</b>. Luego, puedes añadir ese mismo enemigo <b>5 veces</b> en el videojuego, lo que significa que tendras <b>5 instancias de ese enemigo</b>. Cada uno viene desde la misma escena, pero cada uno es un objeto independiente con su propio estado y propiedades.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_6-4.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"Un plano, muchas instancias."</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: COMPOSICION ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-composicion',
      title: 'Composición',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot composicion', 'godot composicion conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE SIGNIFICA COMPOSICION EN GODOT? ::::::::::::::::
        {
          title: 'Que significa Composición en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'La palabra <b>"Composición"</b> viene de la palabra en latín "com-poner", que significa <b>"construir algo a partir de partes mas pequeñas"</b>.' 
            },
            { 
              type: 'p', 
              text: 'Piensa en el <b>Jugador (personaje)</b> de un videojuego. El Jugador no es solo una única cosa, ya que puede tener un <b>arma</b>, <b>puntos de vida</b>, una <b>hitbox</b>, un <b>inventario</b>, quizas algunas <b>habilidades</b>, etc. Y puedes tratar de poner toda esa logica directamente dentro del <b>script del jugador</b>.. o tambien puedes <b>construir el Jugador de partes separadas mas pequeñas</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_7-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'El <b>arma</b> maneja la lógica del arma, el <b>sistema de vida</b> maneja la vida del jugador, la <b>hitbox</b> maneja los golpes al personaje, y el <b>jugador (personaje)</b> simplemente se encarga de juntar todas esas partes para que funcionen juntas. Eso es la <b>Composición</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_7-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Tomas partes pequeñas e independientes y las combinas para crear algo mas grande. Entonces, en vez de preguntarte como hacer un objeto que haga todo, preguntate que piezas mas pequeñas necesito combinar para crearlo.' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"Piezas pequeñas, grandes cosas."</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: INSPECTOR ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-inspector',
      title: 'Inspector',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot inspector', 'godot inspector conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES EL INSPECTOR EN GODOT? ::::::::::::::::
        {
          title: 'Que es el Inspector en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que <b>seleccionas</b> el nodo del jugador. El jugador tiene mucha informacion asociada a el, como su <b>posicion</b>, su <b>rotacion</b>, su <b>escala</b>, si es <b>visible</b> o no, etc. Y ahora tenemos una pregunta: como podemos ver y cambiar todos esos valores?' 
            },
            { 
              type: 'p', 
              text: 'Para eso es que necesitamos el <b>Inspector</b>. El <b>Inspector</b> es una ventana que te permite ver y cambiar la informacion de los nodos seleccionados. Es como una especie de <b>panel de control</b> para los nodos.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_8-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'La palabra <b>"Inspect" (inspeccionar)</b> significa <b>"Mirar algo de cerca y ver sus detalles"</b>. Eso es exactamente lo que ocurre aqui. Seleccionas un nodo y el inspector te <b>muestra las propiedades de ese nodo</b>, las que tambien puedes <b>modificar directamente</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_8-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Si cambias su <b>posicion</b>, el nodo se movera a esa coordenada. Si cambias su <b>rotacion</b>, el nodo rotará en ese angulo. Si cambias su <b>escala</b>, el nodo crecera o se achicará en esa cantidad. Y si cambias su <b>visibilidad</b>, el nodo se hara visible o invisible.' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"Selecciona, inspecciona, cambia."</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: PROPIEDADES Y METODOS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-propiedades-metodos',
      title: 'Propiedades y Métodos',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot propiedades', 'godot propiedades conceptos', 'godot metodos', 'godot metodos conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE SON LAS PROPIEDADES Y METODOS EN GODOT? ::::::::::::::::
        {
          title: 'Que son las Propiedades y Métodos en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que tienes un personaje en tu videojuego y el personaje tiene <b>"vida" igual a 100</b>, <b>"velocidad" igual a 200</b> y su <b>"visibilidad" es igual a true</b>. Estos valores nos dicen algo acerca del personaje justo ahora, como cuanta vida tiene, que tan rapido se mueve y si esta visible o no.' 
            },
            { 
              type: 'p', 
              text: 'En Godot, los valores que describen un objeto como este se llaman <b>"Propiedades"</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_9-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Las <b>propiedades</b> responden una pregunta: <b>"Que valores tiene este objeto en este momento?"</b>',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_9-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Ahora, imagina que quieres hacer que el personaje <b>haga algo</b>, por ejemplo, <b>desaparecer de la pantalla</b>. Podríamos escribir entonces un script con `hide()` para que el personaje desaparezca.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_9-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Nota la diferencia, <b>"visible"</b> describe un estado del jugador, mientras que <b>"hide()"</b> le dice al jugador que debe hacer. A esto le llamamos un <b>"Metodo"</b>.' 
            },
            { 
              type: 'p', 
              text: 'Un <b>metodo</b> es simplemente una acción que el objeto sabe realizar.' 
            },
            { 
              type: 'p', 
              text: 'Estas dos ideas (<b>propiedades</b> y <b>metodos</b>) suelen trabajar juntas. Cuando llamamos al metodo <b>"hide()"</b>, Godot cambia la propiedad <b>"visible"</b> del objeto a <b>false</b>. Entonces el metodo realizo una acción, y esa acción cambio una propiedad.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_9-4.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Las <b>propiedades</b> describen un objeto, mientras que los <b>metodos</b> le dicen al objeto que haga algo.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_9-5.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, cuando veas algo como `character.health` significa "dame el valor que pertenece a este personaje", pero cuando veas `character.hide()` significa "haz que este personaje realice esta acción".' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>character.health -> lo que tiene</b>',
                '<b>character.hide() -> lo que puede hacer</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: SCRIPTS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-scripts',
      title: 'Scripts',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot scripts', 'godot scripts conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE SON LOS SCRIPTS EN GODOT? ::::::::::::::::
        {
          title: 'Que son los Scripts en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que pones una <b>moneda</b> en tu videojuego. Se ve como una moneda, pero <b>quieres que gire</b>, como sabe la moneda que debe girar? De momento no puede, ya que solo es un objeto visual (solo tiene una imagen y nada mas).' 
            },
            { 
              type: 'p', 
              text: 'Para poder girar la moneda debes darle <b>instrucciones</b>, como por ejemplo, <b>"gira de manera indefinida"</b>. Estas instrucciones escritas en código son lo que llamamos un <b>script</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_10-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'En Godot, puedes añadir un <b>script</b> a cualquier nodo. En este ejemplo, añadimos un script al nodo que muestra la moneda.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_10-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_10-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_10-4.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Piensa en ello como <b>"darle a una parte de tu videojuego un trabajo que realizar"</b>. Cuando el videojuego esta ejecutandose, la moneda empieza a girar.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_10-5.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Ahora, si colocas una segunda moneda justo al lado de la primera (misma imagen), pero <b>sin un script asignado</b>, esta no girará. Esto ocurre porque la logica del movimiento esta en el script, y sin esto, no hay instrucciones para que la moneda gire.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_10-6.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, <b>donde va el script?</b> El codigo vive en un <b>archivo dentro del proyecto del videojuego</b>, y puedes asociarlo al nodo que necesite ese comportamiento. Puedes escribir esas instrucciones en <b>GD Script</b>, el lenguaje de programación de Godot.' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"El Script contiene las instrucciones, los Nodos las usan."</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: PROCESS ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-process',
      title: 'Process / _process(delta)',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot process', 'godot process conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE SIGNIFICA PROCESS EN GODOT? ::::::::::::::::
        {
          title: 'Que significa Process en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Piensa en algo en tu videojuego que se tenga que <b>mantener actualizndo constantemente</b>. Por ejemplo, imagina una flecha apuntando hacia el jugador; Si el jugador se mueve, entonces la flecha necesita rotar, luego si el jugador se vuelve a mover, la flecha debe rotar nuevamente.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_11-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, hacer este chequeo una vez no es suficiente, el videojuego debe seguir <b>procesando esa logica una y otra vez</b>, y para eso existe <b>Process</b> (`_process(delta)`), una <b>funcion especial que se ejecuta continuamente en Godot</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_11-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Godot llama a la funcion `_process(delta)` en <b>cada frame (fotograma) renderizado</b> del videojuego. Esto significa que si tu videojuego corre a <b>60 FPS (frames por segundo)</b>, la funcion se llamara <b>60 veces por segundo</b>. Tambien, si tu videojuego corre a mas o menos FPS, la funcion se llamara el numero de veces correspondiente.' 
            },
            { 
              type: 'p', 
              text: 'Esto es útil para cosas que se deben <b>actualizar constantemente</b>, como <b>animaciones de ui</b>, <b>efectos visuales</b>, <b>seguir el mouse</b>, <b>rotar algo respecto a un objetivo</b>, etc.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_11-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Es por esto que se llama <b>"Process"</b>, ya que es donde <b>Godot</b> mantiene <b>procesando logica frame a frame</b>.' 
            },
            { 
              type: 'p', 
              text: 'Naturalmente, si <b>"Process"</b> se ejecuta una cantidad de veces diferente dependiendo de los FPS, como logramos que se ejecute <b>la misma cantidad de veces</b> en todos los casos?' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_11-4.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Eso lo aprenderemos en la siguiente sección 😀.' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"Process = cada frame"</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: DELTA ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-delta',
      title: 'Delta',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot delta', 'godot delta conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE SIGNIFICA DELTA EN GODOT? ::::::::::::::::
        {
          title: 'Que significa Delta en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'La palabra <b>"Delta"</b> significa <b>"diferencia"</b>. En el contexto de Godot, se refiere a la <b>diferencia de tiempo</b> entre un frame y el siguiente.' 
            },
            { 
              type: 'p', 
              text: 'En la funcion especial `_process(delta)`, el parametro `delta` es la <b>diferencia de tiempo</b> entre el <b>frame actual</b> y el <b>frame anterior</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_12-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, <b>para que necesitamos delta?</b>' 
            },
            { 
              type: 'p', 
              text: 'Imagina un auto que se mueve a <b>60 Km por hora</b>, eso nos dice su <b>velocidad</b>, pero la velocidad por si sola no nos dice que tan lejos se movio el auto, para eso necesitaríamos tambien cuanto tiempo pasó.',
            },
            { 
              type: 'p', 
              text: 'Si paso una hora, entonces el auto se movio 60 kilometros. Si paso media hora, entonces el auto se movio 30 kilometros. Si solo paso un minuto, el auto se movio un kilometro. Un videojuego funciona de la misma manera.',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_12-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Imagina que el jugador se mueve a 100 pixeles por segundo. La velocidad nos dice que tan lejos deberia moverse el jugador en un segundo, y <b>delta</b> nos dice cuanto tiempo paso desde el frame anterior.' 
            },
            { 
              type: 'p', 
              text: 'Entonces, cuando escribimos <b>velocidad multiplicada por delta</b>, estamos diciento <b>"que tan lejos deberia moverse el jugador en este intervalo de tiempo"</b>. Y esto es lo que nos interesa, ya que es lo que usaremos para mover el jugador.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_12-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Si el frame fue muy corto, el jugador se mueve solo un poco. Si el frame se tardó mas, entonces el jugador se mueve mas. Entonces, aún si un computador renderiza mas frames que otro, despues de un segundo, ambos jugadores se mueven la misma distancia.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_12-4.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Para esto sirve <b>delta</b>, hace que el movimiento dependa del <b>tiempo y no de cuantos frames (FPS) tu computador puede renderizar</b>.' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              paragraphs: [
                '<b>"Delta = tiempo entre frames"</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: READY ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-ready',
      title: 'Ready / _ready()',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot ready', 'godot ready conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE SIGNIFICA READY EN GODOT? ::::::::::::::::
        {
          title: 'Que significa Ready en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que tienes una escena de jugador, dentro tienes un nodo de <b>sprite</b>, <b>colision</b>, <b>camara</b> y quizas un <b>timer</b>. Ahora imagina que tu script quiere usar esos nodos <b>apenas el jugador aparece en el videojuego</b>. Ahora surge una pregunta, cuando están disponibles esos nodos para ser usados?' 
            },
            { 
              type: 'p', 
              text: 'Esto es exactamente lo que la funcion especial <b>"Ready"</b> (`_ready()`) nos dice. Godot primero <b>crea los nodos</b>, luego los <b>añade al arbol de escenas</b>, luego <b>prepara sus nodos hijos</b> y cuando esos nodos estan listos para empezar a trabajar Godot llama a la funcion `_ready()`.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_13-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, si escribes `func _ready()` en tu script, el codigo dentro de la funcion se ejecutará <b>cuando el nodo este listo (ready) y sus nodos hijos esten ahí (creados y listos)</b>.' 
            },
            { 
              type: 'p', 
              text: 'Por ejemplo, puedes usar <b>"Ready"</b> para <b>asignar algunos valores iniciales</b>, <b>conectar algo</b>, <b>encontrar otro nodo</b>, o <b>preparar el nodo antes de que el videojuego comience</b>, etc.',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_13-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'a diferencia de `_process(delta)`, `_ready()` no se ejecuta en cada frame, sino quese ejecuta <b>una sola vez</b> cuando el nodo esta listo, y no se ejecuta nuevamente hasta que el nodo sea destruido.',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_13-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: '_ready()',
              paragraphs: [
                '<b>"Se ejecuta una sola vez, cuando el nodo y sus hijos estan listos"</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: GET_NODE ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-get_node',
      title: 'get_node()',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot get_node', 'godot get_node conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE SIGNIFICA GET_NODE EN GODOT? ::::::::::::::::
        {
          title: 'Que es get_node() en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que tu escena de jugador se ve algo como esto: un nodo <b>"Player" (padre)</b> y un nodo <b>"Sprite2D" (hijo)</b>. Puedes ver claramente el nodo "Sprite2D" en el árbol de escenas, pero ahora el script de tu nodo "Player" quiere cambiar la imagen de su nodo "Sprite2D", o quizas ocultarlo.' 
            },
            { 
              type: 'p', 
              text: 'Entonces tenemos un problema, como hacemos para que <b>el script apunte a ese nodo especifico?</b> Y eso es justamente lo que hace el metodo `get_node()`.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_14-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Podemos escribir `get_node("Sprite2D")` en nuestro script para obtener el nodo "Sprite2D". El nombre nos indica exactamente lo que hace, es decir, <b>"obtén el nodo llamado Sprite2D"</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_14-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Ahora, si nuestro nodo estuviera mas profundo en el arbol de escenas, por ejemplo, <b>"Player"/"Graphics"/"Sprite2D"</b>, podemos escribir `get_node("Graphics/Sprite2D")` para obtener el nodo "Sprite2D".',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_14-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Básicamente le estamos dando a Godot un <b>"camino" (path)</b> a traves del árbol de escenas <b>para llegar al nodo deseado</b>.',
            },
            { 
              type: 'p', 
              text: 'Tambien, como haremos esto todo el tiempo, Godot tambien nos entrega un <b>shortcut (atajo)</b> para hacer esto mas facil. Podemos escribir `$Sprite2D` para conseguir el mismo nodo, sin tener que escribir el camino completo.',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_14-4.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Ahora, que pasaría si quieres usar ese nodo Sprite2D muchas veces? podemos almacenar la <b>referencia a ese nodo</b> en una <b>variable</b>, y luego usar esa variable para acceder al nodo.',
            },
            { 
              type: 'p', 
              text: 'Podemos usar tambien el ampersand <b>"onready"</b> para declarar la variable fuera de la funcion y asignarle un valor cuando el nodo este listo. La referencia al nodo en una variable quedaria asi: `@onready var sprite = $Sprite2D`',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_14-5.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: 'get_node()',
              paragraphs: [
                '<b>encuentra el nodo por su path, $ es el shortcut y @onready espera a que el nodo este listo</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: LEER ERRORES ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-leer-errores',
      title: 'Leer Errores',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot leer errores', 'godot leer errores conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: LEER ERRORES EN GODOT ::::::::::::::::
        {
          title: 'Leyendo Errores en Godot',
          content: [
            { 
              type: 'p', 
              text: 'Cuando ejecutas tu juego y Godot de la nada muestra un <b>error en color rojo</b>, una reaccion comun sería empezar a cambiar cosas, pero primero, <b>mira lo que Godot esta realmente diciendo</b>. ' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_15-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Imagina que el error dice: <b>Node not found: "Player"</b>. Esto ya nos da nuestra primera pista, Godot intentó encontrar un nodo llamado "Player" pero fallo. Ahora mira el resto del error, Godot tambien nos dice que <b>script y que linea de codigo es el que causo el problema</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_15-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, podemos ir directamente al script y quizas nuestro codigo dice `$Player`, es decir, <b>"encuentra este nodo directamente desde aqui"</b>' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_15-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Pero ahora mira el arbol de escenas, el nodo "Player" <b>no esta directamente ahi, sino que esta dentro del nodo "Actors"</b>, entonces el path real sería <b>"Actors/Player"</b>.',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_15-4.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Una vez que <b>corregimos el error</b> cambiando el path <b>"$Player"</b> a <b>"$Actors/Player"</b>, el error se <b>resuelve</b> y ahora Godot puede <b>encontrar el nodo</b>. ',
            },
            { 
              type: 'p', 
              text: 'Ahora, tambien hay veces en que un solo error puede causar varios otros errores, por lo que arreglando el primer error puede ayudar a resolver los otros.',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_15-5.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Es por esto que un mensaje de error es útil. Nos dice <b>"que falló"</b>, <b>"dónde fallo"</b> y a veces nos da una pista del <b>"porque fallo"</b>.',
            },
            { 
              type: 'p', 
              text: 'Entonces, cuando veas un error rojo, <b>lee el mensaje</b>, <b>verifica el script y la linea del error</b>, <b>arregla el error</b>, y luego <b>vuelve a ejecutar el juego</b>.',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_15-6.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Un error no es solo un mensaje rojo, es Godot diciendote donde el juego dejo de hacer sentido.',
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: 'Lee el error',
              paragraphs: [
                '<b>qué, donde y porqué fallo</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: EXPORT ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-export',
      title: '@export',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot export', 'godot export conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES @EXPORT EN GODOT? ::::::::::::::::
        {
          title: 'Que es @export en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que tu jugador tiene un valor de velocidad que es igual a 200, luego quieres hacer al jugador un poco mas rápido, por lo que abres el script, cambias el valor de 200 a 250, guardas los cambios y vuelves a ejecutar el juego. Sigues repitiendo este proceso hasta que te sientes agusto, pero hay una mejor forma de hacer esto.' 
            },
            { 
              type: 'p', 
              text: 'Puedes usar `@export var speed = 200` para declarar la variable <b>speed</b>, pero ahora <b>la variable aparecera en el inspector de Godot</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_16-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'El nombre <b>"Export"</b> nos indica que esta pasando, <b>"EXPORT" = "llevar afuera"</b>. ' 
            },
            { 
              type: 'p', 
              text: 'La variable estaba <b>dentro del script</b>, pero <b>export</b> la expone <b>fuera del script</b>, entonces la podemos editar directamente desde el inspector de Godot. Tambien podemos usar export con otras variables, como speed, damage, jump_force, etc. y editar sus valores directamente, sin necesidad de tocar el codigo cada vez.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_16-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: '<b>Diferentes instancias</b> de la misma escena pueden tener <b>diferentes valores exportados</b>, por ejemplo, un enemigo podría tener `speed = 100` y otro `speed = 200`, mientras ambos usan el mismo script',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_16-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Eso es para lo que sirve <b>"@export"</b>. Toma un valor desde dentro de un script, y lo expone dentro del inspector, para que pueda ser configurada desde afuera.',
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: '@export',
              paragraphs: [
                '<b>Pon una variable del script en el inspector. Cambiala desde fuera del código.</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: SEÑALES ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-senales',
      title: 'Señales',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot senales', 'godot senales conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES SEÑALES EN GODOT? ::::::::::::::::
        {
          title: 'Que son las Señales en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina un enemigo que muere. Ese unico <b>evento</b> deberia activar varios <b>eventos diferentes</b>, no? La puntuación deberia aumentar, suena un sonido, la UI se actualiza, quizas una puerta se abre, etc.' 
            },
            { 
              type: 'p', 
              text: 'El enemigo podría tratar de controlar todos estos sistemas directamente, pero entonces el enemigo tendría que saber sobre la puntuación, la UI, el sistema de sonidos, la puerta, etc.',
            },
            { 
              type: 'p', 
              text: 'En vez de tener que hacer todo eso, el enemigo podría simplemente <b>emitir una señal (signal)</b> cuando muere (como avisando "ya morí"). Luego, cualquier cosa interesada en ese evento puede <b>escuchar y reaccionar a esa señal</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_17-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'El sistema de puntuación añade puntos, la UI se actualiza, la puerta se abre, etc. El enemigo no necesita saber quien esta escuchando, simplemente <b>anuncia lo que pasa</b>, y es por eso que se llama una <b>"señal"</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_17-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Una parte de tu juego <b>envia información</b>, <b>anuncia que algo pasó</b>, y otras partes de tu juego pueden <b>reaccionar a eso</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_17-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: 'Las Señales anuncian',
              paragraphs: [
                '<b>No controlan.</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: BODY2D ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-body2d',
      title: 'PhysicsBody2D',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot body2d', 'godot body2d conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: CUAL BODY2D USAR EN GODOT? ::::::::::::::::
        {
          title: 'Cuál Body2D usar en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que estamos construyendo un juego simple y tenemos tres cosas, un <b>jugador</b>, una <b>caja</b> y un <b>muro</b>. Los tres necesitan <b>colisiones</b>, pero deberian comportarse todos de la misma forma? <b>Definitivamente no</b>.' 
            },
            { 
              type: 'p', 
              text: 'El <b>jugador</b> debería moverse exactamente cuando le indiquemos que se mueva. Si presionas derecha, el jugador deberia moverse hacia la derecha. Si presionas el salto, el jugador deberia saltar, etc. Para este tipo de objetos Godot nos entrega el nodo <b>"CharacterBody2D"</b>. Este <b>nodo Body2D</b> esta diseñado para cosas cuyo <b>movimiento controlamos por código</b>.',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_18-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Ahora miremos la <b>caja</b>. Quizas querramos que "caiga" por la gravedad, que pueda ser "empujada", que "rebote", que reacciones a otros objetos con fisica, etc. aqui podemos usar el nodo <b>"RigidBody2D"</b>. Este <b>nodo Body2D</b> esta diseñado para cosas cuyo <b>movimiento es controlado por la simulación de fisica</b>.' 
            },
            { 
              type: 'p', 
              text: 'En vez de decirle exactamente donde moverse, dejamos que <b>fuerzas</b> y <b>colisiones</b> lo afecten.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_18-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Finalmente, miremos el <b>muro</b>. Este deberia colisionar con cosas, pero <b>la fisica no deberia moverlo ni afectarlo cuando algo colisiona con el</b>. Aqui podemos usar el nodo <b>"StaticBody2D"</b>. Este <b>nodo Body2D</b> esta diseñado para cosas que son <b>"estáticas"</b>, pero que necesitan colisionar con otros objetos.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_18-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Los tres son <b>"PhysicsBody2D"</b>, pero la diferencia importante es quien controla su movimiento. <b>CharacterBody2D</b> es controlado por código, <b>RigidBody2D</b> es controlado por fisica, y <b>StaticBody2D</b> es estático.' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: '3 Cuerpos Físicos',
              paragraphs: [
                '<b>CharacterBody2D</b> = <b>tu codigo lo mueve</b>',
                '<b>RigidBody2D</b> = <b>la fisica lo mueve</b>',
                '<b>StaticBody2D</b> = <b>se mantiene fijo</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: COLLISIONSHAPE2D ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-collision-shape2d',
      title: 'CollisionShape2D',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot collisionshape2d', 'godot collisionshape2d conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES COLLISIONSHAPE2D EN GODOT? ::::::::::::::::
        {
          title: 'Que es CollisionShape2D en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que creamos un <b>jugador</b> usando un nodo <b>"CharacterBody2D"</b> y queremos que el jugador <b>colisione</b> con los muros. Por ahora tenemos un problema, exactamente <b>qué deberia colisionar con el muro?</b> ' 
            },
            { 
              type: 'p', 
              text: 'Es nuestro jugador un <b>circulo?</b> un <b>rectangulo?</b> una <b>capsula?</b> que tan grande es? El <b>"CharacterBody2D"</b> sólo le dice a Godot que esto es un <b>"PhysicsBody2D"</b>, pero no le dice que <b>forma física</b> tiene. Para esto es que debemos añadir un <b>"CollisionShape2D"</b>.',
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_19-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'El nombre nos dice exactamente que es lo que hace. <b>"CollisionShape2D"</b> = <b>"Collision"</b> (usado para colisiones) + <b>"Shape"</b> (la forma física del objeto) + <b>"2D"</b> (para escenarios 2D). ' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_19-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Por ejemplo, digamos que tenemos un jugador y le añadimos un <b>"CollisionShape2D"</b> con forma de <b>capsula</b>. Ahora cuando el jugador choque contra el muro, Godot <b>no verifica los pixeles del sprite</b>, sino que<b> verifica la forma física de colision</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_19-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Si hacemos la forma de colision mas ancha, el jugador colisionara con el muro antes. Si la hacemos mas estrecha, el jugador podrá llegar mas cerca del muro antes de colisionar con el.' 
            },
            { 
              type: 'p', 
              text: 'Entonces, estos dos nodos tienen trabajos distintos. <b>"CharacterBody2D"</b> dice "soy un cuerpo físico para escenarios 2D (PhysicsBody2D)", mientras que <b>"CollisionShape2D"</b> dice "y esta es la forma que deberias verificar para las colisiones".' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: 'ColisionShape2D',
              paragraphs: [
                '<b>CharacterBody2D</b> = <b>el cuerpo físico</b>',
                '<b>CollisionShape2D</b> = <b>la forma de colision</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: VECTOR2 ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-vector2',
      title: 'Vector2',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot vector2', 'godot vector2 conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES UN VECTOR2 EN GODOT? ::::::::::::::::
        {
          title: 'Que es un Vector2 en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Empecemos por el nombre. Un <b>vector</b> es algo que tiene una <b>dirección y un largo</b>. La forma mas fácil de imaginarlo es como una <b>flecha</b>. ' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_20-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'La <b>dirección a la cual apunta la flecha</b> nos dice <b>hacia donde</b> debería ir algo, y el <b>largo de la flecha</b> nos dice que tanto debería moverse.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_20-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Ahora, el <b>"2"</b> en <b>"Vector2"</b> simplemente nos dice que hablamos en <b>2 dimensiones</b> (<b>x</b> e <b>y</b>).' 
            },
            { 
              type: 'p', 
              text: 'Por ejemplo, <b>Vector2(1, 0)</b> apunta hacia la <b>derecha</b>, <b>Vector2(-1, 0)</b> apunta hacia la <b>izquierda</b>, <b>Vector2(0, -1)</b> apunta hacia <b>arriba</b>, y <b>Vector2(0, 1)</b> apunta hacia <b>abajo</b>. Luego, si ambos ejes <b>x</b> e <b>y</b> cambian, Vector2(1, -1) apunta hacia la <b>diagonal superior derecha</b>, etc.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_20-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Es por esto que los <b>Vectores</b> son tan utiles en videojuegos. Podemos usarlos para describir <b>movimiento</b>, <b>velocidad</b>, <b>knockback</b>, o incluso la <b>direccion de un jugador hacia un enemigo</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_20-4.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Asi que cuando veas <b>Vector2</b> piensa <b>"es una flecha en un escenario 2D"</b>, sus ejes <b>x</b> e <b>y</b> nos dicen <b>hacia donde apunta la flecha</b>, y su <b>largo</b> nos dice <b>que tan fuerte o distante</b> el vector es.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_20-5.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: 'Vector2',
              paragraphs: [
                '<b>Flecha en un escenario 2D</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: POSICION LOCAL Y GLOBAL ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-posicion-local-global',
      title: 'Posición Local y Global',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot posicion local global', 'godot posicion local global conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES POSICION LOCAL Y GLOBAL EN GODOT? ::::::::::::::::
        {
          title: 'Que es Posición Local y Global en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Imagina que tu jugador esta sosteniendo una espada. La espada es un <b>nodo hijo</b> del jugador. Ahora, digamos que la espada esta siempre a <b>20 pixeles a la derecha</b> del jugador. Esa es su <b>posición local</b> (<b>position</b> en Godot).' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_21-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Porque se dice que es <b>"local"</b>? Porque esa posicion esta medida <b>localmente</b>, <b>relativa a su nodo padre</b>. Incluso si el jugador se mueve a lo largo de todo el mapa, la espada siempre mantendra la misma <b>posicion local</b>.' 
            },
            { 
              type: 'p', 
              text: 'A pesar de que su <b>posición local</b> siempre es la misma, su posición en todo el mundo del videojuego esta cambiando, con eso nos referimos a su <b>posición global</b> (<b>global_position</b> en Godot).' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_21-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, si el jugador esta en la posicion `Vector2(300, 100)`, la espada estará en la posicion global `Vector2(320, 100)`. ' 
            },
            { 
              type: 'p', 
              text: 'Es la misma espada, pero con dos formas de describir donde esta. La <b>posicion local</b> (position) pregunta <b>"donde estoy en comparación a mi padre?"</b>, mientras que la <b>posicion global</b> (global_position) pregunta <b>"donde estoy respecto a todo el mundo?"</b>' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: 'Local vs Global',
              paragraphs: [
                '<b>position</b> = respecto al nodo padre',
                '<b>global_position</b> = respecto al mundo',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: VELOCITY ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-velocity',
      title: 'Velocity',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot velocity', 'godot velocity conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES VELOCITY EN GODOT? ::::::::::::::::
        {
          title: 'Que significa Velocity en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Comparemos <b>"velocity"</b> (velocidad) con <b>"speed"</b> (rapidez). Si digo que un auto se esta moviendo a 100 Km/h, eso te dice <b>que tan rápido se mueve</b> y eso es <b>"speed"</b>. Ahora, si digo que el auto se esta moviendo a 100 Km/h hacia el este, entoncestambien sabes la dirección ademas de que tan rápido se mueve, y eso es <b>"velocity"</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_22-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: '<b>Velocity</b> nos dice dos cosas: <b>que tan rápido se mueve</b> y <b>en que dirección se mueve</b>. Es por esto que velocity es usualmente representada por un <b>Vector</b>.' 
            },
            { 
              type: 'p', 
              text: 'Por ejemplo, `velocity = Vector2(200, 0)`, el Vector apunta hacia la <b>derecha</b>, y su largo (200) representa su rapidez (speed). Si lo cambiamos a `velocity = Vector2(-200, 0)`, entonces la rapidez es la misma, pero la dirección ahora es hacia la <b>izquierda</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_22-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, <b>"speed"</b> nos dice <b>"que tan rápido"</b>, mientras que <b>"velocity"</b> nos dice <b>"que tan rápido y hacia donde"</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_22-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: 'Velocity',
              paragraphs: [
                '<b>= Speed + Dirección</b>',
              ]
            },
          ],
        },
      ],
    },
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // :::::::::::::::::::::::::::: VELOCITY ::::::::::::::::::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
      slug: 'godot-normalize',
      title: 'Normalize',
      keywords: ['Godot', 'game development', 'game engine', 'game engine godot', 'game engine godot engine', 'godot normalize', 'godot normalize conceptos'],
      summary: '',
      sections: [
        // :::::::::::::::: QUE ES NORMALIZE EN GODOT? ::::::::::::::::
        {
          title: 'Que significa Normalize en Godot?',
          content: [
            { 
              type: 'p', 
              text: 'Empecemos con un problema comun de movimiento. Moverse a la <b>derecha</b> podría usar <b>Vector2(1, 0)</b>, y moverse hacia <b>arriba</b> podría usar <b>Vector2(0, -1)</b>, pero moverse en <b>diagonal</b> podría usar <b>Vector2(1, -1)</b>.' 
            },
            { 
              type: 'p', 
              text: 'Y aqui está el problema, <b>el vector diagonal es mas largo que el vector horizontal o vertical</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_23-1.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, si lo usas directamente para el movimiento de algun objeto, el objeto se <b>moverá mas rápido en diagonal que en horizontal o vertical</b>, y es ahí donde <b>Normalize</b> viene al rescate.' 
            },
            { 
              type: 'p', 
              text: 'El <b>"normalizar"</b> algo implica llevarlo a un <b>"largo estandar"</b>, entonces para los Vectores, ese largo estandar es <b>1</b>. Por lo que cuando normalizas el <b>Vector2(1, -1)</b>, la direccion se mantiene igual, aun apunta en diagonal, pero su largo ahora es reducido a <b>1</b>.' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_23-2.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Ahora, el movimiendo hacia arriba, abajo, izquierda, derecha, diagonal, etc. pueden usar vectores con el mismo largo, y ahora puedes aplicar tu "speed" (rapidez) real de forma separada' 
            },
            {
              type: 'image',
              compact: true,
              src: '/imagenes/godot/godot_conceptos_basicos_23-3.png',
              alt: 'Conceptos basicos de Godot',
            },
            { 
              type: 'p', 
              text: 'Entonces, <b>"normalize"</b> hace dos cosas: <b>mantiene la dirección</b> y <b>hace que el largo de los vectores sea 1</b>. Es por esto que <b>"normalize"</b> es tan util para el <b>movimiento</b>.' 
            },
            { 
              type: 'alert',
              variant: 'primary',
              title: 'Normalize',
              paragraphs: [
                '<b>= misma dirección, largo 1</b>',
                '`velocity = direction.normalized() * speed`',
              ]
            },
          ],
        },
      ],
    },
  ],
}
