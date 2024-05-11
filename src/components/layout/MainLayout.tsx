import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "../../utils/Container";

const MainLayout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
