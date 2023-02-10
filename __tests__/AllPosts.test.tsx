import { AllPosts } from '@/components/allPosts/AllPosts';
import { getAllPostsPreviews } from '@/lib/hygraphHelpers';
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
          img: {
            url: 'https://media.graphassets.com/rmfkdArRtOYJS8luMk0K',
            width: 1000,
            height: 500,
          },
        },
        {
          id: 'clb2deule0evs0bw7h41i0sdfshv',
          title: "If you're a React developer.",
          slug: 'typescript-in-frontend',
          excerpt:
            'Using TypeScript with React can improve the reliability, readability, and maintainability of your code. ',
          datePublished: '2022-12-16',
          img: {
            url: 'https://media.graphassets.com/rmfkdArRtOYJS8luMk0K',
            width: 1000,
            height: 500,
          },
        },
      ]);
    }),
  };
});

describe('AllPosts', () => {
  test('should render correctly with frontendPostsData prop', async () => {
    const frontendPostsData = await getAllPostsPreviews('frontend');
    const { getByRole } = render(
      <AllPosts frontendPostsData={frontendPostsData} />
    );
    const post = getByRole('link');
    expect(post).toBeInTheDocument();

    expect(getAllPostsPreviews).toHaveBeenCalled();
    expect(getAllPostsPreviews).toHaveBeenCalledWith('frontend');
    expect(getAllPostsPreviews).toHaveBeenCalledTimes(1);
  });
});
