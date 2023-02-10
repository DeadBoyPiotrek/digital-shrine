import { expect, test } from '@playwright/test';

test('should navigate 😮 ', async ({ page }) => {
  // navigate to the main page
  await page.goto('http://localhost:3000/');

  // click on the "Frontend" link
  await page.getByRole('link', { name: 'Frontend' }).click();

  // verify that the URL is "http://localhost:3000/frontend"
  await expect(page).toHaveURL('http://localhost:3000/frontend');

  // click on the "Backend" link
  await page.getByRole('link', { name: 'Backend' }).click();

  // verify that the URL is "http://localhost:3000/backend"
  await expect(page).toHaveURL('http://localhost:3000/backend');

  // click on the "About" link
  await page.getByRole('link', { name: 'About' }).click();

  // verify that the URL is "http://localhost:3000/about-me"
  await expect(page).toHaveURL('http://localhost:3000/about-me');

  // click on the "digital-shrine.dev" link
  await page.getByRole('link', { name: 'digital-shrine.dev' }).click();

  // verify that the URL is "http://localhost:3000/"
  await expect(page).toHaveURL('http://localhost:3000/');
});
