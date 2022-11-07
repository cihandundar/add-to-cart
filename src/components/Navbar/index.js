import React from "react";
import { Link } from "react-router-dom";
import ShoppingIcon from "assets/icons/ShoppingIcon";
const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Sign up",
      path: "/login",
    },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <nav className="nav">
          <div className="nav__logo">
            <Link to="/">
              <h2>Unemployed Youth</h2>
            </Link>
          </div>
          <ul className="nav__list">
            {links?.map((link) => (
              <li key={link?.id} className="nav__link">
                <Link to={link?.path}>{link?.name}</Link>
              </li>
            ))}
            <span className="nav__icon">
              <Link to="/basket">
                <ShoppingIcon />
              </Link>
            </span>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
