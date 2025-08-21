import { useState } from 'react';
import './SplashScreen.css';

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
        src="src/assets/peach-left.png"
        alt="Peach left"
        className={`peach left ${isOpen ? 'open' : ''}`}
      />
      <img
        src="src/assets/peach-right.png"
        alt="Peach right"
        className={`peach right ${isOpen ? 'open' : ''}`}
      />
    </div>
  );
}

export default SplashScreen;
