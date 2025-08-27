import React, { useState } from "react";
import ContactForm from "../components/ContactForm";

import cd1 from "../assets/img_tienda/mutante_1.jpeg";
import cd2 from "../assets/img_tienda/mutante_2.jpg";

import "./Merch.css";

function Merch() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [imagenIndex, setImagenIndex] = useState(null); // índice de imagen en lightbox

  const imagenes = [cd1, cd2];

  const abrirImagen = (index) => setImagenIndex(index);
  const cerrarImagen = () => setImagenIndex(null);

  const siguienteImagen = (e) => {
    e.stopPropagation(); // para que no cierre el lightbox
    setImagenIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anteriorImagen = (e) => {
    e.stopPropagation();
    setImagenIndex((prev) =>
      prev === 0 ? imagenes.length - 1 : prev - 1
    );
  };

  return (
    <section className="merch-section">
      <h1 className="visually-hidden">Tienda</h1>

      <div className="merch-container">
  {/* Imágenes a la izquierda */}
  <div className="merch-images">
    <img
      src={cd2}
      alt="Contraportada del CD"
      className="cd-back"
      onClick={() => abrirImagen(1)}
    />
    <img
      src={cd1}
      alt="Portada del CD"
      className="cd-front"
      onClick={() => abrirImagen(0)}
    />
  </div>

  {/* Info a la derecha */}
  <div className="merch-info">
    <h2 className="merch-title">MUTANTE - CD</h2>
    <p className="merch-description">
      Versión en CD disponible en formato físico.
    </p>
    <p className="merch-price">10€</p>

    <button
      className="merch-button"
      onClick={() => setMostrarFormulario(true)}
    >
      Comprar
    </button>
  </div>
</div>


      {mostrarFormulario && (
        <div className="order-form">
          <h3>Completa tu pedido</h3>
          <ContactForm />
        </div>
      )}

      {imagenIndex !== null && (
  <div className="lightbox" onClick={cerrarImagen}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <button className="flecha izquierda" onClick={anteriorImagen}>‹</button>
      <img src={imagenes[imagenIndex]} alt="Imagen ampliada" />
      <button className="flecha derecha" onClick={siguienteImagen}>›</button>
    </div>
  </div>
)}
    </section>
  );
}

export default Merch;
