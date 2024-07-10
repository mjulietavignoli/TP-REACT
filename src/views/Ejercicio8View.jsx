import Ejercicio8 from '../components/ejercicio8/Ejercicio8';

import { useEffect, useState } from 'react';

const contactosLS = JSON.parse(localStorage.getItem('contactos')) || [];


const Ejercicio8View = () => {
  const [contactos, setContactos] = useState(contactosLS);

  useEffect(()=>{
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }, [contactos]);

  return (
    <>
    <h1>EJERCICIO 8</h1>
    <hr />
    <Ejercicio8 contactos={contactos} setContactos={setContactos}/>
    </>
  )
}

export default Ejercicio8View