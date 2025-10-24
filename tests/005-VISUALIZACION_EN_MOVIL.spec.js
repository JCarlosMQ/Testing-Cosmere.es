// P5: Validación de diseño responsivo en móvil
import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 12'] });

test('Visualización en móvil', async ({ page }) => {
  await page.goto('https://cosmere.es/');
  
  const isMobile = await page.evaluate(() => window.innerWidth <= 768);
  console.log(`¿Es móvil? ${isMobile}`);
  expect(isMobile).toBeTruthy();

  const titulo = await page.title();
  console.log(`Título de la página en móvil: ${titulo}`);
  expect(titulo).toContain('Cosmere');
});
