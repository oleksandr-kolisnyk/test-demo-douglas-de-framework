import { config } from '../config';
import { test, expect } from '../fixtures/baseTest';
import { AccountPage } from '../pages/accountPage';
import { logger } from '../utils/logger';

test.describe('Login flow', () => {

  test('should log in with valid credentials', async ({ loginPage, page }) => {
    const accountPage: AccountPage = await loginPage.login(config.userName, config.password);
    await expect(page.locator(accountPage.beautyPoints)).toBeVisible({ timeout: 5000 });
  });

  test('should fail on wrong password', async ({ loginPage, page }) => {
    const wrongPassword = 'wrong123';
    await loginPage.login(config.userName, wrongPassword);
    await expect(page.locator(loginPage.alertError)).toBeVisible();
  });

});
