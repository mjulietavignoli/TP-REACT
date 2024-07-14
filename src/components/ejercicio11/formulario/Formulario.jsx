import PropTypes from 'prop-types';

const Formulario = ({clima}) => {
  const ciudades = clima.name ? [clima.name] : [];
  return (
    <div>
      <label htmlFor="categoria-select">Buscar por categoría:</label>
      <select
        id="categoria-select"
        value={clima.name}
      >
        <option value="">Selecciona una categoría</option>
        {ciudades.map((ciudad, index) => (
          <option key={index} value={ciudad}>{ciudad}</option>
        ))}
      </select>
    </div>
  );
};

export default Formulario;

Formulario.propTypes ={
  clima: PropTypes.array.isRequired,
}