// P6: Verificación de imágenes en Cosmere.es
import { test, expect } from '@playwright/test';

test('Verificar carga de imágenes', async ({ page }) => {
  await page.goto('https://cosmere.es/libros-y-sagas/');

  const imagenes = await page.$$eval('img', imgs => imgs.map(img => img.src));

  for (const img of imagenes) {
    const response = await page.request.get(img);
    console.log(`Imagen: ${img}, Estado: ${response.status()}`);
    expect(response.status(), `Imagen rota: ${img}`).toBe(200);
  }
});
