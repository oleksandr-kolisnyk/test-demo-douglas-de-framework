import { Page } from 'playwright';
import { BasePage } from './basePage';
import { LoginPage } from './loginPage';

export class HomePage extends BasePage {
  readonly acceptAllCookiesButton = '[data-testid="uc-accept-all-button"]';
  readonly accountIcon = '[data-testid="header-component-item--account"]';

  constructor(page: Page) {
    super(page);
  }

  async acceptAllCookies() {
    await this.page.click(this.acceptAllCookiesButton);
  }

  async goToLoginPage() {
    await this.page.click(this.accountIcon);
    return new LoginPage(this.page);
  }
}
