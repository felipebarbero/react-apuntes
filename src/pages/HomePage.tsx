// Portada. Explica el proyecto y lista los temas del catálogo con enlace a cada apunte.
import { Link } from 'react-router-dom';
import { catalog } from '../data/catalog.ts';
import CategoryIcon from '../components/CategoryIcon.tsx';
import { usePageTitle } from '../hooks/usePageTitle.ts';

export default function HomePage() {
  usePageTitle('Inicio');
  const themes = catalog.flatMap((group) => group.categories);
  const total = themes.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <article className="home">
      <header className="card shadow-sm mb-4">
        <div className="card-body p-4 p-md-5">
          <p className="eyebrow">Proyecto personal para aprendizaje</p>
          <h1 className="fw-semibold mb-3">Apuntes de <span className="text-primary">Tecnología</span></h1>
          <p className="lead mb-3">
            Sitio a modo de <span className="fw-bold text-primary">documentación</span> para guardar resúmenes, apuntes e información útil sobre temas relacionados a <span className="fw-bold">tecnología, programación, diseño, etc.</span>
          </p>
          <div className="alert alert-info">
            <div className="alert-header">
              <span className="fw-bold">Navegación</span>
            </div>
            <div className="alert-body">
              <ul className="mb-0">
                <li>El panel de la izquierda agrupa cada tema en categorías, subcategorías y secciones.</li>
                <li>El buscador superior filtra por "concepto" y abre la nota en su propia página.</li>
                <li>Dentro de cualquier página puedes usar las flechas "Anterior" y "Siguiente" para regresar o avanzar entre las secciones.</li>
              </ul>
            </div>
          </div>
          <div className="alert alert-secondary">
            <span className="">Eventualmente se agregarán otros temas de interés general.</span>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="fw-semibold mb-3"><span className="d-inline-block me-2"><CategoryIcon src="/imagenes/categorias-iconos/github-142-svgrepo-com.svg"/></span> Puedes encontrar este proyecto en <span className="fw-bold">GitHub</span></p>
              <a href="https://github.com/felipebarbero/react-apuntes" target="_blank" rel="noopener noreferrer">
                <span>https://github.com/felipebarbero/react-apuntes</span>
              </a>
            </div>
          </div>
          <p className="text-secondary mb-0 mt-4">
            {themes.length} temas · {total} apuntes
          </p>
        </div>
      </header>

      {catalog.map((group) => (
        <section key={group.id} className="mb-4">
          <h2 className="h4 fw-semibold mb-3">{group.title}</h2>
          <div className="row g-3">
            {group.categories.map((category) => (
              <div className="col-12 col-md-6" key={category.id}>
                <section className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 card-title d-flex align-items-center gap-2">
                      <CategoryIcon src={category.icon} />
                      {category.title}
                    </h3>
                    <p className="card-text text-secondary mb-0">{category.description}</p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </section>
      ))}

    </article>
  );
}
