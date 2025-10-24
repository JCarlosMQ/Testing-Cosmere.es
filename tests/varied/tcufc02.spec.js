import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ufcespanol.com/');
  await page.getByRole('button', { name: 'Search panel toggle' }).click();
  await page.getByRole('textbox', { name: 'Conduct a search' }).click();
  await page.getByRole('textbox', { name: 'Conduct a search' }).fill('Topuria');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('html').click();
  await page.goto('https://www.ufcespanol.com/search?query=Topuria&referrerPageUrl=https://www.ufcespanol.com/&verticalUrl=es/index.html');
});