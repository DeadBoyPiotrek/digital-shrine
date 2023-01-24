import { ThemeSwitcher } from '../app/components/nav/themeSwitcher/ThemeSwitcher';
import { fireEvent, render } from '../test-utils';
import './matchMedia.mock';

describe('ThemeSwitcher', () => {
  test('should switch between dark and light theme on button click', () => {
    const { getByLabelText } = render(<ThemeSwitcher />);
    const button = getByLabelText('theme switcher');
    expect(button).toBeInTheDocument();
    const html = document.querySelector('html');
    // Initially, the data-theme attribute should be 'dark'
    expect(html).toHaveAttribute('data-theme', 'dark');
    // Simulate a click on the button
    fireEvent.click(button);
    // The data-theme attribute should be 'dark'
    expect(html).toHaveAttribute('data-theme', 'light');
    // Simulate a second click on the button
    fireEvent.click(button);
    // The data-theme attribute should be 'dark'
    expect(html).toHaveAttribute('data-theme', 'dark');
  });
});
