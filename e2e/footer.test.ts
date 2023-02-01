import { expect, test } from '@playwright/test';

test('should navigate to GitHub digital-shrine repo', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  // go to website
  await page.goto('http://localhost:3000/');

  // Start waiting for new page before clicking. Note no await.
  const pagePromise = context.waitForEvent('page');
  // click github icon
  await page.locator("//ul[@class='Footer_list__LpxYw']//li[1]").click();
  const newPage = await pagePromise;
  await newPage.waitForLoadState();

  // check if you are redirected to the requested url
  await expect(newPage).toHaveURL(
    `https://github.com/DeadBoyPiotrek/digital-shrine`
  );
});
