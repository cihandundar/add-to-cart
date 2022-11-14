import React from "react";
import Heroimage from "assets/images/heroimage.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__img">
        <img src={Heroimage} alt="" />
      </div>
      <div className="hero__btn">
        <Link to="/product">
          <button>Start Shopping Now</button>
        </Link>
        <Link style={{ marginTop: "20px" }} to="/login">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
