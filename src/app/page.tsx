'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import ShoppingCart from '@/components/ShoppingCart';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('default');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">
              Premium Pet Treats
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover natural, healthy, and delicious treats that your dogs and cats will absolutely love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Shop Dog Treats
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200">
                Shop Cat Treats
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-8 mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">🦴</div>
                <h3 className="text-lg font-semibold text-gray-900">Dog Treats</h3>
                <p className="text-gray-600 text-sm">Premium chicken, beef & natural treats</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-8 mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">🐱</div>
                <h3 className="text-lg font-semibold text-gray-900">Cat Treats</h3>
                <p className="text-gray-600 text-sm">Tuna, salmon & catnip favorites</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8 mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">🎾</div>
                <h3 className="text-lg font-semibold text-gray-900">Toys</h3>
                <p className="text-gray-600 text-sm">Interactive & fun play items</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">🏺</div>
                <h3 className="text-lg font-semibold text-gray-900">Accessories</h3>
                <p className="text-gray-600 text-sm">Bowls, harnesses & essentials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Products</h2>
            <p className="text-gray-600">Browse our complete collection of premium pet treats and accessories</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:flex-shrink-0">
              <FilterSidebar
                selectedCategory={selectedCategory}
                selectedSort={selectedSort}
                onCategoryChange={setSelectedCategory}
                onSortChange={setSelectedSort}
              />
            </div>

            {/* Product Grid */}
            <ProductGrid
              selectedCategory={selectedCategory}
              selectedSort={selectedSort}
            />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">All our treats are made with natural ingredients with no artificial preservatives</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50. Get your pet treats delivered in 2-3 days</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pet Approved</h3>
              <p className="text-gray-600">Loved by thousands of pets worldwide. Your furry friends will thank you!</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ShoppingCart />
    </div>
  );
}