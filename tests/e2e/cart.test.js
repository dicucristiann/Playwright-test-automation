const { parsed } = require('dotenv').config();
const { BASE_URL: baseUrl, USER_NAME: userName, PASSWORD: password } = parsed;

const { test, expect } = require('@playwright/test');

test('Add item to the cart', async ({ page }) => {
    await page.goto(baseUrl)
    await page.fill('#user-name', userName);
    await page.fill('#password', password);
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory\.html/);

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    const cartBadge = await page.locator('.shopping_cart_badge').textContent();
    expect(cartBadge).toBe('1')
});