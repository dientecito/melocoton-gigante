// SplashScreen.jsx
import { useState } from 'react';
import './SplashScreen.css';

// Importar imágenes desde src/assets
import peachLeft from '../assets/peach-left.png';
import peachRight from '../assets/peach-right.png';

function SplashScreen({ onFinish }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    setIsOpen(true);

    // primero dejamos que se abra el melocotón
    setTimeout(() => {
      setIsFading(true); // empieza a desvanecerse el fondo
    }, 1200); // espera a que termine la animación de apertura

    // luego quitamos el splash del todo
    setTimeout(() => {
      onFinish();
    }, 2000); 
  };

  return (
    <div
      className={`splash-container ${isFading ? 'fade-out' : ''}`}
      onClick={handleClick}
    >
      <img
        src={peachLeft}
        alt="Peach left"
        className={`peach left ${isOpen ? 'open' : ''}`}
      />
      <img
        src={peachRight}
        alt="Peach right"
        className={`peach right ${isOpen ? 'open' : ''}`}
      />
    </div>
  );
}

export default SplashScreen;
