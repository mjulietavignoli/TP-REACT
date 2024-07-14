import { useEffect, useState } from 'react';

import Formulario from '../components/ejercicio9/formulario/Formulario';
import ContenedorCard from '../components/ejercicio9/card/ContenedorCard';

const citasLS = JSON.parse(localStorage.getItem('citas')) || [];

const Ejercicio9View = () => {
  const [citas, setCitas] = useState(citasLS);

  useEffect(()=>{
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  return (
    <>
    <h1>EJERCICIO 10</h1>
    <hr />
    <Formulario citas={citas} setCitas={setCitas}/>
    <ContenedorCard citas={citas} setCitas={setCitas}/>
    </>
  )
}

export default Ejercicio9View