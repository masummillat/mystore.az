import Link from 'next/link';
import React from 'react';

const FeatureCateCard = ({ category }) => {
    const { name, img, alt } = category;
    return (
        <Link href={`/category/${category.id}`}>
            <a className="single-category-box">
                <div className="category-icon">
                    <img src={img} alt={alt} />
                </div>
                <div className="category-name">{name}</div>
            </a>
        </Link>
    );
};

export default FeatureCateCard;
