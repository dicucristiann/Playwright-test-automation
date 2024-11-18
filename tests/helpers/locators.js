const WEB = {
    LOGIN: {
      USERNAME_INPUT: '#user-name',
      PASSWORD_INPUT: '#password',
      LOGIN_BUTTON: '#login-button',
    },
    CART: {
      ADD_TO_CART_BACKPACK: '[data-test="add-to-cart-sauce-labs-backpack"]',
      CART_LINK: '.shopping_cart_link',
    },
    CHECKOUT: {
      CHECKOUT_BUTTON: '[data-test="checkout"]',
      FIRST_NAME_INPUT: '[data-test="firstName"]',
      LAST_NAME_INPUT: '[data-test="lastName"]',
      POSTAL_CODE_INPUT: '[data-test="postalCode"]',
      CONTINUE_BUTTON: '[data-test="continue"]',
      FINISH_BUTTON: '[data-test="finish"]',
      CONFIRMATION_HEADER: '.complete-header',
    },
    MESSAGE: {
        SUCCESS: 'Thank you for your order!',
    },
  };
  
  module.exports = { WEB };
  