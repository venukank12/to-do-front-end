import { useRoutes, Navigate } from "react-router-dom";

import HomePage from "../pages/private/home";

const PrivateRouter = () =>
  useRoutes([
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);

export default PrivateRouter;
