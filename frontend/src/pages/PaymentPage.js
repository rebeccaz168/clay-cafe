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
    fetch("http://localhost:5001/api/payment/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalPrice * 100 }) 
    })
      .then((res) => res.json())
      .then(({ clientSecret }) => setClientSecret(clientSecret))
      .catch((error) => console.error("Error:", error));
  }, []);  


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