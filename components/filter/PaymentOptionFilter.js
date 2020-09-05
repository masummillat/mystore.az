import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

const PaymentOptionFilter = ({ handleChange, handleBlur, values }) => {
    return (
        <div className="product-filter-box">
            <div className="product-filter-header">Payment Option</div>
            <div className="product-filter-list">
                <div style={{ display: 'flex', flexDirection: 'column' }} role="group" aria-labelledby="checkbox-group">
                    <Form.Label>
                        <Field type="checkbox" name="payment" value="Credit Card" />
                        Credit Card
                    </Form.Label>
                    <Form.Label>
                        <Field type="checkbox" name="payment" value="Cash On Delivery" />
                        Cash On Delivery
                    </Form.Label>
                </div>
            </div>
        </div>
    );
};

export default React.memo(PaymentOptionFilter);
