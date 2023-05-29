import { test, expect } from '@playwright/test';


test.describe('Blog', () => {
  test('Verify Recent Posts count and verify the length of each list item', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/blog');

    const recentPostsList = page.locator('#recent-posts-3 ul li')

    for (const post of await recentPostsList.elementHandles()) {
        expect(((await post.textContent()).trim()).length).toBeGreaterThan(11)
    }
    expect(await recentPostsList.count()).toEqual(5)
})

})