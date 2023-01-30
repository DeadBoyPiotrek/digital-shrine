import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  // go to website
  await page.goto('http://localhost:3000/');
  // click latest post
  await page.locator("//img[@data-nimg='1']").click();
  // check if u got redirected
  await expect(page).toHaveURL(/blog/);
});
