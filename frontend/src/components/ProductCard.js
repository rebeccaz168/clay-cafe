import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export function ProductCard({ product, onAddToCart }) {
  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#FFFAF0",
        borderRadius: "20px",
        boxShadow: "5px 5px 15px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={product.imageUrl}
          alt={product.title}
          sx={{
            objectFit: "cover",
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 80%)", 
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "'Patrick Hand', cursive",
              fontSize: "1.5rem",
              color: "#7A4A23", 
            }}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#5A5A5A" }}>
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Button
          size="small"
          onClick={() => onAddToCart(product)}
          variant="contained"
          sx={{
            backgroundColor: "#C68B59",
            "&:hover": { backgroundColor: "#A76D42" },
            borderRadius: "30px",
            fontWeight: "bold",
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
