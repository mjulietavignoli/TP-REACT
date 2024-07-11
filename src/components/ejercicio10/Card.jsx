import PropTypes from 'prop-types';

const Card = (props) => {
  const { pelicula } = props;
  return (
      <div className='col-4 mt-3'>
          <div className='card'>
              <div className="no-gutters">
                  <div className="card-body text-dark">
                      <h5 className="card-title text-center"> {pelicula.nombre} </h5>
                      <p>{pelicula.descripcion}</p>
                      <p>Genero: {pelicula.genero}</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Card

Card.propTypes ={
    pelicula: PropTypes.object.isRequired,
  }