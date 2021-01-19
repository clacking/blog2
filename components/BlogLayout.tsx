import Layout from './Layout';

export default function BlogLayout ({children}) {
    return (
        <Layout>
            <div className="container mx-auto py-4">
                { children }
            </div>
        </Layout>
    )
}
