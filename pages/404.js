// pages/404.js
import React from 'react';
import dynamic from 'next/dynamic';
const Head = dynamic(import('../components/Head'));
import BlankLayout from '../components/layouts/blank';
function Custom404() {
    return (
        <>
            <Head title="404-not found" />
            <div className="flex-center position-ref full-height">
                <div className="code">404</div>

                <div className="message" style={{ padding: '10px' }}>
                    Not Found
                </div>
            </div>
            <style global jsx>
                {`
                    html,
                    body {
                        background-color: #fff;
                        color: #636b6f;
                        font-family: 'Nunito', sans-serif;
                        font-weight: 100;
                        height: 100vh;
                        margin: 0;
                    }

                    .full-height {
                        height: 100vh;
                    }

                    .flex-center {
                        align-items: center;
                        display: flex;
                        justify-content: center;
                    }

                    .position-ref {
                        position: relative;
                    }

                    .code {
                        border-right: 2px solid;
                        font-size: 26px;
                        padding: 0 15px 0 15px;
                        text-align: center;
                    }

                    .message {
                        font-size: 18px;
                        text-align: center;
                    }
                `}
            </style>
        </>
    );
}

Custom404.Layout = BlankLayout;

export default Custom404