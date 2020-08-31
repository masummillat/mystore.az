import React from 'react';
import Link from 'next/link';

const BlogCard = ({blog})=>{

    return  <div className="single-blog-list-view single-blog-list-view--small">
        <div className="blog-image">
            <Link href={blog.title}>
                <a
                    target="_blank">
                    <img
                        src={blog.img}
                        alt=""
                    />
                </a>
            </Link>
        </div>
        <div className="blog-title-date">
            <h3 className="blog-title">
                <Link href={blog.title}>
                    <a
                        target="_blank">
                        {blog.title}
                    </a>
                </Link>
            </h3>
            <div className="blog-date">{blog.date}</div>
        </div>
    </div>
}
export default BlogCard;