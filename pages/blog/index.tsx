import Link from 'next/link'
import Head from 'next/head'
import { getPosts } from '../../helper';
import BlogLayout from '../../components/BlogLayout';

export const getStaticProps = async () => {
    const posts = getPosts();
    const metas = posts.map(d => d.params);
    return {
        props: { posts: metas }
    }
}

export default function Blog ({posts}) {
    return (
        <BlogLayout>
            <Head>
                <title>Blog - clacking.net</title>
            </Head>
            <section>
                <h2 className="text-3xl">Blog</h2>
                { posts.map(d => (
                    <div className="pl-2 py-2">
                        <Link href={`/blog/${d.slug}`}>
                            <h2 className="text-2xl cursor-pointer">{d.meta.title}</h2>
                        </Link>
                        <p>
                            Date: {new Date(d.meta.date).toLocaleDateString()}
                            {' '}
                            Tag: {d.meta.tags ? d.meta.tags.map(s => <span className="px-2"> {s} </span>) : '-'}
                        </p>
                    </div>
                )) }
            </section>
        </BlogLayout>
    )
}
