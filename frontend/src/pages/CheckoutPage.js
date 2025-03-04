import React from 'react';
import { List, Typography, Button, Box } from '@mui/material';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import CheckoutCard from '../components/CheckoutCard';

function Checkout() {
  const { cartItems, totalPrice, clearCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  const handleRemoveFromCart = (productId) => {
    console.log("inside handle remove cart");
    removeFromCart(productId);
  };

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <List>
      {Object.values(cartItems).map((item, index) => (
          <CheckoutCard
            key={index}
            product={item}
            onRemoveFromCart={handleRemoveFromCart}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            quantity={item.quantity}
          />
        ))}
      </List>
      <Typography variant="h5">
        Total Price: ${totalPrice}
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleProceedToPayment}>
          Proceed to Payment
        </Button>
        <Button variant="contained" color="primary" onClick={clearCart}>
          Clear Cart
        </Button>
      </Box>
    </div>
  );
}

export default Checkout;
