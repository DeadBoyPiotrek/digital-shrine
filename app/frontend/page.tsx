import { getAllPostsPreviews } from '../../lib/hygraphHelpers';
import { AllPosts } from '../components/allPosts/AllPosts';
import { LatestPost } from '../components/latestPost/LatestPost';
import styles from './page.module.scss';

const frontendPage = async () => {
  const posts = await getAllPostsPreviews();

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
