import { config } from '../config';
import { test, expect } from '../fixtures/baseTest';
import { AccountPage } from '../pages/accountPage';
import { logger } from '../utils/logger';

test.describe('Login flow', () => {

  test('should log in with valid credentials', async ({ loginPage, page }) => {
    logger.info(config.userName);
    const accountPage: AccountPage = await loginPage.login(config.userName, config.password);
    await expect(page.locator(accountPage.beautyPoints)).toBeVisible();
  });
});
