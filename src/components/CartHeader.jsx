import { useNavigate } from 'react-router-dom';
import { useCart } from '../features/cart/CartContext';

export default function CartHeader() {
  const { getCartCount, getCartTotal, cart } = useCart();
  const navigate = useNavigate();

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <div className="fixed top-4 right-4 z-50 md:right-6 md:top-6">
      <div className="relative group">
        {/* ✅ COMPACT BUTTON */}
        <button className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-4 py-2.5 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-250 transform hover:scale-[1.02] hover:-translate-y-0.5">
          🛒 Cart
          {getCartCount() > 0 && (
            <span className="ml-1.5 bg-white/30 backdrop-blur-sm text-white font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-md animate-pulse">
              {getCartCount()}
            </span>
          )}
        </button>

        {/* ✅ COMPACT DROPDOWN */}
        {cart.items.length > 0 && (
          <div className="absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4 px-4 max-h-80 overflow-y-auto">
            <div className="space-y-2.5">
              {/* ✅ COMPACT HEADER */}
              <div className="pb-3 border-b border-gray-200">
                <h3 className="font-bold text-sm text-gray-900">Cart Preview ({getCartCount()})</h3>
                <p className="text-base font-bold text-emerald-600 mt-0.5">
                  ${getCartTotal().toFixed(2)}
                </p>
              </div>

              {/* ✅ TIGHTER ITEMS - FIXED line-clamp */}
              <div className="space-y-2 mb-4">
                {cart.items.slice(0, 4).map(item => (
                  <div key={item.id} className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-50/80 transition-all duration-150">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-10 h-10 object-cover rounded-md shadow-sm flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 pr-2">
                      {/* ✅ FIXED: line-clamp-1 → truncate */}
                      <p className="font-semibold text-xs text-gray-900 truncate">
                        {item.title.split(' ').slice(0, 3).join(' ')}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                    <span className="font-bold text-xs text-green-600 whitespace-nowrap min-w-[3.5rem]">
                      ${(item.price * item.quantity).toFixed(1)}
                    </span>
                  </div>
                ))}
                {cart.items.length > 4 && (
                  <p className="text-center text-xs text-gray-500 py-1.5 font-medium">
                    +{cart.items.length - 4} more items
                  </p>
                )}
              </div>

              {/* ✅ COMPACT FOOTER */}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <button
                  onClick={handleViewCart}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  👀 View Full Cart
                </button>
                <button 
                  onClick={() => navigate('/')}
                  className="w-full text-xs font-semibold text-indigo-600 hover:text-indigo-700 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-all duration-150 flex items-center justify-center gap-1"
                >
                  🏠 Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
