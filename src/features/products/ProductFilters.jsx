import { useState, useEffect } from 'react';

export default function ProductFilters({ products, onFilterChange }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique categories
  useEffect(() => {
    const uniqueCategories = ['all', ...new Set(products.map(p => p.category))];
    setCategories(uniqueCategories);
  }, [products]);

  // Filter products when filters change
  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesSearch;
    });
    
    onFilterChange(filtered);
  }, [selectedCategory, priceRange, searchTerm, products]);

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl p-8 sticky top-24 max-w-md w-full">
      {/* Search */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">🔍 Search Products</label>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-4">🏷️ Category</label>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center space-x-3 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'hover:bg-gray-100 border border-gray-200 text-gray-700 hover:shadow-md'
              }`}
            >
              <span>{category === 'all' ? 'All Categories' : category}</span>
              {selectedCategory === category && '✅'}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-4">💰 Price Range: ${priceRange}</label>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg slider cursor-pointer accent-indigo-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$0</span>
          <span>${priceRange}</span>
          <span>$100+</span>
        </div>
      </div>
    </div>
  );
}
