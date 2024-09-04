function Player({ episodio }) {
    return (
      <div className="player-container">
        <h1>{episodio.nombre}</h1>
        <iframe
          width="100%"
          height="500"
          src={episodio.link} // Asegúrate de que el ID esté correcto para OK.ru
          title={episodio.nombre}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  
  export default Player;