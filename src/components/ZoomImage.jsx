// Miniatura de una imagen del catálogo. El clic abre el archivo a su tamaño real.
import { useRef } from 'react';
import RichText from './RichText.jsx';

// Un número son pixeles. Un string se usa tal cual: '50%', '12rem', '240px'.
function toCss(value) {
  if (value === undefined || value === null || value === '') return undefined;
  return typeof value === 'number' ? `${value}px` : value;
}

export default function ZoomImage({ src, alt = '', width, height, caption }) {
  const dialogRef = useRef(null);
  const cssWidth = toCss(width);
  const cssHeight = toCss(height);

  function open() {
    // showModal lo pone en la capa superior y cierra con Escape.
    // No depende de position:fixed, que la animación de página rompería.
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  return (
    <figure className="zoom-figure my-3">
      <button type="button" className="zoom-image" onClick={open} aria-label={`Ampliar imagen: ${alt}`}>
        <img
          src={src}
          alt={alt}
          style={{
            width: cssWidth ?? 'auto',
            height: cssHeight ?? 'auto',
            maxWidth: '100%',
          }}
        />
      </button>
      {caption && (
        <figcaption className="text-secondary small mt-2">
          <RichText text={caption} />
        </figcaption>
      )}
      <dialog
        ref={dialogRef}
        className="image-lightbox"
        aria-label={alt || 'Imagen ampliada'}
        onClick={(event) => {
          // El fondo del diálogo es el propio <dialog>. La foto no cierra.
          if (event.target === event.currentTarget) close();
        }}
      >
        <button type="button" className="btn-close image-lightbox-close" aria-label="Cerrar imagen" onClick={close} />
        <img src={src} alt={alt} />
      </dialog>
    </figure>
  );
}
