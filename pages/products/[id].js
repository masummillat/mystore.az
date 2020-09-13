import React from 'react';
import { products } from '../../constants/data';
const Head = dynamic(import('../../components/Head'));
import dynamic from 'next/dynamic';
const Skeleton = dynamic(import('react-loading-skeleton'));
const SameShopProduct = dynamic(()=>import('../../components/products/SameShopProduct'),{loading: ()=>{
    return <Skeleton count={10} />
    },ssr: false})
const RelatedProduct = dynamic(()=>import('../../components/products/RelatedProduct'),{loading: ()=>{
        return <Skeleton count={10} />
    },ssr: false})
const ProductImageViewer = dynamic(()=>import('../../components/products/ProductImageViewer'),{loading: ()=>{
        return <Skeleton count={10} />
    },ssr: false})
const ProductInfoArea = dynamic(()=>import('../../components/products/ProductInfoArea'),{loading: ()=>{
        return <Skeleton count={10} />
    },ssr: false})
const SocialMediaAndPayment = dynamic(()=>import('../../components/products/SocialMediaAndPayment'),{loading: ()=>{
        return <Skeleton count={10} />
    },ssr: false})
const ProductPage = () => {
    return (
        <>
            <Head title="product page" />
            <div className="header-fixed-content-layout">
                <section className="product-details-area common-padding-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bordered-shadow-box">
                                    <div className="bordered-shadow-box-overflow-hidden">
                                        <div className="common-padded-box">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="product-details-info-breadcumb">
                                                        <ul>
                                                            <li>
                                                                <a href="index.html">Home</a>
                                                            </li>

                                                            <li>
                                                                <a href="category/1-elektronika.html">Elektronika</a>
                                                            </li>
                                                            <li>
                                                                <a href="sub-category/1-telefonlar-ve-agilli-saatlar.html">
                                                                    Telefonlar və ağıllı saatlar
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="sub-sub-cat/smartfonlar.html">Smartfonlar</a>
                                                            </li>
                                                            <li className="active">
                                                                Смартфон Apple iPhone 11 Pro Max 64GB Gold
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <ProductImageViewer />
                                                </div>
                                                <div className="col-lg-6">
                                                    <ProductInfoArea />
                                                </div>

                                                <div className="product-meta-share-payment ml-2 mt-2">
                                                    <SocialMediaAndPayment />
                                                </div>

                                                {/*<div class="product-return-policy-area">*/}
                                                {/*    <div class="product-meta-info">*/}
                                                {/*        <h5>Return Policy:</h5>*/}
                                                {/*        <div class="product-meta-details product-return-policy-info">*/}
                                                {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*</div> */}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="p-3">
                                                    <div className="product-related-shop-info-wrapper-area">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4">
                                                                <div className="product-related-shop-info-area">
                                                                    {/*shop info -->*/}
                                                                    <div className="product-related-shop-image">
                                                                        <a href="shop-details/7-mystoreaz.html">
                                                                            <img
                                                                                src="../../static/uploads/documents/shop/23621966_1772482562784565_5243729752846279838_n.jpg"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="product-related-shop-details">
                                                                        <h3>
                                                                            <a href="shop-details/7.html">MyStore.Az</a>
                                                                        </h3>
                                                                        <div className="product-related-shop-follow-chat-buttons">
                                                                            <a
                                                                                href="shop-details/7-mystoreaz.html"
                                                                                className="btn-submit btn-submit-small mr-3">
                                                                                Visit Shop
                                                                            </a>
                                                                            <a
                                                                                href="login.html"
                                                                                className="product-related-shop-follow-btn action-follow">
                                                                                <strong>Follow</strong>
                                                                            </a>
                                                                        </div>
                                                                        <button
                                                                            type="button"
                                                                            className="product-related-shop-chat-button chatButtonClick"
                                                                            title="Chat with seller">
                                                                            <i className="far fa-comment"></i>
                                                                            <span>Chat Now</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-8">
                                                                <div className="product-related-shop-summary-area">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="single-product-related-shop-summary">
                                                                                <span className="title">Ratings</span>
                                                                                <span className="number">0</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-4">
                                                                            <div className="single-product-related-shop-summary">
                                                                                <span className="title">Products</span>
                                                                                <span className="number">28</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-4">
                                                                            <div className="single-product-related-shop-summary">
                                                                                <span className="title">Follower</span>
                                                                                <span className="number">1</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-4">
                                                                            <div className="single-product-related-shop-summary">
                                                                                <span className="title">
                                                                                    Response Rate
                                                                                </span>
                                                                                <span className="number">100%</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-4">
                                                                            <div className="single-product-related-shop-summary">
                                                                                <span className="title">
                                                                                    Response Time
                                                                                </span>
                                                                                <span className="number">
                                                                                    within hours
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-4">
                                                                            <div className="single-product-related-shop-summary">
                                                                                <span className="title">Joined</span>
                                                                                <span className="number">
                                                                                    {' '}
                                                                                    1 months ago
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div
                                                    className="product-details-description-review-area mt-0 p-3"
                                                    id="product-review-area">
                                                    <div className="product-details-info">
                                                        <ul className="nav nav-tabs" role="tablist">
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link active"
                                                                    data-toggle="tab"
                                                                    href="#specification"
                                                                    role="tab"
                                                                    aria-controls="specification"
                                                                    aria-selected="true">
                                                                    Specification
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    data-toggle="tab"
                                                                    href="#description"
                                                                    role="tab"
                                                                    aria-controls="description"
                                                                    aria-selected="false">
                                                                    Description
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    className="nav-link"
                                                                    data-toggle="tab"
                                                                    href="#review"
                                                                    role="tab"
                                                                    aria-controls="review"
                                                                    aria-selected="false">
                                                                    Review
                                                                </a>
                                                            </li>
                                                        </ul>

                                                        <div className="tab-content">
                                                            <div
                                                                className="tab-pane fade show active"
                                                                id="specification"
                                                                role="tabpanel"
                                                                aria-labelledby="specification-tab">
                                                                <h5 className="m-product-details-tab-header">
                                                                    Specification
                                                                </h5>
                                                                <div className="product-specification">
                                                                    <ul>
                                                                        <li>
                                                                            <div className="title">Category</div>
                                                                            <div className="info">
                                                                                <ul className="specification-category">
                                                                                    <li>
                                                                                        <a href="category/1-elektronika.html">
                                                                                            Elektronika
                                                                                        </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="sub-category/1-telefonlar-ve-agilli-saatlar.html">
                                                                                            Telefonlar və ağıllı saatlar
                                                                                        </a>
                                                                                    </li>

                                                                                    <li>
                                                                                        <a href="sub-sub-cat/smartfonlar.html">
                                                                                            Smartfonlar
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="title">Brand</div>
                                                                            <div className="info">
                                                                                <a href="#"> test </a>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="title">Stock</div>
                                                                            <div className="info">0</div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="title">Ships From</div>
                                                                            <div className="info">
                                                                                A.Aliyev 65/83, Baku, Azerbaijan
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="description"
                                                                role="tabpanel"
                                                                aria-labelledby="description-tab">
                                                                <h5 className="m-product-details-tab-header">
                                                                    Description
                                                                </h5>
                                                                <div className="product-description">
                                                                    <div className="product-details-description">
                                                                        Вобщем история такова) Купил iPhone 11 Pro Max
                                                                        Green и мне попался не удачный образец пыль под
                                                                        камерами! Ну расстроился и продал его! Купил
                                                                        просто iPhone 11 проходил с ним два месяца и
                                                                        особо не впечатлил! В итоге все же опять взял
                                                                        этот аппарат именно в золотом цвете очень
                                                                        красивый!!!
                                                                    </div>

                                                                    <div className="product-details-tags">
                                                                        <h5>Tags:</h5>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    Смартфон Apple iPhone 11 Pro Max
                                                                                    64GB Gold
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*Product Details Review Tab Start*/}
                                                            <div
                                                                className="tab-pane fade"
                                                                id="review"
                                                                role="tabpanel"
                                                                aria-labelledby="review-tab">
                                                                <h5 className="m-product-details-tab-header">Review</h5>
                                                                <div className="product-review-wrapper">
                                                                    <div className="product-review-area">
                                                                        <div className="product-review-summary">
                                                                            <div className="review-average">
                                                                                <span className="big">4.5</span>
                                                                                <span className="text">out of 5</span>
                                                                            </div>
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
                                                                                data-rateit-value="4.5"></div>
                                                                            <div className="product-review-count">
                                                                                0 Reviews
                                                                            </div>
                                                                        </div>

                                                                        <div className="empty-content-box">
                                                                            <div className="empty-content-box-icon">
                                                                                <img
                                                                                    src="frontend/assets/img/review.png"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="empty-content-box-message">
                                                                                There is no product review yet!!
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <SameShopProduct products={[]} />
                <RelatedProduct products={[]} />
            </div>
        </>
    );
};



export default ProductPage;
