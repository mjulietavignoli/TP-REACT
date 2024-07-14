import { useEffect, useState } from "react";

import Formulario from "../components/ejercicio11/formulario/Formulario";

const Ejercicio11View = () => {
  const [clima, setClima] = useState([]);
  const apiKey = '9781b4a6582306ca27f18057c81f2755';
  const city = 'Madrid';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=es&units=metric`;

  const fetchClima = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setClima(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClima();
  }, []); 

  return (
    <>
      <h1>EJERCICIO 11</h1>
      <hr />
      <h2 className='text-center m-3'>Noticias</h2>
      <hr />
      <Formulario clima={clima}/>
    </>
      
  );
};

export default Ejercicio11View;