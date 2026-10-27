// Punto de entrada. Monta React en el div #root de index.html.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ThemeProvider from './theme/ThemeProvider.jsx';
// Bootstrap primero y los estilos propios después, para que las reglas de index.css ganen.
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = document.getElementById('root');

// Sin ese nodo no hay dónde pintar la interfaz. El error aparece en la consola en vez de fallar en silencio.
if (!root) {
  throw new Error('No se encontró el elemento #root');
}

createRoot(root).render(
  // StrictMode ejecuta algunos ciclos dos veces en desarrollo para detectar efectos mal limpiados.
  <StrictMode>
    {/* ThemeProvider queda por fuera del router: el tema no depende de la ruta. */}
    <ThemeProvider>
      {/* BrowserRouter lee la URL del navegador y permite usar Link, useLocation y Routes. */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
