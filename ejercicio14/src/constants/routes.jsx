import { createBrowserRouter } from "react-router-dom";

import Ejercicio14RootView from "../views/routing/Ejercicio14RootView";
import Ejercicio14PublicView from "../views/routing/Ejercicio14PublicView";
import Ejercicio14PrivateView from "../views/routing/Ejercicio14PrivateView";
import LoginView from "../views/LoginView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Ejercicio14RootView />,
    children: [
      {
        path: "",
        element: <p>Hola</p>,
      },
      {
        path: "detail/:id",
        element: <p>Detalle</p>,
      },
      {
        path: "login",
        element: <LoginView />,
      },
      {
        path: "register",
        element: <p>Register</p>,
      },
      {
        path: "",
        element: <Ejercicio14PrivateView />,
        children: [
          {
            path: "admin",
            element: <p>Admin</p>,
          },
        ],
      },
    ],
  },
]);
