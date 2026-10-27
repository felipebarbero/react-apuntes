// Flechas fijas para pasar al apunte anterior o al siguiente.
// Están fuera de PageTransition: si vivieran dentro, el transform de la animación
// convertiría position:fixed en algo que se mueve con el scroll.
import { Link, useMatch } from 'react-router-dom';
import { articlePath, getNeighbors } from '../data/catalog.js';

export default function DocArrows() {
  // null cuando la URL no es un apunte (inicio o 404). En ese caso no hay flechas.
  const match = useMatch('/docs/:categoryId/:slug');
  if (!match) return null;

  const { categoryId = '', slug = '' } = match.params;
  // previous y next siguen el orden del catálogo y pueden cruzar de categoría.
  const { previous, next } = getNeighbors(categoryId, slug);
  // Slug desconocido, o un catálogo de un solo apunte que además es el actual.
  if (!previous && !next) return null;

  return (
    <nav className="doc-arrows" aria-label="Apuntes vecinos">
      {/* data-page-direction lo lee PageTransition en el clic, antes de cambiar de ruta.
          -1 desliza hacia la nota anterior; 1, hacia la siguiente. */}
      {previous && (
        <Link
          className="doc-arrow doc-arrow-prev"
          data-page-direction="-1"
          to={articlePath(previous.category.id, previous.article.slug)}
          aria-label={`Anterior: ${previous.article.title}`}
        >
          <ArrowIcon direction="prev" />
        </Link>
      )}
      {next && (
        <Link
          className="doc-arrow doc-arrow-next"
          data-page-direction="1"
          to={articlePath(next.category.id, next.article.slug)}
          aria-label={`Siguiente: ${next.article.title}`}
        >
          <ArrowIcon direction="next" />
        </Link>
      )}
    </nav>
  );
}

// Solo el trazo de la flecha. El nombre del apunte destino va en aria-label, no en pantalla.
function ArrowIcon({ direction }) {
  const previous = direction === 'prev';

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={previous ? 'M14.5 5.5 8 12l6.5 6.5' : 'M9.5 5.5 16 12l-6.5 6.5'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
