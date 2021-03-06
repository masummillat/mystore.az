import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Head = dynamic(import('../components/Head'));

const PaymentMethod = () => {
    return (
        <>
            <Head title="Buyer protection" />
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
                                        <h3>
                                            Payment <span>Method</span>
                                        </h3>
                                        <div className="product-breadcumb">
                                            <ul>
                                                <li>
                                                    <Link href="/">
                                                        <a>Home</a>
                                                    </Link>
                                                </li>
                                                <li className="active">Payment Method</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="common-page-content">
                                        <p>
                                            We are currently updating our affiliate program. Please stay tuned for more
                                            updates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PaymentMethod;
