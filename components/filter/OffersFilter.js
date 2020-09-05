import React from 'react';
import { Field } from 'formik';
import { Form } from 'react-bootstrap';

const OffersFilter = ({ offersType }) => {
    return (
        <Form.Group>
            <div className="product-filter-box">
                <div className="product-filter-header">Offers</div>
                <div className="product-filter-list">
                    <div
                        style={{ display: 'flex', flexDirection: 'column' }}
                        role="group"
                        aria-labelledby="checkbox-group">
                        {offersType.map((offer, i) => (
                            <Form.Label key={offer.id}>
                                <Field type="checkbox" name="offer" value={offer.id} />
                                <span>
                                    {offer.title} {offer.availableProduct}
                                </span>
                            </Form.Label>
                        ))}
                    </div>
                </div>
            </div>
        </Form.Group>
    );
};

export default OffersFilter;
