import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Importar los iconos desde la carpeta assets
import instagramIcon from '../assets/instagram.svg';
import youtubeIcon from '../assets/youtube.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="logo">MELOCOTÓN GIGANTE</div>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={isOpen ? 'open' : ''}>
        <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
        <Link to="/music" onClick={() => setIsOpen(false)}>Music</Link>
        <Link to="/videos" onClick={() => setIsOpen(false)}>Videos</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Galería</Link>
        <Link to="/merch" onClick={() => setIsOpen(false)}>Tienda</Link>

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
