import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Main } from "./layouts";
import { Home } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Home />} />
    </Route>
  )
);
function App() {
  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
