import React from 'react';
import { List, ListItem, ListItemText, Typography, Button, Box } from '@mui/material';
import {useCart} from '../components/CartContext'
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Checkout() {
  const {cartItems, removeFromCart, clearCart} = useCart(); 
 
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <List>
        {cartItems.map((item, index) => (
          <ProductCard key={index} product = {item}/>
        ))}
      </List>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleProceedToPayment}>
          Proceed to Payment
        </Button>
      </Box>
    </div>
  );
}

export default Checkout;
