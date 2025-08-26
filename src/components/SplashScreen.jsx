import { useState } from 'react';
import './SplashScreen.css';
import peachLeft from '../assets/peach-left.png';
import peachRight from '../assets/peach-right.png';

function SplashScreen({ onFinish }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => setIsFading(true), 1200);
    setTimeout(() => onFinish(), 1500);
  };

  return (
    <div
      className={`splash-container ${isFading ? 'fade-out' : ''}`}
      onClick={handleClick}
    >
      {/* Texto curvado */}
      <svg className={`splash-text ${isOpen ? 'open' : ''}`} viewBox="0 0 500 200">
        <defs>
          <path id="textPath1" d="M50,80 C150,0 350,0 450,80"/>
          <path id="textPath2" d="M50,130 C150,50 350,50 450,130"/>
        </defs>

        <text fontSize="24" fill="#ffffffff" fontFamily="Arial, sans-serif">
          <textPath href="#textPath1" startOffset="50%" textAnchor="middle">
            MELOCOTÓN
          </textPath>
        </text>
        <text fontSize="24" fill="#ffffffff" fontFamily="Arial, sans-serif">
          <textPath href="#textPath2" startOffset="50%" textAnchor="middle">
            GIGANTE
          </textPath>
        </text>
      </svg>

      {/* Contenedor del melocotón para latido */}
      <div
        className={`peach-container ${isOpen ? 'open' : ''}`}
        style={!isOpen ? { animation: 'heartbeat 1s ease-in-out infinite' } : {}}
      >
        <img src={peachLeft} alt="Peach left" className={`peach left ${isOpen ? 'open' : ''}`} />
        <img src={peachRight} alt="Peach right" className={`peach right ${isOpen ? 'open' : ''}`} />
      </div>

      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.05); }
          50% { transform: scale(1); }
          75% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default SplashScreen;
