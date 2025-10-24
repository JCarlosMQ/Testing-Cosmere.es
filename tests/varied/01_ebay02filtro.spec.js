import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByRole('combobox', { name: 'Buscar artículos' }).click();
  await page.getByRole('combobox', { name: 'Buscar artículos' }).fill('laptop lenovo');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('textbox', { name: 'Valor mínimo en Bs.' }).click();
  await page.getByRole('textbox', { name: 'Valor mínimo en Bs.' }).fill('7000');
  await page.getByRole('textbox', { name: 'Valor máximo en Bs.' }).click();
  await page.getByRole('textbox', { name: 'Valor máximo en Bs.' }).fill('10000');
  await page.locator('.x-textrange__button').click();

});