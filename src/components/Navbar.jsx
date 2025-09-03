import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Importar los iconos desde la carpeta assets
import instagramIcon from '../assets/instagram.svg';
import youtubeIcon from '../assets/youtube.svg';

function Navbar({ onResetMusic }) { // <-- Recibe un callback opcional
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (path) => {
    setIsOpen(false);

    // Scroll al top si ya estás en la misma ruta
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Si estás en Music, resetea la canción seleccionada
      if (path === '/music' && onResetMusic) {
        onResetMusic();
      }
    }
  };

  return (
    <header>
      <div className="logo">MELOCOTÓN GIGANTE</div>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={isOpen ? 'open' : ''}>
        <Link to="/" onClick={() => handleLinkClick('/')}>Inicio</Link>
        <Link to="/music" onClick={() => handleLinkClick('/music')}>Music</Link>
        <Link to="/videos" onClick={() => handleLinkClick('/videos')}>Videos</Link>
        <Link to="/gallery" onClick={() => handleLinkClick('/gallery')}>Galería</Link>
        <Link to="/merch" onClick={() => handleLinkClick('/merch')}>Tienda</Link>

        <div className="social-icons">
          <a
            href="https://instagram.com/melocoton.gigante"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://youtube.com/@PauSadaba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
