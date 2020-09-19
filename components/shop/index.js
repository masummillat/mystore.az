import React from 'react';
import dynamic from 'next/dynamic';
const Skeleton = dynamic(import('react-loading-skeleton'));
const ShopBannerArea = dynamic(() => import('./ShopBannerArea'), {
    loading: () => <Skeleton count={20} />,
    ssr: false,
});
const ShopDetailInfo = dynamic(() => import('./ShopDetailInfo'), {
    loading: () => <Skeleton count={20} />,
    ssr: false,
});
const ShopDetailPageArea = () => {
    return (
        <section className="shop-details-page-area common-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bordered-shadow-box">
                            <div className="bordered-shadow-box-overflow-hidden">
                                {/*Shop Banner & Info Start*/}
                                <ShopBannerArea />
                                <ShopDetailInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopDetailPageArea;
