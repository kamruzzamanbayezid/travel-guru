import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Routes/PrivateRoute";

const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/destination/:destinationId',
                        element: <PrivateRoute><Destination /></PrivateRoute>,
                        loader: () => fetch('/destinations.json')
                  },
            ],
      },
      {
            path: '/register',
            element: <Register />
      },
      {
            path: '/login',
            element: <Login />
      }

]);

export default router;