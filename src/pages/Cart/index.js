import React from "react";
import CartContext from "context/Context";
import { useContext } from "react";
import { DescreaseIcon, IncreaseIcon, RemoveIcon } from "assets/icons";

const Cart = () => {
  const context = useContext(CartContext);
  const { decrease, increase, removeFromCart, totalCart } =
    useContext(CartContext);
  console.log(context.state.cart.map((item) => item));

  return (
    <section className="cart">
      <h1>{totalCart}</h1>
      <div className="cart__container">
        {context?.state?.cart?.map((item) => (
          <div className="cart__content">
            <div className="cart__content__wrapper">
              <div className="cart__content__img">
                <img src={item?.image} alt="" />
              </div>
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
            <button onClick={() => removeFromCart(item.id)} className="remove">
              <RemoveIcon />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
