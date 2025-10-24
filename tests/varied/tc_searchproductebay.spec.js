import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByRole('link', { name: 'Avanzada' }).click();
  await page.getByTestId('_nkw').click();
  await page.getByTestId('_nkw').fill('laptop asus');
  await page.getByRole('textbox', { name: 'Ingresa el valor del rango de precio mínimo. Bs.' }).click();
  await page.getByRole('textbox', { name: 'Ingresa el valor del rango de precio mínimo. Bs.' }).fill('1500');
  await page.getByRole('textbox', { name: 'Ingresa el valor del rango de precio máximo, Bs.' }).click();
  await page.getByRole('textbox', { name: 'Ingresa el valor del rango de precio máximo, Bs.' }).fill('1000');
  await page.getByRole('textbox', { name: 'Ingresa el valor del rango de precio mínimo. Bs.' }).click();
  await page.getByRole('textbox', { name: 'Ingresa el valor del rango de precio mínimo. Bs.' }).fill('5000');
  await page.getByRole('textbox', { name: 'Ingresa el valor del rango de precio máximo, Bs.' }).click();
  await page.getByRole('textbox', { name: 'Ingresa el valor del rango de precio máximo, Bs.' }).fill('3500');
  await page.locator('div').filter({ hasText: /^BuscarBorrar opciones$/ }).getByRole('button').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Computadora portátil Asus Vivobook 15 X1504ZA - 15,6 pulgadas FHD, Intel i5' }).click();
  const page1 = await page1Promise;
});