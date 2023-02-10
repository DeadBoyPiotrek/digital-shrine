import { Nav } from '../app/components/nav/Nav';
import { render } from '../test-utils';
import './matchMedia.mock';
describe('Nav', () => {
  test('should render correctly all the nav elements', () => {
    const { getByRole, getByLabelText } = render(<Nav />);

    const mainPageLink = getByRole('link', {
      name: 'digital-shrine.dev',
    });
    expect(mainPageLink).toBeInTheDocument();

    const frontendLink = getByRole('link', { name: 'Frontend' });
    expect(frontendLink).toBeInTheDocument();

    const backendLink = getByRole('link', { name: 'Backend' });
    expect(backendLink).toBeInTheDocument();

    const aboutLink = getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();

    const themeSwitcher = getByLabelText('theme switcher');
    expect(themeSwitcher).toBeInTheDocument();
  });
});
