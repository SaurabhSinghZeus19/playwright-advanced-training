# PLAYWRIGHT ADVANCED TRAINING - PART 2

# Project Overview
This project contains advanced PLaywright automation  scenarios implemented using TypeScript. The objective of this assignment 
is to explore browser window handling and network interception techniques that are commonly used in real-world automation frameworks.

# Technologies Used
- PLaywright
- TypeScript
- Node.js
- Git & Github

# Project Structure

playwright-advanced-training/
|
|_____ docs/
|      |___ debugging-report.md
|
|_____ fixtures
|      |___ customFixtures.ts
|
|
|_____ pages/
|      |___ BrowserWindowsPage.ts
|      |___ BookStorePage.ts
|
|_____ test-data/
|      |___ mockBooks.ts
|      
|_____ tests/
|      |___ browserWindows.spec.ts
|      |___ networkMocking.spec.ts
|
|_____ utils/
|      |___ Logger.ts
|
|_____ .gitignore
|
|_____ package-lock.json
|
|_____ package.json
|
|_____ playwright.config.ts
|
|_____ README.md


# Setup Instructions

1) Clone Repository
- git clone <repository-url>

2) Install Dependencies
- npm install

3) Install Playwright Browsers
- npx playwright install

# Test Execution

1) Run All Tests
- npx playwright test

2) Run Browser Windows Tests
- npx playwright test tests/browserWindows.spec.ts

3) Run Network Mocking Tests
- npx playwright test tests/networkMocking.spec.ts

4) Run Tests in Headed Mode
- npx playwright test --headed

5) view trace viewer
- npx playwright test --trace on


# Current Test Coverage

1) Browser Windows ![](browserWindows.spec.ts.png)
- TC_001 Verify New tab button opens a new tab
- TC_002 Verify content of newly opened tab
- TC_003 Close child tab and switch back to parent
- TC_004 Verify New Window Message functionality

2) Network Mocking  ![](networkMocking.spec.ts.png)
- TC_005 Mock books API with custom data
- TC_006 Mock empty API response
- TC_007 Mock delayed API response

# FIxtures
- Implemented page object fixtures for BrowserWindowsPage and BookStorePage.
- Implemented Logger utility fixture

# Reports & Debugging
- Generated Playwright HTML reports.
- Used Trace Viewer for execution analysis
- Documented 5 failure categories and 3 timeout categories.







