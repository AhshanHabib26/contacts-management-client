import { Link } from "react-router-dom";
import BannerImg from "../assets/images/banner.png";
import Styles from "../styles/Home.module.css";
import Container from "../utils/Container";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Container>
        <div className={Styles.homeContainer}>
          <div className={Styles.textContainer}>
            <h1 className="poppins-bold">
              <span style={{ color: "#101C43" }}>Simplifying</span> Connectivity
              Across Platforms
            </h1>
            <p className="poppins-regular">
              Streamline communication effortlessly with our centralized contact
              management system solution.
            </p>
            <Link className="poppins-regular" to="/add-contacts">
              Get Started
            </Link>
          </div>
          <div className={Styles.imgContainer}>
            <img src={BannerImg} alt="Banner Image" />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
