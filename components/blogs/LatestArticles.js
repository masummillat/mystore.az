import React from 'react';
import { blogs } from '../../constants/data';
import BlogCard from './BlogCard';

const LatestArticles = () => {


    return  <div className="latest-articles">
        <div className="common-padded-box-header">
            <h3>Latest Articles</h3>
        </div>
        <div className="upcoming-blogs-area">
            {
                blogs.map((blog,i)=><BlogCard key={blog.id} blog={blog}/>)
            }
        </div>
    </div>
}
export default LatestArticles;