import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
};

const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
};

const slidesData = [
    {
        id: 1,
        title: 'repellendus id ullam',
        label: 'Dolorem officiis temporibus.',
    },
    {
        id: 2,
        title: 'excepturi consequatur est',
        label: 'Officia non provident dolor esse et neque.',
    },
    {
        id: 3,
        title: 'eius doloribus blanditiis',
        label: 'Ut recusandae vel vitae molestiae id soluta.',
    },
    {
        id: 4,
        title: 'nihil voluptates delectus',
        label: 'Qui vel consequatur recusandae illo repellendus.',
    },
    {
        id: 5,
        title: 'nemo dolorem necessitatibus',
        label: 'Placeat odit velit itaque voluptatem.',
    },
    {
        id: 6,
        title: 'dolorem quibusdam quasi',
        label: 'Adipisci officiis repudiandae.',
    },
];
const ProductImageViewer = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    return (
        <div className="product-details-images">
            <div className="slider-wrapper product-details-images-container">
                <Slider {...settingsMain} asNavFor={nav2} ref={slider => setSlider1(slider)}>
                    {slidesData.map(slide => (
                        <div className="slick-slide" key={slide.id}>
                            <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
                        </div>
                    ))}
                </Slider>
                <div className="thumbnail-slider-wrap">
                    <Slider {...settingsThumbs} asNavFor={nav1} ref={slider => setSlider2(slider)}>
                        {slidesData.map(slide => (
                            <div className="slick-slide" key={slide.id}>
                                <img
                                    className="slick-slide-image"
                                    src={`https://picsum.photos/800/400?img=${slide.id}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <style jsx>
                {`
                    .thumbnail-slider-wrap {
                        margin-top: 15px;
                        height: 85px;
                    }
                    .thumbnail-slider-wrap .slick-track .slick-slide {
                        text-align: center;
                    }
                    .thumbnail-slider-wrap .slick-track .slick-slide img {
                        width: 70%;
                    }
                `}
            </style>
        </div>
    );
};

export default React.memo(ProductImageViewer);
