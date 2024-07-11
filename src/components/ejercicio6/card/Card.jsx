import PropTypes from 'prop-types';

import Swal from 'sweetalert2';

const Card = (props) => {
  const { color, deleteColor } = props;

  const handleDelete = () => {
    Swal.fire({
        title: 'Atención',
        html: `<p>Estás por eliminar el color <b>${color.nombre}</b>. Esta acción es irreversible</p>`,
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true, 
        confirmButtonText: 'Si, eliminar',
        confirmButtonColor: 'red',
        cancelButtonText: 'No',
    }).then((res)=>{{
        if(res.isConfirmed){
            deleteColor(color.codigo);
            Swal.fire({
                title: 'Color eliminado exitosamente',
                icon: 'success',
                showCancelButton: false,
                showConfirmButton: false,
                timer: 1500,
            })  
        }
    }})
  }

  return (
    <div className='col-4 mt-3'>
      <div className='card'>
        <div className="no-gutters">
          <div className='card-header text-center'>{color.nombre}</div>
          <div className="card-body text-dark">
            <input
              className="me-3 w-100"
              type="color"
              value={color.nombre}
              readOnly
            />
          </div>
          <div className='card-footer d-flex justify-content-end'>
            <button className='btn btn-danger' type='button' onClick={handleDelete}>Borrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Card

Card.propTypes ={
    color: PropTypes.object.isRequired,
    deleteColor:PropTypes.func.isRequired,
  }