import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    // If the product is already in the cart
    if (productInCartIndex >= 0) {
      // Using structured cloning algorithm to clone the cart
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity++;
      return setCart(newCart);
    }

    // If the product is not in the cart
    setCart((previousCart) => [
      ...previousCart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
