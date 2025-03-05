import { Typography } from '@mui/material';
import {useEffect, useState} from 'react';
import { useSearchParams } from "react-router-dom";
import { useCart } from '../components/CartContext';

function SuccessPage() {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [searchParams] = useSearchParams();
  const paymentIntentId = searchParams.get("payment_intent");
  const { clearCart } = useCart(); 

  useEffect(() => {
    if (!paymentIntentId) return;
    clearCart()
    const fetchPaymentDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/payment/payment-intent/${paymentIntentId}`);
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Error fetching payment details: ${response.statusText}`);
        }
  
        // Attempt to parse the response as JSON
        const data = await response.json();

        setPaymentDetails(data);
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };
  
    fetchPaymentDetails();
  }, [paymentIntentId, clearCart]);
  


  return (
    <>
      <h1>Payment Successful! Thank you for your purchase!</h1>
      {paymentDetails ? (
        <>
          <Typography>🆔 Payment ID: {paymentDetails.id}</Typography>
          <Typography>💲 Amount: ${(paymentDetails.amount / 100).toFixed(2)}</Typography>
          <Typography>📅 Date: {new Date(paymentDetails.created * 1000).toLocaleString()}</Typography>
          <Typography>✅ Status: {paymentDetails.status}</Typography>
        </>
      ) : (
        <Typography>Error retrieving payment details.</Typography>
      )}
      <a href="/">home</a>
    </>
  );
}


export default SuccessPage;