import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ufcespanol.com/');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
});