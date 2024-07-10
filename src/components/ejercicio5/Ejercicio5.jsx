import { useRef } from "react";
import PropTypes from 'prop-types';
import {Tarea} from './Tarea.js'

const Ejercicio5 = (props) => {
    const {tareas, setTareas} = props;
  
    const $input = useRef();
  
    const handleNuevaTarea = () => {
      let tarea = $input.current.value;
      if (tarea.trim()) {
        let tareaExistente = false;
        for (let i = 0; i < tareas.length; i++) {
          if (tareas[i].nombre === tarea) {
            tareaExistente = true;
            break;
          }
        }
        
        if (!tareaExistente) {
          tarea=tarea.toUpperCase();
          const nuevaTarea = new Tarea(tarea);
          const nuevoArreglo = [...tareas, nuevaTarea];
          setTareas(nuevoArreglo);
          $input.current.value = "";
        } else {
          alert("La tarea ya existe");
        }
      }
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleNuevaTarea();
      }
    };
  
    const handleEliminarTarea = (index) => {
      const nuevoArreglo = tareas.filter((_, i) => i !== index);
      setTareas(nuevoArreglo);
    };
  
    return (
      <section className="d-flex justify-content-center align-items-center bg-white">
        <div className="p-4 bg-white">
          <h1 className="text-center mb-3">Bienvenido</h1>
          <h3 className="text-center mb-4">Ingresa tus tareas</h3>
          <div className="d-flex mb-3">
            <input 
              type="text" 
              placeholder="Nueva tarea..." 
              ref={$input} 
              className="form-control me-2"
              onKeyDown={handleKeyDown}
            />
          </div>
          <ul className="list-group">
          {tareas.map((tarea, index) => (
            <li key={tarea.codigo} className="list-group-item d-flex justify-content-between align-items-center">
              {tarea.nombre}
              <button onClick={() => handleEliminarTarea(index)} className="btn btn-danger btn-sm">
                X
              </button>
            </li>
          ))}
        </ul>
        </div>
      </section>
    );
}

export default Ejercicio5;
Ejercicio5.propTypes ={
  tareas: PropTypes.array.isRequired,
  setTareas: PropTypes.func.isRequired,
}