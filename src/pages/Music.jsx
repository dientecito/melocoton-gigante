import { useState } from "react";

function Music() {
  const songs = [
    "Bajo de Gali",
    "Felix",
    "Restaurante Chino",
    "Opel Corsa",
    "Maddi",
    "El Entendimiento",
    "Marta",
    "Lujuria",
    "Ion",
    "Besos de Mariposa",
    "Hipertensión",
    "Aparición Divina",
    "No Quiero Saber",
  ];

  const lyrics = {
    "Bajo de Gali": {
      text: `
Me llevo el bajo de Gali,
me lo llevo pa' Granada,
me llevo el bajo de Gali,
me lo llevo pa' Granada.

Porque él no sabe tocarlo,
no lo necesita pa' nada,
porque él no lo sabe tocar,
y no lo necesita pa' nada.
`,
      image: "images/img_letras/bajo_de_gali.jpg",
    },
    Felix: { text: "", image: "images/felix.jpg" },
    "Restaurante Chino": { text: "Letra de Restaurante Chino...", image: "images/restaurante_chino.jpg" },
    "Opel Corsa": { text: "Letra de Opel Corsa...", image: "images/opel_corsa.jpg" },
    Maddi: { text: "", image: "images/maddi.jpg" },
    "El Entendimiento": {
      text: `
A menudo y sin querer, juzgo antes de conocer,
a menudo me veo teniendo que parar los pies,
a menudo creo que ya lo sé todo,
que no hay nada que aprender.

Se me olvida que hay entornos muy diversos,
personas diferentes, con sus uñas, con sus dientes,
con sus risas, con sus besos...
me veo poniendo peso a algo que aún no sé.

Y sin rodeos, quiero decir "lo siento",
reconocer mis fallos, aprender algo de ellos, repetirlos,
porque sé que aprendo rápido,
pero al tiempo también olvido...

Y pido paciencia, a mí y a las que quiero,
porque la vida es un proceso de autocrítica e intentos,
y quiero teneros cerca y ayudarnos entre todas
y romper esas barreras que están obstaculizando el entendimiento...

Miradas cruzadas, que a veces no dicen todo,
pero en ocasiones, y como el silencio, no dicen nada.
Expresiones corporales, movimientos discontinuos,
que me hacen escuchar que es posible entendernos.

Y bailar y convocar el sentimiento,
veo empatizar y meterme en tus pies,
y emocionarme cuando dices que ahora estás sufriendo,
quiero acompañar tus palabras con mi aliento,
lanzao un boomerang que retorna: el entendimiento...
`,
      image: "images/img_letras/el_entendimiento.jpg",
      extraImage: "images/img_letras/el_entendimiento_2.jpg",
    },
    Marta: { text: "", image: "images/img_letras/marta.jpg" },
    Lujuria: { text: "Letra de Lujuria...", image: "images/lujuria.jpg" },
    Ion: { text: "", image: "images/ion.jpg" },
    "Besos de Mariposa": { text: "Letra de Besos de Mariposa...", image: "images/besos_de_mariposa.jpg" },
    Hipertensión: { text: "Letra de Hipertensión...", image: "images/hipertension.jpg" },
    "Aparición Divina": { text: "Letra de Aparición Divina...", image: "images/aparicion_divina.jpg" },
    "No Quiero Saber": { text: "Letra de No Quiero Saber...", image: "images/no_quiero_saber.jpg" },
  };

  // URLs de SoundCloud
  const soundcloudLinks = {
    "Bajo de Gali": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021167&color=%239c5824&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    Felix: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_2",
    "Restaurante Chino": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_3",
    "Opel Corsa": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_4",
    Maddi: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_5",
    "El Entendimiento": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021188&color=%239c5824&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    Marta: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021176&color=%239c5824&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    Lujuria: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_8",
    Ion: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_9",
    "Besos de Mariposa": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_10",
    Hipertensión: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_11",
    "Aparición Divina": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_12",
    "No Quiero Saber": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID_13",
  };

  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "3rem", padding: "1rem", minHeight: "100vh" }}>
      {/* Columna izquierda */}
      <div style={{ flex: "0 0 320px", marginTop: "6rem" }}>
        {!selectedSong ? (
          <img
            src="images/mutante_cd.webp"
            alt="Portada del disco"
            style={{ width: "100%", display: "block", borderRadius: "20px", boxShadow: `2px 2px 0 #000, -2px -2px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000`, objectFit: "cover" }}
          />
        ) : (
          <>
            <img
              src={lyrics[selectedSong].image}
              alt={selectedSong}
              style={{ width: "100%", display: "block", borderRadius: "20px", boxShadow: `2px 2px 0 #000, -2px -2px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000`, objectFit: "cover" }}
            />
            {selectedSong === "El Entendimiento" && lyrics[selectedSong].extraImage && (
              <img
                src={lyrics[selectedSong].extraImage}
                alt="Extra El Entendimiento"
                style={{ width: "100%", display: "block", borderRadius: "20px", marginTop: "1rem", boxShadow: `2px 2px 0 #000, -2px -2px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000`, objectFit: "cover" }}
              />
            )}

            {/* Reproductor SoundCloud */}
            {soundcloudLinks[selectedSong] && (
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={soundcloudLinks[selectedSong]}
                style={{ marginTop: "1rem", borderRadius: "12px" }}
              ></iframe>
            )}
          </>
        )}
      </div>

      {/* Columna derecha */}
      <div style={{ flex: "1", textAlign: "left" }}>
        <h2 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#ffcc00", textShadow: "2px 2px 0px #000" }}>
          MUTANTE
        </h2>

        {!selectedSong ? (
          <ol style={{ columns: 2, columnGap: "3rem", fontSize: "1.1rem", lineHeight: "2", paddingLeft: "1rem", listStyleType: "decimal", listStylePosition: "inside", color: "#ffcc00", textShadow: "2px 2px 0px #000", fontWeight: "bold" }}>
            {songs.map((song, index) => (
              <li
                key={index}
                style={{ marginBottom: "1rem", cursor: "pointer", transition: "transform 0.2s ease, color 0.2s ease" }}
                onClick={() => setSelectedSong(song)}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(5px) scale(1.05)"; e.currentTarget.style.color = "#fff700"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateX(0) scale(1)"; e.currentTarget.style.color = "#ffcc00"; }}
              >
                {song}
              </li>
            ))}
          </ol>
        ) : (
          <div>
            <h3 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "#ffcc00", textShadow: "2px 2px 0px #000" }}>
              {selectedSong}
            </h3>

            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", whiteSpace: "pre-wrap", color: "#fff" }}>
              {lyrics[selectedSong].text}
            </p>

            <button
              onClick={() => setSelectedSong(null)}
              style={{ marginTop: "2rem", padding: "0.5rem 1rem", borderRadius: "10px", border: "none", background: "#ffcc00", fontWeight: "bold", cursor: "pointer", boxShadow: "2px 2px 0px #000" }}
            >
              Volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Music;
