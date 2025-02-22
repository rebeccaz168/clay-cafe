import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/ShopPage';
import Checkout from './pages/CheckoutPage';
// import PaymentPage from './components/PaymentPage';
import { CssBaseline, Container } from '@mui/material';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Shop />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          {/* <Route path="/payment" element={<PaymentPage />} /> */}
        </Routes>
      </Container>
    </Router>
    </CartProvider>
  );
}

export default App;
