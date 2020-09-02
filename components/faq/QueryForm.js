import React from 'react';
import { Formik } from 'formik';

const QueryForm = ({ handleQuerySubmit }) => {
    return (
        <div className="faq-question-area">
            <h4>Didn't find what you are looking for?</h4>
            <h2>Ask a Question</h2>
            <div className="seller-profile-form faq-question-form">
                <Formik
                    initialValues={{
                        email: '',
                        name: '',
                        question: '',
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Email is required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.name) {
                            errors.name = 'Name is required';
                        }
                        if (!values.question) {
                            errors.question = 'Question is required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            handleQuerySubmit(values);
                            setSubmitting(false);
                        }, 400);
                    }}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit} className="form-horizontal">
                            <input name="_token" type="hidden" value="RfJ1YgLyUfPcMNu0u4zETpbTsVzhQOR7FsBVaJ6V" />
                            <div className="form-group">
                                <label htmlFor="faq-name">
                                    Name <small>*</small>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    className="form-control"
                                    id="faq-name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {errors.name && touched.name && errors.name}
                            </div>
                            <div className="form-group">
                                <label htmlFor="faq-email">
                                    Email <small>*</small>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="form-control"
                                    name="email"
                                    id="faq-email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                            </div>
                            <div className="form-group">
                                <label htmlFor="faq-question">
                                    Question <small>*</small>
                                </label>
                                <textarea
                                    placeholder="Your Question"
                                    className="form-control"
                                    name="question"
                                    id="faq-question"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.question}
                                />
                                {errors.question && touched.question && errors.question}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn-submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
export default QueryForm;
