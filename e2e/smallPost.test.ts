import { expect, test } from '@playwright/test';

test('Small Post Test', async ({ page }) => {
  // Go to the Frontend page
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Frontend Frontend' }).click();

  // Get the first small post in Frontend page
  const firstSmallPostFrontend = await page.locator(
    "//div[@class='AllPosts_wrapper__1sjzx']//a[1]"
  );

  // Get the href of the first small post in Frontend page
  const hrefFront = await firstSmallPostFrontend.evaluate(e =>
    (e as HTMLLinkElement).getAttribute('href')
  );

  // Click the first small post in Frontend page
  await firstSmallPostFrontend.click();

  // Expect the URL to be the href of the first small post in Frontend page
  await expect(page).toHaveURL(`http://localhost:3000${hrefFront}`);

  // Go to the Backend page
  await page.getByRole('link', { name: 'Backend Backend' }).click();

  // Get the first small post in Backend page
  const firstSmallPostBackend = await page.locator(
    "//div[@class='AllPosts_wrapper__1sjzx']//a[1]"
  );

  // Get the href of the first small post in Backend page
  const hrefBack = await firstSmallPostBackend.evaluate(e =>
    (e as HTMLLinkElement).getAttribute('href')
  );

  // Click the first small post in Backend page
  await firstSmallPostBackend.click();

  // Expect the URL to be the href of the first small post in Backend page
  await expect(page).toHaveURL(`http://localhost:3000${hrefBack}`);
});
