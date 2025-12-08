import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './features/cart/CartContext.jsx';  // ✅ Add this
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>  {/* ✅ Wrap entire app */}
      <App />
    </CartProvider>
  </React.StrictMode>,
);
