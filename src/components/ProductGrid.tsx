'use client';

import React, { useMemo } from 'react';
import { products } from '@/lib/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  selectedCategory: string;
  selectedSort: string;
}

export default function ProductGrid({ selectedCategory, selectedSort }: ProductGridProps) {
  const filteredAndSortedProducts = useMemo(() => {
    // Filter products
    let filtered = products;
    if (selectedCategory !== 'all') {
      filtered = products.filter(product => product.category === selectedCategory);
    }

    // Sort products
    const sorted = [...filtered];
    switch (selectedSort) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order
        break;
    }

    return sorted;
  }, [selectedCategory, selectedSort]);

  return (
    <div className="flex-1">
      {/* Results header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing {filteredAndSortedProducts.length} of {products.length} products
          </p>
          
          {/* Mobile sort dropdown */}
          <div className="lg:hidden">
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500">
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="max-w-sm mx-auto">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1M8 5V4a1 1 0 011-1h4a1 1 0 011 1v1"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        </div>
      )}

      {/* Load more button (for future pagination) */}
      {filteredAndSortedProducts.length > 0 && (
        <div className="mt-12 text-center">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
}