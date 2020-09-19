import React from 'react';
import dynamic from 'next/dynamic';
const Skeleton = dynamic(import('react-loading-skeleton'));

const HomeContents = dynamic(() => import('./tabcontents/HomeContents'), {
    loading: () => {
        return <Skeleton count={30} />;
    },
    ssr: false,
});

const ReviewContents = dynamic(() => import('./tabcontents/ReviewContents'), {
    loading: () => {
        return <Skeleton count={30} />;
    },
    ssr: false,
});

const ShoppingContents = dynamic(() => import('./tabcontents/shopingContent'), {
    loading: () => {
        return <Skeleton count={30} />;
    },
    ssr: false,
});

const StoreInformation = dynamic(() => import('./tabcontents/StoreInformation'), {
    loading: () => {
        return <Skeleton count={30} />;
    },
    ssr: false,
});

const ShopDetailInfo = () => {
    return (
        <div className="shop-details-info">
            <div className="tab-content">
                {/*Shop Home Tab Start -->*/}
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <HomeContents />
                </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                    <ReviewContents />
                </div>
                <div className="tab-pane fade" id="shopping" role="tabpanel" aria-labelledby="shopping-tab">
                    <ShoppingContents />
                </div>
                <div className="tab-pane fade" id="store" role="tabpanel" aria-labelledby="store-tab">
                    <StoreInformation />
                </div>
            </div>
        </div>
    );
};

export default ShopDetailInfo;
