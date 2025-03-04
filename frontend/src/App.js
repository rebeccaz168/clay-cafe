import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/ShopPage';
import Checkout from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import PaymentPage from './pages/PaymentPage';
import { CssBaseline, Container } from '@mui/material';
import { CartProvider } from './components/CartContext';
import { loadStripe } from '@stripe/stripe-js';
 
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  return (
    <CartProvider>
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={ <PaymentPage stripePromise={stripePromise}/>} />
          <Route path="/success" element= {<SuccessPage/>}/>
        </Routes>
      </Container>
    </Router>
    </CartProvider>
  );
}

export default App;
