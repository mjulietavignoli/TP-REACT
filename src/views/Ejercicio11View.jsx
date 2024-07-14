import { useEffect, useState } from "react";

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClima();
  }, []); 

  return (
    <>
      <h1>EJERCICIO 6</h1>
      <hr />
      <h2 className='text-center m-3'>Noticias</h2>
      <hr />
      {clima.main ? (
        <div>
          <p>Temperatura: {clima.main.temp}°C</p>
          <p>Descripción: {clima.weather[0].description}</p>
          <p>Humedad: {clima.main.humidity}%</p>
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </>
  );
};

export default Ejercicio11View;