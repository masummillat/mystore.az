import React from 'react';
import Slider from 'react-slick';

var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
};
const HeroBanner = () => {
    return (
        <Slider {...settings}>
            <img
                className="d-block w-100"
                src="../../static/uploads/documents/slider/b-4.jpg"
                alt="First slide"
            />
            <img
                className="d-block w-100"
                src="../../static/uploads/documents/slider/b-3.jpg"
                alt="Second slide"
            />

            <img
                className="d-block w-100"
                src="../../static/uploads/documents/slider/b-1.jpg"
                alt="Third slide"
            />
        </Slider>
    );
};

export default HeroBanner;
