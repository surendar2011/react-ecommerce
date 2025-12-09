import { useState, useEffect } from 'react';
import { useProducts } from './useProducts';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import ProductFilters from './ProductFilters';
import CartHeader from '../../components/CartHeader';  // ✅ NEW IMPORT

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { products: allProducts = [], loading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryCount, setCategoryCount] = useState({});

  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    if (loading) return;

    const counts = {};
    allProducts.forEach(product => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    setCategoryCount(counts);
    setFilteredProducts(allProducts);
  }, [allProducts, loading]);

  const handleFilterChange = (newFilteredProducts) => {
    setFilteredProducts(newFilteredProducts);
    setCurrentPage(1);
  };

  if (loading) return <div className="p-8 text-center">Loading products...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      {/* ✅ CART HEADER - Fixed top-right */}
      <CartHeader />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 pt-32"> {/* ✅ Extra padding for fixed header */}
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-700 bg-clip-text text-transparent mb-4">
              🛍️ Shop Collection
            </h1>
            <p className="text-xl text-gray-600 font-semibold">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* Filters + Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <ProductFilters 
              products={allProducts} 
              categoryCount={categoryCount}
              onFilterChange={handleFilterChange}
            />

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ul>
              
              {totalPages > 1 && (
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
