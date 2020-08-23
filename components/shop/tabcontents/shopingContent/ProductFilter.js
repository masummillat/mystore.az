import React from 'react';
import CategoryItem from "./CategoryItem";
import {categories} from "../../../../constants/data";

const ProductFilter = () => {
  return (
    <div className="col-lg-3 product-filter-col">
      <div className="m-product-filter-header">
        <span className="text">Product Filter</span>
        <span className="close">
          <i className="fas fa-times" />
        </span>
      </div>
      <div className="common-padded-box pr-3">
        <div className="product-filter-area">
          <div className="product-filter-box">
            <div className="product-filter-header">Categories</div>
            <div className="product-filter-list">
              <a className="single-product-filter-option active">
                <span className="option-name-area">
                  <span className="option-name">All Categories</span>
                </span>
                <span className="option-number">9</span>
              </a>
              {categories.map((category,ind)=><CategoryItem category={category} key={ind}/>)}
            </div>
          </div>

          <div className="product-filter-box">
            <div className="product-filter-header">Shipping Options</div>
            <div className="product-filter-list">
              <a className="single-product-filter-option" data-id="7">
                <span className="option-name-area">
                  <span className="option-check">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="standard_express" data-id="7">
                    Overseas: Standard Express
                  </span>
                </span>
              </a>

              <a className="single-product-filter-option" data-id="7">
                <span className="option-name-area">
                  <span className="option-check">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="standard_economy" data-id="7">
                    Overseas: Standard Economy
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="product-filter-box">
            <div className="product-filter-header">Price Range</div>
            <div className="price-range-filter">
              <div className="product-price-filter">
                <div className="product-price-filter-min-max-text">
                  <span>MIN: $200.00</span>
                  <span>MAX: $5000.00</span>
                </div>
                <div className="product-price-slider-range-wrapper">
                  <div
                    className="product-price-slider-range"
                    min-price="200"
                    max-price="5000"
                  />
                </div>
                <div className="product-price-filter-min-max-text">
                  <span className="min">0</span>
                  <span className="max">2000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="product-filter-box">
            <div className="product-filter-header">Reviews</div>
            <div className="product-review-list">
              <a
                href="#"
                className="single-product-review-option active"
                data-filter="7"
              >
                <span className="option-name-area">
                  <span className="option-radio" />
                  <span className="option-name">All Reviews</span>
                </span>
                <span className="option-number">0</span>
              </a>

              <a
                data-filter="7"
                className="single-product-review-option"
                data-id="5"
              >
                <span className="option-name-area">
                  <span className="option-radio" />
                  <span className="option-name">
                    <div
                      className="rateit"
                      data-rateit-mode="font"
                      data-rateit-icon=""
                      style={{fontFamily:'Font Awesome 5 Free', fontSize:15}}
                      data-rateit-ispreset="true"
                      data-rateit-readonly="true"
                      data-rateit-value="4"
                    />
                    <span className="review-rating">5</span>
                  </span>
                </span>
                <span className="option-number">0</span>
              </a>

              <a
                data-filter="7"
                className="single-product-review-option"
                data-id="4"
              >
                <span className="option-name-area">
                  <span className="option-radio" />
                  <span className="option-name">
                    <div
                      className="rateit"
                      data-rateit-mode="font"
                      data-rateit-icon=""
                      style={{fontFamily:'Font Awesome 5 Free', fontSize:15}}
                      data-rateit-ispreset="true"
                      data-rateit-readonly="true"
                      data-rateit-value="4"
                    />
                    <span className="review-rating">4+</span>
                  </span>
                </span>
                <span className="option-number">0</span>
              </a>

              <a
                data-filter="7"
                className="single-product-review-option"
                data-id="3"
              >
                <span className="option-name-area">
                  <span className="option-radio" />
                  <span className="option-name">
                    <div
                      className="rateit"
                      data-rateit-mode="font"
                      data-rateit-icon=""
                      style={{fontFamily:'Font Awesome 5 Free', fontSize:15}}
                      data-rateit-ispreset="true"
                      data-rateit-readonly="true"
                      data-rateit-value="3"
                    />
                    <span className="review-rating">3+</span>
                  </span>
                </span>
                <span className="option-number">0</span>
              </a>
            </div>
          </div>

          <div className="product-filter-box">
            <div className="product-filter-header">Payment Option</div>
            <div className="product-filter-list">
              <a className="single-product-filter-option" data-id="">
                <span className="option-name-area">
                  <span className="option-check">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="option-name">Cash On Delivery</span>
                </span>
              </a>

              <a className="single-product-filter-option" data-id="">
                <span className="option-name-area">
                  <span className="option-check">
                    <i className="fas fa-check" />
                  </span>
                  <span className="option-name">Credit Card</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
