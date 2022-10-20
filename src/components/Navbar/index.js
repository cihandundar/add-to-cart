import React from "react";
import { Logo } from "assets/icons";
const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="nav">
          <div className="nav__logo">
            <Logo />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
