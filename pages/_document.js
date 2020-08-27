import Document, { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../components/footer/footer';
import Header from '../components/header/Header';
import MobileMenu from '../components/mobile/MobileMenu';
import MobileCategory from '../components/mobile/MobileCategory';

class MyDocument extends Document {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'English',
            currency: 'USD',
        };
    }
    handleCurrency = currency => {
        this.setState({
            currency,
        });
    };
    handleLang = lang => {
        this.setState({
            lang,
        });
    };
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head title="mystore.az" />
                <body>
                    <Header handleCurrency={this.handleCurrency} handleLang={this.handleLang} />
                    <MobileMenu handleCurrency={this.handleCurrency} handleLang={this.handleLang} />
                    <MobileCategory />
                    <div className="header-fixed-content-layout" />
                    <Main />
                    <Footer />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
