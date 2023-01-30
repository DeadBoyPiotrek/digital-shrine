import { expect, test } from '@playwright/test';

test('desktop navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Frontend Frontend' }).click();
  // expect(page.url()).toBe('http://localhost:3000/frontend');
  await expect(page).toHaveURL('http://localhost:3000/frontend');

  await page.getByRole('link', { name: 'Backend Backend' }).click();
  // expect(page.url()).toBe('http://localhost:3000/backend');
  await expect(page).toHaveURL('http://localhost:3000/backend');

  await page.getByRole('link', { name: 'About About' }).click();

  await expect(page).toHaveURL('http://localhost:3000/about-me');

  await page
    .getByRole('link', { name: 'digital-shrine.dev digital-shrine.dev' })
    .click();
  // expect(page.url()).toBe('http://localhost:3000/');
  await expect(page).toHaveURL('http://localhost:3000/');
});
