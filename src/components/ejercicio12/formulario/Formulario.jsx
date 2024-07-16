import PropTypes from 'prop-types';

const Formulario = ({ categorias, onCategoriaChange, paises, onPaisChange }) => {

  const handleCategoriaChange = (event) => {
    onCategoriaChange(event.target.value);
  };
  const handlePaisChange = (event) => {
    onPaisChange(event.target.value);
  };

  return (
    <div className='row'>
      <div className='col-4'>
        <label htmlFor="categoria-select">Buscar por pais: </label>
        <select id="categoria-select" onChange={handlePaisChange}>
          <option value="">Todos los paises</option>
          {paises.map((pais, index) => (
            <option key={index} value={pais}>{pais}</option>
          ))}
        </select>
      </div>
      <div className='col-8'>
        <label htmlFor="categoria-select">Buscar por categoría: </label>
        <select id="categoria-select" onChange={handleCategoriaChange}>
          <option value="">Todas las categorias</option>
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria}>{categoria}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Formulario;

Formulario.propTypes = {
  categorias: PropTypes.array.isRequired,
  onCategoriaChange: PropTypes.func.isRequired,
  paises: PropTypes.array.isRequired,
  onPaisChange: PropTypes.func.isRequired,
};