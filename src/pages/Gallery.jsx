function Gallery() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Galería</h1>
      <p>Fotos y videos</p>

      {/* Imagen */}
      <img
        src="public/images/mutante_cd.webp"
        alt="Mutante CD"
        style={{
          maxWidth: '100%',
          height: 'auto',
          marginTop: '2rem',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}
      />
    </div>
  );
}

export default Gallery;
