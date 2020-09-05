import React from 'react';
import dynamic from 'next/dynamic';
const Head = dynamic(import('../components/Head'));

const PrivacyPolicy = () => {
    return (
        <>
            <Head title="Privacy and Policy" />
            <h1>Privacy and Policy</h1>
        </>
    );
};

export default PrivacyPolicy;
