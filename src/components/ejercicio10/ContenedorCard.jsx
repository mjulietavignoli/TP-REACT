import PropTypes from 'prop-types';

import Card from './Card.jsx'

const ContenedorCard = (props) => {
    const {peliculas}=props;
  return (
    <div className='bg-dark p-3 mt-4 rounded'>
    <h2 className='mt-3 text-center text-white'>Películas cargadas</h2>
    <div className='row'>
        {
            peliculas.map((pelicula)=>{
                return <Card key={pelicula.codigo} pelicula={pelicula}/>;
            }
            )
        }
    </div>
    </div>
  )
}

export default ContenedorCard

ContenedorCard.propTypes = {
    peliculas: PropTypes.array.isRequired,
};
  