import React from 'react';

const SocialMediaAndPayment = () => {
    return (
        <>
            <div className="product-meta-info product-meta-share">
                <h5>Share:</h5>
                <div className="product-meta-details product-share-link-list">
                    <div className="product-share">
                        <ul>
                            <li>
                                <a href="#" className="facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="whatsapp">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="mail">
                                    <i className="far fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="product-payment-area">
                <div className="product-meta-info">
                    <h5>Payment:</h5>
                    <div className="product-meta-details product-payment-info">
                        <div className="product-payment-system">
                            <img src="../../static/img/payment.png" alt="" />{' '}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(SocialMediaAndPayment);
