import { Routes, Route } from 'react-router-dom';
import { ProductList } from './features/products';
import CartPage from './features/cart/CartPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
