import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Skeleton = dynamic(import('react-loading-skeleton'));
const CartSummary = dynamic(() => import('../components/cart/CartSummary'), {
    loading: () => {
        return <Skeleton count={10} />;
    },
    ssr: false,
});
const ShoppingCartTable = dynamic(() => import('../components/cart/ShoppingCartTable'), {
    loading: () => {
        return <Skeleton count={10} />;
    },
    ssr: false,
});
const CartToPaymentLink = dynamic(() => import('../components/cart/CartToPaymentLink'), {
    loading: () => {
        return <Skeleton count={10} />;
    },
    ssr: false,
});

const Head = dynamic(import('../components/Head'));
class Cart extends React.Component {
    render() {
        return (
            <div>
                <Head title="Cart" />
                <div class="header-fixed-content-layout">
                    <section class="cart-to-payment-area common-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="bordered-shadow-box">
                                        <div class="bordered-shadow-box-overflow-hidden">
                                            <div class="common-padded-box">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <CartToPaymentLink />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-8">
                                                        <div class="cart-item-area">
                                                            <ShoppingCartTable />
                                                            <div class="checkout-continue-clear-buttons">
                                                                <div class="left-side-buttons">
                                                                    <Link href="/shopping">
                                                                        <a>Continue Shopping</a>
                                                                    </Link>
                                                                    <span class="separator"></span>
                                                                    <form
                                                                        method="POST"
                                                                        action="https://beta.mystore.az/clear-cartx"
                                                                        accept-charset="UTF-8"
                                                                        enctype="multipart/form-data">
                                                                        <input
                                                                            name="_token"
                                                                            type="hidden"
                                                                            value="RfJ1YgLyUfPcMNu0u4zETpbTsVzhQOR7FsBVaJ6V"
                                                                        />
                                                                        <button type="submit">Clear Cart</button>
                                                                    </form>
                                                                </div>

                                                                <div class="right-side-buttons">
                                                                    <a class="submit" href="/login">
                                                                        Proceed to Checkout
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-4">
                                                        <CartSummary />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Cart;
