import { test, expect, type Page } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'Level up your Frontend Skills' }).click();
  await page.getByRole('heading', { name: 'Level up your Frontend Skills' }).click();
  await page.getByText('By selecting you agree to').click();
  await page.getByRole('textbox', { name: 'Enter the email address' }).click();
  await page.getByRole('textbox', { name: 'Enter the email address' }).fill('gprakasha234@gmail.');
  await page.getByText('Invalid email, please enter a').click();
  await page.getByRole('textbox', { name: 'Enter the email address' }).click();
  await page.getByRole('textbox', { name: 'Enter the email address' }).fill('gprakasha234@gmail.com');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Subscribe' }).click();
});