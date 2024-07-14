import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="">
            <Link className="navbar-brand" to="/">TRABAJO PRÁCTICO DE REACT</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100">
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio1">Ejercicio 1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio2">Ejercicio 2</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio3">Ejercicio 3</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio4">Ejercicio 4</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio5">Ejercicio 5</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio6">Ejercicio 6</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio7">Ejercicio 7</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio8">Ejercicio 8</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio9">Ejercicio 9</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio10">Ejercicio 10</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio11">Ejercicio 11</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio12">Ejercicio 12</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio13">Ejercicio 13</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=>{return isActive ? 'nav-link active' : 'nav-link';}} to="/ejercicio14">Ejercicio 14</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header