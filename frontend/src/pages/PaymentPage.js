import {useEffect, useState} from 'react';

import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import {useCart} from '../components/CartContext';


function Payment(props) {
  const { stripePromise } = props;
  const [ clientSecret, setClientSecret ] = useState('');
  const {totalPrice} = useCart();

// create the payment intent
  useEffect(() => {
    // use : http://localhost:5001 for local env. 
    fetch(`${process.env.REACT_APP_API_URL}/api/payment/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalPrice * 100 }) 
    })
      .then((res) => res.json())
      .then(({ clientSecret }) => setClientSecret(clientSecret))
      .catch((error) => console.error("Error:", error));
  }, [totalPrice]);  


  return (
    <>
      <h1>Payment</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options = {{ clientSecret, }}>
            <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;