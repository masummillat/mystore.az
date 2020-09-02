import React from 'react';

const FaqCard = ({ faq }) => {
    return (
        <div className="single-faq-box">
            <div className="faq-box-header">
                <a
                    className="faq-box-header-link"
                    data-toggle="collapse"
                    href={`#query_${faq.id}`}
                    role="button"
                    aria-expanded="true"
                    aria-controls={`query_${faq.id}`}>
                    <span className="text">{faq.question}</span>
                    <span className="icon">
                        <i className="fas fa-chevron-down"></i>
                    </span>
                </a>
            </div>
            <div className="collapse show" id={`query_${faq.id}`}>
                <div className="faq-box-content">{faq.answer}</div>
            </div>
        </div>
    );
};

export default FaqCard;
