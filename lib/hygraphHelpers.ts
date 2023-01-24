import { gql, GraphQLClient } from 'graphql-request';
import pThrottle from 'p-throttle';
import { PostPreviewProps, PostProps } from '../types/types';

const hygraphApiKey = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY;
// @ts-ignore:
const hygraph = new GraphQLClient(hygraphApiKey);

type Category = 'frontend' | 'backend';

interface PostsResult {
  posts: PostPreviewProps[];
}

export const getAllPostsPreviews = async (category: Category) => {
  try {
    const query = gql`
      query AllPostsPreviews($category: String) {
        posts(
          orderBy: datePublished_DESC
          where: { category_contains: $category }
        ) {
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
    const result: PostsResult = await hygraph.request(query, { category });
    const { posts: postsPreviews } = result;
    return postsPreviews;
  } catch (error) {
    console.error('Error occurred while fetching post previews: ', error);
    return [];
  }
};

//! throttle API calls to prevent exceeding rate limit
const throttle = pThrottle({ limit: 4, interval: 1000 });

export const getSinglePost = throttle(
  async (slug: string): Promise<PostProps | undefined> => {
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
      console.log(`error getting single post: `, error);
    }
  }
);
//! throttle API calls to prevent exceeding rate limit

export const getLatestPostPreview = async () => {
  const query = gql`
    query LatestPostPreview {
      posts(orderBy: datePublished_DESC, first: 1) {
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
    const { posts }: { posts: PostPreviewProps[] } = await hygraph.request(
      query
    );

    return posts[0];
  } catch (error) {
    console.error(`error getting latest post: `, error);
  }
};

export const getAllSlugs = async () => {
  const query = gql`
    query AllPostsPreviews {
      posts {
        slug
      }
    }
  `;

  try {
    const { posts: slugs }: { posts: { slug: string }[] } =
      await hygraph.request(query);
    return slugs;
  } catch (error) {
    console.error(`error getting all slugs: `, error);
  }
};
