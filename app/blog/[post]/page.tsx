import 'highlight.js/styles/atom-one-dark.css';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import MDXContent from '../../components/mdx/MdxArticle';
import { MdxTopSection } from '../../components/mdx/MdxTopSection';

import { getAllSlugs, getSinglePost } from '../../../lib/hygraphHelpers';
import { PostProps } from '../../../types/types';
import styles from './page.module.scss';
export async function generateStaticParams() {
  const posts = await getAllSlugs();

  return posts.map((post: { slug: string }) => {
    return {
      post: post.slug,
    };
  });
}

const postPage = async ({ params }: { params: { post: string } }) => {
  const post: PostProps = await getSinglePost(params.post);
  const content = post.content;

  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <MdxTopSection post={post} />
        <MDXContent source={source} />
      </main>
    </div>
  );
};

export default postPage;
