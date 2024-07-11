import PropTypes from 'prop-types';

import Card from './Card.jsx'

const ContenedorCard = (props) => {
    const {colores, setColores}=props;

    const deleteColor = (idColor) =>{
        const nuevaLista = colores.filter((c)=>c.codigo !== idColor);
        setColores(nuevaLista);
    }
  return (
    <div className='bg-dark p-3 mt-4 rounded'>
    <h2 className='mt-3 text-center text-white'>Colores cargados</h2>
    <div className='row'>
        {
            colores.map((color)=>{
                return <Card key={color.codigo} color={color} deleteColor={deleteColor}/>;
            }
            )
        }
    </div>
    </div>
  )
}

export default ContenedorCard

ContenedorCard.propTypes = {
    colores: PropTypes.array.isRequired,
    setColores: PropTypes.func.isRequired,
};
  