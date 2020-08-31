import React from 'react';
import Link from 'next/link';
import Head from '../../components/Head';
import LatestArticles from '../../components/blogs/LatestArticles';

const BlogDetails = () => {
    return (
        <>
            <Head title="Blog details" />
            <div className="header-fixed-content-layout">
                <section className="blog-page-area common-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-breadcrumb">
                                    <ul>
                                        <li>
                                            <Link href="/"><a>Home</a></Link>
                                        </li>
                                        <li>
                                            <a href="#">Food and drinks</a>
                                        </li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row blog-details-row">
                            <div className="col-lg-8">
                                <div className="blog-details-area">
                                    <div className="blog-categories">
                                        <ul>
                                            <li>
                                                <a href="#">Food and drinks</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h1 className="blog-header"></h1>
                                    <div className="blog-meta-info">
                                        <div className="blogger-name-date">
                                            <span className="by">By</span>
                                            <span className="blogger-name">
                                                <strong> Rafiul Islam </strong>
                                            </span>
                                            <span className="name-date-separator">-</span>
                                            <span className="blog-date">Jun 09, 2020</span>
                                        </div>
                                        {/*<div class="blog-views">*/}
                                        {/*    <span class="icon"> <i class="fas fa-eye"></i> </span>*/}
                                        {/*    <span class="number">123</span>*/}
                                        {/*</div> */}
                                    </div>

                                    <div className="blog-details-image blog-details-feature-image">
                                        <div className="blog-details-image-wrapper">
                                            <img
                                                src="../../static/uploads/documents/blog/hair-care-routine-singapore-featured-1-696x522.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="blog-details-image-credits">
                                            (Credit: <a href="#">Rafiul Islam</a>)
                                        </div>
                                    </div>

                                    <p></p>

                                    <div className="blog-recommendations">
                                        <div className="common-padded-box-header">
                                            <h3>Our Recommendations</h3>
                                        </div>
                                        <div className="blog-recommendations-carousel row">
                                            <div className="col-lg-4">
                                                <div className="single-recommend-product">
                                                    <div className="single-recommend-product-image">
                                                        <a href="../-Mens-Casual-Shirt-1070-WXIuy.html">
                                                            <img
                                                                src="../../static/uploads/documents/products/1070.2.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="single-recommend-product-details">
                                                        <h5 className="single-recommend-product-title">
                                                            <a href="../-Mens-Casual-Shirt-1070-WXIuy.html">
                                                                Men&#039;s Casual Shirt-1070
                                                            </a>
                                                        </h5>
                                                        <div className="single-recommend-product-price">
                                                            $1500
                                                        </div>
                                                        <a
                                                            href="../-Mens-Casual-Shirt-1070-WXIuy.html"
                                                            className="single-recommend-product-buy-button">
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p></p>

                                    <p className="blog-credit">
                                        This article was updated on Jun 09, 2020. Additional
                                        research done by MyStore Team.
                                    </p>

                                    <div className="blog-tags">
                                        <ul>
                                            <li className="tag-title">Tags</li>
                                            <li>
                                                <a href="#">Budget</a>
                                            </li>
                                            <li>
                                                <a href="#"> Buys</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="disqus-comment-area">
                                        <h5>Comments</h5>
                                        <div id="fb-root"></div>
                                        <div
                                            className="fb-comments"
                                            data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                                            data-numposts="5"
                                            data-width=""></div>
                                    </div>

                                    <div className="blog-social-share-links">
                                        <ul>
                                            <li className="facebook">
                                                <a href="#">
                                                    {' '}
                                                    <i className="fab fa-facebook-f"></i>{' '}
                                                </a>
                                            </li>
                                            <li className="twitter">
                                                <a href="#">
                                                    {' '}
                                                    <i className="fab fa-twitter"></i>{' '}
                                                </a>
                                            </li>
                                            <li className="telegram">
                                                <a href="#">
                                                    {' '}
                                                    <i className="fab fa-telegram"></i>{' '}
                                                </a>
                                            </li>
                                            <li className="mail">
                                                <a href="#">
                                                    {' '}
                                                    <i className="far fa-envelope"></i>{' '}
                                                </a>
                                            </li>
                                            <li className="pinterest">
                                                <a href="#">
                                                    {' '}
                                                    <i className="fab fa-pinterest-p"></i>{' '}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="blog-prev-next-post">
                                        <div className="row">
                                            <div className="col-6 text-right">
                                                <div className="blog-previous-post">
                                                    <div className="blog-prev-next-post-title">
                                                        Next article
                                                    </div>
                                                    <a href="3-.html"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*<div class="blog-author-details">*/}
                                    {/*    <div class="blog-author-image">*/}
                                    {/*        <img src="https://beta.mystore.az/frontend/assets/img/blog-user.png" alt="">*/}
                                    {/*    </div>*/}
                                    {/*    <div class="blog-author-info">*/}
                                    {/*        <h5 class="blog-author-name">Jonathon Pine</h5>*/}
                                    {/*        <div class="blog-author-description">*/}
                                    {/*            Mystore believes in sharing what we know best: shopping! Armed with our punny in-house writers, shopping has never been this fun.*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div> */}

                                    {/*Relatetd Articles Start -->*/}
                                    <div className="blog-related-author-posts">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    id="related-post-tab"
                                                    data-toggle="tab"
                                                    href="#related-post"
                                                    role="tab"
                                                    aria-controls="related-post"
                                                    aria-selected="true">
                                                    Related Articles
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    id="more-author-post-tab"
                                                    data-toggle="tab"
                                                    href="#more-author-post"
                                                    role="tab"
                                                    aria-controls="more-author-post"
                                                    aria-selected="false">
                                                    More From Author
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade show active"
                                                id="related-post"
                                                role="tabpanel"
                                                aria-labelledby="related-post-tab">
                                                <div className="related-post-carousel owl-carousel">
                                                    <div className="single-related-post">
                                                        <a
                                                            href="2-.html"
                                                            className="related-post-image">
                                                            <img
                                                                src="../../static/uploads/documents/blog/hair-care-routine-singapore-featured-1-696x522.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="related-post-title">
                                                            <a href="2-.html"></a>
                                                        </div>
                                                    </div>
                                                    <div className="single-related-post">
                                                        <a
                                                            href="9-19-butun-sinqapurlularin-sinamasi-ucun-yuksek-derecede-bedbext-mehsullar.html"
                                                            className="related-post-image">
                                                            <img
                                                                src="../../static/uploads/documents/blog/FI-Innisfree-696x522.png"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="related-post-title">
                                                            <a href="9-19-butun-sinqapurlularin-sinamasi-ucun-yuksek-derecede-bedbext-mehsullar.html"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="more-author-post"
                                                role="tabpanel"
                                                aria-labelledby="more-author-tab">
                                                <div className="more-author-post-carousel owl-carousel">
                                                    <div className="single-more-author-post">
                                                        <a
                                                            href="#"
                                                            className="more-author-post-image">
                                                            <img
                                                                src="../../static/uploads/documents/products/1070.2.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="more-author-post-title">
                                                            <a href="#">
                                                                Men&#039;s Casual Shirt-1070
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Latest Articles Start -->*/}
                            <div className="col-lg-4">
                                <LatestArticles/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogDetails;
