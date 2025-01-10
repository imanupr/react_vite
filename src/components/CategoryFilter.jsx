import React from 'react';

const CategoryFilter = ({ onCategoryChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="category" className="form-label">Filter by Category</label>
      <select
        id="category"
        className="form-select"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="home">Home</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
