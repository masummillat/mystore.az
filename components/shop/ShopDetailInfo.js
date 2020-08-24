import React from 'react';
import HomeContents from './tabcontents/HomeContents';
import ReviewContents from './tabcontents/ReviewContents';
import ShoppingContents from "./tabcontents/shopingContent";

const ShopDetailInfo = () => {
  return (
    <div className="shop-details-info">
      <div className="tab-content">
        {/*Shop Home Tab Start -->*/}
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <HomeContents />
        </div>
        <div
          className="tab-pane fade"
          id="reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
        >
          <ReviewContents />
        </div>
        <div className="tab-pane fade" id="shopping" role="tabpanel" aria-labelledby="shopping-tab">
            <ShoppingContents />
        </div>
      </div>
    </div>
  );
};

export default ShopDetailInfo;
