import React from 'react';
import { blogs } from '../../constants/data';
import BlogCard from './BlogCard';

const LatestBlogs = () => {
    return (
        <div className="blog-sidebar-box">
            <div className="common-padded-box-header">
                <h3>Latest Blogs</h3>
                {/*<a href="#" target="_blank">View All</a>*/}
            </div>
            <div className="upcoming-blogs-area">
                {
                    blogs.map((blog,i)=><BlogCard key={blog.id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default LatestBlogs;
