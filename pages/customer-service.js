import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Head = dynamic(import('../components/Head'));

class CustomerService extends React.Component {
    render() {
        return (
            <div>
                <Head title="Customer service" />
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
                                                Customer <span>Service</span>
                                            </h3>
                                            <div className="product-breadcumb">
                                                <ul>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Home</a>
                                                        </Link>
                                                    </li>
                                                    <li className="active">Customer Service</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="common-page-content">
                                            <p>
                                                Mystore.az takes pride in providing excellent customer service and
                                                response. We are committed to serve our customer within the shortest
                                                response time as possible. Have a question or an issue with your
                                                account? No worries, just let us know, and we&#039;ll get back to you,
                                                anytime of the day! Having questions on how to use Freelor to earn
                                                cashback? View our New User Guide here. We welcome feedback on our
                                                products and services as well, please share with us how we can better
                                                serve you!
                                            </p>
                                            <h3>Our Customer Support:</h3>
                                            <ul>
                                                <li>
                                                    Email to us - support@mystore.az Contact us via our Facebook Page -
                                                    mystore
                                                </li>
                                            </ul>
                                            <p>
                                                <Link href="/terms-condition">
                                                    <a>Terms & Conditions</a>
                                                </Link>{' '}
                                                /
                                                <Link href="/privacy-policy">
                                                    <a>Privacy Policy</a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default CustomerService;
