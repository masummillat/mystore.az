import React from 'react';

const FeatureCateCard = ({category}) => {
  const {name, img, alt} = category;
  return(
    <a href="category/23-geyim.html" className="single-category-box">
      <div className="category-icon">
        <img src={img} alt={alt} />
      </div>
      <div className="category-name">{name}</div>
    </a>
  );
};

export default FeatureCateCard;
