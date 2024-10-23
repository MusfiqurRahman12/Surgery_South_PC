## Automation Project: Playwright-based Data Entry for Hospital Rounds and Operative Logs

This README will guide you through the step-by-step process to set up and run the automation project using **Playwright**. The goal of this project is to automate data entry into a web application for two workflows: Hospital Rounds and Operative Logs.  

---

## Prerequisites
Ensure the following tools are installed:

1. Node.js (Latest version)  
   Download from [https://nodejs.org](https://nodejs.org)  
2. Git
   Download from [https://git-scm.com](https://git-scm.com)  
3. Visual Studio Code (or any code editor)  
   Download from [https://code.visualstudio.com](https://code.visualstudio.com)  
4. Playwright (for browser automation)  
   Install via npm, instructions below.

---

## Step 1: Clone the Repository
1. Open Terminal (Linux/macOS) or Command Prompt (Windows).  
2. Run the following command to clone the project repository:
   ```bash
   git clone <repository-url>
   ```
   Replace `<repository-url>` with the link to your GitHub repository.

3. Navigate into the project directory:
   ```bash
   cd <project-directory-name>
   ```

---

## Step 2: Install Dependencies
1. Initialize the project and install required dependencies:
   ```bash
   npm init -y
   npm install dotenv playwright random-name
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## Step 3: Configure Environment Variables
1. Create a `.env` file in the root of the project directory:
   ```bash
   touch .env
   ```

2. Open the `.env` file and add the following variables:
   ```bash
   username=<your-username>
   password=<your-password>
   ```

   Replace `<your-username>` and `<your-password>` with the correct credentials.

---

## Step 4: Running the Test Locally
1. Run Playwright tests using the following command:
   ```bash
   npx playwright test
   ```

2. If you encounter any issues, try running Playwright in **headed mode** (with browser UI):
   ```bash
   npx playwright test --headed
   ```

---

## Project Structure
Below is the structure of the project directory:
```
project-directory/
│
├── .env                 # Environment variables (username/password)
├── node_modules/        # Installed dependencies
├── package.json         # Project configuration and dependencies
├── package-lock.json    # Lock file for npm dependencies
├── tests/               # Directory for Playwright test scripts (optional)
└── automation.spec.js   # Main Playwright script
```

---

## Explanation of the Automation Script (automation.spec.js)
- Login to Application:
  Uses `page.goto()` to open the login page and fill the username/password fields using values from `.env`.

- Hospital Rounds Workflow:
  Iterates 10 times to fill and submit patient information like **MRN, age, procedure, and diagnosis**.

- Operative Log Workflow: 
  Iterates 10 times to fill details for operations such as **diagnosis, procedure, and surgeon information**.

- Data Generation:  
  Uses the `random-name` package to generate random first and last names for patients and staff.

---

## Common Commands

- Run a specific test file:
  ```bash
  npx playwright test automation.spec.js
  ```

- Open Playwright Test Report:
  ```bash
  npx playwright show-report
  ```

- Run Playwright with debugging:
  ```bash
  PWDEBUG=1 npx playwright test
  ```

---

## Troubleshooting
1. Playwright not found?
   Ensure Playwright is installed correctly:
   ```bash
   npm install playwright
   npx playwright install
   ```

2. Login issues?
   Double-check credentials in the `.env` file.

3. Timeout errors?
   Increase timeout using:
   ```js
   test.setTimeout(120000); // 2 minutes
   ```

4. Selector not found?
   Use Playwright Inspector to identify selectors:
   ```bash
   npx playwright codegen <your-website-url>
   ```

---

## Git Workflow for This Project

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Add your changes:
   ```bash
   git add .
   ```

3. Commit your changes:
   ```bash
   git commit -m "Add your-commit-message"
   ```

4. Push changes to the repository:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request: 
   Go to your GitHub repository and create a pull request for review.

---

## Conclusion
This automation project simplifies repetitive data entry tasks for **Hospital Rounds** and **Operative Logs** using **Playwright**. Follow the steps outlined here to set up, run, and modify the project. If you encounter issues, refer to the troubleshooting section or Playwright's [official documentation](https://playwright.dev/docs/intro). 

Happy Testing! 🎉
