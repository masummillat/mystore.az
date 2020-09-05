import React from 'react';

const CartSummary = () => {
    return (
        <div className="cart-summary-area">
            <div className="cart-to-payment-title">
                <span className="title">Summary</span>
                <span className="number"> 0 Items</span>
            </div>
            <div className="cart-product-summary-area">
                <div className="cart-product-summary-item">
                    <ul>
                        <li className="header">
                            <span className="left-side">Product</span>
                            <span className="right-side">Total</span>
                        </li>
                    </ul>
                </div>

                <div className="cart-product-summary-item cart-product-shipping-list">
                    <ul>
                        <li className="header">
                            <span className="left-side">Product Shipping Charge</span>
                            <span className="right-side">Amount</span>
                        </li>
                    </ul>
                </div>

                <div className="cart-product-summary-cost">
                    <ul>
                        <li>
                            <span className="left-side">Subtotal</span>
                            <span className="right-side">
                                <strong>$0.00 </strong>
                            </span>
                        </li>

                        <li>
                            <span className="left-side">
                                <strong>Total Shipping Cost</strong>
                            </span>

                            <span className="right-side">
                                <strong>$0 </strong>
                            </span>
                        </li>
                        <li>
                            <span className="left-side">
                                <strong>Total</strong>
                            </span>

                            <span className="right-side">
                                <strong>$0 </strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CartSummary);
