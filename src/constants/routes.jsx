import { createBrowserRouter } from 'react-router-dom';

import RootView from '../views/RootView';
import Ejercicio1View from '../views/Ejercicio1View.jsx';
import Ejercicio2View from '../views/Ejercicio2View.jsx';
import Ejercicio3View from '../views/Ejercicio3View.jsx';
import Ejercicio4View from '../views/Ejercicio4View.jsx';
import Ejercicio5View from '../views/Ejercicio5View.jsx';
import Ejercicio7View from '../views/Ejercicio7View.jsx';
import Ejercicio8View from '../views/Ejercicio8View.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      {
        path: 'ejercicio1',
        element: <Ejercicio1View />,
      },
      {
        path: 'ejercicio2',
        element: <Ejercicio2View />,
      },
      {
        path: 'ejercicio3',
        element: <Ejercicio3View />,
      },
      {
        path: 'ejercicio4',
        element: <Ejercicio4View />,
      },
      {
        path: 'ejercicio5',
        element: <Ejercicio5View />,
      },
      {
        path: 'ejercicio7',
        element: <Ejercicio7View />,
      },
      {
        path: 'ejercicio8',
        element: <Ejercicio8View />,
      },
    ],
  },
]);