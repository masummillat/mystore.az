import React from 'react';
import dynamic from 'next/dynamic';
const Head = dynamic(import('../components/Head'));

class FlashDeals extends React.Component {
    render() {
        return (
            <div>
                <Head title="Flash deals" />
                <h1>FlashDeals Page</h1>
            </div>
        );
    }
}

export default FlashDeals;
