// Cascarón de la aplicación: barra fija, panel y el hueco donde entra cada página.
import { useEffect, useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import DocArrows from './DocArrows.jsx';
import HandMotionToggle from './HandMotionToggle.jsx';
import PageTransition from './PageTransition.jsx';
import SearchBox from './SearchBox.jsx';
import Sidebar from './Sidebar.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import { img } from 'framer-motion/client';

// 991.98px es el corte de Bootstrap justo debajo de lg (992px).
// Así el drawer y las clases d-lg-* cambian en el mismo ancho.
const MOBILE_QUERY = '(max-width: 991.98px)';

// Dice si la ventana es estrecha y se actualiza al redimensionar.
function useIsMobile() {
  // El valor inicial sale de la ventana real. Evita pintar primero el layout de escritorio en un teléfono.
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setIsMobile(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}

export default function Layout() {
  // En móvil el panel empieza cerrado y se abre con el botón Índice.
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  // true solo en /docs/:categoria/:slug. Sirve para dejar sitio a las flechas laterales.
  const onDoc = useMatch('/docs/:categoryId/:slug');
  // Guarda la ruta en la que el menú se abrió, para cerrarlo en cuanto la ruta cambie.
  const [menuPath, setMenuPath] = useState(location.pathname);
  // El texto vive aquí porque el campo está en la barra y el filtro se aplica en el panel.
  const [query, setQuery] = useState('');

  // Ajustar el estado durante el render es la forma recomendada cuando el estado
  // tiene que seguir a una prop o, aquí, a la URL. Cierra el drawer al navegar
  // sin esperar a un efecto, así no queda abierto un frame de más.
  if (menuPath !== location.pathname) {
    setMenuPath(location.pathname);
    setMenuOpen(false);
  }

  // Cada apunte abre arriba del todo. Si no, al pasar de uno largo a uno corto se vería el final.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Con el drawer abierto en móvil, el fondo no debe desplazarse por debajo.
  // En escritorio el panel ya está fijo y el scroll de la página tiene que seguir funcionando.
  useEffect(() => {
    document.body.style.overflow = menuOpen && isMobile ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, isMobile]);

  // Al escribir en el móvil se abre el índice: si no, el filtro no se vería.
  function handleQueryChange(value) {
    setQuery(value);
    if (isMobile && value.trim()) setMenuOpen(true);
  }

  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      {/* fixed-top: la barra no se mueve con el scroll. data-bs-theme="light" deja
          los controles legibles sobre el blanco aunque la página esté en oscuro. */}
      <header className="topbar navbar fixed-top border-bottom px-3" data-bs-theme="light">
        <div className="topbar-inner">
          <div className="topbar-brand">
            <BookIcon />
            <span className="navbar-title">
              <b>APUNTES</b> por Felipe Barber
            </span>
          </div>
          {/* En el celular esta fila va debajo del nombre: menú y buscador. */}
          <div className="topbar-tools">
            <button
              type="button"
              className="topbar-menu btn btn-outline-secondary d-lg-none"
              aria-expanded={menuOpen}
              aria-controls="indice"
              aria-label={menuOpen ? 'Cerrar el índice' : 'Abrir el índice'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon />
            </button>
            <SearchBox query={query} onQueryChange={handleQueryChange} />
          </div>
          <div className="topbar-actions">
            <ThemeToggle />
            <HandMotionToggle />
          </div>
        </div>
      </header>
      <div className="app-body d-flex align-items-stretch flex-grow-1">
      <Sidebar
        query={query}
        mobileOpen={menuOpen}
        // inert saca el panel cerrado del teclado y de los lectores de pantalla.
        hiddenFromKeyboard={isMobile && !menuOpen}
        onNavigate={() => setMenuOpen(false)}
      />
      {/* Capa oscura detrás del drawer. Un clic cierra el índice. */}
      {menuOpen && (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Cerrar el índice"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className="main-column d-flex flex-column flex-grow-1">
        <main className="content flex-grow-1">
          {/* content-wrap-doc suma relleno lateral para que el texto no quede debajo de las flechas. */}
          <div className={onDoc ? 'content-wrap content-wrap-doc mx-auto py-4 py-lg-5' : 'content-wrap mx-auto py-4 py-lg-5'}>
            <PageTransition />
          </div>
          <DocArrows />
        </main>
      </div>
      </div>
    </div>
  );
}

// Icono de libro, a la izquierda del nombre. En el celular no se muestra.
function BookIcon() {
  return (
    <img
      className="topbar-mark d-none d-lg-inline-block"
      src="/imagenes/pila-de-libros.png"
      alt=""
      width={30}
      height={30}
    />
  );
}

function MenuIcon() {
  return (
    <svg className="topbar-menu-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
