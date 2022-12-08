import { gql, GraphQLClient } from 'graphql-request';

const hygraphApiKey = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY;
//? what can I do to fix this error?
// @ts-ignore:
const hygraph = new GraphQLClient(hygraphApiKey);

export const getAllPostsPreviews = async () => {
  const query = gql`
    query AllPostsPreviews {
      posts {
        id
        title
        slug
        excerpt
        datePublished
        img {
          url
        }
      }
    }
  `;

  try {
    const { posts } = await hygraph.request(query);
    return posts;
  } catch (error) {
    console.log(`🚀 ~ getPosts ~ error`, error);
  }
};
export const getSinglePost = async (slug: string) => {
  const query = gql`
    query SinglePost($slug: String) {
      posts(where: { slug: $slug }) {
        slug
        id
        title
        content
        datePublished
        excerpt
        img {
          url
        }
      }
    }
  `;
  const slugName = { slug };

  try {
    const { posts } = await hygraph.request(query, slugName);

    return posts[0];
  } catch (error) {
    console.log(`🚀 ~ getPosts ~ error`, error);
  }
};

export const getLatestPostPreview = async () => {
  const query = gql`
    query LatestPostPreview {
      posts(first: 1) {
        title
        slug
        excerpt
        datePublished
        img {
          url
        }
      }
    }
  `;

  try {
    const { posts } = await hygraph.request(query);

    return posts[0];
  } catch (error) {
    console.log(`🚀 ~ getPosts ~ error`, error);
  }
};
