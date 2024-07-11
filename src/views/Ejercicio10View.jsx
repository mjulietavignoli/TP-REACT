import Formulario from '../components/ejercicio10/Formulario';
import ContenedorCard from '../components/ejercicio10/ContenedorCard';

import { useEffect, useState } from 'react';

const peliculasLS = JSON.parse(localStorage.getItem('peliculas')) || [];

const Ejercicio10View = () => {
  const [peliculas, setPeliculas] = useState(peliculasLS);

  useEffect(()=>{
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);

  return (
    <>
    <h1>EJERCICIO 10</h1>
    <hr />
    <Formulario peliculas={peliculas} setPeliculas={setPeliculas}/>
    <ContenedorCard peliculas={peliculas}/>
    </>
  )
}

export default Ejercicio10View