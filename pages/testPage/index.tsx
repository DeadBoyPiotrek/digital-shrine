import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AllPosts } from '../../app/components/allPosts/AllPosts';
import { LatestPost } from '../../app/components/latestPost/LatestPost';
import { getAllPostsPreviews } from '../../lib/hygraphHelpers';
import styles from './page.module.scss';
export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPostsPreviews('frontend')) || [];
  return {
    props: { posts },
  };
};

const frontendPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <h1>Frontend</h1>
        <LatestPost latestPostData={posts[0]} />
        <AllPosts frontendPostsData={posts} />
      </main>
    </div>
  );
};

export default frontendPage;
