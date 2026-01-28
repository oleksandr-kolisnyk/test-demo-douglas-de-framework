import { Page } from 'playwright';

/*
Abstract representation of every page with basic methods
*/
export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }
}
