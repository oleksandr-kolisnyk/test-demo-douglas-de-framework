/*
 Lightweight helper module for creating pages/contexts if you prefer
 to import and reuse across tests instead of using local before/after blocks.
 Example usage:
 const { browserLauncher } = require('../fixtures/testFixtures');
 const browser = await browserLauncher.launch();
*/
import { chromium, Browser } from 'playwright';

export const browserLauncher = {
  async launch(
    headless = process.env.MOCHA_HEADLESS !== 'false',
  ): Promise<Browser> {
    return chromium.launch({ headless });
  },
};
