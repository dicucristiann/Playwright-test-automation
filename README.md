# **Playwright Test Automation Framework**

This framework uses **Playwright** for end-to-end testing. It is designed to be flexible, scalable, and easy to use, with centralized configurations and environment variable support.

---

## **Features**
- **Reusable Helpers**: Actions like login, adding items to the cart, and checkout are modularized for reuse.
- **Centralized Locators**: All element selectors and static messages are stored in `locators.js` for consistency.
- **Environment Variable Support**: Configurations like `BASE_URL`, `USER_NAME`, and `TEST_RUN` can be set dynamically in a `.env` file.
- **Cross-Browser Testing**: Supports multiple browsers, including Chromium, Firefox, and WebKit(Safari).

---

## **Setup**
### **1. Clone the Repository**
To get started, clone this repository to your local machine using:
```bash
git clone https://github.com/dicucristiann/Playwright-test-automation.git
```

### **2. Navigate to the project directory**
To get started, clone this repository to your local machine using:
```bash
cd Playwright-test-automation
```

### **3. Install Dependencies**
Ensure you have Node.js installed (tested with **v22.11.0**). Install project dependencies:
```bash
npm install
```

### **2. Configure Environment Variables**
Set up a `.env` file in the root directory based on the provided `.env.example`. Example:
```plaintext
BASE_URL=https://www.saucedemo.com/        # Base URL for the website under test
TEST_RUN=tests/e2e/checkoutSuccess.test.js # Test file to execute
HEADED=true                                # Opens browser if set true
USER_NAME=standard_user                    # Test username
PASSWORD=secret_sauce                      # Test password
SHOW_REPORT=true                           # Show report after test execution
```

---

## **Running Tests**

### **1. Run a Specific Test**
To run a specific test, update the `TEST_RUN` variable in the `.env` file with the desired test path:
```plaintext
TEST_RUN=tests/e2e/checkoutSuccess.test.js
```
Then execute:
```bash
npm test
```

---

## **Environment Variables**
Refer to `.env.example` for a template and detailed information on required variables. Update `.env` to configure your test setup dynamically.
