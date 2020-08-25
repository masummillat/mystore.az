import React from 'react';

const CategoryItem = ({ category }) => {
    const { title, img, alt, availableProduct } = category;
    return (
        <option
            value={category.id}
            data-filter="7"
            className="single-product-filter-option"
            data-id="1">
            <span className="option-name-area">
                <span className="option-check">
                    <i className="fas fa-check"></i>
                </span>
                <span className="option-name">{title}</span>
            </span>
            <span className="option-number">{availableProduct}</span>
        </option>
    );
};

export default CategoryItem;
