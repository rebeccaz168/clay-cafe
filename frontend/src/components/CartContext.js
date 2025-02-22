import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart items from sessionStorage if available
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    // Update sessionStorage whenever cartItems change
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove items from the cart
  const removeFromCart = (itemId) => {
    console.log("inside the remove from cart")
    console.log("ItemId", itemId)
    console.log(cartItems)
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };
 
  // Calculate total price, update whenever cartItems change (does this need to be in an use Effect hook?)*** 
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);


  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart state
export const useCart = () => {
  return useContext(CartContext);
};
