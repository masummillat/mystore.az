import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Skeleton = dynamic(import('react-loading-skeleton'));
const ProductCard = dynamic(() => import('../productcard/ProductCard'), {
    loading: () => {
        return <Skeleton count={10} />;
    },
});

const FlashDealSlider = ({ flashDeals, handleShowWishModal }) => {
    console.log(flashDeals);
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    };
    return (
        <section className="flash-deals-area common-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bordered-shadow-box">
                            <div className="bordered-shadow-box-overflow-hidden">
                                <div className="common-padded-box">
                                    <div className="common-padded-box-header">
                                        <div className="flash-deals-timer-wrapper">
                                            <h3>
                                                Flash <span>Deals</span>
                                            </h3>
                                            <div className="flash-deals-timer"></div>
                                        </div>
                                        <Link href="/flashdeals">
                                            <a>See All</a>
                                        </Link>
                                    </div>
                                    <div className="flash-deals-products-carousel">
                                        <Slider {...settings}>
                                            {flashDeals.map((product, ind) => (
                                                <ProductCard
                                                    handleShowWishModal={handleShowWishModal}
                                                    product={product}
                                                    key={ind}
                                                />
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlashDealSlider;
