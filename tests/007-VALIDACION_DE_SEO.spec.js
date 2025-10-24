// Validación SEO básico
import { test, expect } from '@playwright/test';

test('Validar etiquetas SEO en la página principal', async ({ page }) => {
  await page.goto('https://cosmere.es/');
  
  const title = await page.title();
  const description = await page.locator('meta[name="description"]').getAttribute('content');
  
  console.log(`Título: ${title}`);
  console.log(`Meta description: ${description}`);

  expect(title.length).toBeGreaterThan(0);
  expect(description).not.toBeNull();
});
