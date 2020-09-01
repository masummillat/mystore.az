import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Select from 'react-select';

const langOptions = [
    { value: 'Azerbaijani', label: 'Azerbaijani' },
    { value: 'English', label: 'English' },
    { value: 'Russian', label: 'Russian' },
];
const currencyOptions = [
    { value: 'AZN', label: 'AZN' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
];
const HeaderTop = ({
    lang,
    currency,
    langOptions,
    currencyOptions,
    handleLang,
    handleCurrency,
    handleLangCurrencySubmit,
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsLoggedIn(localStorage.getItem('loggedIn') || false);
            console.log(isLoggedIn);
        }
    }, []);
    return (
        <div>
            <div className="main-menu-area mobile d-xl-none">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-2 col-sm-2">
                            <button type="button" className="menu-bar-button">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        <div className="col-8 col-sm-8 text-center">
                            <div className="logo">
                                <Link href="/" as="/">
                                    <a>
                                        <img
                                            src="../../static/uploads/documents/GeneralSetting/PUxf1TNoP24Yq9D0lEVGV5bc2rRaEOlTddW2z2aj.png"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 text-right">
                            <div className="menu-cart-button">
                                <a href="cart.html" title="Cart">
                                    <span className="header-cart-icon">
                                        {' '}
                                        <i className="fas fa-cart-plus"></i>{' '}
                                    </span>
                                    <span className="number">0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-bar-area d-none d-xl-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="top-bar-left-area">
                                <ul>
                                    <li>
                                        <a href="/about">Haqqımızda Mystore</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 text-right">
                            <div className="top-bar-right-area">
                                <ul>
                                    <li>
                                        <a href="/user-guide">Cashback necə qazanmaq</a>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-toggle"
                                            href="#"
                                            role="button"
                                            id="top-bar-support"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            Dəstək
                                        </a>

                                        <div
                                            className="dropdown-menu dropdown-menu-right"
                                            aria-labelledby="top-bar-support">
                                            <a className="dropdown-item" href="/customer-service">
                                                Müştəri xidməti
                                            </a>
                                            <a className="dropdown-item" href="/contact">
                                                Bizimlə əlaqə
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fas fa-mobile-alt"></i> Mobil
                                        </a>
                                    </li>

                                    <li className="dropdown top-bar-language-country-currency-area">
                                        <a
                                            className="dropdown-toggle"
                                            href="#"
                                            role="button"
                                            id="top-bar-language-country-currency"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <span>Azerbaijani</span>
                                            <span>AZN</span>
                                        </a>

                                        <div
                                            className="dropdown-menu dropdown-menu-right"
                                            aria-labelledby="top-bar-language-country-currency">
                                            <div style={{ width: 200, padding: 20 }}>
                                                <Form>
                                                    <Form.Group>
                                                        <pre>Dil</pre>
                                                        <Select
                                                            instanceId={'lang'}
                                                            defaultValue={langOptions[0]}
                                                            label="Single select"
                                                            options={langOptions}
                                                            onChange={handleLang}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <pre>Valyuta</pre>
                                                        <Select
                                                            instanceId="curr"
                                                            defaultValue={currencyOptions[0]}
                                                            label="Single select"
                                                            options={currencyOptions}
                                                            onChange={handleCurrency}
                                                        />
                                                    </Form.Group>
                                                    <Button
                                                        onClick={handleLangCurrencySubmit}
                                                        type="submit"
                                                        className="top-submit">
                                                        Save
                                                    </Button>
                                                </Form>
                                            </div>
                                        </div>
                                    </li>

                                    {isLoggedIn && (
                                        <li className="dropdown account-links notification-links">
                                            <a
                                                style={{ margin: '0px 20px' }}
                                                href="https://beta.mystore.az/customer/wishlist">
                                                <i className="fas fa-heart"></i>
                                                <span className="number">3</span>
                                            </a>

                                            <a
                                                style={{ margin: '0px 20px' }}
                                                className="dropdown-toggle mr-0"
                                                href="#"
                                                role="button"
                                                id="top-bar-notification"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fas fa-bell"></i>
                                                <span className="number">0</span>
                                            </a>
                                            <div
                                                className="dropdown-menu dropdown-menu-right notification-dropdown-menu"
                                                aria-labelledby="top-bar-notification"
                                                x-placement="bottom-end"
                                                style={{
                                                    position: 'absolute',
                                                    transform: 'translate3d(-203px, 14px, 0px)',
                                                    top: '0px',
                                                    left: '0px',
                                                    willChange: 'transform',
                                                }}>
                                                <div className="top-bar-notification-area">
                                                    <h5>Recently Received Notifications</h5>
                                                    <div className="no-notification">
                                                        <div className="no-notification-image">
                                                            <img
                                                                src="https://beta.mystore.az/frontend/assets/img/no-notification.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="no-notification-message">
                                                            No New Notifications!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )}

                                    {isLoggedIn && (
                                        <li className="dropdown account-links show">
                                            <a
                                                className="dropdown-toggle"
                                                href="#"
                                                role="button"
                                                id="top-bar-account"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fas fa-user-circle"></i> Account
                                            </a>
                                            <div
                                                className="dropdown-menu dropdown-menu-right "
                                                aria-labelledby="top-bar-account"
                                                x-placement="bottom-end"
                                                style={{
                                                    position: 'absolute',
                                                    transform: 'translate3d(-203px, 14px, 0px)',
                                                    top: '0px',
                                                    left: '0px',
                                                    willChange: 'transform',
                                                }}>
                                                <div className="top-bar-account-area">
                                                    <h4>Welcome to Mystore</h4>
                                                    <div className="separator"></div>
                                                    <div className="top-bar-account-options">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">My Profile</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">My Orders</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">My Wishlist</a>
                                                            </li>

                                                            <li>
                                                                <a href="#">header.My Messages</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Notifications</a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    onClick={() => {
                                                                        setIsLoggedIn(false);
                                                                        if (
                                                                            typeof window !==
                                                                            'undefined'
                                                                        ) {
                                                                            localStorage.removeItem(
                                                                                'loggedIn',
                                                                            );
                                                                        }
                                                                    }}>
                                                                    Log Out
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )}

                                    {!isLoggedIn && (
                                        <li className="dropdown account-links">
                                            <a
                                                className="dropdown-toggle"
                                                href="#"
                                                role="button"
                                                id="top-bar-account"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                <i className="fas fa-user-circle"></i> Hesab
                                            </a>

                                            <div
                                                className="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="top-bar-account">
                                                <div className="top-bar-account-area">
                                                    <h4>Mystore-a xoş gəlmisiniz</h4>
                                                    <div className="top-bar-account-buttons">
                                                        <a href="/registration" className="active">
                                                            Join Now
                                                        </a>
                                                        <a href="/login">Sign In</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
