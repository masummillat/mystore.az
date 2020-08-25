import { useRouter } from 'next/router';
import React from 'react';

import Footer from '../../components/footer/footer';
import Head from '../../components/Head';
import Header from '../../components/header/Header';
import MobileCategory from '../../components/mobile/MobileCategory';
import MobileMenu from '../../components/mobile/MobileMenu';
import ShopDetailPageArea from '../../components/shop';

const Shop = () => {
    const router = useRouter();
    console.log(router);
    return (
        <>
            <Head title="Mystore.az" />
            <Header />
            <MobileMenu />
            <MobileCategory />
            <div className="header-fixed-content-layout" />

            <ShopDetailPageArea />

            <Footer />
        </>
    );
};

export default Shop;
