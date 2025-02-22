import React from 'react';
import {useCart} from '../components/CartContext'

import ProductCard from '../components/ProductCard';
import { Grid2, Button, Typography, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, title: 'Cozy Sweater', price: 5000, description: 'A warm, comfy sweater', imageUrl: '/path/to/image.jpg' },
  { id: 2, title: 'Soft Scarf', price: 2000, description: 'A soft and cozy scarf', imageUrl: '/path/to/image2.jpg' },
  // Add more products here
];

function Shop() {
  const { addToCart, cartItems } = useCart(); 
  console.log(cartItems)

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product)
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Shop Cozy Threads
      </Typography>
      <Grid2 container spacing={4}>
        {products.map(product => (
          <Grid2 item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </Grid2>
        ))}
      </Grid2>
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Go to Checkout
        </Button>
      </Box>
    </div>
  );
}

export default Shop;
