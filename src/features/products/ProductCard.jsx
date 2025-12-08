import { useState } from 'react';
import { useCart } from '../cart/CartContext';  // Adjust path if needed

const badges = ["NEW", "Hot", "Just In"];

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const badge = badges[Math.floor(Math.random() * badges.length)];
  const { addToCart, getCartCount } = useCart();

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
        {/* Quick Actions Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all">
                👁️
              </button>
              <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all">
                ❤️
              </button>
              <button className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all">
                🛒
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
        <p className="text-gray-600 mb-3 capitalize">{product.category}</p>
        
        {/* Price with Countdown Style */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-green-600">${product.price}</span>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium animate-pulse">
            Limited Stock
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
        >
          Add to Cart ({getCartCount()})
        </button>
      </div>
    </li>
  );
}
