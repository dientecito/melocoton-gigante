function Music() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>MUTANTE</h1>
      <p>Escucha nuestro disco MUTANTE desde aquí:</p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1rem',
        }}
      >
        {/* Spotify embed */}
        <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
          <iframe
            src="https://open.spotify.com/embed/album/2T4fGakUFR7GkWfBYGrsN3"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            style={{ borderRadius: '12px' }}
          ></iframe>
        </div>

        {/* YouTube embed */}
        <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
          <iframe
            width="100%"
            height="380"
            src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_nSUAK_Quf8zrFIppXFdXFvak-MKJOnNQE"
            title="YouTube playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Music;
