import './Gallery.css';

const images = [
  'images/img_galeria/gallery1.jpg',
  'images/img_galeria/gallery2.jpg',
  'images/img_galeria/gallery3.jpg',
  'images/img_galeria/gallery4.jpg',
  'images/img_galeria/gallery5.jpg',
  'images/img_galeria/gallery6.jpg',
  'images/img_galeria/gallery7.jpg',
  'images/img_galeria/gallery8.jpg',
  // agrega más imágenes aquí
];

function Gallery() {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galería</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Galería ${index + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
