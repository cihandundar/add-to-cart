import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

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

    toast.success("🚀 Added to cart successfully!");
  };

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
    toast.success("🗑️ Removed from your cart successfully!");
  };

  const totalCart = state.cart
    .reduce(
      (total, shopping) => (total = total + shopping.price * shopping.count),
      0
    )
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        state: state,
        addToCart,
        increase,
        decrease,
        removeFromCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
