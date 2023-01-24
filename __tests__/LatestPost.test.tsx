import { LatestPost } from '../app/components/latestPost/LatestPost';
import { getAllPostsPreviews } from '../lib/hygraphHelpers';
import { render } from '../test-utils';
import './matchMedia.mock';

jest.mock('../lib/hygraphHelpers', () => {
  return {
    getAllPostsPreviews: jest.fn(() => {
      return Promise.resolve([
        {
          id: 'clb2deule0evs0bw7h41i0shv',
          title: "If you're a React developer, give TypeScript a try.",
          slug: 'typescript-in-frontend',
          excerpt:
            'Using TypeScript with React can improve the reliability, readability, and maintainability of your code. It can also provide improved code completion and compatibility with other libraries.',
          datePublished: '2022-12-16',
          img: { url: 'https://media.graphassets.com/rmfkdArRtOYJS8luMk0K' },
        },
        {
          id: 'clb2deule0evs0bw7h41i0sdfshv',
          title: "If you're a React developer.",
          slug: 'typescript-in-frontend',
          excerpt:
            'Using TypeScript with React can improve the reliability, readability, and maintainability of your code. ',
          datePublished: '2022-12-16',
          img: { url: 'https://media.graphassets.com/rmfkdArRtOYJS8luMk0K' },
        },
      ]);
    }),
  };
});

describe('AllPosts', () => {
  test('should render correctly with latestDataProps', async () => {
    const frontendPostsData = await getAllPostsPreviews('frontend');
    const title = frontendPostsData[0].title;
    const { getByRole, debug } = render(
      <LatestPost latestPostData={frontendPostsData[0]} />
    );
    const post = getByRole('heading', { name: title });
    expect(post).toBeInTheDocument();
    debug();
  });

  test('should contain link to blog post', async () => {
    const frontendPostsData = await getAllPostsPreviews('frontend');
    const slug = frontendPostsData[0].slug;
    const { getByRole } = render(
      <LatestPost latestPostData={frontendPostsData[0]} />
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', `/blog/${slug}`);
  });

  test('should redirect to blog post after clicking', () => {});
});
