import tribalImg from '../assets/tribal.webp';

function Footer() {
  return (
    <footer style={{ padding: '1rem', color: '#fff', textAlign: 'center' }}>
      <img
        src={tribalImg}
        alt="Tribal"
        style={{ width: '300px', height: 'auto', display: 'block', margin: '0 auto 1rem' }}
      />
      <div>© 2025 Melocotón Gigante. Todos los derechos reservados.</div>
    </footer>
  );
}

export default Footer;
