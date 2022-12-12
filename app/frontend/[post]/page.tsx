import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import MDXContent from '../../../lib/blogPostFix';
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

const markdownPost = fs.readFileSync('public/postTest.mdx', 'utf8');

const postPage = async ({ params }: { params: { post: string } }) => {
  const post: PostProps = await getSinglePost(params.post);

  const { content } = matter(markdownPost);
  const source = await serialize(content);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>{post.title}</h1>
        </div>
        <div className={styles.image}>
          <Image
            src={post.img.url}
            width={1920 / 2}
            height={1080 / 2}
            alt="lol"
          />
        </div>
        <MDXContent source={source} />
      </main>
    </div>
  );
};

export default postPage;
