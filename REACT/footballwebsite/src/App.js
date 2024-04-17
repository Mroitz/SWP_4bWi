import Table from "./components/molecules/Table";
import Header from "./components/molecules/Header";
import Clubs from "./components/molecules/clubs";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
}
  from "react-router-dom";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Table />
      </div>
    ),
  },
  {
    path: "/clubs",
    element: (
      <div>
        <Clubs />
      </div>
    ),
  }
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>

  );
}


export default App;
