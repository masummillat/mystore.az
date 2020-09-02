import React from 'react';
import Link from 'next/link';
import LoginLayout from '../components/layouts/login';
import Head from '../components/Head';
import { Formik } from 'formik';

class Registration extends React.Component {
    render() {
        return (
            <div className="registration-login-content-layout">
                <Head title="Register" />
                <section
                    className="registration-login-area registration-login-fixed-area d-m-block"
                    style={{ backgroundImage: 'url(../static/img/login-bg4.jpg)' }}>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-sm-5">
                                <div className="registration-login-image-area">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="../static/img/logo3.png" alt="" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="registration-login-image">
                                        <img src="../static/img/register-image.png" alt="" />
                                    </div>
                                    <div className="registration-login-message">
                                        <h3>Buy and Sell Easy Only at Mystore</h3>
                                        <p>Join and feel the ease of doing transactions on Mystore</p>
                                        <Link href="/">
                                            <a>Go to Homepage</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="bordered-shadow-box">
                                    <div className="bordered-shadow-box-overflow-hidden">
                                        <div className="common-padded-box registration-login-box">
                                            <div className="registration-login-header mb-2">Hesabı yarat</div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="register-login-footer register-login-header mt-0 mb-3">
                                                        Artıq hesabınız var?{' '}
                                                        <Link href="/login">
                                                            <a>Daxil ol</a>
                                                        </Link>
                                                    </div>
                                                    <Formik
                                                        initialValues={{
                                                            name: '',
                                                            email: '',
                                                            phone_number: '',
                                                            password: '',
                                                            password_confirmation: '',
                                                            tos_accept: false,
                                                        }}
                                                        validate={values => {
                                                            const errors = {};
                                                            if (!values.email) {
                                                                errors.email = 'Email is required';
                                                            } else if (
                                                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                                    values.email,
                                                                )
                                                            ) {
                                                                errors.email = 'Invalid email address';
                                                            }
                                                            if (!values.name) {
                                                                errors.name = 'Name is required';
                                                            }
                                                            if (!values.phone_number) {
                                                                errors.phone_number = 'Phone number is required';
                                                            } else if (
                                                                !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i.test(
                                                                    values.phone_number,
                                                                )
                                                            ) {
                                                                errors.phone_number = 'Invalid phone number';
                                                            }
                                                            if (!values.password) {
                                                                errors.password = 'Password is required';
                                                            }
                                                            if (!values.password_confirmation) {
                                                                errors.password_confirmation =
                                                                    'Password confirmation is required';
                                                            } else if (
                                                                values.password !== values.password_confirmation
                                                            ) {
                                                                errors.password_confirmation = "Password doesn't match";
                                                            }

                                                            return errors;
                                                        }}
                                                        onSubmit={(values, { setSubmitting }) => {
                                                            setTimeout(() => {
                                                                alert(JSON.stringify(values, null, 2));
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
                                                            <form
                                                                onSubmit={handleSubmit}
                                                                className="form-horizontal needs-validation">
                                                                <div className="registration-login-form">
                                                                    <div className="form-group">
                                                                        <label htmlFor="name">
                                                                            <i className="far fa-user"></i>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="reg-name"
                                                                            name="name"
                                                                            placeholder="Ad"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.name}
                                                                        />
                                                                        {errors.name && touched.name && errors.name}
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="email">
                                                                            <i className="las la-envelope"></i>
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            id="email"
                                                                            name="email"
                                                                            placeholder="Elektron poçt"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.email}
                                                                        />
                                                                        {errors.email && touched.email && errors.email}
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label htmlFor="phone_number">
                                                                            <i className="las la-phone"></i>
                                                                        </label>
                                                                        <input
                                                                            id="phone_number"
                                                                            name="phone_number"
                                                                            placeholder="Mobil nömrə"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.phone_number}
                                                                        />
                                                                        {errors.phone_number &&
                                                                            touched.phone_number &&
                                                                            errors.phone_number}
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="password">
                                                                            <i className="las la-unlock-alt"></i>
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            id="password"
                                                                            name="password"
                                                                            placeholder="Şifrə"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.password}
                                                                        />
                                                                        {errors.password &&
                                                                            touched.password &&
                                                                            errors.password}
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label htmlFor="password_confirmation">
                                                                            <i className="las la-unlock-alt"></i>
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            id="password_confirmation"
                                                                            name="password_confirmation"
                                                                            placeholder="Şifrəni təsdiqləyin"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.password_confirmation}
                                                                        />
                                                                        {errors.password_confirmation &&
                                                                            touched.password &&
                                                                            errors.password}
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <div className="terms-check">
                                                                            <input
                                                                                type="checkbox"
                                                                                name="tos_accept"
                                                                                id="terms-check"
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.tos_accept}
                                                                            />
                                                                            {errors.tos_accept &&
                                                                                touched.tos_accept &&
                                                                                errors.tos_accept}
                                                                            <label htmlFor="terms-check">
                                                                                {' '}
                                                                                <span>
                                                                                    registration.By signing up you agree
                                                                                    to our
                                                                                </span>{' '}
                                                                                <a href="terms-condition.html">
                                                                                    Şərtlər və qaydalar
                                                                                </a>{' '}
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <button
                                                                            disabled={
                                                                                !values.tos_accept || isSubmitting
                                                                            }
                                                                            type="submit">
                                                                            Hesabı yarat
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        )}
                                                    </Formik>
                                                    <div className="login-register-or-message">
                                                        <span>or sign up with</span>
                                                    </div>

                                                    <div className="other-register-login-option">
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="https://accounts.google.com/o/oauth2/auth?client_id=961182988617-jtsofpeu7so1u46e79hj11tpp1u95dl7.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fbeta.mystore.az%2Flogin%2Fgoogle%2Fcallback&amp;scope=openid+profile+email&amp;response_type=code&amp;state=xlOwCcYlzG5SMPFTHEwM6bxsBaVplF11wJg95Ars"
                                                                    className="google">
                                                                    <span className="icon">
                                                                        <i className="fab fa-google"></i>
                                                                    </span>
                                                                    <span className="text">Google</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="https://www.facebook.com/v3.3/dialog/oauth?client_id=641031990098747&amp;redirect_uri=https%3A%2F%2Fbeta.mystore.az%2Flogin%2Ffacebook%2Fcallback&amp;scope=email&amp;response_type=code&amp;state=ms7ULtbEYWeV5Y36cXN28vRBknmS9a6y1w0uOuvA"
                                                                    className="facebook">
                                                                    <span className="icon">
                                                                        <i className="fab fa-facebook-f"></i>
                                                                    </span>
                                                                    <span className="text">Facebook</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/*<div className="col-lg-6">*/}
                                                {/*    <div className="register-right-side">*/}
                                                {/*        <div className="register-or"><span>Or</span></div>*/}
                                                {/*        <div className="other-register-login-option">*/}
                                                {/*            <ul>*/}
                                                {/*                <li>*/}
                                                {/*                    <a href="" className="google">*/}
                                                {/*                        <span className="icon"><i className="fab fa-google"></i></span>*/}
                                                {/*                        <span className="text">Login with Google</span>*/}
                                                {/*                    </a>*/}
                                                {/*                </li>*/}
                                                {/*                <li>*/}
                                                {/*                    <a href="" className="facebook">*/}
                                                {/*                        <span className="icon"><i className="fab fa-facebook-f"></i></span>*/}
                                                {/*                        <span className="text">Login with Facebook</span>*/}
                                                {/*                    </a>*/}
                                                {/*                </li>*/}
                                                {/*                <li>*/}
                                                {/*                    <a href="" className="twitter">*/}
                                                {/*                        <span className="icon"><i className="fab fa-twitter"></i></span>*/}
                                                {/*                        <span className="text">Login with Twitter</span>*/}
                                                {/*                    </a>*/}
                                                {/*                </li>*/}
                                                {/*            </ul>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="registration-login-message registration-login-message-mobile">
                                    <Link href="/">
                                        <a>Go to Homepage</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

Registration.Layout = LoginLayout;
export default Registration;
