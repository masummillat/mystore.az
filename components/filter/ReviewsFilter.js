import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

const ReviewsFilter = ({ handleChange, handleBlur, values }) => {
    return (
        <Form.Group className="product-filter-box">
            <Form.Label className="product-filter-header">Reviews</Form.Label>
            <div className="product-review-list">
                <a href="#" className="single-product-review-option active" data-filter="7">
                    <span className="option-name-area">
                        <span className="option-radio" />
                        <span className="option-name">All Reviews</span>
                    </span>
                    <span className="option-number">0</span>
                </a>

                <div style={{ display: 'flex', flexDirection: 'column' }} role="group" aria-labelledby="my-radio-group">
                    <Form.Label>
                        <Field type="radio" name="review" value="5" />5
                    </Form.Label>
                    <Form.Label>
                        <Field type="radio" name="review" value="4" />
                        4+
                    </Form.Label>
                    <Form.Label>
                        <Field type="radio" name="" value="3" />
                        3+
                    </Form.Label>
                    <Form.Label>
                        <Field type="radio" name="review" value="2" />
                        2+
                    </Form.Label>
                </div>
            </div>
        </Form.Group>
    );
};

export default React.memo(ReviewsFilter);
