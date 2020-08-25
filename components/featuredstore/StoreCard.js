import Link from 'next/link';
import React from 'react';
const StoreCard = ({ store }) => {
    const { id, name, img, alt, ratedNumber, sold } = store;
    return (
        <div className="col-lg-3 col-sm-6">
            <Link href={`/shop/${id}`} as={`/shop/${id}`}>
                <a className="single-feature-store">
                    <div className="single-feature-store-image">
                        <img src={img} alt={alt} />
                    </div>
                    <div className="single-feature-store-info">
                        <h4>
                            <span className="name">{name}</span>
                            <span className="status verified">
                                <i className="fas fa-check" />
                            </span>
                        </h4>
                    </div>

                    <div className="seller-meta-info">
                        <div className="single-product-rating seller-rating">
                            <div
                                className="rateit"
                                data-rateit-value=""
                                data-rateit-ispreset="true"
                                data-rateit-readonly="true"
                                data-rateit-starwidth="12"
                                data-rateit-starheight="12"></div>
                            <div className="rated-number">({ratedNumber})</div>
                        </div>
                        <div className="product-sold-count">({sold} Items Sold)</div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default StoreCard;
