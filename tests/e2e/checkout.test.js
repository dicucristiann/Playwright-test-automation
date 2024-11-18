const { parsed } = require('dotenv').config();
const { BASE_URL: baseUrl, USER_NAME: userName, PASSWORD: password } = parsed;

const { test, expect } = require('@playwright/test');

test('Complete checkout succesfully', async ({ page }) => {
    await page.goto(baseUrl)
    await page.fill('#user-name', userName);
    await page.fill('#password', password);
    await page.click('#login-button');
    
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('.shopping_cart_link');

    await page.click('[data-test="checkout"]');

    await page.fill('[data-test="firstName"]', 'testUse');
    await page.fill('[data-test="lastName"]', 'userV3');
    await page.fill('[data-test="postalCode"]', '012345');
    await page.click('[data-test="continue"]');

    await page.click('[data-test="finish"]');
    const confirmationMessage = await page.locator('.complete-header').textContent();
    expect(confirmationMessage).toBe('Thank you for your order!')

});