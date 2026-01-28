import { Page } from 'playwright';
import { BasePage } from './basePage';
import { AccountPage } from './accountPage';

/*
Login (and registration) page
*/
export class LoginPage extends BasePage {
  readonly username = 'div.login__email input';
  readonly password = 'div.login__password input';
  readonly submit = '[data-testid="button-primary"]';

  // the error text above login form
  readonly alertError = '[data-testid="alert-error"]';

  constructor(page: Page) {
    super(page);
  }

  /*
  Perform login.
  @param user: user's login
  @param pass: user's password
  */
  async login(user: string, pass: string): Promise<AccountPage> {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.submit);
    return new AccountPage(this.page);
  }

  /*
  Check if any login form alert is displayed
  */
  async isAlertErrorVisible(): Promise<boolean> {
    return await this.page.isVisible(this.alertError);
  }
}
