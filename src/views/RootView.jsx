import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const RootView = () => {
  return (
    <>
      <Header />
      <main className='container my-3 flex-grow-1'>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};
export default RootView;