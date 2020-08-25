import React from 'react';

import ShopBannerArea from './ShopBannerArea';
import ShopDetailInfo from './ShopDetailInfo';

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
