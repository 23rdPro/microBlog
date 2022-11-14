import Head from "next/head";
import { siteTitle } from "utils/article.service";


export const Header = () => {
    return (
        <Head>
            <link rel="icon" href="/favicon-32x32.png" />
            <meta charSet="UTF-8" />
            <meta name="description" content="This description my hve to be dynamic" />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Olumide Bakare" />
            <title>Python Like Iam 5</title>
        </Head>
    );
}