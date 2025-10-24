import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ufcespanol.com/');
  await page.getByRole('link', { name: 'video video Pelea Gratis:' }).click();
  await page.locator('#lmc18h9z2573lchoza').click();
  await page.locator('#lmc18h9z2573lchoza').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'video UFC Baku: Peleadores a' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});