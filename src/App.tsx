import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routers/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster
        position="top-center"
        toastOptions={{
          className: "poppins-light",
        }}
      />
    </>
  );
}

export default App;
