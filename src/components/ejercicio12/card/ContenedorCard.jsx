import PropTypes from 'prop-types';
import Card from './Card';
import LoadingNoticias from './LoadingNoticias';
import './card.css';

const ContenedorCard = ({ noticias, categoriaSeleccionada, paisSeleccionado }) => {
  const noticiasFiltradas = noticias.filter(noticia => 
    (categoriaSeleccionada === '' || noticia.category.includes(categoriaSeleccionada)) &&
    (paisSeleccionado === '' || noticia.country.includes(paisSeleccionado))
  );

  return (
    <div className='contenedor-cards'>
        <div className='row g-2'>
            {noticiasFiltradas.length > 0 ? (
            noticiasFiltradas.map((noticia) => (
            <Card key={noticia.article_id} noticia={noticia}/> 
            ))
        ) : (
            <LoadingNoticias />
        )}
        </div>
    </div>
  );
};

export default ContenedorCard;

ContenedorCard.propTypes = {
  noticias: PropTypes.arrayOf(
    PropTypes.shape({
      article_id: PropTypes.string.isRequired,
      category: PropTypes.arrayOf(PropTypes.string).isRequired,
      image_url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string
    })
  ).isRequired,
  categoriaSeleccionada: PropTypes.string.isRequired,
  paisSeleccionado: PropTypes.string.isRequired,
};
