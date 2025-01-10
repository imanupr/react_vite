import React, { useState } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import productsData from '../data/products.json';

const App = () => {
  const [filteredCategory, setFilteredCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredProducts = filteredCategory === 'all'
    ? productsData
    : productsData.filter(product => product.category === filteredCategory);

  return (
    <div className="container">
      <h1 className="my-4">Product List</h1>
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
