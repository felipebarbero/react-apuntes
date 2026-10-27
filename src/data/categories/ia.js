import { code } from '../code.js';

// Categoría Inteligencia artificial. El formato de cada apunte está descrito en src/data/catalog.js.

export const ia = {
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
}
