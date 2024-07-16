import { useEffect, useState } from "react";
import Formulario from '../components/ejercicio12/formulario/Formulario';
import ContenedorCard from '../components/ejercicio12/card/ContenedorCard';

const API_KEY = import.meta.env.VITE_API_KEY;

const Ejercicio12View = () => {
  const [noticias, setNoticias] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [paises, setPaises] = useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState('');

  const fetchNoticia = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setNoticias(data.results || []);

      const uniqueCategories = [
        ...new Set(data.results.map(noticia => noticia.category).flat())
      ];
      setCategorias(uniqueCategories);

      const uniquePaises = [
        ...new Set(data.results.map(noticia => noticia.country).flat())
      ];
      setPaises(uniquePaises);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNoticia();
  }, []);

  return (
    <>
      <h1>EJERCICIO 12</h1>
      <hr />
      <h2 className='text-center m-3'>Noticias</h2>
      <hr />
      <Formulario
        categorias={categorias}
        onCategoriaChange={(categoria) => setCategoriaSeleccionada(categoria)}
        paises={paises}
        onPaisChange={(pais) => setPaisSeleccionado(pais)}
      />
      <ContenedorCard
        noticias={noticias}
        categoriaSeleccionada={categoriaSeleccionada}
        paisSeleccionado={paisSeleccionado}
      />
    </>
  );
};

export default Ejercicio12View;
