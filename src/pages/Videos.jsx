function Videos() {
return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Videos</h1>
      
      {/* Video de YouTube */}
      <p>Los Ratones - (Evelyn Cornejo) (Live en la Xana del Torio)</p>
      <div style={{ position: 'relative', paddingTop: '56.25%', marginTop: '2rem' }}>
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
  );
}

export default Videos;
