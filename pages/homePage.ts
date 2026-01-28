import { Page } from 'playwright';
import { BasePage } from './basePage';
import { LoginPage } from './loginPage';

/*
Home page
*/
export class HomePage extends BasePage {
  readonly acceptAllCookiesButton = '[data-testid="uc-accept-all-button"]';
  readonly accountIcon = '[data-testid="header-component-item--account"]';

  constructor(page: Page) {
    super(page);
  }

  /*
  Click on Accept All Cookies on corresponding modal
  */
  async acceptAllCookies() {
    await this.page.click(this.acceptAllCookiesButton);
  }

  /*
  Click on user's account icon.
  For unauthorized users it leads to login/registration page.
  */
  async goToLoginPage(): Promise<LoginPage> {
    await this.page.click(this.accountIcon);
    return new LoginPage(this.page);
  }
}
