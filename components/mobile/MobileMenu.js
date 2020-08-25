import React from 'react';
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
const MobileMenu = ({ lang, currency, handleCurrency, handleLang }) => {
    return (
        <div className="drawer-menu-area d-xl-none">
            <div className="drawer-menu-backdrop"></div>
            <div className="drawer-menu">
                <span className="drawer-menu-close">
                    <i className="fas fa-times"></i>
                </span>
                <div className="top-bar-account-area">
                    <h4>Mystore-a xoş gəlmisiniz!</h4>

                    <div className="top-bar-account-buttons">
                        <a href="registration.html" className="active">
                            Join Now
                        </a>
                        <a href="login.html">Sign In</a>
                    </div>
                </div>

                <h3>
                    <span>Menu</span>
                </h3>
                <div className="mobile-main-menu">
                    <ul>
                        <li>
                            <a href="about.html">header.About Mystore</a>
                        </li>
                        <li>
                            <a href="user-guide.html">Cashback necə qazanmaq</a>
                        </li>
                        <li>
                            <a href="customer-service.html">Müştəri xidməti</a>
                        </li>
                        <li>
                            <a href="contact.html">Bizimlə əlaqə</a>
                        </li>
                    </ul>
                </div>
                <div className="mobile-category-mega-menu-button-wrapper">
                    <button type="button" className="mobile-category-mega-menu-button">
                        All Categories
                    </button>
                </div>
                <h3>
                    <span>Filter</span>
                </h3>
                <div className="top-bar-language-country-currency-form">
                    <div className="form-group">
                        <label htmlFor="m-top-language">Dil</label>
                        <Select
                            name="language"
                            id="m-top-language"
                            instanceId="mLang"
                            defaultValue={langOptions[0]}
                            label="Single select"
                            options={langOptions}
                            onChange={handleLang}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="m-top-currency">Valyuta</label>
                        <Select
                            name="currency"
                            id="m-top-currency"
                            instanceId="mCurr"
                            defaultValue={currencyOptions[0]}
                            label="Single select"
                            options={currencyOptions}
                            onChange={handleCurrency}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="top-submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
