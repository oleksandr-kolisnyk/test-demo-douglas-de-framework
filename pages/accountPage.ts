import { Page } from 'playwright';
import { BasePage } from './basePage';

export class AccountPage extends BasePage {
  readonly beautyPoints = 'p.loyalty-card__bubble';

  constructor(page: Page) {
    super(page);
  }
}