import { Page } from 'playwright';
import { BasePage } from './basePage';

/*
Page represents user's account page
*/
export class AccountPage extends BasePage {
  readonly beautyPoints = 'p.loyalty-card__bubble';

  constructor(page: Page) {
    super(page);
  }

  /*
  Check if Beauty Points score is visible
  */
  async isBeautyPointsVisible(): Promise<boolean> {
    return await this.page.isVisible(this.beautyPoints);
  }
}