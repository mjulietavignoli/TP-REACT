import { useRef } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ onPaisChange, onCiudadChange, onSubmit }) => {
  const $inputPais = useRef();
  const $inputCiudad = useRef();

  const handlePaisChange = (event) => {
    onPaisChange(event.target.value);
  };

  const handleCiudadChange = (event) => {
    onCiudadChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className='row' onSubmit={handleSubmit}>
      <fieldset className='col-4'>
        <label htmlFor="pais-input">Buscar por país: </label>
        <input onChange={handlePaisChange}
          placeholder="Ingrese el país"
          type="text"
          id="pais-input"
          className="form-control"
          ref={$inputPais}
          minLength={3}
          maxLength={40}
          required
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingrese un nombre de país válido</span>
        </div>
      </fieldset>
      <fieldset className='col-8'>
        <label htmlFor="ciudad-input">Buscar por ciudad: </label>
        <input onChange={handleCiudadChange}
          placeholder="Ingrese la ciudad"
          type="text"
          id="ciudad-input"
          className="form-control"
          ref={$inputCiudad}
          minLength={3}
          maxLength={40}
          required
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingrese un nombre de ciudad válido</span>
        </div>
      </fieldset>
      <div className="text-end mt-3">
        <button className="btn btn-warning" type="submit">
          Consultar
        </button>
      </div>
    </form>
  );
};

Formulario.propTypes = {
  onPaisChange: PropTypes.func.isRequired,
  onCiudadChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Formulario;
