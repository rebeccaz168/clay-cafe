import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export function ProductCard({product, onRemoveFromCart}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width = "500"
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
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={() => onRemoveFromCart(product)} variant="contained" color="primary">
          Remove From Cart 
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;