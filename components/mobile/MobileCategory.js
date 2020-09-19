import React from 'react';
import Link from 'next/link';
import { categories } from '../../constants/data';

const MobileCategory = () => {
    return (
        <div id="main-nav" className="drawer-menu-area mobile-category  d-xl-none" menu-name="All Categories">
            <div className="drawer-menu-backdrop"></div>
            <div className="drawer-menu">
                <span className="drawer-menu-close">
                    <i className="fas fa-times"></i>
                </span>
                <div style={{ marginTop: '30px' }}>
                    <ul className="first-nav">
                        {categories.map(category => (
                            <li key={category.id} className="d-block pt-1 pb-1">
                                <Link href={`/category/${category.id}`}>
                                    <a>
                                        <img style={{ height: 30 }} src={category.img} alt={category.title} />
                                        {category.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileCategory;
