// P3: Medición del tiempo de carga en Cosmere.es
import { test, expect } from '@playwright/test';

test('Medir tiempo de carga de la página inicial', async ({ page }) => {
  const inicio = Date.now();
  await page.goto('https://cosmere.es/');
  const fin = Date.now();

  const tiempoCarga = (fin - inicio) / 1000;
  console.log(`Tiempo de carga: ${tiempoCarga} segundos`);

  expect(tiempoCarga).toBeLessThanOrEqual(2.5);
});
