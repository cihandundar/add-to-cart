import React from "react";
import Errorimg from "assets/images/error.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="error"
    >
      <div
        style={{ height: "600px", position: "relative" }}
        className="error__container"
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={Errorimg}
          alt=""
        />
        <Link
          style={{
            position: "absolute",
            top: "20%",
            left: "39%",
            background: "#ff735c",
            width: "250px",
            height: "45px",
            color: "#ffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            fontWeight: "500",
            letterSpacing: "3px",
          }}
          to="/"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
