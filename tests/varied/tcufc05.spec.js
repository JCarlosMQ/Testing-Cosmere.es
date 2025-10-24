import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ufcespanol.com/');
  await page.getByRole('link', { name: 'Contenido Destacado' }).click();
  await page.getByRole('button', { name: 'Cerrar' }).click();
  await page.getByRole('link', { name: 'Contenido Destacado' }).click();
  await page.getByRole('link', { name: 'Carga más' }).click();
  await page.getByText('There are no stories matching').click();
  await page.getByRole('link', { name: 'Peleadores' }).click();
  await page.getByRole('link', { name: 'Rankings' }).click();
});