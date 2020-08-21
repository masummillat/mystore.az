import React from 'react';
import Slider from "react-slick";
import ProductCard from '../productcard/ProductCard';

const ProductStatusCategory = ({products}) =>{
  return(<section className="all-products-area common-padding">
    <div className="product-menu-fixed-area-wrapper">
      <div className="product-menu-fixed-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-padded-box-header">
                <div className="product-menu-sticky-area">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link featured blue active" data-toggle="tab" href="#daily-discover" role="tab"
                       aria-controls="nav-daily-discover" aria-selected="true">Featured</a>
                    <a className="nav-item nav-link latest red" data-toggle="tab" href="#daily-discover" role="tab"
                       aria-controls="nav-daily-discover" aria-selected="true">Latest</a>
                    <a className="nav-item nav-link discounts green" data-toggle="tab" href="#daily-discover" role="tab"
                       aria-controls="nav-daily-discover" aria-selected="true">Discounts</a>
                    <a className="nav-item nav-link cashback yellow" data-toggle="tab" href="#daily-discover" role="tab"
                       aria-controls="nav-daily-discover" aria-selected="true">Cashback</a>
                    <a className="nav-item nav-link comeback purple" data-toggle="tab" href="#daily-discover" role="tab"
                       aria-controls="nav-daily-discover" aria-selected="true">Comebacks</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content product-tab-content">
            <div className="tab-pane fade show active" id="daily-discover" role="tabpanel" aria-labelledby="daily-discover-tab">
              <div className="row all-product-row" id="load-data">
                <div className="col-lg-12">
                  <div className="row">
                    {products.map((product,ind)=><div key={ind} className="col-lg-3 col-sm-6"><ProductCard product={product}/></div>)}
                  </div>
                </div>
              </div>
              <div id="remove-row" className="text-center"></div>
              <div className="row">
                <div className="col-lg-12 text-center">
                  <a id="btn-more" data-type="FEATURED" data-loadid="1" data-id="0" className="products-load-more-button">Daha çox</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
}

export default ProductStatusCategory;
