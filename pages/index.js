import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Modal, Button } from 'react-bootstrap';
const Skeleton  = dynamic(import('react-loading-skeleton'));
const Head = dynamic(import('../components/Head'));
const BannerAdArea = dynamic(() => import('../components/banner/BannerAdArea'), { loading: () => {
    return <Skeleton count={5}/>
    } , ssr:false});
const FeaturedCategories = dynamic(()=>import('../components/featuredcategories/FeaturedCategories'),{loading: () =>{
    return  <Skeleton count={10} />
    }, ssr: false});
const FlashDealSlider = dynamic(()=>import('../components/flashdeal/FlashDealSlider'), {loading: ()=>{
    return<Skeleton count={10} />
    }, ssr: false});
const ProductStatusCategory = dynamic(()=>import('../components/productstatus/ProductStatusCategory'),{loading: ()=>{
    return <Skeleton count={10} />
    }, ssr:false});
const FeaturedStore = dynamic(()=>import('../components/featuredstore/FeaturedStore'),{loading: ()=>{
    return <Skeleton count={10} />
    },ssr:false});
const Facilities = dynamic(()=>import('../components/facilities/Facilities'), {ssr: false, loading:()=>{
    return <Skeleton  count={10}/>
}});
import { featured, products } from '../constants/data';


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
        const { featuredCats, flashDeals, homePageSlider } = this.props;
        const { wishModalShow } = this.state;
        console.log(homePageSlider)

        return (
            <div>
                <Head title="Mystore.az" />
                <BannerAdArea homePageSlider={homePageSlider || []} />
                <FeaturedCategories featuredCats={featured} />
                <FlashDealSlider handleShowWishModal={this.handleShowWishModal} flashDeals={flashDeals || []} />
                <ProductStatusCategory handleShowWishModal={this.handleShowWishModal} products={featuredCats || []} />
                <FeaturedStore />
                <Facilities />
                <style jsx>{``}</style>

                <Modal aria-labelledby="contained-modal-title-vcenter" centered show={wishModalShow}>
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



export async function getInitialProps(context) {
    
    try {
        const featuredRequest = await fetch('https://beta.mystore.az/api/home-page-product?type=FEATURED')
        const featured = await featuredRequest.json();

        const flashDealsRequest = await fetch('https://beta.mystore.az/api/flash-deals');
        const flashDeals = await flashDealsRequest.json();

        const homePageSliderRequest = await fetch('https://beta.mystore.az/api/sliders');
        const homePageSlider = await homePageSliderRequest.json();
        return {
            props: {
                flashDeals: flashDeals.data,
                featuredCats: featured.data,
                homePageSlider: homePageSlider.data
            }, // will be passed to the page component as props
        };
    }catch (e){
        return {
            props: {
                error: e
            }
        }
    }

}

export default Home;