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
        height: 460, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F8FAFC",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      {/* Image section */}
      <CardActionArea > 
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.title}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "290px", 
          }}
        />
      </CardActionArea>

      {/* Content section */}
      <CardContent >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 600,
            fontSize: "1.3rem",
            color: "#1C2E4A",
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Quicksand', sans-serif",
            color: "#4B5563",
            minHeight: "3em",
            fontSize: "0.95rem",
          }}
        >
          {product.description}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Quicksand', sans-serif",
            color: "#3B82F6",
            fontWeight: 700,
            fontSize: "1.1rem",
          }}
        >
          ${product.price}
        </Typography>
      {/* Button section */}
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          onClick={() => onAddToCart(product)}
          variant="contained"
          sx={{
            backgroundColor: "#3B82F6",
            "&:hover": { backgroundColor: "#2563EB" },
            borderRadius: "10px",
            fontWeight: "bold",
            textTransform: "none",
            fontFamily: "'Quicksand', sans-serif",
            width: "40%", 
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
