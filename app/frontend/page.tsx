import { gql, GraphQLClient } from 'graphql-request';

const query = gql`
  query {
    posts {
      id
      title
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
    <div>
      <h1>Frontend</h1>
      {JSON.stringify(posts)}
    </div>
  );
};

export default frontend;
