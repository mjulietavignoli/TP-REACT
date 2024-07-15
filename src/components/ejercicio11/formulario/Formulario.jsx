import PropTypes from 'prop-types';

const Formulario = ({ categorias, onCategoriaChange }) => {

  const handleCategoriaChange = (event) => {
    onCategoriaChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="categoria-select">Buscar por categoría:</label>
      <select id="categoria-select" onChange={handleCategoriaChange}>
        <option value="">Selecciona una categoría</option>
        {categorias.map((categoria, index) => (
          <option key={index} value={categoria}>{categoria}</option>
        ))}
      </select>
    </div>
  );
};

export default Formulario;

Formulario.propTypes = {
  categorias: PropTypes.array.isRequired,
  onCategoriaChange: PropTypes.func.isRequired,
};