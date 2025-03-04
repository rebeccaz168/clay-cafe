import * as React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography, Button, Box, CardActionArea, CardActions } from '@mui/material';

export function ProductCard({ product, quantity, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="500"
          image={product.imageUrl}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box display="flex" alignItems="center">
          <Button 
            size="small" 
            onClick={() => onDecreaseQuantity(product.id)} 
            variant="outlined"
            disabled={quantity < 1} // Prevent negative quantity
          >
            -
          </Button>
          <Typography variant="body2" sx={{ margin: '0 10px' }}>
            {quantity}
          </Typography>
          <Button size="small" onClick={() => onIncreaseQuantity(product.id)} variant="outlined">
            +
          </Button>
          <Button onClick={() => onRemoveFromCart(product.id)}> Remove From Cart</Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
