import { useEffect } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, setState] = useState({
    cart: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  });

  console.log(state.cart);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (shopping) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === shopping.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === shopping.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...shopping, count: 1 }],
    });
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
  };

  return (
    <CartContext.Provider value={{ state: state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
