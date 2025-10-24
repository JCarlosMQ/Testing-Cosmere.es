// P4: Navegación secuencial por secciones de Cosmere.es
import { test, expect } from '@playwright/test';

test('Navegación completa en Cosmere.es', async ({ page }) => {
  const secciones = [
    'https://cosmere.es/',
    'https://cosmere.es/noticias/',
    'https://cosmere.es/guia-de-lectura/',
    //'https://cosmere.es/libros-y-sagas/',
    'https://cosmere.es/descargas/',
  ];

  for (const seccion of secciones) {
    await page.goto(seccion);
    const titulo = await page.title();
    console.log(`Sección: ${seccion}, Título: ${titulo}`);
    expect(titulo.length).toBeGreaterThan(0);
  }
});
