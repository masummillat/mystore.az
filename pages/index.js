import Link from 'next/link';
import {useEffect} from 'react';
import Head from '../components/Head';
import Header from '../components/header/Header';
import Footer from "../components/footer/footer";
import MobileMenu from '../components/mobile/MobileMenu';
import MobileCategory from '../components/mobile/MobileCategory';
import BannerAdArea from '../components/banner/BannerAdArea';
import FeaturedCategories from '../components/featuredcategories/FeaturedCategories';
import FlashDeal from '../components/flashdeal/FlashDeal';
import ProductStatusCategory from '../components/productstatus/ProductStatusCategory';
import FeaturedStore from '../components/featuredstore/FeaturedStore';
import Facilities from '../components/facilities/Facilities';
import {categories, products} from "../constants/data";

export default class extends React.Component{

  render() {

    const {featuredCats, flashDeals} = this.props;
    return(
      <div>
        <Head title="Mystore.az" />
        <Header />
        <MobileMenu/>
        <MobileCategory/>
        <div className="header-fixed-content-layout" />
        <BannerAdArea/>
        <FeaturedCategories featuredCats={featuredCats}/>
        <FlashDeal flashDeals={flashDeals}/>
        <ProductStatusCategory products={flashDeals}/>
        <FeaturedStore/>
        <Facilities/>
        <Footer/>
        <style jsx>{`

    `}</style>
      </div>
    );
  }
}

export async function getStaticProps(context) {
  return {
    props: {
      flashDeals:products,
      featuredCats:categories,
    }, // will be passed to the page component as props
  }
}
