import React from 'react';
import Link from 'next/link';
const ProductCard = ({ product, handleShowWishModal }) => {
    const {
        id,
        product_name,
        shopName,
        status,
        online,
        sold,
        product_info,
        thumbnail,
        regular_price,
        previous_price,
        num_of_sale,
    } = product;
    return (
        <div className="item">
            <div className="single-product-box single-product-box-2 single-product-box-skull">
                <div className="single-product-image-wrapper">
                    <a href="#" className="single-product-image">
                        <img src={thumbnail} alt={product_name} />
                        {/*<img src="../../static/img/product_placeholder.png" alt={product_name} />*/}
                        {/*<div className="off-sticker">*/}
                        {/*    <span className="offer-number">{product_info.discount}</span>*/}
                        {/*    <span>{product_info.discount_type}</span>*/}
                        {/*</div>*/}

                        <div className="discount-offers">
                            <div className="online-offers">{online} Online</div>
                        </div>

                        <div className="stock-info">
                            <div className="single-product-availibility green">{status}</div>
                        </div>
                    </a>
                </div>
                <div className="single-product-details">
                    <Link href={`/products/${id}`}>
                        <a title={product_name} className="single-product-title">
                            {product_name}
                        </a>
                    </Link>
                    <div className="single-product-meta-info">
                        <div className="left-info">
                            <a href="#" className="single-product-store">
                                {shopName}
                            </a>
                        </div>
                        <div className="right-info">
                            <div className="single-product-rating">
                                <div
                                    className="rateit"
                                    data-rateit-value="5"
                                    data-rateit-ispreset="true"
                                    data-rateit-readonly="true"
                                    data-rateit-starwidth="12"
                                    data-rateit-starheight="12"></div>
                                <div className="rated-number">{5}</div>
                            </div>
                        </div>
                    </div>

                    <div className="single-product-sold-count">
                        <div className="single-product-sold-count-number">{num_of_sale || 0} Sold</div>
                        <div className="single-product-sold-count-bar" data-sold-count="0" data-total-count="0"></div>
                    </div>

                    <div className="single-product-meta-info mb-0">
                        <div className="left-info">
                            <div className="single-product-previous-price">{previous_price}</div>
                            <div className="single-product-new-price">{regular_price}</div>
                        </div>
                        <div className="right-info">
                            <button
                                onClick={handleShowWishModal}
                                type="button"
                                className="product-view-button product-wishlist-button"
                                title="Add to Wishlist">
                                <i className="fas fa-heart" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
