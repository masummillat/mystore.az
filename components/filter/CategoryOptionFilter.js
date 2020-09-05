import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

const CategoryOptionFilter = ({ handleChange, handleBlur, values, categories }) => {
    return (
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
                                <Field type="checkbox" name="category" value={category.id} />
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
    );
};

export default React.memo(CategoryOptionFilter);
