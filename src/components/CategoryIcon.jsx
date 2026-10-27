// Imagen opcional de una categoría. Si la categoría no trae icon, no pinta nada.
// alt vacío: el nombre de al lado ya dice qué es, y el icono es decorativo.
export default function CategoryIcon({ src }) {
  if (!src) return null;

  return <img className="category-icon" src={src} alt="" />;
}
