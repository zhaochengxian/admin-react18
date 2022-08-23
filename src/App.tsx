import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

import "./App.css";

function App() {
  let element = useRoutes(routes);
  return <div className="App">{element}</div>;
}

export default App;
