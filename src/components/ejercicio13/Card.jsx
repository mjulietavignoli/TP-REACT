import PropTypes from 'prop-types';

const Card = ({ciudad, pais, clima}) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Clima en {ciudad}, {pais}</h5>
        <p className="card-text">Temperatura: {clima.main.temp}°K</p>
        <p className="card-text">Condición: {clima.weather[0].description}</p>
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
    ciudad: PropTypes.string.isRequired,
    pais: PropTypes.string.isRequired,
    clima: PropTypes.object.isRequired,
  };
  