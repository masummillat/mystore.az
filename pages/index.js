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
      flashDeals:[
        {
          id: 1,
          name: 'Samsung Gx 2010',
          shopName: 'Harbor facilities',
          status: 'Available',
          online: '20%',
          off: '0%',
          sold: '10',
          img: ''
        },
        {
          id: 2,
          name: 'General AC(with inductor)',
          shopName: 'Asia Co-curies',
          status: 'Available',
          online: '20%',
          off: '5%',
          sold: '2',
          img: ''
        },
        {
          id: 3,
          name: 'Gaming Mouse',
          shopName: 'Halala Shop',
          status: 'Available',
          online: '20%',
          off: '25%',
          sold: '100',
          img: ''
        },
        {
          id: 4,
          name: 'Product Name',
          shopName: 'Ship Name',
          status: 'Available',
          online: '20%',
          off: '0%',
          sold: '0',
          img: ''
        },
        {
          id: 5,
          name: 'Product Name',
          shopName: 'Ship Name',
          status: 'Available',
          online: '20%',
          off: '0%',
          sold: '0',
          img: ''
        },
        {
          id: 6,
          name: 'Product Name',
          shopName: 'Ship Name',
          status: 'Available',
          online: '20%',
          off: '0%',
          sold: '0',
          img: ''
        },
        {
          id: 7,
          name: 'Gsdfew Fesfi',
          shopName: 'Aezte Esdfo',
          status: 'Available',
          online: '20%',
          off: '0%',
          sold: '0',
          img: ''
        },
        {
          id: 8,
          name: 'Practice Book',
          shopName: 'Ship Stationary',
          status: 'Available',
          online: '20%',
          off: '0%',
          sold: '300',
          img: '../../static/img/product_placeholder.png'
        }
      ],
      featuredCats:[
        {
          name: 'Geyim',
          img: '../../static/uploads/documents/Category/icon_new-03.png',
          alt: ''
        },
        {
          name: 'Elektronika',
          img: '../../static/uploads/documents/Category/icon_new-01.png',
          alt: ''
        },
        {
          name: 'Ev &amp; bağça',
          img: '../../static/uploads/documents/Category/icon_new-02.png',
          alt: ''
        },
        {
          name: 'Körpə məhsulları',
          img: '../../static/uploads/documents/Category/icon_new-04.png',
          alt: ''
        },
        {
          name: 'Gözəllik və sağlamlıq',
          img: '../../static/uploads/documents/Category/icon_new-05.png',
          alt: ''
        },
        {
          name: 'Kitablar',
          img: '../../static/uploads/documents/Category/icon_new-06.png',
          alt: ''
        },
        {
          name: 'İdman malları',
          img: '../../static/uploads/documents/Category/icon_new-07.png',
          alt: ''
        },
        {
          name: 'Tikinti və təmir',
          img: '../../static/uploads/documents/Category/icon_new-08.png',
          alt: ''
        },
        {
          name: 'Qida məhsulları',
          img: '../../static/uploads/documents/Category/icon_new-09.png',
          alt: 'Qida məhsulları'
        },
      ],
    }, // will be passed to the page component as props
  }
}
