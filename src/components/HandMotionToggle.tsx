// Tres estados del cursor del panel: se mueve, queda quieto o se oculta.
// El estado queda en el documento para que el CSS del panel lo lea sin recibir props.
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'apuntes-hand-motion';
const NEXT = { on: 'off', off: 'hidden', hidden: 'on' };
const LABEL = { on: 'Pausa', off: 'Ocultar', hidden: 'Mostrar' };
const TITLE = {
  on: 'Dejar el cursor quieto',
  off: 'Ocultar el cursor',
  hidden: 'Mostrar el cursor',
};

function readMode() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'on' || saved === 'off' || saved === 'hidden') return saved;
  } catch {
    return 'on';
  }

  return 'on';
}

export default function HandMotionToggle() {
  const [mode, setMode] = useState(readMode);

  useEffect(() => {
    document.documentElement.dataset.handMotion = mode;
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // El cursor sigue en el estado elegido en esta pestaña.
    }
  }, [mode]);

  return (
    <button
      type="button"
      className="hand-motion-toggle btn btn-outline-secondary btn-sm rounded-pill"
      aria-label={TITLE[mode]}
      title={TITLE[mode]}
      onClick={() => setMode((current) => NEXT[current])}
    >
      <span>{LABEL[mode]}</span>
    </button>
  );
}
