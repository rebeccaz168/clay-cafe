import React from 'react';
import {useCart} from '../components/CartContext'
import products from '../data/products.json';

import ProductCard from '../components/ProductCard';
import { Grid2, IconButton, Typography, Box} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';


function Shop() {
  const { addToCart, cartItems } = useCart(); 
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product)
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <Box 
        display="flex" 
        flexDirection="column"
        alignItems="left"
        position="sticky"
        top={0}
        bgcolor="#C68B59"
        zIndex={1000}
        p={2}
        boxShadow={2}
      >
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          width="100%"
        >
          <Typography variant="h4" sx = {{fontFamily: "'Patrick Hand', cursive"}} gutterBottom>
            Cozy Threads
          </Typography>
          <IconButton color="primary" onClick={handleCheckout}>
            <ShoppingBasketIcon />
            <Typography> {Object.values(cartItems).reduce((total, item) => total + item.quantity, 0)} </Typography>
          </IconButton>
        </Box>
        
        <Typography variant="subtitle1" color="textSecondary">
          High-quality, ethically-sourced apparel and accessories.
        </Typography>
      </Box>
        <Grid2 container spacing={4}>
          {products.map(product => (
            <Grid2 item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </Grid2>
          ))}
        </Grid2>
    </div>
  );
}

export default Shop;
