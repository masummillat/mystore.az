import React from 'react';

const ReviewContents = () => {
  return (
    <div className="shop-about-info">
      <div className="m-tab-header">Reviews</div>
      <div className="shop-review-list-area">
        <div className="product-review-area">
          <h3 className="product-review-count">0 Reviews</h3>
          <div className="no-product-review-message">
            There is no product review yet!!
          </div>
        </div>
        <div className="product-review-form-area">
          <h3 className="review-title">Submit a Review</h3>
          <div className="product-review-form">
            <div className="alert alert-danger">
              Only registered users can write reviews
            </div>
            <div className="product-review-form-buttons">
              <a className="btn-submit" href="../login.html">
                Sign In
              </a>
              <a className="btn-submit" href="../registration.html">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ReviewContents;
