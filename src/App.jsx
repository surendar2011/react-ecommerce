import { ProductList } from './features/products';
import { CartProvider } from './features/cart';
export default function App() {
  return (
    <CartProvider>
      <ProductList />
    </CartProvider>
  );
}
