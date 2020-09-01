import React from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from '../components/Head';
import LoginLayout from '../components/layouts/login';

class LoginComponent extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="registration-login-content-layout">
                    <section
                        className="registration-login-area registration-login-fixed-area"
                        style={{ backgroundImg: 'url(frontend/assets/img/login-bg4.jpg)' }}>
                        <div className="container">
                            <div className="row justify-content-center align-items-center m-flex-column-reverse">
                                <div className="col-sm-4">
                                    <div className="bordered-shadow-box">
                                        <div className="bordered-shadow-box-overflow-hidden">
                                            <div className="common-padded-box registration-login-box">
                                                <div className="registration-login-header">
                                                    login.loginHeader
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <Formik
                                                            initialValues={{
                                                                email: '',
                                                                password: '',
                                                                checked: false,
                                                            }}
                                                            validate={values => {
                                                                const errors = {};
                                                                if (!values.email) {
                                                                    errors.email =
                                                                        'Email is required';
                                                                } else if (
                                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                                        values.email,
                                                                    )
                                                                ) {
                                                                    errors.email =
                                                                        'Invalid email address';
                                                                }
                                                                if (!values.password) {
                                                                    errors.password =
                                                                        'Password is required';
                                                                }
                                                                return errors;
                                                            }}
                                                            onSubmit={(
                                                                values,
                                                                { setSubmitting },
                                                            ) => {
                                                                setTimeout(() => {
                                                                    localStorage.setItem(
                                                                        'loggedIn',
                                                                        true,
                                                                    );
                                                                    localStorage.setItem(
                                                                        'email',
                                                                        values.email,
                                                                    );
                                                                    this.props.router.push('/');
                                                                    // alert(
                                                                    //     JSON.stringify(
                                                                    //         values,
                                                                    //         null,
                                                                    //         2,
                                                                    //     ),
                                                                    // );
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
                                                                    className="form-horizontal">
                                                                    <div className="registration-login-form">
                                                                        <div className="form-group">
                                                                            <label htmlFor="log-email">
                                                                                <i className="las la-envelope" />
                                                                            </label>
                                                                            <input
                                                                                type="email"
                                                                                id="log-email"
                                                                                name="email"
                                                                                placeholder="Elektron poçt"
                                                                                onChange={
                                                                                    handleChange
                                                                                }
                                                                                onBlur={handleBlur}
                                                                                value={values.email}
                                                                            />
                                                                            {errors.email &&
                                                                                touched.email &&
                                                                                errors.email}
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="log-password">
                                                                                <i className="las la-unlock-alt" />
                                                                            </label>
                                                                            <input
                                                                                type="password"
                                                                                id="log-password"
                                                                                name="password"
                                                                                placeholder="Şifrə"
                                                                                onChange={
                                                                                    handleChange
                                                                                }
                                                                                onBlur={handleBlur}
                                                                                value={
                                                                                    values.password
                                                                                }
                                                                            />
                                                                            {errors.password &&
                                                                                touched.password &&
                                                                                errors.password}
                                                                        </div>

                                                                        <div className="form-group d-flex justify-content-between align-items-center">
                                                                            <div className="terms-check">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="checked"
                                                                                    id="log-check"
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
                                                                                    onBlur={
                                                                                        handleBlur
                                                                                    }
                                                                                    value={
                                                                                        values.checked
                                                                                    }
                                                                                />
                                                                                <label htmlFor="log-check">
                                                                                    Məni xatırla
                                                                                </label>
                                                                            </div>
                                                                            <div className="forget-pasword">
                                                                                <a href="/password/reset">
                                                                                    Forget Password
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <button
                                                                                disabled={
                                                                                    isSubmitting
                                                                                }
                                                                                type="submit">
                                                                                Login
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            )}
                                                        </Formik>

                                                        <div className="login-register-or-message">
                                                            <span>or log in with</span>
                                                        </div>

                                                        <div className="other-register-login-option">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="https://accounts.google.com/o/oauth2/auth?client_id=961182988617-jtsofpeu7so1u46e79hj11tpp1u95dl7.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fbeta.mystore.az%2Flogin%2Fgoogle%2Fcallback&amp;scope=openid+profile+email&amp;response_type=code&amp;state=gAwFt0FJi27Cv5YhzKdVvthgxMOhoOGHMo5vuyJT"
                                                                        className="google">
                                                                        <span className="icon">
                                                                            <i className="fab fa-google"></i>
                                                                        </span>
                                                                        <span className="text">
                                                                            Google
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.facebook.com/v3.3/dialog/oauth?client_id=641031990098747&amp;redirect_uri=https%3A%2F%2Fbeta.mystore.az%2Flogin%2Ffacebook%2Fcallback&amp;scope=email&amp;response_type=code&amp;state=NnvMwvY385DSCwkxYEjBeawciyRVJKTJVrQUSnGY"
                                                                        className="facebook">
                                                                        <span className="icon">
                                                                            <i className="fab fa-facebook-f"></i>
                                                                        </span>
                                                                        <span className="text">
                                                                            Facebook
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="register-login-footer">
                                                            Hesab lazımdır?{' '}
                                                            <Link href="/registration">
                                                                <a>Qeydiyyatdan keçin</a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="registration-login-message registration-login-message-mobile">
                                        <a href="/">Go to Homepage</a>
                                    </div>
                                </div>
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
                                            <img src="../static/img/login-image.png" alt="" />
                                        </div>
                                        <div className="registration-login-message">
                                            <h3>Buy and Sell Easy Only at Mystore</h3>
                                            <p>
                                                Login and feel the ease of doing transactions on
                                                Mystore
                                            </p>
                                            <Link href="/">
                                                <a>Go to Homepage</a>
                                            </Link>
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

const Login = props => {
    const router = useRouter();
    return (
        <div>
            <Head title="Login" />
            <LoginComponent {...props} router={router} />
        </div>
    );
};

Login.Layout = LoginLayout;

export default Login;
