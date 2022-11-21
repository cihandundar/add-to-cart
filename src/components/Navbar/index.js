import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingIcon from "assets/icons/ShoppingIcon";
import CartContext from "context/Context";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const context = useContext(CartContext);
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  console.log(context.state.cart.length);

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Product",
      path: "/product",
    },
    {
      id: 3,
      name: "Login / Register",
      path: "/login",
    },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <nav ref={navRef} className="nav">
          <div className="nav__logo">
            <Link to="/" onClick={showNavbar}>
              <h2>Unemployed Youth</h2>
            </Link>
          </div>
          <ul className="nav__list">
            {links?.map((link) => (
              <li key={link?.id} className="nav__link" onClick={showNavbar}>
                <Link to={link?.path}>{link?.name}</Link>
              </li>
            ))}
          </ul>
          <button className="nav__btn nav__closebtn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav__btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <span className="nav__icon">
          <Link to="/cart">
            <span>
              <p>{context?.state?.cart?.length}</p>
            </span>
            <ShoppingIcon />
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
