import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ufcespanol.com/');
  await page.getByRole('link', { name: 'Rankings' }).click();
  await page.getByRole('button', { name: 'Cerrar' }).click();
});