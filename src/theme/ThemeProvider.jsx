import { useEffect, useState } from 'react';
import { ThemeContext } from './theme-context.js';

// Misma clave que el script de index.html. Los dos tienen que coincidir
// para que el tema elegido sobreviva a una recarga sin un destello del tema contrario.
const STORAGE_KEY = 'apuntes-theme';

// Elige el tema de la primera pintada.
// 1. Lo guardado en localStorage, si es "light" o "dark".
// 2. Si no hay nada guardado, la preferencia del sistema.
// 3. Si el navegador bloquea localStorage, modo claro.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Envuelve la app y reparte el tema y la función para cambiarlo.
export default function ThemeProvider({ children }) {
  // La función inicial de useState se ejecuta una sola vez, no en cada render.
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // data-theme lo usan reglas propias. data-bs-theme activa el modo oscuro de Bootstrap.
    // En el DOM quedan como data-theme y data-bs-theme.
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.bsTheme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // El tema sigue aplicado en esta pestaña aunque el navegador bloquee el almacenamiento.
    }
  }, [theme]);

  // Alterna entre los dos valores. Usar la forma funcional evita depender de un theme viejo.
  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
