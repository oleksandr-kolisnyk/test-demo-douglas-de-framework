import { config } from '../config';
import { test, expect } from '../fixtures/baseTest';
import { AccountPage } from '../pages/accountPage';
import { logger } from '../utils/logger';

test.describe('Login flow', () => {

  test('should log in with valid credentials', async ({ loginPage }) => {
    logger.info("Log in with valid credentials");
    const accountPage: AccountPage = await loginPage.login(config.userName, config.password);

    logger.info("Verify that user's accouint page is opened and Beauty Points score is displayed");
    expect(accountPage.isBeautyPointsVisible()).toBeTruthy();
  });

  test('should fail on wrong password', async ({ loginPage }) => {
    const wrongPassword = 'wrong123';
    logger.info("Log in with wrong password");
    await loginPage.login(config.userName, wrongPassword);

    logger.info("Verify that alert error is displayed");
    expect(loginPage.isAlertErrorVisible()).toBeTruthy();
  });

});
