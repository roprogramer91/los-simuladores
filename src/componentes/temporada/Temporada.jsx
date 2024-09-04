import React, { useEffect, useState } from 'react';
import Tarjeta from '../tarjeta/Tarjeta';
import './Temporada.css';

const Temporada = ({ id }) => {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    const fetchEpisodios = async () => {
      try {
        const response = await fetch(`https://apisimuladores.vercel.app/temporada/${id}/episodios`);
        const data = await response.json();
        setEpisodios(data);
      } catch (error) {
        console.error('Error al obtener episodios:', error);
      }
    };

    fetchEpisodios();
  }, [id]);

  return (
    <div className="temporada">
      <h2>Temporada {id}</h2>
      <div className="tarjetas-container">
        {episodios.map(episodio => (
          <Tarjeta key={episodio.id} episodio={episodio} />
        ))}
      </div>
    </div>
  );
};

export default Temporada;
