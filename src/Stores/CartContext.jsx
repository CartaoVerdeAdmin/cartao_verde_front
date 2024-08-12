import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (tree) => {
    setCartItems((prevCart) => [...prevCart, tree]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((tree) => tree._id !== id));
  };

  const isInCart = (id) => {
    return cartItems.some((tree) => tree._id === id);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};