import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div
      style={{
        backgroundColor: "#101C43",
        padding: "20px",
        textAlign: "center",
        color: "#fff",
        fontSize: "18px"
      }}
    >
      <div>
        <p className="poppins-light">
          Copyright {year}{" "}
          <Link style={{ color: "#2E75DA", textDecoration: "none"}} className="" to="/">
            NHCM
          </Link>{" "}
          Designed By{" "}
          <a
            style={{ color: "#2E75DA", textDecoration: "none"}}
            target="_blank"
            href="https://www.linkedin.com/in/ahshanhabib26/"
          >
            Ahshan Habib
          </a>
          . All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
