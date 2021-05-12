import { Navbar } from "./";

const Loading = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="text-center">
          <div
            className="spinner-border"
            role="status"
            style={{ marginTop: "20rem", color: "#772ce8" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
