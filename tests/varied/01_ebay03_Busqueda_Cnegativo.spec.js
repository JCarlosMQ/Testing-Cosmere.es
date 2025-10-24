import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByRole('combobox', { name: 'Buscar artículos' }).click();
  await page.getByRole('combobox', { name: 'Buscar artículos' }).fill('Singlet powerlifting');
  await page.getByRole('button', { name: 'Buscar' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('a').filter({ hasText: 'Singlet de lucha libre Exxact Sports liso para hombre, camiseta de' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Color: Selecciona' }).click();
  await page1.getByRole('option', { name: 'Azul' }).click();
  await page1.getByRole('button', { name: 'Tamaño: Selecciona' }).click();
  await page1.getByTestId('x-msku-evo').getByText('Medio').click();
  await page1.getByRole('textbox', { name: 'More than 10 available 73 sold' }).click();
  await page1.getByRole('textbox', { name: 'More than 10 available 73 sold' }).fill('-1');
  await page1.getByRole('textbox', { name: 'More than 10 available 73 sold' }).click();
  await page1.getByRole('textbox', { name: 'More than 10 available 73 sold' }).fill('-3');
  await page1.getByRole('textbox', { name: 'More than 10 available 73 sold' }).click();
  await page1.getByRole('textbox', { name: 'More than 10 available 73 sold' }).fill('1');

});