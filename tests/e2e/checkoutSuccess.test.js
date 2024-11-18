const { test, expect } = require('@playwright/test');
const { login, addItemToCart, checkout } = require('../helpers/actions');
const { WEB } = require('../helpers/locators');


test('Complete checkout succesfully', async ({ page }) => {
    await login(page);
    await addItemToCart(page);
    await page.click(WEB.CART.CART_LINK);

    await checkout(page, 'Test User', 'Demo', '01234')

    const confirmationMessage = await page.locator(WEB.CHECKOUT.CONFIRMATION_HEADER).textContent();
    expect(confirmationMessage).toBe(WEB.MESSAGE.SUCCESS);
})