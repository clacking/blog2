import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const ArticleDir = join(process.cwd(), 'posts');

interface BlogMeta {
    title: string;
    date: string;
    update?: string;
    tags?: string[];
    lang?: string;
    orig?: string;
}

export const getPosts = () => {
    return readdirSync('./posts').filter(v => !v.startsWith('.')).map(path => {
        const file = readFileSync(join(ArticleDir, path, 'index.mdx'));
        const { data } = matter(file);
        return {
            params: { slug: path, meta: (data as BlogMeta) },
        }
    }).sort((a,b) => (new Date(b.params.meta.date) as any) - (new Date(a.params.meta.date) as any));
}

export const getPost = (slug: string) => {
    const file = readFileSync(join(ArticleDir, slug, 'index.mdx'));
    const { data, content } = matter(file);

    return { slug, meta: (data as BlogMeta), content }
}
