import PropTypes from 'prop-types';

import { useRef, useState } from 'react';

import { Color } from '../Color.js'

const Formulario = (props) => {
  const { colores, setColores } = props;
  const [color, setColor] = useState('#000000');

  const $inputColor = useRef();

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleTextChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nombre = $inputColor.current.value;

    const nuevoColor = new Color(nombre);

    const nuevaLista = [...colores, nuevoColor];
    setColores(nuevaLista);
    alert('Color cargado');
    e.target.reset();
    $inputColor.current.classList.remove('is-valid');
  };
  return (
    <form className='card' onSubmit={handleSubmit}>
      <div className="no-gutters">
        <div className='card-header'>Administrar colores</div>
        <div className="card-body text-dark">
          <div className="mb-3">
            <label className="form-label">Pruebe opciones de colores aquí</label>
            <input
              className="form-control me-3"
              type="color"
              value={color}
              onChange={handleColorChange}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder='Ingrese un color ej #000000'
              value={color}
              onChange={handleTextChange}
              ref={$inputColor}
              required
            />
          </div>
        </div>
        <div className='card-footer d-flex justify-content-end'>
          <button className='btn btn-primary' type='submit'>Guardar</button>
        </div>
      </div>
    </form>
  );
}

export default Formulario

Formulario.propTypes ={
    colores: PropTypes.array.isRequired,
    setColores: PropTypes.func.isRequired,
  }