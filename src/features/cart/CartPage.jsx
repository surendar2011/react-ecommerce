import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // ✅ Your existing CartContext

export default function CartPage() {
  // 🔥 STEP 1: Get all cart functions from your Context
  const {
    cart, // { items: [{id, title, price, quantity, image}, ...] }
    removeFromCart, // Function to delete item by ID
    updateQuantity, // Function to change quantity by ID
    getCartTotal, // Function to calculate total price
    clearCart // Function to empty entire cart
  } = useCart();

  return (
    // 🔥 MAIN CONTAINER - Matches your ProductList styling
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 pt-32">
      <div className="cart-page-zoom">
        <div className="max-w-4xl mx-auto px-6">

        {/* 🔥 PAGE HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black bg-gradient-to-r from-gray-900 via-orange-500 to-red-600 bg-clip-text text-transparent mb-6">
            🛒 Shopping Cart
          </h1>
          <p className="text-xl text-gray-600 font-semibold">
            {cart.items.length} items •
            ${getCartTotal().toFixed(2)} total
          </p>
        </div>

        {/* 🔥 CART ITEMS LIST - Core functionality */}
        <div className="space-y-6 mb-16">
          {cart.items.length === 0 ? (
            // 🔥 EMPTY CART STATE
            <div className="text-center py-24 bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-gray-300">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-3xl flex items-center justify-center text-4xl">
                🛒
              </div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Add some products to get started!</p>
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                Continue Shopping →
              </Link>
            </div>
          ) : (
            // 🔥 CART ITEMS - Loop through cart.items array
            cart.items.map(item => (
              // 🔥 SINGLE CART ITEM ROW
              <div
                key={item.id}
                className="group bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 flex items-center gap-6 hover:-translate-y-1"
              >
                {/* 🔥 PRODUCT IMAGE - Small preview */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-2xl shadow-lg flex-shrink-0"
                  loading="lazy"
                />

                {/* 🔥 PRODUCT DETAILS - Title + Price */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-black text-green-600 mb-1">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 capitalize">
                    {item.category}
                  </p>
                </div>

                {/* 🔥 TASK 1: QUANTITY CONTROLS */}
                <div className="flex items-center gap-6 bg-gray-100 px-6 py-4 rounded-2xl shadow-inner flex-shrink-0">
                  <span className="font-semibold text-gray-700 whitespace-nowrap hidden sm:inline">Qty:</span>
                  <div className="flex items-center bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    {/* Decrease Button */}
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      disabled={item.quantity <= 1}
                      className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      -
                    </button>

                    {/* Current Quantity Display */}
                    <span className="w-12 text-center py-2 font-bold text-lg text-gray-900 border-l border-r border-gray-200">
                      {item.quantity}
                    </span>

                    {/* Increase Button */}
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-gray-50 transition-all duration-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Subtotal (Made larger and more prominent) */}
                  <span className="font-extrabold text-2xl text-green-700 whitespace-nowrap">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                {/* 🔥 TASK 2: REMOVE BUTTON */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-4 bg-red-100 hover:bg-red-200 text-red-600 rounded-3xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-5 group/remove flex-shrink-0"
                  title="Remove from cart"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {/* 🔥 TASK 3: CART SUMMARY & CHECKOUT */}
        {cart.items.length > 0 && (
          <div className="bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8 mt-10 relative">
            {/* Summary Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6 pb-6 border-b-2 border-gray-100">
              <div>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-3xl font-black text-gray-900 tracking-tight">
                    ORDER TOTAL:
                  </span>
                  {/* Final Total is the largest element */}
                  <span className="text-6xl font-black bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                <p className="text-lg text-gray-600 font-semibold ml-1">
                  Total items: {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
                </p>
              </div>

              {/* Items Summary - Kept small and informative */}
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 max-w-sm">
                {cart.items.map(item => (
                  <span key={item.id} className="px-3 py-1 bg-gray-200 rounded-full font-medium">
                    {item.quantity}x {item.title.split(' ').slice(0, 3).join(' ')}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Checkout Button - Most prominent action */}
              <button className="col-span-1 sm:col-span-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-5 px-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 text-2xl">
                ✅ Secure Checkout
              </button>

              {/* Clear Cart Button */}
              <button
                onClick={clearCart}
                disabled={cart.items.length === 0}
                className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-5 px-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
              >
                🗑️ Clear Cart
              </button>

              {/* Continue Shopping Link (Placed outside the main action buttons for better flow) */}
              <Link
                to="/"
                className="sm:col-span-3 text-center bg-white text-indigo-600 border border-indigo-200 hover:border-indigo-300 font-bold py-3 px-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base mt-2"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}