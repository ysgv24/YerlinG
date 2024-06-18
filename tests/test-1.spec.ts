import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www.google.com/');
  await page.getByLabel('Buscar', { exact: true }).press('CapsLock');
  await page.getByLabel('Buscar', { exact: true }).fill('P');
  await page.getByLabel('Buscar', { exact: true }).press('CapsLock');
  await page.getByLabel('Buscar', { exact: true }).fill('Panama');
  await page.keyboard.press('Enter');
  await page.getByRole('heading', { name: 'Panamá', exact: true }).click();
  await page.getByRole('link', { name: 'Panamá - Wikipedia, la enciclopedia libre Wikipedia https://es.wikipedia.org › wiki › Panamá', exact: true }).click();
  await page.getByRole('link', { name: 'Bandera', exact: true }).click();
});