import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('wrong_vorontsovaiva@example.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('wrong_vorontsovaiva@example.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Email not found sign in first')).toBeVisible();
});