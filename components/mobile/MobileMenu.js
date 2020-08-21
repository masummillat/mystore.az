import React from 'react';

const MobileMenu = () => {


  return(<div className="drawer-menu-area d-xl-none">
    <div className="drawer-menu-backdrop"></div>
    <div className="drawer-menu">
      <span className="drawer-menu-close"><i className="fas fa-times"></i></span>
      <div className="top-bar-account-area">
        <h4>Mystore-a xoş gəlmisiniz!</h4>

        <div className="top-bar-account-buttons">
          <a href="registration.html" className="active">Join Now</a>
          <a href="login.html">Sign In</a>
        </div>
      </div>


      <h3><span>Menu</span></h3>
      <div className="mobile-main-menu">
        <ul>
          <li><a href="about.html">header.About Mystore</a></li>
          <li><a href="user-guide.html">Cashback necə qazanmaq</a></li>
          <li><a href="customer-service.html">Müştəri xidməti</a></li>
          <li><a href="contact.html">Bizimlə əlaqə</a></li>
        </ul>
      </div>
      <div className="mobile-category-mega-menu-button-wrapper">
        <button type="button" className="mobile-category-mega-menu-button">All Categories</button>
      </div>
      <h3><span>Filter</span></h3>
      <div className="top-bar-language-country-currency-form">

        <div className="form-group">
          <label htmlFor="m-top-language">Dil</label>
          <select name="language" id="m-top-language">
            <option value="1" selected>Azerbaijani</option>
            <option value="3">Russian</option>
            <option value="4">English</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="m-top-currency">Valyuta</label>
          <select name="currency" id="m-top-currency">
            <option value="AZN" selected>AZN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Save" className="top-submit"/>
        </div>
      </div>
    </div>
  </div>);
}

export default MobileMenu;
