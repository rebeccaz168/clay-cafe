import React from 'react';
import { useCart } from '../components/CartContext';
import products from '../data/products.json';

import ProductCard from '../components/ProductCard';
import { Grid2, IconButton, Typography, Box } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';

function Shop() {
  const { addToCart, cartItems } = useCart(); 
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div style={{ backgroundColor: '#F0F4F8', minHeight: '100vh', paddingBottom: '2rem' }}>
      <Box 
        display="flex" 
        flexDirection="column"
        alignItems="flex-start"
        position="sticky"
        top={0}
        bgcolor="#D9E6F2"
        zIndex={1000}
        p={3}
        boxShadow={2}
        borderBottomLeftRadius="1rem"
        borderBottomRightRadius="1rem"
      >
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          width="100%"
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontWeight: 600,
              color: '#1F2A40'
            }} 
          >
            The Clay Café
          </Typography>

          <IconButton onClick={handleCheckout} sx={{ color: '#4A90E2' }}>
            <ShoppingBasketIcon />
            <Typography fontWeight="medium" ml={1}>
              {Object.values(cartItems).reduce((total, item) => total + item.quantity, 0)}
            </Typography>
          </IconButton>
        </Box>

        <Typography 
          variant="subtitle2" 
          sx={{ 
            fontFamily: "'Poppins', sans-serif", 
            color: '#3E5060',
            fontWeight: 300,
            mt: 1
          }}
        >
          Handcrafted ceramic pieces by Rebecca 💙
        </Typography>
      </Box>

      <Grid2 container spacing={4} p={3}>
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
