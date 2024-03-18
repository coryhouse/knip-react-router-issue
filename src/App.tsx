import { useState } from "react";
import "./App.css";

function App() {
  const routes = [
    { index: true, lazy: () => import("./PageOne") },
    { index: true, lazy: () => import("./PageTwo") },
  ];

  return <></>;
}

export default App;
