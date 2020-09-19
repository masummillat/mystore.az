import React from 'react';
import dynamic from 'next/dynamic';
const Skeleton = dynamic(import('react-loading-skeleton'));
const HeroBanner = dynamic(() => import('./HeroBanner'), {
    loading: () => {
        return <Skeleton count={10} />;
    },
});
const BannerAdArea = ({ homePageSlider }) => {
    return (
        <section className="banner-ad-area common-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="bordered-shadow-box">
                            <div className="bordered-shadow-box-overflow-hidden">
                                <HeroBanner homePageSlider={homePageSlider} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bordered-shadow-box">
                            <div className="bordered-shadow-box-overflow-hidden">
                                <div className="banner-ad-area">
                                    {(
                                        <a
                                            href="http://localhost/mystore-az/public/-shoes-vh00-arSvf"
                                            className="banner-ad one">
                                            <img src="../../static/uploads/documents/ads/ad-1.jpg" alt="" />
                                        </a>
                                    ) || <Skeleton count={5} />}
                                    <a
                                        href="http://localhost/mystore-az/public/-shoes-vh00-arSvf"
                                        className="banner-ad ">
                                        <img src="../../static/uploads/documents/ads/ad-2.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerAdArea;
