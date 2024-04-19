import Table from "./components/molecules/Table";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/molecules/Header";
import Clubs from "./components/molecules/clubs";

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header prop="Club" />
        <Table />
      </div>
    ),
  },
  {
    path: "/clubs",
    element: (
      <div>
        <Header prop="Tabelle" />
        <Clubs />
      </div>
    ),
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
