import { getAllPostsPreviews } from '../../lib/hygraphHelpers';
import { AllPosts } from '../components/allPosts/AllPosts';
import { LatestPost } from '../components/latestPost/LatestPost';
import styles from './page.module.scss';

const backendPage = async () => {
  const posts = await getAllPostsPreviews('backend');
  if (!posts) {
    return <div> error getting posts 😓</div>;
  }
  if (posts.length == 0) {
    return <div> error getting posts 😓</div>;
  }
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <h1>Backend</h1>
        <LatestPost latestPostData={posts[0]} />
        <AllPosts frontendPostsData={posts} />
      </main>
    </div>
  );
};

export default backendPage;
