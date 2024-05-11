import LoaderImg from "../assets/images/loader.gif";
const Loader = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh"
        }}
      >
        <img width={400} src={LoaderImg} alt="" />
      </div>
    </div>
  );
};

export default Loader;
