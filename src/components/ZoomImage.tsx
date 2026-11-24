// Miniatura de una imagen del catálogo. El clic la abre a su tamaño, sin pasar el ancho de la ventana.
// Con compact, primero cabe en 200×200 px. Un ícono la agranda y otro la devuelve, en 0.5 s.
import { useEffect, useRef, useState } from 'react';
import RichText from './RichText.tsx';

// La miniatura no pasa de este lado. La proporción se mantiene, así que queda cerca de 100×200.
const COMPACT_MAX = 200;

type Box = { width: number; height: number };

// Un número son pixeles. Un string se usa tal cual: '50%', '12rem', '240px'.
function toCss(value: number | string | undefined | null | '') {
  if (value === undefined || value === null || value === '') return undefined;
  return typeof value === 'number' ? `${value}px` : value;
}

function toPx(value: number | string | undefined | null | '', container: number) {
  if (value === undefined || value === null || value === '') return null;
  if (typeof value === 'number') return value;
  const raw = value.trim();
  if (raw.endsWith('%')) return (container * parseFloat(raw)) / 100;
  if (raw.endsWith('px')) return parseFloat(raw);
  if (raw.endsWith('rem')) {
    const root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    return parseFloat(raw) * root;
  }
  return null;
}

// Tamaño en el que se vería la foto sin compact: width/height, o el natural si cabe en la columna.
function standardSize(
  naturalW: number,
  naturalH: number,
  container: number,
  width: number | string | undefined | null | '',
  height: number | string | undefined | null | '',
): Box {
  let nextW = naturalW;
  let nextH = naturalH;
  const widthPx = toPx(width, container);
  const heightPx = toPx(height, container);

  if (widthPx != null && heightPx != null) {
    nextW = widthPx;
    nextH = heightPx;
  } else if (widthPx != null) {
    nextW = widthPx;
    nextH = naturalH * (widthPx / naturalW);
  } else if (heightPx != null) {
    nextH = heightPx;
    nextW = naturalW * (heightPx / naturalH);
  }

  if (container > 0 && nextW > container) {
    nextH = nextH * (container / nextW);
    nextW = container;
  }

  return { width: Math.max(1, Math.round(nextW)), height: Math.max(1, Math.round(nextH)) };
}

function fitInside(box: Box, max: number): Box {
  const scale = Math.min(max / box.width, max / box.height, 1);
  return {
    width: Math.max(1, Math.round(box.width * scale)),
    height: Math.max(1, Math.round(box.height * scale)),
  };
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path
        fill="currentColor"
        d="M2 2h4v1.5H3.5V6H2V2zm8 0h4v4h-1.5V3.5H10V2zM2 10h1.5v2.5H6V14H2v-4zm10.5 0H14v4h-4v-1.5h2.5V10z"
      />
    </svg>
  );
}

function ShrinkIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 2H5v2.5H2.5V6H6.5V2zm3 0v4H14V4.5h-2.5V2H9.5zM2.5 10v1.5H5V14h1.5v-4H2.5zm8 4H12v-2.5h2.5V10H10.5v4z"
      />
    </svg>
  );
}

export default function ZoomImage({
  src,
  alt = '',
  width,
  height,
  caption,
  compact = false,
}: {
  src: string;
  alt: string;
  width: number | string | undefined | null | '';
  height: number | string | undefined | null | '';
  caption: string;
  compact?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const [containerW, setContainerW] = useState(0);
  const [grown, setGrown] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'grow' | 'shrink'>('idle');
  const cssWidth = toCss(width);
  const cssHeight = toCss(height);

  useEffect(() => {
    if (!compact) return;
    const parent = figureRef.current?.parentElement;
    if (!parent) return;
    const measure = () => setContainerW(parent.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(parent);
    return () => observer.disconnect();
  }, [compact]);

  // La clase de transición se pinta antes de cambiar el tamaño, si no el navegador no anima.
  useEffect(() => {
    if (phase === 'idle') return;
    const nextGrown = phase === 'grow';
    const frame = requestAnimationFrame(() => setGrown(nextGrown));
    const timer = window.setTimeout(() => setPhase('idle'), 500);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [phase]);

  function open() {
    // showModal lo pone en la capa superior y cierra con Escape.
    // No depende de position:fixed, que la animación de página rompería.
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function grow() {
    if (!preview || grown || phase !== 'idle') return;
    setPhase('grow');
  }

  function shrink() {
    if (!grown || phase !== 'idle') return;
    setPhase('shrink');
  }

  const standard =
    natural && containerW > 0 ? standardSize(natural.w, natural.h, containerW, width, height) : null;
  const preview = standard ? fitInside(standard, COMPACT_MAX) : null;
  const box = grown ? standard : preview;

  return (
    <figure ref={figureRef} className="zoom-figure my-3">
      {compact ? (
        <span
          className={`zoom-shot${box ? ' is-measured' : ''}${phase !== 'idle' ? ' is-animating' : ''}`}
          style={box ? { width: box.width, height: box.height } : undefined}
        >
          <img
            src={src}
            alt={alt}
            onLoad={(event) => {
              const img = event.currentTarget;
              setNatural({ w: img.naturalWidth, h: img.naturalHeight });
            }}
          />
          {grown && (
            <button type="button" className="zoom-shot-hit" onClick={open} aria-label={`Ampliar imagen: ${alt}`} />
          )}
          {box && (grown ? (
            <button type="button" className="zoom-expand" onClick={shrink} aria-label="Reducir la imagen">
              <ShrinkIcon />
            </button>
          ) : (
            <button type="button" className="zoom-expand" onClick={grow} aria-label="Ver la imagen a tamaño normal">
              <ExpandIcon />
            </button>
          ))}
        </span>
      ) : (
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
      )}
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
