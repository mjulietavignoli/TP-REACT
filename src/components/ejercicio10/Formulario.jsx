import PropTypes from 'prop-types';

import { useRef } from 'react';

import { Pelicula } from './Pelicula.js'

const Formulario = (props) => {
    const {peliculas, setPeliculas}=props;
  
  const $inputNombre = useRef();
  const $inputDescripcion = useRef();
  const $selectGenero = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nombre = $inputNombre.current.value;
    const descripcion = $inputDescripcion.current.value;
    const genero = $selectGenero.current.value;

    const nuevaPelicula = new Pelicula(nombre, descripcion, genero);

    const nuevaLista = [...peliculas, nuevaPelicula];
    setPeliculas(nuevaLista);
    alert('Pelicula cargada');
    e.target.reset();
    $inputNombre.current.classList.remove('is-valid');
    $inputDescripcion.current.classList.remove('is-valid');
  };
  return (
    <>
    <form form className="bg-white p-3 rounded-3" onSubmit={handleSubmit}>
      <h2 className="text-center">FORMULARIO DE PELICULAS</h2>
      <fieldset className='mt-1'>
        <label htmlFor="input-nombre" className="form-label">
          Nombre pelicula
        </label>
        <input
          placeholder="Ingrese el nombre de la pelicula"
          type="text"
          name=""
          id="input-nombre"
          className="form-control"
          ref={$inputNombre}
          minLength={3}
          maxLength={40}
          required
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingrese un nombre de pelicula valido</span>
        </div>
      </fieldset>
      <fieldset className='mt-1'>
        <label htmlFor="input-descripcion" className="form-label">
          Descripcion
        </label>
        <input
          placeholder="Ingrese la descripcion de la pelicula"
          type="text"
          name=""
          id="input-descripcion"
          className="form-control"
          ref={$inputDescripcion}
          minLength={3}
          maxLength={400}
          required
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">
            Ingrese una descripcion valida
          </span>
        </div>
      </fieldset>
      <fieldset className='mt-1'>
          <label htmlFor="select-genero" className="form-label">
            Genero
          </label>
          <select id="select-genero" className="form-control" ref={$selectGenero} required>
            <option value="" disabled selected>Seleccione el género</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </select>
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              Seleccione un genero válido
            </span>
          </div>
        </fieldset>
      <div className="text-end mt-3">
        <button className="btn btn-warning" type="submit">
          Enviar
        </button>
      </div>
    </form>
    </>
  )
}

export default Formulario

Formulario.propTypes ={
    peliculas: PropTypes.array.isRequired,
    setPeliculas: PropTypes.func.isRequired,
  }