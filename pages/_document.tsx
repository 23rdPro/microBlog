import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { bodyText } from "utils/article.service";

export default class BodyDocument extends Document{
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render(): JSX.Element {
        return (
            <Html>
                <Head />
                <body className={`bg-white ${bodyText.className}`}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

