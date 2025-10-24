import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.getByRole('link', { name: 'regístrate' }).click();
  await page.locator('iframe[title="Widget que contiene una casilla de verificación para el desafío de seguridad de hCaptcha"]').contentFrame().getByRole('checkbox', { name: 'Casilla de verificación' }).click();
  await page.locator('iframe[title="Contenido principal del desafío hCaptcha"]').contentFrame().getByRole('button', { name: 'Imagen de desafío 2' }).click();
  await page.locator('iframe[title="Contenido principal del desafío hCaptcha"]').contentFrame().getByRole('button', { name: 'Imagen de desafío 9' }).click();
  await page.locator('iframe[title="Contenido principal del desafío hCaptcha"]').contentFrame().getByRole('button', { name: 'Imagen de desafío 1' }).click();
  await page.locator('iframe[title="Contenido principal del desafío hCaptcha"]').contentFrame().getByRole('button', { name: 'Verificar respuestas' }).click();
  await page.getByRole('textbox', { name: 'Correo electrónico' }).click();
  await page.getByRole('link', { name: 'Google, se abre en la pestaña' }).click();
  await page.locator('html').click();
  await page.getByRole('textbox', { name: 'Correo electrónico o teléfono' }).click();
  await page.getByRole('textbox', { name: 'Correo electrónico o teléfono' }).fill('carlosqueque');
  await page.getByRole('button', { name: 'Siguiente' }).click();
});