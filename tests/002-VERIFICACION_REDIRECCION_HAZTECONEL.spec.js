// P2: Verificación de redirección correcta en botones "Hazte con él"
import { test, expect } from '@playwright/test';

test('Verificar redirecciones correctas en botones Hazte con él', async ({ page }) => {
  await page.goto('https://cosmere.es/el-imperio-final/');
  
  // Seleccionar botones con texto específico
  const botones = await page.$$eval('a', as => as.filter(a => a.innerText.includes('Hazte con él')).map(a => a.href));
  
  for (const enlace of botones) {
    await page.goto(enlace);
    const urlFinal = page.url();
    console.log(`Enlace inicial: ${enlace} -> Redirigido a: ${urlFinal}`);
    
    // Validación: Debe contener dominio de Amazon
    expect(urlFinal).toContain('amazon');
  }
});
