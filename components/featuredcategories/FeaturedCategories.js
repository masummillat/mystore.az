import React from 'react';
import dynamic from 'next/dynamic';
const Slider = dynamic(import('react-slick'));
const Skeleton = dynamic(import('react-loading-skeleton'));
const FeatureCateCard = dynamic(() => import('./FeaturedCateCard'), {
    loading: () => {
        return <Skeleton count={10} />;
    },
});

const FeaturedCategories = ({ featuredCats }) => {
    var settings = {
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
        <section className="featured-categories-area common-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bordered-shadow-box">
                            <div className="bordered-shadow-box-overflow-hidden">
                                <div className="common-padded-box">
                                    <div className="common-padded-box-header">
                                        <h3>
                                            Tövsiyyə olunan <span>Kateqoriya</span>
                                        </h3>
                                        {/*<a href="#">See All</a>*/}
                                    </div>
                                    <Slider {...settings}>
                                        {featuredCats.map((fcat, ind) => (
                                            <FeatureCateCard key={ind} category={fcat} />
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
