import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

const PriceRangeFilter = ({ handleChange, handleBlur, values }) => {
    return (
        <Form.Group className="product-filter-box">
            <Form.Label className="product-filter-header">Price Range</Form.Label>
            <div className="price-range-filter">
                <div className="product-price-filter">
                    <Field
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price_range}
                        type="range"
                        name="price_range"
                    />
                    <div className="product-price-filter-min-max-text">
                        <span>MIN: $200.00</span>
                        <span>MAX: $5000.00</span>
                    </div>
                </div>
            </div>
        </Form.Group>
    );
};

export default React.memo(PriceRangeFilter);
