import PropTypes from 'prop-types';
import './card.css';

const Card = ({ noticia }) => {
  return (
    <div className='card mt-4 col-4'>
      <div className='card-header'>
        <img className='img-size' src={noticia.image_url} alt={noticia.title} />
      </div>
      <div className='card-body'>
        <h3>{noticia.title}</h3>
        <p>{noticia.description}</p>
      </div>
      <div className='card-footer'>
        <a href={noticia.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
          Leer más
        </a>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  noticia: PropTypes.object.isRequired,
};
