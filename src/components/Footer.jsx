import tribalImg from '../assets/tribal.webp';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={tribalImg} alt="Tribal" className="footer-img" />
      <div className="footer-text">© 2025 Melocotón Gigante. Todos los derechos reservados.</div>
    </footer>
  );
}

export default Footer;
