// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sergiom175.sg-host.com/auth');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(process.env.username);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(process.env.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Operative Log' }).click();
  await page.getByRole('button', { name: 'Add New Entry' }).click();
  await page.locator('input[name="first_name"]').click();
  await page.locator('input[name="first_name"]').fill('Jone');
  await page.locator('input[name="last_name"]').click();
  await page.locator('input[name="last_name"]').fill('Doe');
  await page.locator('input[name="mrn"]').click();
  await page.locator('input[name="mrn"]').fill('ADW121');
  await page.locator('select[name="surgeon"]').selectOption('3');
  await page.locator('select[name="assistant"]').selectOption('6');
  await page.getByPlaceholder('Diagnosis').click();
  await page.getByPlaceholder('Diagnosis').fill('Digonosis2');
  await page.getByPlaceholder('Procedure').click();
  await page.getByPlaceholder('Procedure').fill('Procedure3');
  await page.locator('input[name="facility"]').click();
  await page.locator('input[name="facility"]').fill('PHH HOSC');
  await page.getByRole('cell', { name: 'PHH HOSC' }).getByRole('button').first().click();
  await page.getByRole('button', { name: 'Add New Entry' }).click();
  await page.locator('input[name="first_name"]').click();
  await page.locator('input[name="first_name"]').fill('Nore');
  await page.locator('input[name="last_name"]').click();
  await page.locator('input[name="last_name"]').fill('Man');
  await page.locator('tr:nth-child(8) > td:nth-child(3)').click();
  await page.locator('input[name="mrn"]').fill('SDD332');
  await page.getByPlaceholder('Diagnosis').click();
  await page.getByPlaceholder('Diagnosis').fill('Digonsis 4');
  await page.getByPlaceholder('Procedure').click();
  await page.getByPlaceholder('Procedure').fill('Procidure 3');
  await page.locator('input[name="facility"]').click();
  await page.locator('input[name="facility"]').fill('Robot');
  await page.getByRole('cell', { name: 'Robot' }).getByRole('button').first().click();
  await page.locator('select[name="surgeon"]').selectOption('3');
  await page.locator('select[name="assistant"]').selectOption('7');
  await page.getByRole('cell', { name: 'Robot' }).getByRole('button').first().click();
  await page.getByRole('button', { name: 'Original Image Hover Image' }).click();
});