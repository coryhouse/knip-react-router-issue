import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { index: true, lazy: () => import("./PageOne") },
  { path: "/two", lazy: () => import("./PageTwo") },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
