import { Link } from 'react-router-dom';
import './Tarjeta.css'; 

const Tarjeta = ({ episodio }) => {

  const handleClick = () => {
    localStorage.setItem('episodioActual', JSON.stringify(episodio));
  };

  return (
    <div className="tarjeta">
      <Link 
      to={`/episodio/${episodio.id}`} 
        className="tarjeta-link"
        onClick={handleClick}>
        
        <div className="tarjeta-contenido">
          <h3 className="tarjeta-titulo">Capítulo N° {episodio.numero}: {episodio.nombre}</h3>
          <img src={episodio.img} alt={episodio.nombre} className="tarjeta-imagen" />
          <p className="tarjeta-descripcion">{episodio.descripcion}</p>
        </div>
      </Link>
    </div>
  );
};

export default Tarjeta;
