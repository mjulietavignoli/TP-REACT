import { createBrowserRouter } from "react-router-dom";

import Ejercicio14RootView from "../views/routing/Ejercicio14RootView";
import AuthViews from "../views/routing/AuthViews";
import Ejercicio14PrivateView from "../views/routing/Ejercicio14PrivateView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import RegisterView from "../views/RegisterView";
import AdminView from "../views/AdminView";
import DetailView from "../views/DetailView";
import Error404 from "../views/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Ejercicio14RootView />,
    children: [
      {
        path: '',
        element: <HomeView />,
      },
      {
        path: 'detail/:id',
        element: <DetailView />,
      },
      {
        path: '',
        element: <AuthViews />,
        children: [
          {
            path: 'login',
            element: <LoginView />,
          },
          {
            path: 'register',
            element: <RegisterView />,
          },
        ],
      },
      {
        path: "",
        element: <Ejercicio14PrivateView />,
        children: [
          {
            path: "admin",
            element: <AdminView/>,
          },
        ],
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);
