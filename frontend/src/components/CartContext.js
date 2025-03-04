import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart items from sessionStorage if available
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    // Update sessionStorage whenever cartItems change
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [item.id]: {
        ...item,
        quantity: (prevItems[item.id]?.quantity || 0) + 1, // Increase quantity if item exists
      },
    }));
  };  

  // increase quantity of an item 
  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) => {
      if (!prevItems[itemId]) return prevItems; // If item doesn't exist, return as is

      const updatedCart = { ...prevItems };

      updatedCart[itemId] = {
        ...updatedCart[itemId],
        quantity: updatedCart[itemId].quantity 
        + 1,
      };

      return updatedCart;
    });
  };



  //decrease the quantity of an item
  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) => {
      if (!prevItems[itemId]) return prevItems; // If item doesn't exist, return as is

      const updatedCart = { ...prevItems };

      if (updatedCart[itemId].quantity > 1) {
        updatedCart[itemId] = {
          ...updatedCart[itemId],
          quantity: updatedCart[itemId].quantity - 1,
        };
      } else {
        delete updatedCart[itemId]; // Remove item if quantity is 1
      }

      return updatedCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      if (!prevItems[itemId]) {
        return prevItems;
      } // If item doesn't exist, return as is
      const updatedCart = { ...prevItems };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems({});
  };

  // Calculate total price in dollars
  const totalPrice = Object.values(cartItems).reduce(
    (acc, item) => acc + item.price * item.quantity, 
    0
  );


  return (
    <CartContext.Provider
      value={{ cartItems, totalPrice, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart state
export const useCart = () => {
  return useContext(CartContext);
};
