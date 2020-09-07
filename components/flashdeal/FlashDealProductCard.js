import React from 'react';
import Link from 'next/link';
const FlashDealProductCard = ({ product }) => {
    console.log(product);
    return (
        <div className="col-lg-3 col-sm-3">
            <div className="single-product-box single-product-box-2">
                <input type="hidden" id="pro_id" value="8" />

                <div className="single-product-image-wrapper">
                    <Link href={`/products/${product.id}`}>
                        <a className="single-product-image">
                            <img src={product.img} alt="" />
                            <div className="off-sticker">
                                <span className="offer-number">$10 </span>
                                <span>Off</span>
                            </div>

                            {/*<div class="discount-offers">*/}
                            {/*    <div class="online-offers">20% Online</div>*/}
                            {/*    <div class="offline-offers">20% Offline</div>*/}
                            {/*</div> */}

                            <div className="stock-info">
                                <div className="single-product-availibility green">{product.status}</div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="single-product-details">
                    <Link href={`/products/${product.id}`}>
                        <a className="single-product-title">{product.title}</a>
                    </Link>
                    {/*<div class="single-product-description">*/}
                    {/*    <span class="info-tag">Info:</span>*/}
                    {/*    <span class="description">Brand: Happy Shopping BD Product Type: Eyewear Color:</span>*/}
                    {/*</div> */}
                    <div className="single-product-meta-info">
                        <div className="left-info">
                            <Link href={`/shop/${product.shopName}`}>
                                <a className="single-product-store">{product.shopName}</a>
                            </Link>
                        </div>
                        <div className="right-info">
                            <div className="single-product-rating">
                                <div
                                    className="rateit"
                                    data-rateit-value="2.5"
                                    data-rateit-ispreset="true"
                                    data-rateit-readonly="true"
                                    data-rateit-starwidth="12"
                                    data-rateit-starheight="12"></div>
                                <div className="rated-number">(2)</div>
                            </div>
                        </div>
                    </div>

                    <div className="single-product-sold-count">
                        <div className="single-product-sold-count-number">6 Sold</div>
                        <div className="single-product-sold-count-bar" data-sold-count="6" data-total-count="20"></div>
                    </div>

                    <div className="single-product-meta-info mb-0">
                        <div className="left-info">
                            <div className="single-product-previous-price">{product.previousPrice}</div>
                            <div className="single-product-new-price">{product.newPrice} </div>
                        </div>
                        <div className="right-info">
                            <div className="single-product-rating single-product-rating--mobile">
                                <div
                                    className="rateit"
                                    data-rateit-value="2.5"
                                    data-rateit-ispreset="true"
                                    data-rateit-readonly="true"
                                    data-rateit-starwidth="12"
                                    data-rateit-starheight="12"></div>
                                <div className="rated-number">(2)</div>
                            </div>

                            <button
                                type="button"
                                className="product-view-button product-wishlist-button"
                                title="Please Login to Add to Wishlist"
                                data-toggle="modal"
                                data-target="#login-popup">
                                <i className="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashDealProductCard;
