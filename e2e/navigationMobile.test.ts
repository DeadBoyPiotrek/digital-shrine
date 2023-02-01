test.use({ viewport: { width: 500, height: 1000 } });

import { expect, test } from '@playwright/test';

test('should navigate but in mobile 😲', async ({ page }) => {
  // navigate to the main page
  await page.goto('http://localhost:3000/');

  // open the menu by clicking on the "open menu" button
  await page.getByRole('button', { name: 'open menu' }).click();

  // click on the "Frontend" link
  await page.getByRole('link', { name: 'Frontend' }).click();

  // verify that the URL is "http://localhost:3000/frontend"
  await expect(page).toHaveURL('http://localhost:3000/frontend');

  // open the menu again by clicking on the "open menu" button
  await page.getByRole('button', { name: 'open menu' }).click();

  // click on the "Backend" link
  await page.getByRole('link', { name: 'Backend' }).click();

  // verify that the URL is "http://localhost:3000/backend"
  await expect(page).toHaveURL('http://localhost:3000/backend');

  // open the menu again by clicking on the "open menu" button
  await page.getByRole('button', { name: 'open menu' }).click();

  // click on the "About" link
  await page.getByRole('link', { name: 'About' }).click();

  // verify that the URL is "http://localhost:3000/about-me"
  await expect(page).toHaveURL('http://localhost:3000/about-me');

  // open the menu again by clicking on the "open menu" button
  await page.getByRole('button', { name: 'open menu' }).click();

  // click on the "Main page" link
  await page.getByRole('link', { name: 'Main page' }).click();

  // verify that the URL is "http://localhost:3000/"
  await expect(page).toHaveURL('http://localhost:3000/');

  // open the menu again by clicking on the "open menu" button
  await page.getByRole('button', { name: 'open menu' }).click();

  // close the menu by clicking on the backdrop (wrapper)
  const backdrop = page.locator('div.MobileNavigation_wrapper__b5E2S');
  await backdrop.dispatchEvent('click');

  // verify that the backdrop (wrapper) is hidden
  await expect(backdrop).toBeHidden();
});
