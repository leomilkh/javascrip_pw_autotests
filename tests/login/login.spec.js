import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('vorontsovaiva@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('vorontsovaiva@example.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('navigation')).toContainText('vorontsovaiva@example.com');
});