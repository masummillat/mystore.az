import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Head = dynamic(import('../components/Head'));

const Partnership = () => {
    return (
        <>
            <Head title="Partnership" />
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
                                        <h3>Partnership</h3>
                                        <div className="product-breadcumb">
                                            <ul>
                                                <li>
                                                    <Link href="/">
                                                        <a>Home</a>
                                                    </Link>
                                                </li>
                                                <li className="active">Partnership</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="common-page-content">
                                        <p>
                                            Interested to partner with us or list your business on Mystore? You can
                                            always email us at our Contact Us page. Alternatively, we can also be
                                            contacted directly from our Facebook and Instagram page.
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

export default React.memo(Partnership);
