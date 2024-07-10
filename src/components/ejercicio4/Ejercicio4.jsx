import { useState, useRef } from "react";

const Ejercicio4 = () => {
  const [tareas, setTareas] = useState([]);
  
  const $input = useRef();

  const handleNuevaTarea = () => {
    let nuevaTarea = $input.current.value.trim();
    if (nuevaTarea) {
      nuevaTarea = nuevaTarea.toUpperCase();
      if (!tareas.includes(nuevaTarea)) {
        const nuevoArreglo = [...tareas, nuevaTarea];
        setTareas(nuevoArreglo);
        $input.current.value = "";
      } else {
        alert("La tarea ya existe en la lista.");
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
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {tarea}
              <button onClick={() => handleEliminarTarea(index)} className="btn btn-danger btn-sm">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Ejercicio4;
