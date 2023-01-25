import { LatestPost } from '../app/components/latestPost/LatestPost';
import { dateToLongMonthFormat } from '../lib/helpers';
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

describe('Latest Post', () => {
  test('should render correctly with latestDataProps', async () => {
    const frontendPostsData = await getAllPostsPreviews('frontend');

    const titleFromFunction = frontendPostsData[0].title;
    const dateFromFunction = frontendPostsData[0].datePublished;
    const excerptFromFunction = frontendPostsData[0].excerpt;

    const { getByRole, getByText } = render(
      <LatestPost latestPostData={frontendPostsData[0]} />
    );

    const titleFromElement = getByRole('heading', { name: titleFromFunction });
    expect(titleFromElement).toBeInTheDocument();

    const dateFromElement = getByText(dateToLongMonthFormat(dateFromFunction));
    expect(dateFromElement).toBeInTheDocument();

    const excerptFromElement = getByText(excerptFromFunction);
    expect(excerptFromElement).toBeInTheDocument();

    const image = getByRole('img');
    expect(image).toBeInTheDocument();
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
});
