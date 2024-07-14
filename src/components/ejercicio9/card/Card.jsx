import PropTypes from 'prop-types';

import Swal from 'sweetalert2';

const Card = (props) => {
  const { cita, deleteCita } = props;

  const handleDelete = () => {
    Swal.fire({
        title: 'Atención',
        html: `<p>Estás por eliminar la cita del animal <b>${cita.nombreMascota}</b>. Esta acción es irreversible</p>`,
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true, 
        confirmButtonText: 'Si, eliminar',
        confirmButtonColor: 'red',
        cancelButtonText: 'No',
    }).then((res)=>{{
        if(res.isConfirmed){
            deleteCita(cita.codigo);
            Swal.fire({
                title: 'Cita eliminada exitosamente',
                icon: 'success',
                showCancelButton: false,
                showConfirmButton: false,
                timer: 1500,
            })  
        }
    }})
  }

  return (
    <div className="col-4 mt-3">
      <div className="card">
        <div className="no-gutters">
          <div className="card-header d-flex align-items-center">
                <div className="col-2">
                </div>
                <div className="col-10">
                    <p>Nombre Mascota: {cita.nombreMascota}</p>
                    <p>Nombre Dueño: {cita.nombreDueño}</p>
                </div>
          </div>
          <div className="card-body text-dark">
            <div className="row">
              <p>Fecha: {`${cita.fecha.dia}/${cita.fecha.mes}/${cita.fecha.anio}`}</p>
              <p>Hora: {cita.fecha.hora}</p>
              <p>Sintoma: {cita.sintomas}</p>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-danger" type="button" onClick={handleDelete}>
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Card

Card.propTypes ={
    cita: PropTypes.object.isRequired,
    deleteCita:PropTypes.func.isRequired,
  }