import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from 'next/app';
import MainLayout from '../components/layouts/main';
import DefaultLayout from '../components/layouts/default';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const Layout = Component.Layout || DefaultLayout;

        return (
            <MainLayout>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MainLayout>
        );
    }
}

export default MyApp;

// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps}></Component>;
// }
