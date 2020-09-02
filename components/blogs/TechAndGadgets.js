import React from 'react';

const TechAndGadgets = () => {
    return (
        <>
            <div className="common-padded-box-header">
                <h3>
                    <a href="#" target="_blank">
                        Tech & Gadgets
                    </a>
                </h3>
                {/*<<a href="#" target="_blank">View All</a> */}
            </div>

            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <a
                        href="blog-details/3-.html"
                        className="single-blog-grid-view single-blog-grid-view--compact"
                        target="_blank">
                        <span className="blog-image">
                            <img src="../static/uploads/documents/blog/imageedit_1_6507305620-696x522.jpg" alt="" />
                        </span>
                        <span className="blog-title"></span>
                        <span className="blogger-name-date">
                            <span className="blogger-name">
                                <strong>Rafiul Islam</strong>
                            </span>
                            <span className="name-date-separator">-</span>
                            <span className="blog-date">Jun 18, 2020</span>
                        </span>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a
                        href="blog-details/4-.html"
                        className="single-blog-grid-view single-blog-grid-view--compact"
                        target="_blank">
                        <span className="blog-image">
                            <img src="../static/uploads/documents/blog/BeFunky-collage-40-696x522.jpg" alt="" />
                        </span>
                        <span className="blog-title"></span>
                        <span className="blogger-name-date">
                            <span className="blogger-name">
                                <strong>Rafiul Islam</strong>
                            </span>
                            <span className="name-date-separator">-</span>
                            <span className="blog-date">Jun 18, 2020</span>
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default TechAndGadgets;
