import { Link } from "react-router-dom";
import logoImg from "../../assets/images/online-management.png";
import Styles from "../../styles/Navbar.module.css";
import Container from "../../utils/Container";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#101c43" }}>
      <Container>
        <div className={Styles.mainNavbar}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff"}}>
            {" "}
            <div className={Styles.logoContainer}>
              <img
                width={35}
                height={35}
                src={logoImg}
                alt="Contacts Management"
              />
              <h1 className="poppins-semibold">NHCM</h1>
            </div>
          </Link>
          <div>
            <Link
              style={{ backgroundColor: "#F74D00" }}
              className={`${Styles.linkStyle} poppins-light`}
              to="/add-contacts"
            >
              Add Contacts
            </Link>
            <Link
              style={{ backgroundColor: "#2E75DA" }}
              className={`${Styles.linkStyle} poppins-light`}
              to="/all-contacts"
            >
              All Contacts
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
