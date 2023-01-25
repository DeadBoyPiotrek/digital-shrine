import { MdxTopSection } from '../app/components/mdx/MdxTopSection';
import { dateToLongMonthFormat } from '../lib/helpers';
import { getSinglePost } from '../lib/hygraphHelpers';
import { render } from '../test-utils';
import './matchMedia.mock';

jest.mock('../lib/hygraphHelpers', () => {
  return {
    getSinglePost: jest.fn(() => {
      return Promise.resolve({
        slug: 'typescript-in-frontend',
        id: 'clb2deule0evs0bw7h41i0shv',
        title: "If you're a React developer, give TypeScript a try.",
        content: '## Why You Should Use TypeScript as a React Developer',
        datePublished: '2022-12-16',
        excerpt:
          'Using TypeScript with React can improve the reliability, readability, ',
        img: { url: 'https://media.graphassets.com/rmfkdArRtOYJS8luMk0K' },
      });
    }),
  };
});

describe('MdxTopSection', () => {
  test('should render correctly all the top section elements', async () => {
    const post = await getSinglePost('type');
    if (!post) {
      console.error('not post provided');
    } else {
      const { debug, getByRole, getByText } = render(
        <MdxTopSection post={post} />
      );

      const title = getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();

      const dateFromFunction = post.datePublished;
      const dateFromElement = getByText(
        dateToLongMonthFormat(dateFromFunction)
      );
      expect(dateFromElement).toBeInTheDocument();

      const image = getByRole('img');
      expect(image).toBeInTheDocument();

      debug();
    }
  });
});
