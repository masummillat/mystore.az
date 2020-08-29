//default layout
import React from 'react';
import Header from '../header/Header';
import MobileMenu from '../mobile/MobileMenu';
import MobileCategory from '../mobile/MobileCategory';
import Footer from '../footer/footer';
class DefaultLayout extends React.Component {
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
    render() {
        const { children } = this.props;
        return (
            <>
                <Header handleCurrency={this.handleCurrency} handleLang={this.handleLang} />
                <MobileMenu handleCurrency={this.handleCurrency} handleLang={this.handleLang} />
                <MobileCategory />
                <div className="header-fixed-content-layout" />
                <div className="main">{children}</div>
                <Footer />
            </>
        );
    }
}

export default DefaultLayout;
