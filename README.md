# test-demo-douglas-de-framework

Test automation framework for demo, using TypeScript + Playwright.
Using playwright/test as test runner.
Each test start each own browser context.

## Installation

Assuming you have NodeJs properly installed, install project:
``npm install``

In some environments "playwright/test" could be omitted if "playwright" is installed globally.
If it's your case, install "playwright/test" explicitly:
``npm install @playwright/test``

Make sure to install Playwright's Chrome browser:
```npx playwright install chromium``

## Configure Environment

Create `.env` file in the root of the project. It has to contain web-site's URL, user login and password.
Please refer to `example.env`.

## Run tests

Run all tests and generate HTML reports:
``npm run test``

Run all tests without HTML reports:
``npm run test:ci``

## Reports

Please see `reports` and `test-results` for HTML reports and plain report respectively.