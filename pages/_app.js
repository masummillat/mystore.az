import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from 'next/app';
import dynamic from 'next/dynamic';
import "nprogress/nprogress.css";
import DefaultLayout from '../components/layouts/default';
import MainLayout from '../components/layouts/main';
// const Skeleton = dynamic(import('react-loading-skeleton'));
// const DefaultLayout = dynamic(() => import('../components/layouts/default'), { loading: () => <Skeleton count={100} />, ssr: true, });
// const MainLayout = dynamic(() => import('../components/layouts/main'), { loading: () => <Skeleton count={100} />, ssr: true, });



const TopProgressBar = dynamic(
    () => import("../components/topProgressBar"),
    { ssr: false },
);
//
// class MyApp extends App {
//     render() {
//         const { Component, pageProps } = this.props;
//         const Layout = Component.Layout || DefaultLayout;
//         return (
//             <MainLayout>
//                 <Layout>
//                     <Component {...pageProps} />
//                 </Layout>
//             </MainLayout>
//         );
//     }
// }

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || DefaultLayout;
    return (
        <MainLayout>
            <Layout>
                <TopProgressBar />
                <Component {...pageProps} />
            </Layout>
        </MainLayout>
    );
}

export default MyApp;
