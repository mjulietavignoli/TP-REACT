import { useEffect, useState } from "react";
import Formulario from '../components/ejercicio11/formulario/Formulario';
import ContenedorCard from '../components/ejercicio11/card/ContenedorCard';

const Ejercicio11View = () => {
  const [noticias, setNoticias] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const fetchNoticia = async () => {
    const apiKey = 'pub_485640d76bd6042d0826d127b5238d7cabf5d';
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=us`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setNoticias(data.results || []);

      const uniqueCategories = [
        ...new Set(data.results.map(noticia => noticia.category).flat())
      ];
      setCategorias(uniqueCategories);

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
      <h1>EJERCICIO 11</h1>
      <hr />
      <h2 className='text-center m-3'>Noticias</h2>
      <hr />
      <Formulario
        categorias={categorias}
        onCategoriaChange={(categoria) => setCategoriaSeleccionada(categoria)}
      />
      <ContenedorCard
        noticias={noticias}
        categoriaSeleccionada={categoriaSeleccionada}
      />
    </>
  );
};

export default Ejercicio11View;
