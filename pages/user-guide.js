import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Head = dynamic(import('../components/Head'));
const UserGuide = () => {
    return (
        <>
            <Head title="User guide" />
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
                                            New <span>User Guide</span>
                                        </h3>
                                        <div className="product-breadcumb">
                                            <ul>
                                                <li>
                                                    <Link href="/">
                                                        <a>Home</a>
                                                    </Link>
                                                </li>
                                                <li className="active">New User Guide</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="common-page-content">
                                        <p className="text-center">
                                            <iframe
                                                width="560"
                                                height="315"
                                                src="https://www.youtube.com/embed/5fjNWerI1lE"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
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

export default UserGuide;
