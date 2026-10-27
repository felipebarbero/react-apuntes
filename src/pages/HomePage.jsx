// Portada. Explica el proyecto y lista los temas del catálogo con enlace a cada apunte.
import { Link } from 'react-router-dom';
import { articlePath, catalog } from '../data/catalog.js';
import CategoryIcon from '../components/CategoryIcon.jsx';
import { usePageTitle } from '../hooks/usePageTitle.js';

export default function HomePage() {
  usePageTitle('Inicio');
  // Suma los apuntes de todas las categorías para el texto "N temas · M apuntes".
  const total = catalog.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <article className="home">
      <header className="card shadow-sm mb-4">
        <div className="card-body p-4 p-md-5">
          <p className="eyebrow">Proyecto personal</p>
          <h1 className="fw-semibold mb-3">Apuntes por <span className="text-secondary">Felipe Barber</span></h1>
          <p className="lead mb-3">
            Sitio web a modo de <span className="text-primary fw-bold">"documentación"</span> (hecho en React) para guardar apuntes e información útil sobre <span className="fw-bold">tecnología</span> o <span className="fw-bold">temas de interés</span>.
          </p>
          <ul>
            <li>El panel de la izquierda agrupa cada tema en categorías y secciones.</li>
            <li>El buscador superior filtra por "concepto" y abre la nota en su propia página.</li>
            <li>Dentro de cualquier página puedes usar las flechas "Anterior" y "Siguiente" para navegar.</li>
            <li>Arriba a la derecha hay un botón para cambiar el tema (claro/oscuro) y otro para activar el cursor de sección activa.</li>
          </ul>
          <p className="text-secondary mb-0 mt-4">
            {catalog.length} temas · {total} apuntes
          </p>
        </div>
      </header>

      <h2 className="h4 fw-semibold mb-3">Temas</h2>
      {/* Una tarjeta por categoría. En pantallas medianas quedan de a dos columnas. */}
      <div className="row g-3">
        {catalog.map((category) => (
          <div className="col-12 col-md-6" key={category.id}>
            <section className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="h5 card-title d-flex align-items-center gap-2">
                  <CategoryIcon src={category.icon} />
                  {category.title}
                </h3>
                <p className="card-text text-secondary">{category.description}</p>
                <ul className="list-unstyled mb-0">
                  {/* category.items.map((article) => (
                    <li key={article.slug}>
                      <Link className="category-link d-block rounded px-2 py-1" to={articlePath(category.id, article.slug)}>
                        {article.title}
                      </Link>
                    </li>
                  )) */}
                </ul>
              </div>
            </section>
          </div>
        ))}
      </div>

    </article>
  );
}
