import React from 'react';
import Head from '../components/Head';

class About extends React.Component {
    render() {
        return (
            <>
                <Head title="About" />
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
                                            About <span>MyStore.az</span>
                                        </h3>
                                        <div className="product-breadcumb">
                                            <ul>
                                                <li>
                                                    <a href="/">Home</a>
                                                </li>
                                                <li className="active">About Us</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="common-page-content">
                                        <p>
                                            {' '}
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit
                                            anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default About;
