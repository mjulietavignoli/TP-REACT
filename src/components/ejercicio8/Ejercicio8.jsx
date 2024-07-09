import { useRef } from "react";
import {
  validateEmail,
  validateName,
  validateNumber,
} from "../../utilities/validators.js";

import {Contacto} from "./Contacto.js"

const Ejercicio8 = () => {
  const $inputNombre = useRef();
  const $inputApellido = useRef();
  const $inputDni = useRef();
  const $inputEmail = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validateName($inputNombre.current) ||
      !validateName($inputApellido.current) ||
      !validateEmail($inputEmail.current) ||
      !validateNumber($inputDni.current)
    ) {
      return;
    }
  };

  const nombre = $inputNombre.current.value;
  const apellido = $inputApellido.current.value;
  const dni = $inputDni.current.value;
  const email = $inputEmail.current.value;

  const nuevoContacto = new Contacto(nombre, apellido, dni, email);

  return (
    <form form className="bg-white p-3 rounded-3" onSubmit={handleSubmit}>
      <h2 className="text-center">FORMULARIO</h2>
      <fieldset>
        <label htmlFor="input-nombre" className="form-label">
          Nombre
        </label>
        <input
          placeholder="Julieta"
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
          <span className="badge text-bg-danger">Ingrese un nombre valido</span>
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="input-apellido" className="form-label">
          Apellido
        </label>
        <input
          placeholder="Vignoli"
          type="text"
          name=""
          id="input-apellido"
          className="form-control"
          ref={$inputApellido}
          minLength={3}
          maxLength={40}
          required
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">
            Ingrese un apellido valido
          </span>
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="input-dni" className="form-label">
          DNI
        </label>
        <input
          placeholder="1234567"
          type="text"
          name=""
          id="input-dni"
          className="form-control"
          ref={$inputDni}
          minLength={3}
          maxLength={10}
          required
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingrese un DNI valido</span>
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="input-email" className="form-label">
          Email
        </label>
        <input
          placeholder="ejemplo@mail.com"
          type="text"
          name=""
          id="input-email"
          className="form-control"
          ref={$inputEmail}
          required
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingrese un email valido</span>
        </div>
      </fieldset>
      <div className="text-end mt-3">
        <button className="btn btn-warning" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Ejercicio8;