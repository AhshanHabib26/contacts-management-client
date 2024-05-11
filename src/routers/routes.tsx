import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import AddContacts from "../pages/AddContacts";
import AllContacts from "../pages/AllContacts";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-contacts",
        element: <AddContacts />,
      },
      {
        path: "/all-contacts",
        element: <AllContacts />,
      },
    ],
  },
]);
