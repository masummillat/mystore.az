//default layout
import React from 'react';
import dynamic from 'next/dynamic';
const Skeleton = dynamic(import('react-loading-skeleton'));
const Header = dynamic(()=>import('../header/Header'), {loading: ()=><Skeleton count={10}/>,ssr: false })
const MobileMenu = dynamic(()=>import('../mobile/MobileMenu'), {loading: ()=><Skeleton count={10}/>,ssr: false })
const MobileCategory = dynamic(()=>import('../mobile/MobileCategory'), {loading: ()=><Skeleton count={10}/>,ssr: false })
const Footer = dynamic(()=>import('../footer/footer'), {loading: ()=><Skeleton count={10}/>,ssr: false })
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
                {/*<div className="header-fixed-content-layout" />*/}
                <div className="main">{children}</div>
                <Footer />
            </>
        );
    }
}

export default DefaultLayout;
