import React from 'react';

const StoreInformation = () => {
    return (
        <div className="shop-store-info">
            <div className="m-tab-header">Store Information</div>
            <div className="shop-store-location-map"></div>
            <div className="shop-store-location-area">
                <h3>Store Location</h3>
                <div className="shop-store-location-list">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-store-location">
                                <div className="store-name-icon">
                                    <span className="icon">
                                        {' '}
                                        <i className="fas fa-map-marker-alt"></i>{' '}
                                    </span>
                                    <span className="name">MyStore 1</span>
                                </div>
                                <div className="store-address"></div>
                                <div className="store-phone">
                                    <span className="icon">
                                        {' '}
                                        <i className="fas fa-phone-alt"></i>{' '}
                                    </span>
                                    <a href="tel:" className="phone"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-store-location">
                                <div className="store-name-icon">
                                    <span className="icon">
                                        {' '}
                                        <i className="fas fa-map-marker-alt"></i>{' '}
                                    </span>
                                    <span className="name">MyStore 2</span>
                                </div>
                                <div className="store-address"></div>
                                <div className="store-phone">
                                    <span className="icon">
                                        {' '}
                                        <i className="fas fa-phone-alt"></i>{' '}
                                    </span>
                                    <a href="tel:" className="phone"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(StoreInformation);
