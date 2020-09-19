import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from 'next/app';
import dynamic from 'next/dynamic';
const DefaultLayout = dynamic(() => import('../components/layouts/default'), { loading: () => <p>Loading........</p> });
const MainLayout = dynamic(() => import('../components/layouts/main'), { loading: () => <p>Loading......</p> });

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
                <Component {...pageProps} />
            </Layout>
        </MainLayout>
    );
}

export default MyApp;
