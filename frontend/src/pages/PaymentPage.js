import React, { useEffect, useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Typography, Button, Box, CircularProgress } from '@mui/material';

function PaymentPage() {
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch client secret from the backend
    const fetchClientSecret = async () => {
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1000 }), // Example amount: $10.00
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
      setLoading(false);
    };
    fetchClientSecret();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/success',
      },
    });

    if (error) {
      console.log('Payment failed:', error.message);
    } else {
      console.log('Payment succeeded!');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Complete Payment
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <Box mt={3}>
            <Button
              disabled={!stripe}
              type="submit"
              variant="contained"
              color="primary"
            >
              Pay Now
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
}

export default PaymentPage;
