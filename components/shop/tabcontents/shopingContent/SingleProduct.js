import React from 'react';

const SingleProduct = ({ product }) => {
    const { id, name, shopName, status, online, off, sold, img, previousPrice, newPrice } = product;
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="single-product-box single-product-box-2">
                <input type="hidden" id="pro_id" value="41" />
                <div className="single-product-image-wrapper">
                    <a href="../--HP-24fw-OtvS8.html" className="single-product-image">
                        <img src="../../../../static/uploads/documents/products/bprQTjpEva-1594759608-jpg" alt="" />
                        <div className="off-sticker">
                            <span className="offer-number">{off} </span>
                            <span>Off</span>
                        </div>

                        {/* <div class="discount-offers">*/}
                        {/*    <div class="online-offers">20% Online</div>*/}
                        {/*    <div class="offline-offers">20% Offline</div>*/}
                        {/*</div> */}
                        <div className="stock-info">
                            <div className="single-product-availibility green">Available</div>
                        </div>
                    </a>
                </div>
                <div className="single-product-details">
                    <a href="../--HP-24fw-OtvS8.html" className="single-product-title">
                        {name}
                    </a>
                    {/*<div class="single-product-description">*/}
                    {/*    <span class="info-tag">Info:</span>*/}
                    {/*    <span class="description">Очень стильно выглядит, как дорогой 75 герц, хотя я лично разницы с 60 не заметил. Качество после tn матрицы отличное, засветов нет, все цвета насыщенные, глаза не устают. Хорошее матовое покрытие, можно работать/играть под настольной лампой.</span>*/}
                    {/*</div> */}
                    <div className="single-product-meta-info">
                        <div className="left-info">
                            <a href="7-mystoreaz.html" className="single-product-store">
                                {shopName}
                            </a>
                        </div>
                        <div className="right-info">
                            <div className="single-product-rating">
                                <div className="rateit" />
                                <div className="rated-number">(0)</div>
                            </div>
                        </div>
                    </div>
                    <div className="single-product-sold-count">
                        <div className="single-product-sold-count-number">{sold} Sold</div>
                        <div className="single-product-sold-count-bar" />
                    </div>
                    <div className="single-product-meta-info mb-0">
                        <div className="left-info">
                            <div className="single-product-previous-price">{previousPrice}</div>
                            <div className="single-product-new-price">{newPrice}</div>
                        </div>
                        <div className="right-info">
                            <div className="single-product-rating single-product-rating--mobile">
                                <div className="rateit"></div>
                                <div className="rated-number">(0)</div>
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

export default SingleProduct;
