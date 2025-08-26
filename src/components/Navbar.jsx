import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
        <Link to="/tour" onClick={() => setIsOpen(false)}>Tour</Link>
        <Link to="/merch" onClick={() => setIsOpen(false)}>Tienda</Link>
      </nav>
    </header>
  );
}

export default Navbar;
