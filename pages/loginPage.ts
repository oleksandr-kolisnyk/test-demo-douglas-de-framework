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

  // forgot password link
  readonly forgotPassword = 'div.login__link';
  readonly passResetEmail = 'input[name="forgotPasswordEmail"]';
  readonly submitForgotPasswordEmail = 'button.forgot-password__button.button__primary';

  // user's Email for password reset, when submitted
  readonly userEmailPassResetConfirmationBlock = 'div.forgot-password__confirmation-email';

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

  /*
  Click Forgot Password.
  This action makes additional modal window show-up.
  */
  async clickForgotPassword() {
    await this.page.click(this.forgotPassword);
  }

  /*
  Enter Email for the Forgot Password form and Submit
  */
  async resetPasswordForEmail(email: string) {
    await this.page.fill(this.passResetEmail, email);
    await this.page.click(this.submitForgotPasswordEmail);
  }

  /*
  Get text from confirmation Email text.
  Usually it contains Email address.
  */
 async getPasswordConfirmationEmailText(): Promise<string|null> {
    return await this.page.textContent(this.userEmailPassResetConfirmationBlock);
 }
}
