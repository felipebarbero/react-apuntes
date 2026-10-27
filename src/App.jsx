// Define las rutas. El panel, el buscador y el tema viven en Layout y no se desmontan al cambiar de página.
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import DocPage from './pages/DocPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      {/* Ruta padre sin path: envuelve a las hijas y les deja un hueco con Outlet / useOutlet. */}
      <Route element={<Layout />}>
        {/* index es la URL exacta "/". */}
        <Route index element={<HomePage />} />
        {/* :categoryId y :slug son parámetros. Ejemplo: /docs/react/hooks. */}
        <Route path="docs/:categoryId/:slug" element={<DocPage />} />
        {/* Cualquier otra URL dentro del layout muestra el 404, con el panel todavía visible. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
