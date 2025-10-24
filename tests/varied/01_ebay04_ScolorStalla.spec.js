import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByRole('combobox', { name: 'Buscar artículos' }).click();
  await page.getByRole('combobox', { name: 'Buscar artículos' }).fill('singlet powerlifting');
  await page.getByRole('button', { name: 'Buscar' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Singlet de lucha libre Exxact Sports liso para hombre, camiseta de' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: '¡Cómpralo ahora!' }).click();
});