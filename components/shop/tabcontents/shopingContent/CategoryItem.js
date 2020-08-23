import React from 'react';

const CategoryItem = ({category}) => {
    const {name, img, alt, availableProduct} = category;
  return (
    <a data-filter="7" className="single-product-filter-option" data-id="1">
      <span className="option-name-area">
        <span className="option-check">
          <i className="fas fa-check"></i>
        </span>
        <span className="option-name">{name}</span>
      </span>
      <span className="option-number">{availableProduct}</span>
    </a>
  );
};

export default CategoryItem;
