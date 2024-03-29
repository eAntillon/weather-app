import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
