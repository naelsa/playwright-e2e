import { test, expect } from '@playwright/test';


test.describe('Home', () => {
  test('Open HomePage and verify title', async ({ page }) => {
    await page.goto('https://practice.automationbro.com');
    await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
  })
  
  test('Open About page and verify title', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/about');
    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
  })

  test('Click Get started button using CSS Selector', async ({ page }) => {
    await page.goto('https://practice.automationbro.com');
    await page.locator('#get-started').click();
    await expect(page).toHaveURL(/.*#get-started/);
  })

  test('Verify heading text is visible using Text selector', async ({ page }) => {
    await page.goto('https://practice.automationbro.com');
    const headingText = page.locator('text=Think different. Make different.')
    await expect(headingText).toBeVisible();
  })

  test('Verify home link is enabled using Text and CSS selector', async ({ page }) => {
    await page.goto('https://practice.automationbro.com');
    const homeText = page.locator('#primary-menu:has-text("Home")')
    await expect(homeText).toBeEnabled();
  })

  test('Verify search icon is visible using XPath selector', async ({ page }) => {
    await page.goto('https://practice.automationbro.com');
    const searchIcon = page.locator('//*[@id="header-action"]//*[@class="tg-icon tg-icon-search"]')
    await expect(searchIcon).toBeVisible();
  })

  test('Verify text of all nav links', async ({ page }) => {
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];
    await page.goto('https://practice.automationbro.com');
    const navLinks = page.locator('#primary-menu li[id*=menu]')
    expect(await navLinks.allTextContents()).toEqual(expectedLinks);
  })

})
