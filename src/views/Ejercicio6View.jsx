import { useEffect, useState } from 'react';

import Formulario from '../components/ejercicio6/form/Formulario';
import ContenedorCard from '../components/ejercicio6/card/ContenedorCard';

const coloresLS = JSON.parse(localStorage.getItem('colores')) || [];

const Ejercicio6View = () => {
    const [colores, setColores] = useState(coloresLS);

    useEffect(()=>{
      localStorage.setItem('colores', JSON.stringify(colores));
    }, [colores]);
  return (
    <>
    <h1>EJERCICIO 6</h1>
    <hr />
    <Formulario colores={colores} setColores={setColores}/>
    <ContenedorCard colores={colores} setColores={setColores}/>
    </>
  )
}

export default Ejercicio6View