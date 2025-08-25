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
    Felix: { text: "🎺🎺🎺", image: "images/img_letras/felix.jpg" },
    "Restaurante Chino": { 
      text: `Hoy no se ven las estrellas,
qué más da...
Voy a beber de las luces
de la ciudad.

Hoy te invitaré a cenar
a un restaurante chino;
he comprado marihuana
a un amigo de un amigo.

Te espero en el portal,
aparcado en doble fila,
escuchando a Los Raimundo
y mordiéndome las uñas.

No te asustes si acelero,
amo la velocidad;
tú solo intenta seguirme,
que le jodan al compás.

Te invitaré a volar,
imitando a las cometas;
y cuando rompan la cuerda,
¿dónde iremos a parar?

Todo lo que sube, baja,
los trenes que pasan, pasan,
y nosotros, como idiotas,
desperdiciando el momento:
el momento de brillar,
el momento de sentir,
el momento de lucir
nuestro mejor vestido.

Le digo que sí,
le digo que no;
le digo que a la vida
hay que decirle cuatro cosas.
Que si no se las dices,
te vas a arrepentir;
porque al final del camino
todo acaba y nada empieza.

Hoy no se ven las estrellas,
qué más da...
Voy a beber de las luces
de la ciudad.

Pisa el acelerador,
ya no quiero pensar más;
enséñame algo bonito,
una cala en este mar.

Estoy jodido, busco un amigo
que me ayude a escampar,
que me permita ser yo
de verdad`
      , image: "images/img_letras/restaurante_chino.jpg" },
    "Opel Corsa": { text: "Letra de Opel Corsa...", image: "images/img_letras/opel_corsa.jpg" },
    Maddi: { text: "🎻🎻🎻", image: "images/maddi.jpg" },
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

Miradas cruzadas, que a veces lo dicen todo,
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
    Marta: { text: "🎹🎹🎹", image: "images/img_letras/marta.jpg" },
    Lujuria: { text: "Letra de Lujuria...", image: "images/img_letras/lujuria.jpg" },
    Ion: { text: "🎸🎸🎸", image: "images/img_letras/ion.jpg" },
    "Besos de Mariposa": { text: "Letra de Besos de Mariposa...", image: "images/img_letras/besos_de_mariposa.jpg" },
    Hipertensión: { text: "Letra de Hipertensión...", image: "images/img_letras/hipertension.jpg" },
    "Aparición Divina": { text: "Letra de Aparición Divina...", image: "images/img_letras/aparicion_divina.jpg" },
    "No Quiero Saber": { text: "Letra de No Quiero Saber...", image: "images/img_letras/no_quiero_saber.jpg" },
  };

  // URLs de SoundCloud
  const soundcloudLinks = {
    "Bajo de Gali": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021167&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    Felix: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021164&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "Restaurante Chino": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021158&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "Opel Corsa": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021185&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    Maddi: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021173&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "El Entendimiento": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021188&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    Marta: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021176&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    Lujuria: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021152&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    Ion: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021179&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "Besos de Mariposa": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021170&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    Hipertensión: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021161&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "Aparición Divina": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021155&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "No Quiero Saber": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2158021182&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  };

  const [selectedSong, setSelectedSong] = useState(null);

 return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "3rem", padding: "1rem", minHeight: "100vh" }}>
      {/* Columna izquierda */}
      <div style={{ flex: "0 0 320px", marginTop: "6rem" }}>
        {!selectedSong ? (
          <>
            <img
              src="images/mutante_cd.webp"
              alt="Portada del disco"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "20px",
                boxShadow: `2px 2px 0 #000, -2px -2px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000`,
                objectFit: "cover",
              }}
            />
            {/* Reproductor SoundCloud del disco completo */}
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2070335424&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              style={{ marginTop: "1rem", borderRadius: "12px" }}
            ></iframe>
          </>
        ) : (
          <>
            <img
              src={lyrics[selectedSong].image}
              alt={selectedSong}
              style={{
                width: "100%",
                display: "block",
                borderRadius: "20px",
                boxShadow: `2px 2px 0 #000, -2px -2px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000`,
                objectFit: "cover",
              }}
            />
            {selectedSong === "El Entendimiento" && lyrics[selectedSong].extraImage && (
              <img
                src={lyrics[selectedSong].extraImage}
                alt="Extra El Entendimiento"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "20px",
                  marginTop: "1rem",
                  boxShadow: `2px 2px 0 #000, -2px -2px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000`,
                  objectFit: "cover",
                }}
              />
            )}

            {/* Reproductor SoundCloud individual */}
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

            <p
  style={{
    fontSize: (selectedSong === "El Entendimiento" || selectedSong === "Restaurante Chino") ? "1rem" : "1.2rem",
    lineHeight: (selectedSong === "El Entendimiento" || selectedSong === "Restaurante Chino") ? "1.4" : "1.8",
    whiteSpace: "pre-wrap",
    color: "#fff",
    columns: selectedSong === "Restaurante Chino" ? "2" : "1",   // doble columna solo para Restaurante Chino
    columnGap: selectedSong === "Restaurante Chino" ? "2rem" : "0", // separación entre columnas
    textAlign: selectedSong === "Restaurante Chino" ? "justify" : "left", // para que quede más prolijo en dos columnas
  }}
>
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
