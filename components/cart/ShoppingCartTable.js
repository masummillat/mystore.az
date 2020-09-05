import React from 'react';

const ShoppingCartTable = () => {
    return (
        <>
            <div className="cart-to-payment-title">Shopping Cart</div>

            <div className="mobile-shopping-cart d-lg-none">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="no-product-message">Your Cart is empty</div>
                    </div>
                </div>
            </div>
            <div className="shopping-cart-table table-responsive d-none d-lg-block">
                <table className="table table-striped table-hover text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Remove</th>
                            <th>Image</th>
                            <th>Product(s)</th>
                            <th>Price</th>
                            <th>Qty.</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="7">
                                <div className="no-product-message small">Your Cart is empty</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default React.memo(ShoppingCartTable);
