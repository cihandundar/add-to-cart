import React from "react";
import { Logo } from "assets/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },

    {
      id: 2,
      name: "About",
      path: "/",
    },
    {
      id: 4,
      name: "Contact",
      path: "/",
    },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <nav className="nav">
          <div className="nav__logo">
            <Logo />
          </div>
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.id} className="nav__link">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
