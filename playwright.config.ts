import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  reporter: [['list'], ['html', { outputFolder: 'reports/html' }]],
  use: {
    headless: false,
    viewport: { width: 1707, height: 1067 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    // some headers to emulate real user browsing
    timezoneId: 'Europe/Berlin',
    userAgent: 'Chrome/117.0.0.0',
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'sec-ch-ua': '',
    },
  },
});
