import Document, { Html, Head, Main, NextScript} from 'next/document';

export default class BlogDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className="dark:bg-gray-800 dark:text-gray-200">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
