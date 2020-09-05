import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import dynamic from 'next/dynamic';
import TopCategories from '../components/blogs/TopCategories';
import LatestBlogs from '../components/blogs/LatestBlogs';
import HealthAndFitness from '../components/blogs/HealthAndFitness';
import TechAndGadgets from '../components/blogs/TechAndGadgets';

const Head = dynamic(import('../components/Head'));
const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
};
class Blogs extends React.Component {
    render() {
        return (
            <>
                <Head title="Blogs" />
                <section className="blog-page-area common-padding">
                    <div className="container">
                        <div className="row trending-blogs-row">
                            <div className="col-lg-12">
                                <div className="trending-blogs-area">
                                    <div className="trending-blog">Trending Now</div>
                                    <div className="trending-blog-list">
                                        <div className="trending-blog-list-carousel owl-carousel">
                                            {/*<Slider {...settings}>*/}
                                            {/*<a*/}
                                            {/*    className="single-trending-blog"*/}
                                            {/*    href="blog-details/19"*/}
                                            {/*        >*/}
                                            {/*    19 Bütün Sinqapurluların sınaması üçün yüksək*/}
                                            {/*    dərəcədə bədbəxt məhsullar*/}
                                            {/*</a>*/}
                                            {/*<a*/}
                                            {/*    className="single-trending-blog"*/}
                                            {/*    href="blog-details/8-.html"*/}
                                            {/*    target="_blank"></a>*/}
                                            {/*<a*/}
                                            {/*    className="single-trending-blog"*/}
                                            {/*    href="blog-details/7-.html"*/}
                                            {/*    target="_blank"></a>*/}
                                            {/*<a*/}
                                            {/*    className="single-trending-blog"*/}
                                            {/*    href="blog-details/6-.html"*/}
                                            {/*    target="_blank"></a>*/}
                                            {/*<a*/}
                                            {/*    className="single-trending-blog"*/}
                                            {/*    href="blog-details/5-.html"*/}
                                            {/*    target="_blank"></a>*/}
                                            {/*<a*/}
                                            {/*    className="single-trending-blog"*/}
                                            {/*    href="blog-details/4-.html"*/}
                                            {/*    target="_blank"></a>*/}
                                            {/*<a*/}
                                            {/*    className="single-trending-blog"*/}
                                            {/*    href="blog-details/3-.html"*/}
                                            {/*    target="_blank"></a>*/}
                                            {/*<a*/}
                                            {/*    className="single-trending-blog"*/}
                                            {/*    href="blog-details/2-.html"*/}
                                            {/*    target="_blank"></a>*/}
                                            {/*</Slider>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row hero-blogs-row">
                            <div className="col-lg-12">
                                <div className="hero-blogs-area">
                                    <div className="row">
                                        <div className="col-lg-8 col-sm-7">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <Link href="/blog-details/9-19-butun-sinqapurlularin-sinamasi-ucun-yuksek-derecede-bedbext-mehsullar">
                                                        <a
                                                            className="single-hero-blog hero-blog-one-third"
                                                            target="_blank">
                                                            <span className="blog-image">
                                                                <img
                                                                    src="../static/uploads/documents/blog/FI-Innisfree-696x522.png"
                                                                    alt="19 Bütün Sinqapurluların sınaması üçün yüksək dərəcədə bədbəxt məhsullar"
                                                                />
                                                            </span>
                                                            <span className="blog-title">
                                                                19 Bütün Sinqapurluların sınaması üçün yüksək dərəcədə
                                                                bədbəxt məhsullar
                                                            </span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <Link href="blog-details/8">
                                                        <a
                                                            className="single-hero-blog hero-blog-one-fourth"
                                                            target="_blank">
                                                            <span className="blog-image">
                                                                <img
                                                                    src="../static/uploads/documents/blog/easy-rice-cooker-recipes-singapore-696x522.jpg"
                                                                    alt=""
                                                                />
                                                            </span>
                                                            <span className="blog-title"></span>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="col-sm-6">
                                                    <Link href="blog-details/7">
                                                        <a
                                                            className="single-hero-blog hero-blog-one-fourth"
                                                            target="_blank">
                                                            <span className="blog-image">
                                                                <img
                                                                    src="../static/uploads/documents/blog/feature-image-durian-cake-recipe-696x522.jpg"
                                                                    alt=""
                                                                />
                                                            </span>
                                                            <span className="blog-title"></span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-5">
                                            {/*    Top Categories */}
                                            <TopCategories />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mixed-column-blogs-row common-padding-top">
                            <div className="col-lg-8">
                                <div className="common-padded-box-header">
                                    <h3>Fashion & Beauty</h3>
                                    {/*<a href="#" target="_blank">View All</a> */}
                                </div>
                                <div className="row mixed-two-column-row">
                                    <div className="col-sm-6"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 upcoming-blogs-col">
                                <LatestBlogs />
                            </div>
                        </div>

                        <div className="row grid-view-row common-padding-top">
                            <div className="col-lg-12">
                                {/*    Health and fitness*/}
                                <HealthAndFitness />
                            </div>
                        </div>

                        <div className="row grid-view-compact-row common-padding-top">
                            <div className="col-lg-12">
                                {/*   Tech and Gadget*/}
                                <TechAndGadgets />
                            </div>
                        </div>

                        {/*    <div className="row grid-view-row common-padding-top">*/}
                        {/*<div className="col-lg-12">*/}
                        {/*    <div className="common-padded-box-header">*/}
                        {/*        <h3><a href="#">Parenting</a></h3>*/}
                        {/*        <a href="#">View All</a>*/}
                        {/*    </div>*/}

                        {/*    <div className="row">*/}
                        {/*        <div className="col-lg-4">*/}
                        {/*            <div className="single-blog-grid-view single-blog-grid-view--large">*/}
                        {/*                <div className="blog-image">*/}
                        {/*                    <a href="#">*/}
                        {/*                        <img src="https://beta.mystore.az/../static/uploads/documents/products/29.jpg" alt="">*/}
                        {/*                    </a>*/}
                        {/*                </div>*/}
                        {/*                <h3 className="blog-title">*/}
                        {/*                    <a href="#">From Korean Eggs To Claypot Rice: 7 Easy Rice Cooker Recipes To Try At Home</a>*/}
                        {/*                </h3>*/}
                        {/*                <div className="blogger-name-date">*/}
                        {/*                    <span className="blogger-name"><strong> <a href="#">Jonathon Pine</a> </strong></span>*/}
                        {/*                    <span className="name-date-separator">-</span>*/}
                        {/*                    <span className="blog-date">May 31, 2020</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-4">*/}
                        {/*            <div className="single-blog-grid-view single-blog-grid-view--large">*/}
                        {/*                <div className="blog-image">*/}
                        {/*                    <a href="#">*/}
                        {/*                        <img src="https://beta.mystore.az/../static/uploads/documents/products/18.jpg" alt="">*/}
                        {/*                    </a>*/}
                        {/*                </div>*/}
                        {/*                <h3 className="blog-title">*/}
                        {/*                    <a href="#">13 Muji Products To Create Your Muji-Style Dream Home In Singapore</a>*/}
                        {/*                </h3>*/}
                        {/*                <div className="blogger-name-date">*/}
                        {/*                    <span className="blogger-name"><strong> <a href="#">Jonathon Pine</a> </strong></span>*/}
                        {/*                    <span className="name-date-separator">-</span>*/}
                        {/*                    <span className="blog-date">May 31, 2020</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-4">*/}
                        {/*            <div className="single-blog-grid-view single-blog-grid-view--large">*/}
                        {/*                <div className="blog-image">*/}
                        {/*                    <a href="#">*/}
                        {/*                        <img src="https://beta.mystore.az/../static/uploads/documents/products/27.jpg" alt="">*/}
                        {/*                    </a>*/}
                        {/*                </div>*/}
                        {/*                <h3 className="blog-title">*/}
                        {/*                    <a href="#">Wake Up And Smell The Coffee With These 10 Best Coffee Machines</a>*/}
                        {/*                </h3>*/}
                        {/*                <div className="blogger-name-date">*/}
                        {/*                    <span className="blogger-name"><strong> <a href="#">Jonathon Pine</a> </strong></span>*/}
                        {/*                    <span className="name-date-separator">-</span>*/}
                        {/*                    <span className="blog-date">May 31, 2020</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </>
        );
    }
}

export default Blogs;
