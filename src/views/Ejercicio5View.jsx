import Ejercicio5 from '../components/ejercicio5/Ejercicio5';

import { useEffect, useState } from 'react';

const tareasLS = JSON.parse(localStorage.getItem('tareas')) || [];

const Ejercicio5View = () => {
  const [tareas, setTareas] = useState(tareasLS);

  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  return (
    <>
    <h1>EJERCICIO 5</h1>
    <hr />
    <Ejercicio5 tareas={tareas} setTareas={setTareas}/>
    </>
  )
}

export default Ejercicio5View