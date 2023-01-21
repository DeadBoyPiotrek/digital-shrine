// import '@testing-library/jest-dom';
// import { ThemeSwitcher } from '../app/components/nav/themeSwitcher/ThemeSwitcher';

// import { fireEvent, render } from '@testing-library/react';

// describe('ThemeSwitcher', () => {
//   test('should switch between light and dark theme on button click', () => {
//     const { getByLabelText, getByTestId } = render(<ThemeSwitcher />);
//     const button = getByLabelText('theme switcher');
//     const mainIcon = getByTestId('main-icon');
//     const secondIcon = getByTestId('second-icon');

//     // Initially, the main icon should be the sun and the second icon should be the moon
//     expect(mainIcon).toHaveTextContent('sun');
//     expect(secondIcon).toHaveTextContent('moon');

//     // Simulate a click on the button
//     fireEvent.click(button);

//     // After the first click, the main icon should be the moon and the second icon should be the sun
//     expect(mainIcon).toHaveTextContent('moon');
//     expect(secondIcon).toHaveTextContent('sun');

//     // Simulate a second click on the button
//     fireEvent.click(button);

//     // After the second click, the main icon should be the sun and the second icon should be the moon
//     expect(mainIcon).toHaveTextContent('sun');
//     expect(secondIcon).toHaveTextContent('moon');
//   });
// });
