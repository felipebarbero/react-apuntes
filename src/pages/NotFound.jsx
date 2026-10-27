// Página para cualquier URL que no sea el inicio ni un apunte del catálogo.
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle.js';

export default function NotFound() {
  usePageTitle('No encontrado');

  return (
    <article>
      <h1 className="display-6 fw-semibold">Esta página no existe</h1>
      <p className="lead text-secondary">La ruta no corresponde a un apunte ni al inicio.</p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </article>
  );
}
