import { Outlet } from 'react-router-dom';

const RootView = () => {
  return (
    <>
      <header></header>
      <main className='container my-3'>
        <Outlet />
      </main>
      <footer>Este es el footer</footer>
    </>
  );
};
export default RootView;