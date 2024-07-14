import { useRef } from "react";
import PropTypes from 'prop-types';
import {
  validateName
} from "../../../utilities/validators.js";

import {Cita} from "../Cita.js"
import {Fecha} from '../Fecha.js'

const Formulario= (props) => {
  const {citas, setCitas}=props;

  const $inputNombreMascota = useRef();
  const $inputNombreDueño = useRef();
  const $inputFecha = useRef();
  const $inputHora = useRef();
  const $inputSintoma = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateName($inputNombreMascota.current) ||
      !validateName($inputNombreDueño.current) 
    ) {
      return;
    }
    
  const nombreMascota = $inputNombreMascota.current.value;
  const nombreDueño = $inputNombreDueño.current.value;
  const [dia, mes, anio] = $inputFecha.current.value.split("-");
  const hora = $inputHora.current.value;
  const sintoma = $inputSintoma.current.value;

  const nuevaFecha = new Fecha(anio, mes, dia, hora);

  const nuevaCita = new Cita(nombreMascota, nombreDueño, nuevaFecha, sintoma);

  const nuevaLista = [...citas, nuevaCita];
  setCitas(nuevaLista);
  alert('Datos enviados');
  e.target.reset();
  $inputNombreMascota.current.classList.remove('is-valid');
  $inputNombreDueño.current.classList.remove('is-valid');
  $inputSintoma.current.classList.remove('is-valid');
  };

  return (
    <>
    <h2 className="text-center my-4">Administrador pacientes de veterinaria</h2>
    <form className="bg-white p-3 rounded-3" onSubmit={handleSubmit}>
      <h4 className="text-center">Llenar el formulario para crear una cita</h4>
      <hr />
      <div className="row mb-3">
            <label htmlFor="input-nombre-mascota" className="col-sm-2 col-form-label">
            Nombre de mascota
            </label>
            <div className="col-sm-10">
                <input
                    placeholder="Firulais"
                    type="text"
                    id="input-nombre-mascota"
                    className="form-control"
                    ref={$inputNombreMascota}
                    minLength={3}
                    maxLength={40}
                    required
                />
                <div className="invalid-feedback">
                    <span className="badge text-bg-danger">Ingrese un nombre valido</span>
                </div>
            </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="input-nombre-dueno" className="col-sm-2 col-form-label">
          Nombre de dueño
        </label>
        <div className="col-sm-10">
          <input
            placeholder="Juan Pérez"
            type="text"
            id="input-nombre-dueno"
            className="form-control"
            ref={$inputNombreDueño}
            minLength={3}
            maxLength={40}
            required
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">Ingrese un nombre valido</span>
          </div>
        </div>
      </div>
      <div className="row mb-3">
            <label htmlFor="input-fecha" className="col-sm-2 col-form-label">
            Fecha
            </label>
            <div className="col-sm-4">
                <input
                    type="date"
                    id="input-fecha"
                    className="form-control"
                    ref={$inputFecha}
                    required
                />
            </div>
            <label htmlFor="input-hora" className="col-sm-1 col-form-label">
            Hora
            </label>
            <div className="col-sm-5">
            <input
                type="time"
                id="input-hora"
                className="form-control"
                ref={$inputHora}
                required
            />
            </div>
        </div>
      <div className="row mb-3">
        <label htmlFor="input-sintoma" className="col-sm-2 col-form-label">
          Síntoma
        </label>
        <div className="col-sm-10">
          <input
            placeholder="Descripción del síntoma"
            type="text"
            id="input-sintoma"
            className="form-control"
            ref={$inputSintoma}
            required
          />
        </div>
      </div>
      <hr />
      <div className="text-center mt-3">
        <button className="btn btn-primary" type="submit">
          Agregar nueva cita
        </button>
      </div>
    </form>
    </>
  );
};

export default Formulario;

Formulario.propTypes ={
  citas: PropTypes.array.isRequired,
  setCitas: PropTypes.func.isRequired,
}