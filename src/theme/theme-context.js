import { createContext, useContext } from 'react';

// El valor inicial es null a propósito. useTheme distingue "nadie proveyó el contexto"
// de un tema real, que siempre es un objeto { theme, toggleTheme }.
export const ThemeContext = createContext(null);

// Lee el tema actual. Lanza un error si se usa fuera de ThemeProvider,
// porque si no el botón de tema fallaría más abajo con un mensaje menos claro.
export function useTheme() {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }

  return value;
}
