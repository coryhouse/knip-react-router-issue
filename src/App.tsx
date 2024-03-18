import { RouterProvider, createBrowserRouter } from "react-router-dom";

const PageOne = () => import("./PageOne");
const PageTwo = () => import("./PageTwo");

const router = createBrowserRouter([
  { index: true, lazy: PageOne },
  { path: "/two", lazy: PageTwo },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
