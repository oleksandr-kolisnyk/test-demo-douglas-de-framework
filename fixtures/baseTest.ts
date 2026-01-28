import { test as base, expect } from '@playwright/test';
import { config } from '../config';

type BaseTest = {
  baseURL: string;
};

export const test = base.extend<BaseTest>({
  baseURL: async ({}, use) => {
    await use(config.baseUrl);
  },
});

export { expect };
