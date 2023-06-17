import PrivateRoute from "./components/PrivateRoute";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/auth";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import MainLayout from "./pages/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    auth: true,
    children: [
        { 
            index: true,
            element: <Home /> 
        },
        { 
            path: ":username", 
            element: <Profile /> 
        },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

const authCheck = (arr) =>
  arr.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }

    return route;
  });

export default authCheck(routes.routes);
