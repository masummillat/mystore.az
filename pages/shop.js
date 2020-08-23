import React from 'react';
import Head from "../components/Head";
import Header from "../components/header/Header";
import MobileMenu from "../components/mobile/MobileMenu";
import MobileCategory from "../components/mobile/MobileCategory";
import Footer from "../components/footer/footer";
import ShopDetailPageArea from "../components/shop";

class Shop extends React.Component{


    render() {

        return(
            <>
                <Head title="Mystore.az" />
                <Header />
                <MobileMenu/>
                <MobileCategory/>
                <div className="header-fixed-content-layout" />

                <ShopDetailPageArea/>

                <Footer/>
            </>
        );
    }
}

export default Shop;
