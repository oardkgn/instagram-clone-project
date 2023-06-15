import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import routes from "./routes";
import { useEffect, useState } from "react";

function App() {
  const user = useSelector((state) => state.auth.user);
  const routesDiv = useRoutes(routes);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRedirect(true);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!user && !redirect) {
    return <Loader />;
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {routesDiv}
    </>
  );
}

export default App;
