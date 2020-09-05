import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from 'next/app';
import dynamic from 'next/dynamic';
const DefaultLayout = dynamic(import('../components/layouts/default'));
const MainLayout = dynamic(import('../components/layouts/main'));
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const Layout = Component.Layout || DefaultLayout;
        console.log(pageProps);
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
