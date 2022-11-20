import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingIcon from "assets/icons/ShoppingIcon";
import CartContext from "context/Context";
const Navbar = () => {
  const context = useContext(CartContext);

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
          </ul>
          <span className="nav__icon">
            <Link to="/cart">
              <span>
                <p>{context?.state?.cart?.length}</p>
              </span>
              <ShoppingIcon />
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
