import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const RootView = () => {
  return (
    <>
      <Header />
      <main className='container my-3 flex-grow-1'>
        <Outlet />
      </main>
      <footer>Este es el footer</footer>
    </>
  );
};
export default RootView;