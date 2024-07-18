export const API_KEY_CLIMA = import.meta.env.VITE_API_KEY_CLIMA;

export const getClimaFn = async ({ queryKey }) => {
  const [_, url] = queryKey;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
