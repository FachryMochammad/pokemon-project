import { Navbar } from "./";

const Error = ({ error }) => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h1
          className="text-center"
          style={{ marginTop: "20rem", color: "#772ce8" }}
        >
          {error}
        </h1>
      </div>
    </>
  );
};

export default Error;
