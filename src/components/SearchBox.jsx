// Campo de búsqueda de la barra superior. Filtra el índice del panel.
import { useEffect, useRef } from 'react';

export default function SearchBox({ query, onQueryChange }) {
  const searchRef = useRef(null);

  // Ctrl+K o Cmd+K enfoca el campo desde cualquier página. El input vive en la
  // barra fija, así que no hace falta abrir el panel antes.
  useEffect(() => {
    function onKeyDown(event) {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && key === 'k') {
        event.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="topbar-search position-relative">
      <label className="visually-hidden" htmlFor="buscar-apunte">
        Buscar un concepto
      </label>
      <input
        id="buscar-apunte"
        ref={searchRef}
        className={query ? 'form-control search-field has-query' : 'form-control search-field'}
        type="search"
        value={query}
        placeholder="Buscar concepto…"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        onChange={(event) => onQueryChange(event.target.value)}
        onKeyDown={(event) => {
          // Escape limpia la búsqueda sin quitar el foco del campo.
          if (event.key === 'Escape' && query) {
            onQueryChange('');
          }
        }}
      />
      {!query && <kbd className="search-kbd d-none d-lg-inline">Ctrl K</kbd>}
      {query && (
        <button
          type="button"
          className="clear-search btn btn-sm"
          onClick={() => onQueryChange('')}
          aria-label="Borrar búsqueda"
        >
          ×
        </button>
      )}
    </div>
  );
}
