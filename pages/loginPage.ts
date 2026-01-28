import { Page } from 'playwright';
import { BasePage } from './basePage';
import { AccountPage } from './accountPage';

export class LoginPage extends BasePage {
  readonly username = 'div.login__email input';
  readonly password = 'div.login__password input';
  readonly submit = '[data-testid="button-primary"]';

  constructor(page: Page) {
    super(page);
  }

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.submit);
    return new AccountPage(this.page);
  }
}
