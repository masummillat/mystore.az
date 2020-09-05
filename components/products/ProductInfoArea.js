import React from 'react';

const ProductInfoAre = () => {
    return (
        <div>
            <div className="product-name-area">
                <h2>Смартфон Apple iPhone 11 Pro Max 64GB Gold</h2>
            </div>

            <div className="product-summary-info">
                <ul>
                    <li>
                        <a className="product-summary-rating smooth-scrolling" href="#product-review-area">
                            <span className="review-number">4.5</span>
                            {/*<div class="rateit" data-rateit-value="2" data-rateit-ispreset="true" data-rateit-readonly="true"></div> */}
                            <div
                                className="rateit"
                                data-rateit-mode="font"
                                data-rateit-icon=""
                                style={{
                                    fontFamily: 'Font Awesome 5 Free',
                                    fontSize: '12px',
                                }}
                                data-rateit-ispreset="true"
                                data-rateit-readonly="true"
                                data-rateit-value="2.5"
                            />
                        </a>
                    </li>
                    <li>
                        <a className="product-summary-review-count smooth-scrolling" href="#product-review-area">
                            <span className="review-number">0</span>
                            <span className="review-text">Reviews</span>
                        </a>
                    </li>
                    <li>
                        <div className="product-summary-sold-count">
                            <div className="sold-number">0</div>
                            <div className="sold-text">Sold</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="single-product-sold-count product-details-sold-count">
                <div className="single-product-sold-count-number">0 Sold</div>
                <div className="single-product-sold-count-bar" data-sold-count="0" data-total-count="32"></div>
            </div>

            <div className="product-meta-info m-d-none">
                <h5>Status:</h5>
                <div className="product-meta-details product-availibility-info">
                    <span className="available">Stock Available</span>
                </div>
            </div>

            <div className="product-meta-info m-d-none">
                <h5>Price:</h5>
                <div className="product-meta-details product-price-info">
                    <span className="old-price">
                        <del>3 421,00 ₼</del>
                    </span>
                    <span className="new-price">3 232,00 ₼</span>
                    <span className="price-percentage"> $-2 OFF</span>
                </div>
            </div>

            <div className="mobile-product-price-area">
                <div className="mobile-price">
                    <span className="old-price">
                        <del>3 421,00 ₼</del>
                    </span>
                    <span className="new-price">3 232,00 ₼</span>
                </div>
                <div className="mobile-avaibility">
                    <span className="available">Stock Available</span>

                    <span className="price-percentage"> $-2 OFF</span>
                </div>
            </div>
            <div className="product-meta-info product-shipping-info">
                <h5>Shipping Cost:</h5>
                <div className="product-meta-details product-shipping-details">
                    <span className="shipping-price">$0</span>
                    <span className="free-shipping">Free Shipping</span>
                </div>
            </div>
            <form
                method="POST"
                action="https://beta.mystore.az/cart"
                acceptCharset="UTF-8"
                encType="multipart/form-data">
                <input name="_token" type="hidden" value="RfJ1YgLyUfPcMNu0u4zETpbTsVzhQOR7FsBVaJ6V" />
                <div className="product-meta-info">
                    <h5>Color:</h5>
                    <div className="product-meta-details product-color-info">
                        <div className="custom-color-radio-wrapper">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="p-color-#FAEBD7"
                                    value="#FAEBD7"
                                    name="color"
                                    className="custom-control-input"
                                    checked
                                    required
                                />
                                <label
                                    title="#FAEBD7"
                                    className="custom-control-label"
                                    htmlFor="p-color-#FAEBD7"
                                    style={{
                                        backgroundColor: '#FAEBD7',
                                    }}></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-meta-info">
                    <h5>Others:</h5>
                    <div className="product-meta-details product-other-info">
                        <div className="custom-other-radio-wrapper">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="p-other-F"
                                    value="F"
                                    name="size"
                                    className="custom-control-input"
                                    checked
                                    required
                                />
                                <label title="" className="custom-control-label" htmlFor="p-other-F">
                                    F
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-meta-info">
                    <h5>Quantity:</h5>
                    <div className="product-meta-details product-quantity-info">
                        <div className="quantity-add-remove">
                            <div className="quantity buttons_added">
                                <input type="hidden" name="cart_image" value="QeaRdPCQKH-1594760333-jpg" />
                                <input type="hidden" name="shipping_type" value="Free Shipping" />
                                <input type="hidden" name="shipping_cost" value="0" />
                                <input type="hidden" name="id" value="44" />
                                <input type="hidden" name="rowId" value="829953" />
                                <input type="hidden" name="tax" value="" />
                                <input type="button" value="-" className="minus" />
                                <input
                                    type="number"
                                    step="1"
                                    min="1"
                                    max=""
                                    name="quantity"
                                    value="1"
                                    title="Qty"
                                    className="input-text qty text"
                                    size="4"
                                    pattern=""
                                    inputMode=""
                                />
                                <input type="button" value="+" className="plus" />
                            </div>
                        </div>
                        <div className="available-product-number">(32 available)</div>
                    </div>
                </div>
                <div className="product-action-list">
                    <button type="submit">
                        <i className="fas fa-shopping-cart"></i> Add to cart
                    </button>
                </div>
            </form>
        </div>
    );
};

export default React.memo(ProductInfoAre);
