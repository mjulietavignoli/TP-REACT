import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="">
            <Link className="navbar-brand" to="/">MI COCINITA</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100">
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/login">Iniciar sesión</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/admin">Admin</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header