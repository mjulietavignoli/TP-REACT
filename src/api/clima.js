export const API_KEY_CLIMA = import.meta.env.VITE_API_KEY_CLIMA;

export const getClimaFn = async () => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,Argentina&appid=${API_KEY_CLIMA}`);
  const data = await res.json();
  return data;
};

export const findClimaFn = async ({ ciudad, pais }) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY_CLIMA}`);
  const data = await res.json();
  return data;
};
