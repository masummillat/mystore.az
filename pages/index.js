import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Head from '../components/Head';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import MobileMenu from '../components/mobile/MobileMenu';
import MobileCategory from '../components/mobile/MobileCategory';
import BannerAdArea from '../components/banner/BannerAdArea';
import FeaturedCategories from '../components/featuredcategories/FeaturedCategories';
import FlashDeal from '../components/flashdeal/FlashDeal';
import ProductStatusCategory from '../components/productstatus/ProductStatusCategory';
import FeaturedStore from '../components/featuredstore/FeaturedStore';
import Facilities from '../components/facilities/Facilities';
import { featured, products } from '../constants/data';
import DefaultLayout from '../components/layouts/default';
import Skeleton from 'react-loading-skeleton';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wishModalShow: false,
        };
    }

    handleCloseWishModal = () => {
        this.setState({
            wishModalShow: false,
        });
    };

    handleShowWishModal = () => {
        this.setState({
            wishModalShow: true,
        });
    };

    render() {
        const { featuredCats, flashDeals } = this.props;
        const { wishModalShow } = this.state;
        return (
            <div>
                <Head title="Mystore.az" />
                <BannerAdArea/>
                <FeaturedCategories featuredCats={featuredCats} />
                <FlashDeal handleShowWishModal={this.handleShowWishModal} flashDeals={flashDeals} />
                <ProductStatusCategory
                    handleShowWishModal={this.handleShowWishModal}
                    products={flashDeals}
                />
                <FeaturedStore />
                <Facilities />
                <style jsx>{``}</style>

                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={wishModalShow}>
                    <Modal.Body>
                        <h5> Please Login For Add to Wishlist</h5>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleCloseWishModal} variant="danger">
                            Close
                        </Button>
                        <Link href="/login">
                            <Button variant="primary">Login</Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Home;

export async function getStaticProps(context) {
    return {
        props: {
            flashDeals: products,
            featuredCats: featured,
        }, // will be passed to the page component as props
    };
}
