import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";

import Formulario from "../components/ejercicio13/Formulario";
import Card from "../components/ejercicio13/Card";
import LoadingClima from '../components/ejercicio13/LoadingClima';

import { getClimaFn, API_KEY_CLIMA } from '../api/clima';

const Ejercicio13View = () => {
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [url, setUrl] = useState('');

  const { data: clima, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["clima", url],
    queryFn: getClimaFn,
    enabled: false,
  });

  const handleConsultar = () => {
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY_CLIMA}`);
    refetch();
  };

  return (
    <>
      <Formulario
        onPaisChange={setPais}
        onCiudadChange={setCiudad}
        onSubmit={handleConsultar}
      />
      {isLoading && <LoadingClima />}
      {isError && <p>Ha ocurrido un error</p>}
      {isSuccess && (
        <Card
          ciudad={ciudad}
          pais={pais}
          clima={clima}
        />
      )}
    </>
  );
};

export default Ejercicio13View;
