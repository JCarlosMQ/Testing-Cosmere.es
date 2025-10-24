// Validación de enlaces de afiliados
import { test, expect } from '@playwright/test';

test('Validar que los enlaces de afiliación respondan con HTTP 200', async ({ page }) => {
  await page.goto('https://cosmere.es/');
  
  // Extraer todos los enlaces de la página
  const links = await page.$$eval('a', as => as.map(a => a.href));

  for (const link of links) {
    if (link.includes('amazon')) {
      const response = await page.request.get(link);
      console.log(`Enlace: ${link}, Estado: ${response.status()}`);
      expect(response.status(), `Error en enlace: ${link}`).toBe(200);
    }
  }
});
