import React, { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { Typography, Button, Box, CircularProgress } from "@mui/material";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  // so that the spinner stops once Stripe and elements load 
  useEffect(() => {
    if (stripe && elements) {
      setLoading(false);
    }
  }, [stripe, elements]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    // disable form submission until stripe has loaded 
    if (!stripe || !elements) return;

    setLoading(true); // Show spinner while processing payment

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://cozy-threads-stripe.onrender.com/success", // to test locally http://localhost:3000/success 
      },
    });

    if (result.error) {
      setMessage(result.error.message || "An unexpected error occurred.");
    } 

    setLoading(false);
  };



  return (
      <div id="checkout-form">
        <Typography variant="h4" gutterBottom>
          Complete Payment
        </Typography>
          <form onSubmit={handleSubmit}>
            <PaymentElement />
            <Box mt={3}>
              <Button disabled={!stripe || loading} type="submit" variant="contained" color="primary">
                {loading ? <CircularProgress size={24} /> : "Pay Now"}
              </Button>
            </Box>
              {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
          </form>
      </div>
  );
}
export default CheckoutForm;
