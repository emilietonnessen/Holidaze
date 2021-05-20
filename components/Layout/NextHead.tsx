import Head from 'next/head';
import { NextHeadProps } from '../../constants/interfaces';



const NextHead: React.FC<NextHeadProps> = ({ title, description }) => {
    return (
        <Head>
            {/* Font Awesome: */}
            <script src="https://kit.fontawesome.com/0011017bbe.js" crossOrigin="anonymous"></script>

            {/* Tab Icon: */}
            <link rel="icon" href="/favicon.ico"  type="image/gif" sizes="16x16"></link>

            {/* Meta Description: */}
            <meta name="description" content={description} />

            {/* Page Title: */}
            <title>{title}</title>
        </Head>
    );
}

export default NextHead;