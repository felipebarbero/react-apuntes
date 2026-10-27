import { useEffect } from 'react';

// Cambia el título de la pestaña cuando cambia la página.
// title vacío deja solo "Apuntes", que es el caso del arranque antes de que una página lo fije.
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Apuntes` : 'Apuntes';
  }, [title]);
}
