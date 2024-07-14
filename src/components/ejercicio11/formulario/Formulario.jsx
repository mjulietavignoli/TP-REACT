import { useState } from 'react';

const Formulario = () => {
  const [categoria, setCategoria] = useState('');

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <div>
      <label htmlFor="categoria-select">Buscar por categoría:</label>
      <select
        id="categoria-select"
        value={categoria}
        onChange={handleCategoriaChange}
      >
        <option value="">Selecciona una categoría</option>
        <option value="noticias">Noticias</option>
        <option value="deportes">Deportes</option>
        <option value="entretenimiento">Entretenimiento</option>
        <option value="tecnologia">Tecnología</option>
        <option value="salud">Salud</option>
      </select>
    </div>
  );
};

export default Formulario;