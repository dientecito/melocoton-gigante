function Videos() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
      }}>
        Videos
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '2rem',
          alignItems: 'start'
        }}
      >
        {/* Video de YouTube */}
        <div>
          <p>Los Ratones - (Evelyn Cornejo) (Live en la Xana del Torio)</p>
          <div style={{ position: 'relative', paddingTop: '56.25%', marginTop: '1rem' }}>
            <iframe
              src="https://www.youtube.com/embed/AlLM8XZwbqE"
              title="Los Ratones - (Evelyn Cornejo) MELOCOTON GIGANTE (Live en la Xana del Torio)"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '10px'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Segundo video */}
        <div>
          <p>Restaurante Chino - Melocoton Gigante (Live en Dicastillo)</p>
          <div style={{ position: 'relative', paddingTop: '56.25%', marginTop: '1rem' }}>
            <iframe
              src="https://www.youtube.com/embed/id8DRbGwBJ0?si=XpwZ1dJrgD83ZZtI"
              title="Segundo video"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '10px'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
