import { useRouter } from 'next/router';
import React from 'react';
import dynamic from 'next/dynamic';
const  Skeleton = dynamic(import('react-loading-skeleton'));
const Head = dynamic(import('../../components/Head'));
const ShopDetailPageArea = dynamic(()=>import('../../components/shop'), {loading: ()=>{
        return <Skeleton count={80} />
    }, ssr: false})



const Shop = () => {
    const router = useRouter();
    console.log(router);
    return (
        <>
            <Head title="Mystore.az" />
            <div className="header-fixed-content-layout" >
             <ShopDetailPageArea />
            </div>

        </>
    );
};

export default Shop;
