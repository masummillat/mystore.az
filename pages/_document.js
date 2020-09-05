import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head title="mystore.az" />
                <body>
                    <Main />
                    <NextScript />
                    <script src="../../static/js/jquery.min.js"></script>
                    <script src="../../static/js/popper.min.js"></script>
                    <script src="../../static/js/bootstrap.min.js"></script>
                    <script src="../../static/js/owl.carousel.min.js"></script>
                    <script src="../static/js/chat.js"></script>
                    {/*<script src="../../static/js/select2.min.js"></script>*/}
                    {/*<script src="../../static/js/jquery.fancybox.min.js"></script>*/}
                    {/*<script src="../static/vendor/bootstrap-timepicker/bootstrap-timepicker.min.js"></script>*/}
                    {/*<script src="../../static/js/moment.min.js"></script>*/}
                    {/*<script src="../../static/js/hc-offcanvas-nav.js"></script>*/}
                    {/*<script src="../../static/js/main.js"></script>*/}
                </body>
            </Html>
        );
    }
}

export default MyDocument;
