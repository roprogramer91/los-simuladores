import './Section.css';
import Player from '../reproductor/player';
import Temporada from '../temporada/Temporada'; 
import { useParams } from 'react-router-dom';

const Section = ({ tipoContenido }) => {
  const { numero, id } = useParams(); // Obtenemos el parámetro de la URL


  let ContentComponent;

  switch (tipoContenido) {
    case 'temporada':
      ContentComponent = () => <Temporada id={numero} />;
      break;
    case 'episodio':
      const episodio = JSON.parse (localStorage.getItem('episodioActual'));
      ContentComponent = () => episodio ? (
        <div className= "episodio-container">  
          <Player episodio={episodio} />
        </div>       
      ) : (
        <div>
          Error: Capítulo no disponible.
        </div>
      );

      break;
    default:

      ContentComponent = () => <div>Contenido no disponible {tipoContenido}</div>;
  }

  return (
    <div className="section-container">
      {ContentComponent ? <ContentComponent /> : <div>Contenido no disponible</div>}
    </div>
  );
};

export default Section;
