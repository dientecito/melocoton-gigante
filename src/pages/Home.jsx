// Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

// Importar imágenes desde src/assets
import fotoIntro from "../assets/foto_intro.jpg";
import radio from "../assets/radio_sin_fondo.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={fotoIntro} alt="Banda" />
      </div>
      <div className="home-text">
        <h1>Melocotón Gigante es...</h1>
        <p>
          ...un conjunto musical hedonista no-binario. Desde Tierra Estella, la Toledo del norte, Lizarra. 
          Los miembros salen de grupos como Zaunka, AGUA EN MARTE, Maddi, Bide Bakarra, Viejo Peter 
          y nuestros confiables músicos de La Mala Pékora.
        </p>
        <p>
          Somos un grupo activo intermitentemente, como cualquiera que tiene un trabajo (o dos) y 
          otro grupo más, (o dos). La mezcla que hacemos todos los integrantes es curiosísima 
          porque en el resultado se puede ver a cada uno de nosotres. Es un grupo hecho desde el 
          amor y la verdad. Esperamos que os guste.
        </p>
        <p>Pau, Mitxel, Maddi, Marta, Alba, Carla, Mario, Haritz y Felix. ❤️</p>

        {/* NUEVA IMAGEN CON ENLACE */}
        <Link to="/music">
          <img 
            src={radio} 
            alt="Ir a Music" 
            className="clickable-image"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
