import React from 'react';
import { Form } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import { categories, featured } from '../../../../constants/data';
import CategoryItem from './CategoryItem';

const ProductFilter = () => {
    const handleFilterChange = values => {
        console.log(JSON.stringify(values, null, 2));
    };
    return (
        <div className="col-lg-3 product-filter-col">
            <div className="m-product-filter-header">
                <span className="text">Product Filter</span>
                <span className="close">
                    <i className="fas fa-times" />
                </span>
            </div>
            <div className="common-padded-box pr-3">
                <Formik
                    initialValues={{}}
                    validate={values => {
                        handleFilterChange(values);
                        const errors = {};
                        return errors;
                    }}
                    validateOnChange={handleFilterChange}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form className="product-filter-area">
                            <Form.Group>
                                <div className="product-filter-box">
                                    <div className="product-filter-header">Categories</div>
                                    <div className="product-filter-list">
                                        <Form.Label className="single-product-filter-option active">
                                            <span className="option-name-area">
                                                <span className="option-name">All Categories</span>
                                            </span>
                                            <span className="option-number">9</span>
                                        </Form.Label>
                                        <div
                                            style={{ display: 'flex', flexDirection: 'column' }}
                                            role="group"
                                            aria-labelledby="checkbox-group">
                                            {categories.map((category, ind) => (
                                                <Form.Label key={category.id}>
                                                    <Field type="checkbox" name="checked" value={category.id} />
                                                    <span>
                                                        {category.title} {category.availableProduct}
                                                    </span>
                                                </Form.Label>
                                            ))}
                                        </div>
                                        {/*<Field  as="select" name="cate">*/}
                                        {/*    {categories.map((category, ind) => (*/}
                                        {/*        <CategoryItem category={category} key={ind} />*/}
                                        {/*    ))}*/}
                                        {/*</Field>*/}
                                    </div>
                                </div>
                            </Form.Group>
                            {/*<button onClick={handleSubmit} type="submit">*/}
                            {/*    Filter*/}
                            {/*</button>*/}
                            <Form.Group className="product-filter-box">
                                <Form.Label className="product-filter-header">Shipping Options</Form.Label>
                                <div className="product-filter-list">
                                    <div
                                        style={{ display: 'flex', flexDirection: 'column' }}
                                        role="group"
                                        aria-labelledby="checkbox-group">
                                        <Form.Label>
                                            <Field type="checkbox" name="shipping" value="Overseas: Standard Express" />
                                            Overseas: Standard Express
                                        </Form.Label>
                                        <Form.Label>
                                            <Field type="checkbox" name="shipping" value="Overseas: Standard Economy" />
                                            Overseas: Standard Economy
                                        </Form.Label>
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group className="product-filter-box">
                                <Form.Label className="product-filter-header">Price Range</Form.Label>
                                <div className="price-range-filter">
                                    <div className="product-price-filter">
                                        <Field type="range" name="price-range" />
                                        <div className="product-price-filter-min-max-text">
                                            <span>MIN: $200.00</span>
                                            <span>MAX: $5000.00</span>
                                        </div>
                                    </div>
                                </div>
                            </Form.Group>

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

                                    <div
                                        style={{ display: 'flex', flexDirection: 'column' }}
                                        role="group"
                                        aria-labelledby="my-radio-group">
                                        <Form.Label>
                                            <Field type="radio" name="review" value="5" />5
                                        </Form.Label>
                                        <Form.Label>
                                            <Field type="radio" name="review" value="4" />
                                            4+
                                        </Form.Label>
                                        <Form.Label>
                                            <Field type="radio" name="review" value="3" />
                                            3+
                                        </Form.Label>
                                        <Form.Label>
                                            <Field type="radio" name="review" value="2" />
                                            2+
                                        </Form.Label>
                                    </div>
                                </div>
                            </Form.Group>

                            <div className="product-filter-box">
                                <div className="product-filter-header">Payment Option</div>
                                <div className="product-filter-list">
                                    <div
                                        style={{ display: 'flex', flexDirection: 'column' }}
                                        role="group"
                                        aria-labelledby="checkbox-group">
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
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ProductFilter;
