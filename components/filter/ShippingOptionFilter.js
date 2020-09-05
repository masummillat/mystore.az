import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

const ShippingOptionFilter = ({ handleChange, handleBlur, values }) => {
    return (
        <>
            <Form.Group className="product-filter-box">
                <Form.Label className="product-filter-header">Shipping Options</Form.Label>
                <div className="product-filter-list">
                    <div
                        style={{ display: 'flex', flexDirection: 'column' }}
                        role="group"
                        aria-labelledby="checkbox-group">
                        <Form.Label>
                            <Field
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.shipping}
                                type="checkbox"
                                name="shipping"
                                value="Overseas: Standard Express"
                            />
                            Overseas: Standard Express
                        </Form.Label>
                        <Form.Label>
                            <Field
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.shipping}
                                type="checkbox"
                                name="shipping"
                                value="Overseas: Standard Economy"
                            />
                            Overseas: Standard Economy
                        </Form.Label>
                    </div>
                </div>
            </Form.Group>
        </>
    );
};

export default React.memo(ShippingOptionFilter);
