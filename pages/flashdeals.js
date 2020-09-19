import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { products } from '../constants/data';
const Skeleton = dynamic(import('react-loading-skeleton'));
const Head = dynamic(import('../components/Head'));
const FlashDealProductCard = dynamic(() => import('../components/flashdeal/FlashDealProductCard'), {
    loading: () => {
        return <Skeleton count={10} />;
    },
    ssr: false,
});
const FlashDealPage = ({ flashDeals }) => {
    console.log(flashDeals);
    return (
        <>
            <Head title="Flash deals" />
            <section className="product-page-area common-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="common-padded-box-header">
                                <h3>
                                    <span> Flash Deal Products</span>
                                </h3>
                                <div className="product-breadcumb">
                                    <ul>
                                        <li>
                                            <Link href="/shopping">
                                                <a> Shopping Products</a>
                                            </Link>
                                        </li>
                                        <li className="active">Flash Deal Product</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-list-area">
                                <div className="row">
                                    {flashDeals &&
                                        flashDeals.map(product => (
                                            <FlashDealProductCard key={product.id} product={product} />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export async function getInitialProps(context) {
    const flashDealsRequest = await fetch('https://beta.mystore.az/api/flash-deals');
    const flashDeals = await flashDealsRequest.json();
    console.log(flashDeals);
    return {
        props: {
            flashDeals: flashDeals.data || [],
        }, // will be passed to the page component as props
    };
}

export default FlashDealPage;
