import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <div className="logo">MELOCOTÓN GIGANTE</div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/music">Music</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/gallery">Galería</Link>
        <Link to="/tour">Tour</Link>
        <Link to="/merch">Tienda</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
