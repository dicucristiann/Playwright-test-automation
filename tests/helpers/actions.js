const { parsed } = require('dotenv').config();
const { BASE_URL: baseUrl, USER_NAME: userName, PASSWORD: password } = parsed;
const { WEB } = require('./locators');

async function login(page) {
  await page.goto(baseUrl);
  await page.fill(WEB.LOGIN.USERNAME_INPUT, userName);
  await page.fill(WEB.LOGIN.PASSWORD_INPUT, password);
  await page.click(WEB.LOGIN.LOGIN_BUTTON);
}

async function addItemToCart(page, itemSelector = WEB.CART.ADD_TO_CART_BACKPACK) {
  await page.click(itemSelector);
}

async function checkout(page, firstName, lastName, postalCode) {
  await page.click(WEB.CHECKOUT.CHECKOUT_BUTTON);
  await page.fill(WEB.CHECKOUT.FIRST_NAME_INPUT, firstName);
  await page.fill(WEB.CHECKOUT.LAST_NAME_INPUT, lastName);
  await page.fill(WEB.CHECKOUT.POSTAL_CODE_INPUT, postalCode);
  await page.click(WEB.CHECKOUT.CONTINUE_BUTTON);
  await page.click(WEB.CHECKOUT.FINISH_BUTTON);
}

module.exports = { login, addItemToCart, checkout };
