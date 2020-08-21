import React from 'react';

const FeaturedStore = () =>{


  return(
    <section className="featured-store-area common-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bordered-shadow-box">
              <div className="bordered-shadow-box-overflow-hidden">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="common-padded-box featured-box">
                      <div className="common-padded-box-header featured-header">
                        <h3>Tövsiyyə olunan <span>Mağaza</span></h3>
                      </div>
                      <div className="featured-stores-links">
                        <ul>
                          <li><a className="official">Rəsmi satıcılar</a></li>
                          <li><a className="feature">Seçilmiş mağazalar</a></li>
                          <li><a className="selling_merchants">Ən çox satan satıcılar</a></li>
                          <li><a className="top_rated_merchants">Ən reytinqli satıcılar</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row featured-stores-list" id="updateDiv">

                      <div className="col-lg-3 col-sm-6">
                        <a href="shop-details/mystoreaz.html" className="single-feature-store">
                          <div className="single-feature-store-image">
                            <img
                              src="../../static/uploads/documents/shop/23621966_1772482562784565_5243729752846279838_n.jpg" alt="MyStore.Az" />
                          </div>
                          <div className="single-feature-store-info">
                            <h4>
                              <span className="name">MyStore.Az</span>
                              <span className="status verified">
                                <i className="fas fa-check"></i>
                              </span>
                            </h4>
                          </div>

                          <div className="seller-meta-info">
                            <div
                              className="single-product-rating seller-rating">
                              <div
                                className="rateit"
                                data-rateit-value=""
                                data-rateit-ispreset="true"
                                data-rateit-readonly="true"
                                data-rateit-starwidth="12"
                                data-rateit-starheight="12">

                              </div>
                              <div className="rated-number">(0)</div>
                            </div>
                            <div className="product-sold-count">(0 Items Sold)</div>
                          </div>
                        </a>
                      </div>

                      <div className="col-lg-3 col-sm-6">
                        <a href="shop-details/mystoreaz.html" className="single-feature-store">
                          <div className="single-feature-store-image">
                            <img src="../../static/uploads/documents/shop/DG.jpg" alt="DG Shop" />
                          </div>
                          <div className="single-feature-store-info">
                            <h4>
                              <span className="name">DG Shop</span>
                              <span className="status verified">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                            </h4>
                          </div>

                          <div className="seller-meta-info">
                            <div className="single-product-rating seller-rating">
                              <div className="rateit" data-rateit-value="" data-rateit-ispreset="true" data-rateit-readonly="true"
                                   data-rateit-starwidth="12" data-rateit-starheight="12"></div>
                              <div className="rated-number">(0)</div>
                            </div>
                            <div className="product-sold-count">(7 Items Sold)</div>
                          </div>
                        </a>
                      </div>

                      <div className="col-lg-3 col-sm-6">
                        <a href="shop-details/3-update-tech-shop.html" className="single-feature-store">
                          <div className="single-feature-store-image">
                            <img src="../../static/uploads/documents/shop/90431606_640554376764220_8874958813719953408_n.jpg" alt="Update tech shop" />
                          </div>
                          <div className="single-feature-store-info">
                            <h4>
                              <span className="name">Update tech shop</span>
                              <span className="status verified">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                            </h4>
                          </div>

                          <div className="seller-meta-info">
                            <div className="single-product-rating seller-rating">
                              <div className="rateit" data-rateit-value="" data-rateit-ispreset="true" data-rateit-readonly="true"
                                   data-rateit-starwidth="12" data-rateit-starheight="12"></div>
                              <div className="rated-number">(0)</div>
                            </div>
                            <div className="product-sold-count">(0 Items Sold)</div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <a href="shop-details/mystoreaz.html" className="single-feature-store">
                          <div className="single-feature-store-image">
                            <img src="../../static/uploads/documents/shop/store.svg" alt="EasyShop" />
                          </div>
                          <div className="single-feature-store-info">
                            <h4>
                              <span className="name">EasyShop</span>
                              <span className="status verified">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                            </h4>
                          </div>

                          <div className="seller-meta-info">
                            <div className="single-product-rating seller-rating">
                              <div className="rateit" data-rateit-value="4" data-rateit-ispreset="true" data-rateit-readonly="true"
                                   data-rateit-starwidth="12" data-rateit-starheight="12"></div>
                              <div className="rated-number">(1)</div>
                            </div>
                            <div className="product-sold-count">(41 Items Sold)</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeaturedStore;
