import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Head from 'next/head'
import { getPosts, getPost } from '../../helper';
import BlogLayout from '../../components/BlogLayout';

export const getStaticProps = async ({params}) => {
    const slug = params.slug;
    const post = getPost(slug);
    const source = await renderToString(post.content);

    return {
        props: {
            ...post, source
        }
    }
}

export const getStaticPaths = async () => {
    const posts = getPosts();
    return { paths: posts, fallback: false }
}

export default function BlogPost ({slug, meta, source}) {
    const content = hydrate(source, {
        components: {
            img: ({src}) => {
                const imgUrl = src.startsWith('./') ? src.slice(2) : src;
                return <img className="shadow-lg w-4/5 m-auto" src={require(`../../posts/${slug}/${imgUrl}`).default} />
            }
        }
    });
    const { title, date, update, tags } = meta;
    return (
        <BlogLayout>
            <article>
                <Head>
                    <title>{title} - clacking.net</title>
                </Head>
                <div className="border-b pb-2 mb-4">
                    <h1 className="text-4xl">{title}</h1>
                    <div className="pl-8">
                        👉
                        Date: {new Date(date).toLocaleDateString()}
                        {' '}
                        Update: {new Date(update).toLocaleDateString() || '-'}
                    </div>
                    <div className="pl-16">
                        👉
                        Tags: {tags ? tags.map(s => <span className="px-2"> {s} </span>) : '-'}
                    </div>
                </div>
                <section className="max-w-none prose dark:prose-dark prose-purple">
                    {content}
                </section>
            </article>
        </BlogLayout>
    )
}
