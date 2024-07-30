import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../../stores/useSession';

const AuthViews = () => { //esto es una ruta protegida, un componente que tiene esta validación
  const { isLoggedIn } = useSession();

  if (isLoggedIn) return <Navigate to='/' />;

  return <Outlet />;
  };
  export default AuthViews;