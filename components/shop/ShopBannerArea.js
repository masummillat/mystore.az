import React from 'react';
import Slider from 'react-slick';
var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};
const ShopBannerArea = () => {
    return (
        <div className="shop-banner-area">
            {/*<div className="shop-banner-carousel">*/}
            <Slider {...settings}>
                <div className="shop-banner-image">
                    <img
                        src="../../static/uploads/documents/shop/E-Caldwell-Style-Closet-Overhaul-Banner-1400x400.jpg"
                        alt="E-Caldwell-Style-Closet-Overhaul-Banner-1400x400.jpg"
                    />
                </div>
                <div className="shop-banner-image">
                    <img
                        src="../../static/uploads/documents/shop/2017-Bedroom-Slider-1400x400.jpg"
                        alt="2017-Bedroom-Slider-1400x400.jpg"
                    />
                </div>
            </Slider>
            {/*</div>*/}
            <div className="shop-info-area">
                <div className="shop-left-info">
                    <div className="shop-profile-picture">
                        <img
                            src="../../static/uploads/documents/shop/23621966_1772482562784565_5243729752846279838_n.jpg"
                            alt=""
                        />
                    </div>
                    <div className="shop-info">
                        <div className="shop-left-top-info">
                            <div className="shop-name">MyStore.Az</div>
                            <div className="shop-details-chat-follow-area">
                                <a
                                    href="#"
                                    className="product-related-shop-chat-button chatButtonClick"
                                    title="Chat with seller"
                                    id="62">
                                    {' '}
                                    <i className="far fa-comment" /> Chat
                                </a>

                                <div className="shop-follow-area">
                                    <a
                                        href="../login.html"
                                        name="button"
                                        className="shop-follow-btn">
                                        Follow
                                    </a>
                                    <div className="follow-number">1 Following</div>
                                </div>
                            </div>
                            <div className="shop-review-info-area">
                                <div className="shop-review-star">
                                    <div
                                        className="rateit"
                                        data-rateit-mode="font"
                                        data-rateit-icon=""
                                        style={{ fontFamily: 'Font Awesome 5 Free', fontSize: 15 }}
                                        data-rateit-ispreset="true"
                                        data-rateit-readonly="true"
                                        data-rateit-value=""
                                    />
                                </div>
                                <div className="shop-review-number">0 Reviews</div>
                            </div>
                        </div>
                        <div className="shop-left-bottom-info">
                            <div className="shop-details-nav">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li>
                                        <a
                                            className="active"
                                            data-toggle="tab"
                                            href="#home"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            data-toggle="tab"
                                            href="#reviews"
                                            role="tab"
                                            aria-controls="about"
                                            aria-selected="false">
                                            Reviews
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            data-toggle="tab"
                                            href="#shopping"
                                            role="tab"
                                            aria-controls="shopping"
                                            aria-selected="false">
                                            Shopping
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            data-toggle="tab"
                                            href="#store"
                                            role="tab"
                                            aria-controls="store"
                                            aria-selected="false">
                                            Store Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shop-right-info">
                    <div className="single-feature-store-info shop-details-percentage-info">
                        <div className="percentage">
                            <span className="bordered">% Offline</span>
                            <span className="boxed">% Online</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopBannerArea;
