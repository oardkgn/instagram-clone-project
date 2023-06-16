import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import routes from "./routes";
import { useEffect, useState } from "react";

function App() {
  const user = useSelector((state) => state.auth.user);
  const routesDiv = useRoutes(routes);

  if (user === null) {
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
