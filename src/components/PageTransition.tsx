// Anima el cambio de página. Las flechas anterior/siguiente deslizan el contenido;
// el resto de los enlaces internos solo lo funden.
import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

// No es estado de React. El clic escribe aquí antes de que el router vuelva a pintar,
// y la animación de salida lee este valor en ese mismo momento.
// 1 = siguiente (sale hacia la izquierda), -1 = anterior, 0 = fundido sin desplazamiento.
const pageDirection = { current: 0 };

const transition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
};

// Las funciones se llaman al empezar cada animación, no al renderizar.
// Por eso ven el valor más reciente de pageDirection.
const variants = {
  enter: () => {
    const direction = pageDirection.current;
    if (direction === 0) return { opacity: 0, x: 0 };
    return { opacity: 0, x: direction > 0 ? 72 : -72 };
  },
  center: { opacity: 1, x: 0 },
  exit: () => {
    const direction = pageDirection.current;
    if (direction === 0) return { opacity: 0, x: 0 };
    return { opacity: 0, x: direction > 0 ? -72 : 72 };
  },
};

// Las flechas marcan el enlace con data-page-direction="-1" o "1".
// Cualquier otro enlace interno se trata como un fundido.
function readDirection(link) {
  const raw = link.getAttribute('data-page-direction');
  if (raw === '1' || raw === '-1') return Number(raw);
  return 0;
}

export default function PageTransition() {
  const location = useLocation();
  // useOutlet devuelve el elemento de la ruta hija. AnimatePresence puede conservar
  // el anterior hasta que termine de salir; un <Outlet /> normal se reemplaza al instante.
  const outlet = useOutlet();
  const reduceMotion = useReducedMotion();
  const direction = pageDirection.current;

  useEffect(() => {
    // Fase de captura: corre antes del onClick de React Router.
    // Así la dirección ya está escrita cuando empieza la animación.
    function onClick(event) {
      // Ignora clics con modificadores, botones que no sean el izquierdo, y enlaces que no navegan aquí.
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest('a[href]');
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      let url;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }

      // Un enlace a otro sitio no cambia esta página, así que no marca dirección.
      if (url.origin !== window.location.origin) return;
      pageDirection.current = readDirection(link);
    }

    // Atrás y adelante del navegador no son las flechas del apunte: se funde, no se desliza.
    function onPopState() {
      pageDirection.current = 0;
    }

    document.addEventListener('click', onClick, true);
    window.addEventListener('popstate', onPopState);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return (
    // Las dos páginas ocupan la misma celda. overflow recorta el deslizamiento horizontal.
    <div className="page-viewport">
      {/* initial={false} no anima la primera carga.
          "wait" deja salir la página vieja antes de entrar la nueva.
          "sync" superpone el fundido, más corto cuando no hay dirección. */}
      <AnimatePresence initial={false} mode={direction === 0 || reduceMotion ? 'sync' : 'wait'}>
        <motion.div
          key={location.pathname}
          className="page-stage"
          variants={reduceMotion ? undefined : variants}
          initial={reduceMotion ? false : 'enter'}
          animate={reduceMotion ? undefined : 'center'}
          exit={reduceMotion ? undefined : 'exit'}
          transition={reduceMotion ? { duration: 0 } : transition}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
