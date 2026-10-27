// Panel izquierdo: lista de apuntes por categoría.
// El nombre, el tema y el buscador viven en la barra superior.
import { useState } from 'react';
import { NavLink, useLocation, useMatch } from 'react-router-dom';
import { articlePath, countArticles, filterCatalog } from '../data/catalog.js';
import CategoryIcon from './CategoryIcon.jsx';

export default function Sidebar({ query, mobileOpen, hiddenFromKeyboard, onNavigate }) {
  // Ids de categorías plegadas. Un Set evita duplicados y hace barata la consulta.
  const [collapsed, setCollapsed] = useState(() => new Set());
  const location = useLocation();
  const match = useMatch('/docs/:categoryId/:slug');
  const activeCategoryId = match?.params.categoryId ?? '';
  const [collapsedPath, setCollapsedPath] = useState(location.pathname);

  // Al entrar a un apunte, abre su categoría si estaba plegada.
  // Se hace durante el render, igual que el cierre del menú en Layout.
  if (collapsedPath !== location.pathname) {
    setCollapsedPath(location.pathname);
    if (activeCategoryId) {
      setCollapsed((current) => {
        if (!current.has(activeCategoryId)) return current;
        const next = new Set(current);
        next.delete(activeCategoryId);
        return next;
      });
    }
  }

  const searching = query.trim().length > 0;
  const categories = filterCatalog(query);
  const total = countArticles(categories);

  // Pliega o despliega una categoría. Durante una búsqueda no hace nada:
  // los resultados tienen que verse todos, aunque la categoría estuviera cerrada.
  function toggleCategory(categoryId) {
    if (searching) return;

    setCollapsed((current) => {
      const next = new Set(current);
      if (next.has(categoryId)) next.delete(categoryId);
      else next.add(categoryId);
      return next;
    });
  }

  return (
    <aside
      className={mobileOpen ? 'sidebar open d-flex flex-column' : 'sidebar d-flex flex-column'}
      // undefined quita el atributo. false lo dejaría presente y el panel seguiría inert.
      inert={hiddenFromKeyboard || undefined}
    >
      <div className="sidebar-head px-3 py-2 border-bottom">
        <div className="d-flex align-items-center justify-content-between gap-2">
          {/* aria-live anuncia el conteo cuando el filtro de la barra cambia, sin mover el foco. */}
          <p className="small text-secondary mb-0" aria-live="polite">
            {searching ? searchStatus(total) : 'Conceptos por categoría'}
          </p>
          <button type="button" className="btn-close d-lg-none" aria-label="Cerrar el índice" onClick={onNavigate} />
        </div>
      </div>

      <nav id="indice" className="flex-grow-1 overflow-auto ps-4 pe-2 py-2" aria-label="Contenido">
        <ul className="nav nav-pills flex-column mb-2">
          <li className="nav-item">
            {/* end evita que "Inicio" quede activo en /docs/..., porque "/" es prefijo de todas las rutas. */}
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={onNavigate}
            >
              {() => (
                <>
                  <HandCursor />
                  Inicio
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {categories.length === 0 && (
          <p className="small text-secondary px-2">
            Ningún apunte coincide con <em className="fst-normal text-body">{query.trim()}</em>.
          </p>
        )}

        {categories.map((category) => {
          // En una búsqueda las categorías coincidentes se muestran abiertas sí o sí.
          const open = searching || !collapsed.has(category.id);

          return (
            <section key={category.id}>
              <button
                type="button"
                className="category-toggle"
                aria-expanded={open}
                onClick={() => toggleCategory(category.id)}
              >
                <span className="category-label">
                  <CategoryIcon src={category.icon} />
                  <span>{category.title}</span>
                </span>
                <span className="category-aside">
                  {category.version && <span className="category-version">{category.version}</span>}
                  <Chevron open={open} />
                </span>
              </button>
              {open && (
                <ul className="nav nav-pills flex-column gap-1 mb-2">
                  {category.items.map((article) => (
                    <li className="nav-item" key={article.slug}>
                      <NavLink
                        to={articlePath(category.id, article.slug)}
                        className={({ isActive }) => `nav-link py-2${isActive ? ' active' : ''}`}
                        onClick={onNavigate}
                      >
                        {() => (
                          <>
                            <HandCursor />
                            {article.title}
                          </>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </nav>
    </aside>
  );
}

// El conteo se lee en voz alta, así que 0 y 1 tienen frase propia.
function searchStatus(total) {
  if (total === 0) return 'Ningún apunte';
  if (total === 1) return '1 apunte';
  return `${total} apuntes`;
}

// Cursor del menú, encima del ítem elegido. El vaivén lo controla la barra.
function HandCursor() {
  return <img className="ff-hand" src="/imagenes/ff-hand-selector-v2.png" alt="" />;
}

// La clase "open" gira el chevron en CSS. El svg no tiene lógica propia.
function Chevron({ open }) {
  return (
    <svg className={open ? 'chevron open' : 'chevron'} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 6.2 8 10l4-3.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
