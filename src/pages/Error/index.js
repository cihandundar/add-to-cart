import React from "react";
import Errorimg from "assets/images/error.jpg";
const Error = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="error"
    >
      <div style={{ height: "600px" }} className="error__container">
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={Errorimg}
          alt=""
        />
      </div>
    </section>
  );
};

export default Error;
