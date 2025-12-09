import { useState } from 'react';
import { useCart } from '../cart/CartContext';

const badges = ["NEW", "Hot", "Just In"];

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const badge = badges[Math.floor(Math.random() * badges.length)];
  const { addToCart, cart } = useCart();

  // ✅ Get THIS product's quantity only
  const productQuantity = cart.items.find(item => item.id === product.id)?.quantity || 0;

  const handleAddToCart = async () => {
    if (isAdding) return;
    setIsAdding(true);
    addToCart(product);
    // Reset loading after short delay for feedback
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <li 
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      <span className="absolute top-4 left-4 z-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
        {badge}
      </span>

      {/* Image with hover scale */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all">
                👁️
              </button>
              <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all">
                ❤️
              </button>
              <button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all disabled:opacity-50"
              >
                {isAdding ? '➕' : '🛒'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 capitalize">{product.category}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">${product.price}</span>
          {productQuantity > 0 && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium flex items-center gap-1">
              {productQuantity} in cart
            </span>
          )}
        </div>

        {/* Main Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isAdding ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Adding...
            </>
          ) : (
            <>
              🛒 Add to Cart
              {productQuantity > 0 && ` (+${productQuantity})`}
            </>
          )}
        </button>
      </div>
    </li>
  );
}
