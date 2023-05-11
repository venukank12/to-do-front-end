import { useRoutes, Navigate } from "react-router-dom";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/Login";

const PublicRouter = () =>
  useRoutes([
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <Navigate to="/login" replace />,
    },
  ]);

export default PublicRouter;
