import React from 'react';

const CartToPaymentLink = () => {
    return (
        <div className="cart-to-payment-links">
            <ul>
                <li className="active">
                    <span className="title">Cart Items</span>
                    <span className="icon">
                        <i className="fas fa-cart-plus"></i>
                    </span>
                </li>
                <li>
                    <span className="title">Shipping Info</span>
                    <span className="icon">
                        <i className="fas fa-shipping-fast"></i>
                    </span>
                </li>
                <li>
                    <span className="title">Payment</span>
                    <span className="icon">
                        <i className="fas fa-credit-card"></i>
                    </span>
                </li>
                <li>
                    <span className="title">Completed</span>
                    <span className="icon">
                        <i className="fas fa-file-invoice"></i>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(CartToPaymentLink);
