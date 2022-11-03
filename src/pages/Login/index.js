import React from "react";
import Logingif from "assets/images/login-gif.mp4";
const Login = () => {
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__video">
          <video autoPlay loop muted src={Logingif}></video>
        </div>
        <div className="form">
          <div className="form__title">
            <h3>Sign in to Unemployed Youth</h3>
          </div>
          <form>
            <div className="field">
              <input
                type="email"
                className="field__input"
                name="email"
                placeholder="Email"
              />
              {/* <label className="field__label">Email</label> */}
            </div>
            <div className="field">
              <input
                type="password"
                className="field__input"
                name="password"
                placeholder="Password"
              />
              {/* <label className="field__label">Password</label> */}
            </div>
          </form>
          <div className="form__register">
            <p>
              Don't have any account?
              <span>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
