import { gql, GraphQLClient } from 'graphql-request';
import { AllPosts } from './components/AllPosts';
import { LatestPost } from './components/LatestPost';
import styles from './page.module.scss';
const query = gql`
  query {
    posts {
      id
      title
      content
      datePublished
      img {
        url
      }
    }
  }
`;

const getPosts = async () => {
  let hygraphApiKey = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY;
  // @ts-ignore:
  //? what can I do to fix this error?
  const hygraph = new GraphQLClient(hygraphApiKey);

  try {
    const { posts } = await hygraph.request(query);
    return posts;
  } catch (error) {
    console.log(`🚀 ~ getPosts ~ error`, error);
  }
};

const frontend = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <h1>Frontend</h1>
        {JSON.stringify(posts)}
        <LatestPost latestPostData={posts[0]} />
        <AllPosts frontendPostsData={posts} />
      </main>
    </div>
  );
};

export default frontend;
