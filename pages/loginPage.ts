import { Page } from 'playwright';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  readonly username = '#username';
  readonly password = '#password';
  readonly submit = 'button[type="submit"]';

  constructor(page: Page) {
    super(page);
  }

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.submit);
  }
}
