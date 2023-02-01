import { expect, test } from '@playwright/test';

test('latest post should redirect to requested url', async ({ page }) => {
  // go to website
  await page.goto('http://localhost:3000/');
  // get latest post href
  const latestPost = page.locator(
    "//div[@class='LatestPost_wrapper__uQTsW']//a[1]"
  );
  const latestPostHref = await latestPost.evaluate(e =>
    (e as HTMLLinkElement).getAttribute('href')
  );
  if (!latestPostHref) {
    throw new Error('Latest Post Href is null !');
  }
  // click latest post
  latestPost.click();

  // check if you are redirected to the requested url
  await expect(page).toHaveURL(`http://localhost:3000${latestPostHref}`);
});
