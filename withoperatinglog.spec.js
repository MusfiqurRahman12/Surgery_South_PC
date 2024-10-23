require('dotenv').config();
import { test, expect } from '@playwright/test';
var random = require('random-name');

// Helper function to generate random data for Hospital Rounds
function generateHospitalRoundsData(index) {
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

// Helper function to generate random data for Operative Log
function generateOperativeLogData(index) {
  const firstName = random.first();
  const lastName = random.last();
  const mrn = `MRN${Math.random().toString(36).substring(2, 8)}`; // Random MRN
  const diagnosis = `Diagnosis${index + 1}`;
  const procedure = `Procedure${index + 1}`;
  const facility = `Facility ${index + 1}`;
  
  return { firstName, lastName, mrn, diagnosis, procedure, facility };
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

  // Loop to enter data for 10 patients in Hospital Rounds
  for (let i = 0; i < 10; i++) {
    const { roomNumber, firstName, lastName, age, mrn, diagnosis, procedure, diet, facility } = generateHospitalRoundsData(i);

    // Add new entry for each patient in Hospital Rounds
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
    
    // Verify the entry was created (optional)
    await page.getByRole('row', { name: `${roomNumber} ${firstName} ${lastName} ${age} ${mrn}` }).getByRole('button').first().click();
  }

  // Go to Operative Log
  await page.getByRole('link').first().click();
  await page.getByRole('link', { name: 'Operative Log' }).click();

  // Loop to enter data for 10 operations in Operative Log
  for (let i = 0; i < 10; i++) {
    const { firstName, lastName, mrn, diagnosis, procedure, facility } = generateOperativeLogData(i);

    // Add new entry for each operation in Operative Log
    await page.getByRole('button', { name: 'Add New Entry' }).click();
    await page.locator('input[name="first_name"]').fill(firstName);
    await page.locator('input[name="last_name"]').fill(lastName);
    await page.locator('input[name="mrn"]').fill(mrn);
    await page.locator('select[name="surgeon"]').selectOption('4'); // Adjust as per available options
    await page.locator('select[name="assistant"]').selectOption('6'); // Adjust as per available options
    await page.getByPlaceholder('Diagnosis').fill(diagnosis);
    await page.getByPlaceholder('Procedure').fill(procedure);
    await page.locator('input[name="facility"]').fill(facility);
    
    // Confirm entry (optional)
    await page.getByRole('cell', { name: `${facility}` }).getByRole('button').first().click();
  }

  // Navigate back or perform additional actions as needed
  await page.getByRole('link').first().click();
});
