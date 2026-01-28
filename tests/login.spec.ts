import { test, expect } from '../fixtures/baseTest';
import { LoginPage } from '../pages/loginPage';

test.describe('Login flow', () => {
  test('should log in with valid credentials', async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    await page.goto(baseURL);
    await login.login('user@example.com', 'password123');
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('text=Welcome')).toBeVisible();
  });
});
