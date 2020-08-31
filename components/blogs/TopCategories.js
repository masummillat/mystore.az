import React from 'react';

const TopCategories = () => {
    return (
        <div className="hero-search-category">
            <div className="blog-sidebar-box header-blog-sidebar-box">
                <div className="blog-search-form">
                    <input type="text" className="bloglist" placeholder="Search article ..." />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="blog-sidebar-box header-blog-sidebar-box mb-0">
                <div className="common-padded-box-header">
                    <h3>Top Categories</h3>
                </div>
                <div className="blog-category-list">
                    <a href="blog-category/9-entertainement.html" className="single-blog-category">
                        <span className="icon">
                            <img
                                src="../../static/uploads/documents/blog_category/cleaning%20equipment-01-07%20copy.png"
                                alt=""
                            />
                        </span>
                        <span className="text">Entertainement</span>
                    </a>
                    <a href="blog-category/8-kids-parenting.html" className="single-blog-category">
                        <span className="icon">
                            <img
                                src="../../static/uploads/documents/blog_category/cleaning%20equipment-01-08%20copy.png"
                                alt=""
                            />
                        </span>
                        <span className="text">Kids &amp; parenting</span>
                    </a>
                    <a href="blog-category/7-travel.html" className="single-blog-category">
                        <span className="icon">
                            <img
                                src="../../static/uploads/documents/blog_category/cleaning%20equipment-01-06%20copy.png"
                                alt=""
                            />
                        </span>
                        <span className="text">Travel</span>
                    </a>
                    <a href="blog-category/6-home-and-living.html" className="single-blog-category">
                        <span className="icon">
                            <img
                                src="../../static/uploads/documents/blog_category/cleaning%20equipment-01-04%20copy.png"
                                alt=""
                            />
                        </span>
                        <span className="text">Home and living</span>
                    </a>
                    <a href="blog-category/5-health-fitness.html" className="single-blog-category">
                        <span className="icon">
                            <img
                                src="../../static/uploads/documents/blog_category/cleaning%20equipment-01-03%20copy.png"
                                alt=""
                            />
                        </span>
                        <span className="text">Health &amp; Fitness</span>
                    </a>
                    <a
                        href="blog-category/4-fashion-and-beauty.html"
                        className="single-blog-category">
                        <span className="icon">
                            <img
                                src="../../static/uploads/documents/blog_category/cleaning%20equipment-01-01%20copy.png"
                                alt=""
                            />
                        </span>
                        <span className="text">Fashion and beauty</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;
