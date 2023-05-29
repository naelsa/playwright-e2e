import { test, expect } from '@playwright/test';
const path = require('path');


test.describe('Upload file', () => {
  test('Should upload a test file', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/cart');

    const filePath = path.join(__dirname, '../data/logo.png');
    await page.setInputFiles('input#upfile_1', filePath);
    await page.locator('#upload_1').click();
    await expect(page.locator('#wfu_messageblock_header_1_1'))
      .toContainText('uploaded successfully');

})


test('Should upload a test file with hidden input', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/cart');

    const filePath = path.join(__dirname, '../data/logo.png');
    await page.evaluate(() => {
        const selector = document.querySelector('input#upfile_1');
        if (selector) {
            selector.className = ''
        }
    })
    await page.setInputFiles('input#upfile_1', filePath);
    await page.locator('#upload_1').click();
    await expect(page.locator('#wfu_messageblock_header_1_1'))
      .toContainText('uploaded successfully');

})

test('Should upload a large test file', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/cart');

    const filePath = path.join(__dirname, '../data/testfile.pdf');
    await page.setInputFiles('input#upfile_1', filePath);
    await page.locator('#upload_1').click();
    await page.locator('#wfu_messageblock_header_1_1')
      .waitFor({ state: 'visible', timeout: 20000})
    await expect(page.locator('#wfu_messageblock_header_1_1'))
      .toContainText('uploaded successfully');

})

})