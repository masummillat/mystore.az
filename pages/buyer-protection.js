import React from 'react';
import Link from 'next/link';
import Head from '../components/Head';

const BuyerProtection = () => {


    return<>
        <Head title="Buyer protection"/>
        <div className="header-fixed-content-layout">

            <section className="common-page-area">
                <div className="common-page-header-image">
                    <img src="../static/img/banner-1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="common-page-content-area common-padding">
                                <div className="common-padded-box-header">
                                    <h3>Buyer <span>Protection</span></h3>
                                    <div className="product-breadcumb">
                                        <ul>
                                            <li><Link href="/"><a >Home</a></Link></li>
                                            <li className="active">Buyer Protection</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="common-page-content">
                                    <p>Singapore Registered Merchants
                                        All our merchants are registered businesses which are located locally in
                                        Singapore. We do not offer products or services from end-user sellers.
                                        Therefore, we are able to ensure on the quality of our products and services
                                        delivered to you.

                                        Products Purchased from Online &amp; In-Store
                                        We offer all online and in-store purchase of products with a 7 days exchange
                                        policy. Items purchase can be exchange directly in store if items do not fit the
                                        order requirement as delivered. Items must be in original packaging and not
                                        opened or used.

                                        Coupons Purchased from Online
                                        For online coupon purchases that is not redeemed or used, we will offer a 7 days
                                        cancellation policy. Amount will be refunded as E-Wallet credits into your
                                        Account.

                                        For any enquiries, please contact us at orders@mystore.az.</p>
                                    <p>For any enquiries, please contact us at <a
                                        href="mailto:orders@mystore.az">orders@mystore.az</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
}

export default BuyerProtection;