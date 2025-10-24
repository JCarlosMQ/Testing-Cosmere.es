import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByRole('combobox', { name: 'Buscar artículos' }).click();
  await page.getByRole('button', { name: 'Buscar' }).click();
});