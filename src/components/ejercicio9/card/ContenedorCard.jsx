import PropTypes from 'prop-types';
import { useState } from 'react';

import Card from './Card.jsx'

const ContenedorCard = (props) => {
    const { citas, setCitas } = props;
    const [mostrarHoy, setMostrarHoy] = useState(false);
  
    const deleteCita = (idCita) => {
      const nuevaLista = citas.filter((c) => c.codigo !== idCita);
      setCitas(nuevaLista);
    };
  
    // Fecha actual
    const hoy = new Date();
    const diaHoy = hoy.getDate();
    const mesHoy = String(hoy.getMonth() + 1).padStart(2, '0');
    const anioHoy = hoy.getFullYear();
  
    const esHoy = (fecha) => {
      const resultado = (
        fecha.dia === diaHoy &&
        fecha.mes === mesHoy &&
        fecha.anio === anioHoy
      );
      
      console.log(`Comparando: ${fecha.dia}/${fecha.mes}/${fecha.anio} con ${diaHoy}/${mesHoy}/${anioHoy} -> ${resultado}`);
      
      return resultado;
    };
  
    // Filtrar citas según el estado mostrarHoy
    const citasParaMostrar = citas.filter((cita) => mostrarHoy ? esHoy(cita.fecha) : true);
  
    return (
      <div className='bg-dark p-3 mt-4 rounded'>
        <h2 className='mt-3 text-center text-white'>Administra las citas aquí</h2>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-light m-2' onClick={() => setMostrarHoy(false)}>Mostrar Todas</button>
          <button className='btn btn-light m-2' onClick={() => setMostrarHoy(true)}>Mostrar Hoy</button>
        </div>
        <div className='row'>
          {citasParaMostrar.map((cita) => (
            <Card key={cita.codigo} cita={cita} deleteCita={deleteCita} />
          ))}
        </div>
      </div>
    );
  };

export default ContenedorCard

ContenedorCard.propTypes = {
    citas: PropTypes.array.isRequired,
    setCitas: PropTypes.func.isRequired,
};
  