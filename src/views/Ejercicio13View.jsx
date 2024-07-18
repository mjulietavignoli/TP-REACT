import { useState } from 'react';
import { useQuery, useMutation } from "@tanstack/react-query";

import Formulario from "../components/ejercicio13/Formulario";
import Card from "../components/ejercicio13/Card";
import LoadingClima from '../components/ejercicio13/LoadingClima';

import { getClimaFn, findClimaFn } from '../api/clima';

const Ejercicio13View = () => {
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [clima, setClima] = useState(null);

  const { data: climaInicial, isLoading, isError } = useQuery({
    queryKey: ["climaInicial"],
    queryFn: getClimaFn,
  });

  const { mutate: findClima } = useMutation({
    mutationFn: findClimaFn,
    onSuccess: (data) => {
      setClima(data);
      console.log(data);
    },
  });

  const handleConsultar = () => {
    findClima({ ciudad, pais });
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
      {clima && (
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
