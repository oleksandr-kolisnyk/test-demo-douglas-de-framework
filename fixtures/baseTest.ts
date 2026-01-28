import { test as base, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { config } from '../config';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';

type BaseTest = {
  baseURL: string;
  loginPage: LoginPage;
};

export const test = base.extend<BaseTest>({
  baseURL: async ({}, use) => {
    await use(config.baseUrl);
  },

  // Navigate to LoginPage before every test
  loginPage: async ({ baseURL, page }, use) => {
      await page.goto(baseURL);
      const homePage = new HomePage(page);
      await homePage.acceptAllCookies();
      use(await homePage.goToLoginPage());
  },
  browser: async ({}, use) => {
    const browser = await chromium.launch();
    await use(browser);
    await browser.close();
  },
  context: async ({ baseURL, browser }, use) => {
    const context = await browser.newContext({
      baseURL: baseURL
    });
    await use(context);
    await context.close();
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
});

export { expect };
