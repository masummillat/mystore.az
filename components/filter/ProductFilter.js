import React from 'react';
import { Form } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import { categories, featured } from '../../constants/data';
import CategoryItem from '../category/CategoryItem';
import CategoryOptionFilter from './CategoryOptionFilter';
import ShippingOptionFilter from './ShippingOptionFilter';
import PriceRangeFilter from './PriceRangeFilter';
import ReviewsFilter from './ReviewsFilter';
import PaymentOptionFilter from './PaymentOptionFilter';

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
            <div className="bordered-shadow-box">
                <div className="bordered-shadow-box-overflow-hidden">
                    <div className="common-padded-box p-3">
                        <Formik
                            initialValues={{
                                category: [],
                                price_range: 45,
                                payment: null,
                                review: null,
                                shipping: [],
                            }}
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
                                    <CategoryOptionFilter
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        values={values}
                                        categories={categories}
                                    />
                                    <ShippingOptionFilter
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        values={values}
                                    />
                                    <PriceRangeFilter
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        values={values}
                                    />
                                    <ReviewsFilter
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        values={values}
                                    />

                                    <PaymentOptionFilter
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        values={values}
                                    />
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
