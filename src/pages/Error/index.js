import React from "react";
import Errorimg from "assets/images/error.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="error">
      <div className="error__container">
        <div className="error__image">
          <img src={Errorimg} alt="" />
        </div>
        <Link to="/">
          <button> Go to Homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
