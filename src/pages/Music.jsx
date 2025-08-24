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
    "No Quiero Saber"
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "3rem",
        padding: "1rem",
        minHeight: "100vh",
      }}
    >
      {/* Imagen del disco */}
      <div style={{ flex: "0 0 320px", marginTop: "6rem" }}>
        <img
          src="images/mutante_cd.webp"
          alt="Portada del disco"
          style={{
            width: "100%",
            display: "block",
            borderRadius: "20px",
            boxShadow: `
              2px 2px 0 #000,
              -2px -2px 0 #000,
              3px -3px 0 #000,
              -3px 3px 0 #000
            `,
            objectFit: "cover",
          }}
        />
      </div>

      {/* Lista de canciones */}
      <div style={{ flex: "1", textAlign: "left" }}>
        <h2
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#ffcc00",
            textShadow: "2px 2px 0px #000",
          }}
        >
          MUTANTE
        </h2>

        <ol
          style={{
            columns: 2,
            columnGap: "3rem",
            fontSize: "1.1rem",
            lineHeight: "2",
            paddingLeft: "1rem",
            listStyleType: "decimal",
            listStylePosition: "inside",
            color: "#ffcc00", // amarillo
            textShadow: "2px 2px 0px #000", // sombra negra como el título
            fontWeight: "bold",
          }}
        >
          {songs.map((song, index) => (
            <li
              key={index}
              style={{
                marginBottom: "1rem",
                transition: "transform 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(5px) scale(1.05)";
                e.currentTarget.style.color = "#fff700"; // más brillante al pasar
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0) scale(1)";
                e.currentTarget.style.color = "#ffcc00";
              }}
            >
              {song}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Music;
