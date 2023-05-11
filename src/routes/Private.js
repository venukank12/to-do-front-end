import { useRoutes, Navigate } from "react-router-dom";

import Dashboard from "../layouts/App/Dashboard";
import HomePage from "../pages/private/home";
import MyTaskPage from "../pages/private/MyTask";

const PrivateRouter = () =>
  useRoutes([
    {
      element:<Dashboard/>,
      children:[
        {
        path: "/home",
        element: <HomePage />,
      },
        {
        path: "/my-task",
        element: <MyTaskPage />,
      },
      {
        path: "*",
        element: <Navigate to="/home" replace />,
      }]
    }
  ]);

export default PrivateRouter;
