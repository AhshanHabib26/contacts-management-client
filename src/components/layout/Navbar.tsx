import { Link } from "react-router-dom";
import logoImg from "../../assets/images/online-management.png";
import Styles from "../../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={Styles.mainNavbar}>
      <div className={Styles.logoContainer}>
        <img width={40} height={40} src={logoImg} alt="Contacts Management" />
        <h1 className="poppins-semibold">NHCM</h1>
      </div>
      <div>
        <Link style={{ backgroundColor: "#F74D00"}} className={`${Styles.linkStyle} poppins-light`} to="/add-contacts">Add Contacts</Link>
        <Link style={{ backgroundColor: "#2E75DA"}} className={`${Styles.linkStyle} poppins-light`} to="/all-contacts">All Contacts</Link>
      </div>
    </div>
  );
};

export default Navbar;
