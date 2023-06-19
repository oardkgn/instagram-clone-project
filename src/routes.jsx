import PrivateRoute from "./components/PrivateRoute";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/auth";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import MainLayout from "./pages/MainLayout";
import Posts from "./pages/profile/components/Posts"
import Saved from "./pages/profile/components/Saved"
import Tagged from "./pages/profile//components/Tagged"
import ChatsBar from "./pages/inbox/ChatsBar"
import ChatDiv from "./pages/inbox/ChatDiv"
import InboxLayout from "./pages/inbox/inboxLayout";

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
            element: <Profile />,
            children: [
              {
                index : true,
                element: <Posts />
              },
              {
                path: "saved",
                element: <Saved />
              },
              {
                path: "tagged",
                element: <Tagged />
              },
            ]
        },
        {
          path: "direct/inbox",
          element: <InboxLayout />,
        }
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
