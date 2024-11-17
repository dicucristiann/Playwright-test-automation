const { parsed } = require('dotenv').config();
const { BASE_URL: baseUrl, USER_NAME: userName, PASSWORD: password } = parsed;

const { test, expect } = require('@playwright/test');

//TC-01
test('Successful login with valid credentials', async ({ page }) => { 
    await page.goto(baseUrl);
    await page.fill('#user-name', userName);
    await page.fill('#password', password);
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory\.html/);
});

//TC-02
test('Login fails with invalid credentials', async ({ page }) => {
    await page.goto(baseUrl);
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');
    const errorMsg = await page.locator('[data-test="error"]').textContent();
    expect(errorMsg).toBe('Epic sadface: Username and password do not match any user in this service')
});