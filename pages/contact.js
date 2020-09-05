import React from 'react';
import { Formik } from 'formik';
import dynamic from 'next/dynamic';
const Head = dynamic(import('../components/Head'));

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Head title="Contact" />
                <div className="header-fixed-content-layout">
                    <section className="common-page-area">
                        <div className="common-page-header-image">
                            <img src="../static/img/banner-1.jpg" alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="common-page-content-area common-padding">
                                        <div className="common-padded-box-header">
                                            <h3>
                                                Contact <span>With Us</span>
                                            </h3>
                                            <div className="product-breadcumb">
                                                <ul>
                                                    <li>
                                                        <a href="index.html">Home</a>
                                                    </li>
                                                    <li className="active">Contact Us</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="common-page-content">
                                            <p>
                                                Have a question or an issue with your account? No worries, just let us
                                                know, and we&#039;ll get back to you, anytime of the day! We welcome
                                                feedback on our products and services as well, please share with us how
                                                we can better serve you!
                                            </p>
                                            <div className="row">
                                                <Formik
                                                    initialValues={{
                                                        contact_name: '',
                                                        contact_email: '',
                                                        contact_phone: '',
                                                        queryType: '',
                                                        contact_message: '',
                                                    }}
                                                    onSubmit={(values, actions) => {
                                                        setTimeout(() => {
                                                            alert(JSON.stringify(values, null, 2));
                                                            actions.setSubmitting(false);
                                                        }, 1000);
                                                    }}>
                                                    {props => (
                                                        <form onSubmit={props.handleSubmit} className="col-lg-7">
                                                            <div className="seller-profile-form contact-us-form">
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                name="contact_name"
                                                                                placeholder="Your Name*"
                                                                                required
                                                                                onChange={props.handleChange}
                                                                                onBlur={props.handleBlur}
                                                                                value={props.values.contact_name}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="email"
                                                                                className="form-control"
                                                                                name="contact_email"
                                                                                placeholder="Your Email*"
                                                                                required
                                                                                onChange={props.handleChange}
                                                                                onBlur={props.handleBlur}
                                                                                value={props.values.contact_email}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                name="contact_phone"
                                                                                placeholder="Your Phone*"
                                                                                required
                                                                                onChange={props.handleChange}
                                                                                onBlur={props.handleBlur}
                                                                                value={props.values.contact_phone}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <div className="form-group">
                                                                            <select
                                                                                className="form-control"
                                                                                name="queryType"
                                                                                required
                                                                                onChange={props.handleChange}
                                                                                onBlur={props.handleBlur}
                                                                                value={props.values.queryType}>
                                                                                <option value="" disabled>
                                                                                    Select Subject
                                                                                </option>
                                                                                <option value="General Enquiry">
                                                                                    General Enquiry
                                                                                </option>
                                                                                <option value="Feedback on Issues/Bugs">
                                                                                    Feedback on Issues/Bugs
                                                                                </option>
                                                                                <option value="Advertising Enquiry">
                                                                                    Advertising Enquiry
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <div className="form-group">
                                                                            <textarea
                                                                                className="form-control"
                                                                                name="contact_message"
                                                                                placeholder="Your Message*"
                                                                                onChange={props.handleChange}
                                                                                onBlur={props.handleBlur}
                                                                                value={props.values.contact_message}
                                                                                required></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="submit"
                                                                                name=""
                                                                                value="Send Message"
                                                                                className="btn-submit"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    )}
                                                </Formik>
                                                <div className="col-lg-5"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Contact;
