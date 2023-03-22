import React from "react";
import CartContext from "context/Context";
import { useContext } from "react";
import { DescreaseIcon, IncreaseIcon, RemoveIcon } from "assets/icons";
import { Link } from "react-router-dom";
import Empty from "assets/images/empty.jpg";
const Cart = () => {
  const context = useContext(CartContext);
  const { decrease, increase, removeFromCart, totalCart } =
    useContext(CartContext);
  console.log(context.state.cart.map((item) => item));

  return (
    <section className="cart">
      {context?.state?.cart > [0] ? (
        <div className="cart__main">
          <div className="cart__container">
            {context?.state?.cart?.map((item) => (
              <div className="cart__content">
                <div className="cart__content__wrapper">
                  <Link to={`/products/${item?.id}`}>
                    <div className="cart__content__img">
                      <img src={item?.thumbnail} alt="" />
                    </div>
                  </Link>
                  <div className="cart__content__title">
                    <h4>{item?.title}</h4>
                    <span>Price : $ {item?.price}</span>
                    <div className="cart__price">
                      <p>
                        Subtotal ( {item?.count} items ) : $
                        {(item?.price * item?.count).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cart__btn">
                  <button onClick={() => decrease(item.id)}>
                    <DescreaseIcon />
                  </button>
                  <span>{item?.count}</span>
                  <button onClick={() => increase(item.id)}>
                    <IncreaseIcon />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove"
                >
                  <RemoveIcon />
                </button>
              </div>
            ))}
          </div>
          <div className="cart__total">
            <div className="cart__total__wrapper">
              <div className="cart__total__border">
                <h3> Subtotal: ${totalCart}</h3>
                <div className="cart__total__btn">
                  <Link to="/login">Continue to checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <div className="empty__image">
            <img src={Empty} alt="" />
          </div>
          <div className="empty__text">
            <h4>Your cart is currently empty!</h4>
            <Link to="/">
              <button>Return to Home</button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
