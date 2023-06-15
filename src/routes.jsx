import PrivateRoute from "./components/PrivateRoute";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/auth";
import LoginPage from "./pages/auth/LoginPage";
import Home from "./pages/Home";
import RegisterPage from "./components/RegisterPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        auth: true
    },
    {
        path:'/auth',
        element: <AuthLayout />,
        children: [
            {
                path:'login',
                element: <LoginPage />
            }
        ]
    }
  ]);


  const authCheck = arr => arr.map( route => {
        if (route?.auth) {
            route.element = <PrivateRoute>{route.element}</PrivateRoute>
        }
        if (route?.children) {
          route.children = authCheck(route.children)
        }

        return route
    })
  

export default authCheck(routes.routes)