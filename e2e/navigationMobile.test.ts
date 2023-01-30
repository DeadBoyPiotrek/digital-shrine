test.use({ viewport: { width: 500, height: 1000 } });

import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  //Links
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'open menu' }).click();
  await page.getByRole('link', { name: 'Frontend' }).click();
  await expect(page).toHaveURL('http://localhost:3000/frontend');
  await page.getByRole('button', { name: 'open menu' }).click();
  await page.getByRole('link', { name: 'Backend' }).click();
  await expect(page).toHaveURL('http://localhost:3000/backend');
  await page.getByRole('button', { name: 'open menu' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL('http://localhost:3000/about-me');
  await page.getByRole('button', { name: 'open menu' }).click();
  await page.getByRole('link', { name: 'Main page' }).click();
  await expect(page).toHaveURL('http://localhost:3000/');
  // Wrapper closing while clicking modal
  await page.getByRole('button', { name: 'open menu' }).click();
  const backdrop = page.locator('div.MobileNavigation_wrapper__b5E2S');
  await backdrop.dispatchEvent('click');
  await expect(backdrop).toBeHidden();
});
