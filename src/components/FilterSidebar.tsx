'use client';

import React from 'react';
import { categories, sortOptions } from '@/lib/products';

interface FilterSidebarProps {
  selectedCategory: string;
  selectedSort: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

export default function FilterSidebar({
  selectedCategory,
  selectedSort,
  onCategoryChange,
  onSortChange
}: FilterSidebarProps) {
  return (
    <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-amber-100 text-amber-800 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
        <select
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
        >
          {sortOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="radio"
              id="price-all"
              name="price"
              className="h-4 w-4 text-amber-600 focus:ring-amber-500"
            />
            <label htmlFor="price-all" className="ml-2 text-sm text-gray-700">
              All Prices
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="price-under-15"
              name="price"
              className="h-4 w-4 text-amber-600 focus:ring-amber-500"
            />
            <label htmlFor="price-under-15" className="ml-2 text-sm text-gray-700">
              Under $15
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="price-15-25"
              name="price"
              className="h-4 w-4 text-amber-600 focus:ring-amber-500"
            />
            <label htmlFor="price-15-25" className="ml-2 text-sm text-gray-700">
              $15 - $25
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="price-over-25"
              name="price"
              className="h-4 w-4 text-amber-600 focus:ring-amber-500"
            />
            <label htmlFor="price-over-25" className="ml-2 text-sm text-gray-700">
              Over $25
            </label>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Special Offers</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="on-sale"
              className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
            />
            <label htmlFor="on-sale" className="ml-2 text-sm text-gray-700">
              On Sale
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="in-stock"
              className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              defaultChecked
            />
            <label htmlFor="in-stock" className="ml-2 text-sm text-gray-700">
              In Stock Only
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="high-rated"
              className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
            />
            <label htmlFor="high-rated" className="ml-2 text-sm text-gray-700">
              4+ Stars
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}