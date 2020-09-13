import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Select from 'react-select';

import { categories, featured } from '../../constants/data';
import MegaMenu, { MenuItem } from './MegaMenu';
import AllCategoryModal from './AllCategoryModal';

const HeaderBottom = ({ searchText, category, categoriesOptions, handleSearch, handleCategory, handleSubmit, searchedResult }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="logo-and-category">
                            <div className="logo-area">
                                <Link href="/">
                                    <a>
                                        <img src="../../static/img/logo.jpeg" alt="" />
                                    </a>
                                </Link>
                            </div>
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item dropdown category-area">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fas fa-bars"></i>
                                                &nbsp;&nbsp;Categories
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <ul className="menu">
                                                    {categories.slice(0, 12).map(category => (
                                                        <MenuItem category={category} key={category.id} />
                                                    ))}
                                                    <li
                                                        style={{
                                                            width: '100%',
                                                            textAlign: 'center',
                                                            fontWeight: 700,
                                                            backgroundColor: '#f5f5f5',
                                                            padding: 10,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() => setModalShow(true)}>
                                                        All Category
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <AllCategoryModal show={modalShow} onHide={() => setModalShow(false)} />
                    <div className="col-lg-8">
                        <div className="header-search-area">
                            <Form id="search" method="GET" action="https://beta.mystore.az/search-product">
                                <div className="header-search-form">
                                    <Form.Group>
                                        <Form.Control
                                            value={searchText}
                                            onChange={handleSearch}
                                            type="input"
                                            id="right_side_product_search_iteam"
                                            name="search_product"
                                            placeholder="Search a product"
                                            required
                                        />
                                    </Form.Group>
                                    <Button onClick={handleSubmit} type="submit">
                                        <i className="fas fa-search"></i>
                                    </Button>
                                </div>
                            </Form>
                            <div className='search-result-wrapper'>
                                {
                                    searchedResult.slice(0,12).map(product=>{
                                        return(<Link key={product.id} href={`/products/${product.id}`}>
                                                <a title={product.name} key={product.id}><img src={product.img}/>{product.name}</a>
                                        </Link>);
                                    })
                                }
                            </div>
                            <div id="product_right_search_autocomplete"></div>
                            <div className="popular-search-list">
                                <ul>
                                    <li>
                                        {' '}
                                        <a href="--HP-24fw-OtvS8.html"> Монитор HP 24fw</a>{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="-Samsung-Galaxy-A51-64GB-VsMwz.html"> Samsung Galaxy A51 64GB</a>{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="--Lenovo-IdeaPad-S145-15IGM-qFV3h.html">
                                            {' '}
                                            Ноутбук Lenovo IdeaPad S145-15IGM
                                        </a>{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="--Apple-iPhone-11-Pro-Max-64GB-Gold-pu9B2.html">
                                            {' '}
                                            Смартфон Apple iPhone 11 Pro Max 64GB Gold
                                        </a>{' '}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="header-menu-area">
                            <div className="header-menu">
                                <ul>
                                    <li className="shopping_cart">
                                        <div className="header-cart">
                                            <a
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                title="Cart">
                                                <span className="header-cart-icon">
                                                    {' '}
                                                    <i className="fas fa-cart-plus"></i>{' '}
                                                </span>
                                                <span className="number">0</span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <div className="header-cart-item">
                                                    <div className="empty-content-box">
                                                        <div className="empty-content-box-icon">
                                                            <img src="../../static/img/empty-cart.png" alt="" />
                                                        </div>
                                                        <div className="empty-content-box-message">
                                                            Your cart is empty!!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeaderBottom;
