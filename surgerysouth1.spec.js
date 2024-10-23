import { test, expect } from '@playwright/test';
var random = require('random-name')
// console.log(random.first())
//   console.log(random.last())
// Helper function to generate random data
function generateRandomData(index) {
  const roomNumber = `${index + 1}`;
  const firstName = random.first();
  const lastName = random.last();
  const age = `${Math.floor(20 + Math.random() * 60)}/Male`; // Generates age between 20 and 80
  const mrn = `MRN${Math.random().toString(36).substring(2, 8)}`; // Random MRN
  const diagnosis = `Diagnosis${index + 1}`;
  const procedure = `Procedure${index + 1}`;
  const diet = `Diet: Special Diet ${index + 1}`;
  const facility = `Facility ${index + 1}`;
  
  return { roomNumber, firstName, lastName, age, mrn, diagnosis, procedure, diet, facility };
}

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://sergiom175.sg-host.com/auth');
  
  // Perform login
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await page.getByPlaceholder('Username').fill(process.env.username);
  await page.getByPlaceholder('Password').fill(process.env.password);
  await page.getByRole('button', { name: 'Login' }).click();

  // Go to Hospital Rounds
  await page.getByRole('link', { name: 'Hospital Rounds' }).click();

  // Loop to enter data for 10 patients
  for (let i = 0; i < 10; i++) {
    const { roomNumber, firstName, lastName, age, mrn, diagnosis, procedure, diet, facility } = generateRandomData(i);

    // Add new entry for each patient
    await page.getByRole('button', { name: 'Add New Entry' }).click();
    await page.locator('input[name="room"]').fill(roomNumber);
    await page.locator('input[name="first_name"]').fill(firstName);
    await page.locator('input[name="last_name"]').fill(lastName);
    await page.locator('input[name="age"]').fill(age);
    await page.locator('input[name="mrn"]').fill(mrn);
    await page.getByPlaceholder('Diagnosis').fill(diagnosis);
    await page.locator('textarea[name="procedure"]').fill(procedure);
    await page.getByText('Diet:', { exact: true }).fill(diet);
    await page.locator('input[name="facility"]').fill(facility);
    
    // Optional: If you want to confirm the entry is created, you can click on it or verify its presence.
    await page.getByRole('row', { name: `${roomNumber} ${firstName} ${lastName} ${age} ${mrn}` }).getByRole('button').first().click();


    await page.getByRole('link').first().click();
  await page.getByRole('link', { name: 'Operative Log' }).click();
  await page.getByRole('button', { name: 'Add New Entry' }).click();
  await page.locator('input[name="first_name"]').click();
  await page.locator('input[name="first_name"]').fill('Jone');
  await page.locator('input[name="last_name"]').click();
  await page.locator('input[name="last_name"]').fill('Duo');
  await page.locator('input[name="mrn"]').click();
  await page.locator('input[name="mrn"]').fill('ASD122');
  await page.locator('select[name="surgeon"]').selectOption('4');
  await page.locator('select[name="assistant"]').selectOption('6');
  await page.getByPlaceholder('Diagnosis').click();
  await page.getByPlaceholder('Diagnosis').fill('Test Diag');
  await page.getByPlaceholder('Procedure').click();
  await page.getByPlaceholder('Procedure').fill('Test Procedure');
  await page.locator('input[name="facility"]').click();
  await page.locator('input[name="facility"]').fill('PHH Hosc');
  await page.getByRole('cell', { name: 'PHH op' }).getByRole('button').first().click();
  await page.getByRole('link').first().click();
  await page.getByRole('button', { name: 'Original Image Hover Image' }).click();

  }
});
