import { useState } from 'react';
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
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galería</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(index)}>
            <img src={src} alt={`Galería ${index + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="flecha izquierda" onClick={prevImage}>&#10094;</button>
            <img
              src={images[currentIndex]}
              alt={`Galería ${currentIndex + 1}`}
            />
            <button className="flecha derecha" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
