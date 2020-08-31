import React from 'react';

const HealthAndFitness = () => {
    return (
        <>
            <div className="common-padded-box-header">
                <h3>
                    <a href="#" target="_blank">
                        Health & Fitness
                    </a>
                </h3>
                {/*<a href="#" target="_blank">View All</a>*/}
            </div>

            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single-blog-grid-view single-blog-grid-view--small">
                        <div className="blog-image">
                            <a href="blog-details/5-.html" target="_blank">
                                <img
                                    src="../static/uploads/documents/blog/rsz_2avrielle-suleiman-gpvak9-cl6e-unsplash-696x522.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <h3 className="blog-title">
                            <a href="blog-details/5-.html" target="_blank"></a>
                        </h3>
                        <div className="blogger-name-date">
                            <span className="blogger-name">
                                <strong>
                                    {' '}
                                    <a href="#" target="_blank">
                                        Rafiul Islam
                                    </a>{' '}
                                </strong>
                            </span>
                            <span className="name-date-separator">-</span>
                            <span className="blog-date">Jun 18, 2020</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single-blog-grid-view single-blog-grid-view--small">
                        <div className="blog-image">
                            <a href="blog-details/6-.html" target="_blank">
                                <img
                                    src="../static/uploads/documents/blog/home-gym-equipment-featured-696x522.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <h3 className="blog-title">
                            <a href="blog-details/6-.html" target="_blank"></a>
                        </h3>
                        <div className="blogger-name-date">
                            <span className="blogger-name">
                                <strong>
                                    {' '}
                                    <a href="#" target="_blank">
                                        Rafiul Islam
                                    </a>{' '}
                                </strong>
                            </span>
                            <span className="name-date-separator">-</span>
                            <span className="blog-date">Jun 18, 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HealthAndFitness;
