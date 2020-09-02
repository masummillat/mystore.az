import React from 'react';
import Head from '../components/Head';
import Link from 'next/link';
import QueryForm from '../components/faq/QueryForm';
import FaqCard from '../components/faq/FaqCard';

const faqs = [
    {
        id:1,
        question: 'HOW DO I ACTIVATE MY ACCOUNT?',
        answer: 'The instructions to activate your account will be sent to your email once you have submitted the registration form. If you did not receive this email, your email service provider’s mailing software may be blocking it. You can try checking your junk / spam folder or contact us at help@mystore.az'
    },
    {
        id: 2,
        question: 'WHAT DO YOU MEAN BY POINTS? HOW DO I EARN IT?',
        answer: 'Because you are important to us, we want to know what you think about the products. As an added value, every time you rate the products you earn points which go straight to your account. 1 point are added to your account for every review that you give. You will need those points in order to redeem the sample products. So keep rating the products to keep earning points!'
    },
    {
        id: 3,
        question: 'HOW CAN I TRACK MY ORDERS & PAYMENT?',
        answer: 'After logging into your account, the status of your checkout history can be found under Order History. For orders via registered postage, a tracking number (article tracking number) will be given to you after the receipt given from Singapore Post Limited (SingPost).'
    }
]
const Faq = () => {
    const handleQuerySubmit = values => {
        console.log(values);
    };
    return (
        <>
            <Head title="faq" />
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
                                        <h3>FAQs</h3>
                                        <div className="product-breadcumb">
                                            <ul>
                                                <li>
                                                    <Link href="/">
                                                        <a>Home</a>
                                                    </Link>
                                                </li>
                                                <li className="active">FAQs</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="common-page-content">
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <div className="faq-accordion-area">
                                                    {faqs.map((faq)=><FaqCard key={faq.question} faq={faq}/>)}
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <QueryForm handleQuerySubmit={handleQuerySubmit} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
export default Faq;
