import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../../stores/useSession';

const Ejercicio14PrivateView = () => {
  const { isLoggedIn } = useSession();

  if (isLoggedIn) return <Outlet />;

  return <Navigate to='/login' />;
  };
  export default Ejercicio14PrivateView;