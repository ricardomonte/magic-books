import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter({ filter, onFilterChange }) {
  const categories = [
    'ALL',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div className="container-filter">
      <p className="filter-text">Filter:</p>
      <select
        id="category"
        name="category"
        value={filter}
        onChange={onFilterChange}
        className="select-category"
      >
        <option value="" disabled>
          Categories...
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
