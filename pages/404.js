// pages/404.js
import Link from 'next/link';
import BlankLayout from '../components/layouts/blank';
import React from 'react';
import Head from '../components/Head';

export default function Custom404() {
    return <>
        <Head title="404-not found"/>
        <div className="wrapper">
            <span className="fourOfour">404</span>
            {/*<p>Page Not Found</p>*/}
            <h3><Link href="/"><a>BACK TO HOME</a></Link></h3>
        </div>
        <style jsx>
            {`
                .wrapper { 
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    height: 100vh;
                    background: #2b84c8;
                    color: white;
                }
                .fourOfour {
                    font-size: 150px;
                    font-weight: 900;
                }
                .wrapper p {
                    font-size: 25px;
                    font-weight: 600
                }
                .wrapper a {
                    color: white;
                    text-decoration: none;
                }
            `}
        </style>
    </>;
}

Custom404.Layout = BlankLayout;
