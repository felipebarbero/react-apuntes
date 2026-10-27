import { useTheme } from '../theme/theme-context.js';

// Botón que cambia entre modo claro y oscuro.
// className permite ocultarlo en un sitio (el panel, en móvil) sin duplicar el botón.
export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={`theme-toggle btn btn-outline-secondary btn-sm rounded-pill ${className}`.trim()}
      onClick={toggleTheme}
      // El texto visible dice a qué modo se va a pasar. El aria-label dice la acción completa.
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
    >
      {/* En oscuro se muestra el sol, porque el clic vuelve al claro, y al revés. */}
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span>{isDark ? 'Claro' : 'Oscuro'}</span>
    </button>
  );
}

// Icono decorativo. aria-hidden porque el botón ya tiene nombre accesible.
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.5 3.2a8.2 8.2 0 1 0 5.3 13.8A7.2 7.2 0 0 1 15.5 3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
