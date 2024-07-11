import PropTypes from "prop-types";
import './ejercicio7.css';

const Card = ({ empleado }) => {
  const { fullName, title, department, pic } = empleado;

  return (
    <div className="card w-100">
      <div className="row no-gutters">
        <div className="col-md-2 h-100 mx-0">
          <img src={pic} className="card-img rounded-circle card-size w-75" alt={`${fullName}'s picture`} />
        </div>
        <div className="col-md-10">
          <div className="card-body text-dark">
            <h5 className="card-title">{fullName}</h5>
            <div className="d-flex align-items-center gap-2">
              <p>{title}</p>
              <p className="bg-primary text-white rounded-2">
                <small className="p-1">{department}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


Card.propTypes = {
  empleado: PropTypes.shape({
    id: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
  }).isRequired,
};
