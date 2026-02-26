# OpenMRS Test Automation

End-to-end test automation for OpenMRS healthcare application using CodeceptJS, WebDriverIO and Page Object Model architecture.

## Features

- User authentication (login/logout)
- Patient registration and search
- Visit management (start/end visits)
- Vital signs recording
- Medication prescription
- Complete patient journey testing

## Tech Stack

- **Framework:** CodeceptJS
- **WebDriver:** WebDriverIO
- **Architecture:** Page Object Model
- **Test Data:** Faker.js
- **Browsers:** Firefox, Chrome
- **Test Management:** Jira

## Prerequisites

**Windows:**
- Node.js v14+ ([download](https://nodejs.org/))
- Firefox or Chrome
- Git

**Linux (Pardus/Debian/Ubuntu):**
```bash
sudo apt update
sudo apt install nodejs npm firefox git
```

## Installation

Clone and install dependencies:
```bash
git clone https://github.com/your-username/openmrs-test-automation.git
cd openmrs-test-automation
npm install
```

Install Selenium and browser drivers:
```bash
npm install selenium-standalone --save-dev
npx selenium-standalone install

# Linux only
sudo apt install firefox-geckodriver
```

## Running Tests

**Start Selenium server** (in separate terminal):
```bash
npx selenium-standalone start
```

**Run tests:**
```bash
# All tests
npx codeceptjs run --steps

# Specific test
npx codeceptjs run Tests/01-login_test.js --steps

# Headless mode
HEADLESS=true npx codeceptjs run --steps
```

## Project Structure
```
├── Pages/                    # Page Object Model
│   ├── loginPage.js
│   ├── logoutPage.js
│   ├── add_patientPage.js
│   ├── search_patientPage.js
│   ├── add_patientVisitPage.js
│   ├── add_vitalsPage.js
│   ├── add_medicationPage.js
│   ├── end_visitPage.js
│   └── logoutPage.js
│
├── Tests/                    # Test scenarios
│   ├── 01-login_test.js
│   ├── 02-add_patient_test.js
│   ├── 03-search_patient_test.js
│   ├── 04-add_visit_test.js
│   ├── 05-add_vitals_test.js
│   ├── 06-add_medication_test.js
│   ├── 07-end_visit_test.js
│   └── 08-logout_test.js
│   └── e2e_test.js
│
├── Parameters/
│   └── hospital1.json        # Test credentials
├── test-management/          # Test documentation
└── codecept.conf.js          # Configuration
```

## Test Scenarios

1. **Login Test** - Validates user authentication
2. **Add Patient Test** - Creates new patient with generated data
3. **Search Patient Test** - Searches for created patient by ID
4. **Add Visit Test** - Starts a new patient visit
5. **Add Vitals Test** - Records patient vital signs
6. **Add Medication Test** - Prescribes medication
7. **End Visit Test** - Ends active patient visit
8. **Logout Test** - Validates user logout functionality
9. **E2E Test** - Validates the user experience from login to logout



**Complete flow:**
```
Login → Register Patient → Search → Start Visit → 
Record Vitals → Prescribe Medication → End Visit → Logout
```

## Test Data

Patient data is generated dynamically using Faker.js:

- Names, addresses, contact information
- Vital signs in medically valid ranges:
  - Temperature: 36-42°C
  - Blood Pressure: 110-132/70-82 mmHg
  - Heart Rate: 100-150 bpm
  - Weight: 50-100 kg
  - Height: 150-190 cm

## Configuration

Update `codecept.conf.js` for browser settings:
```javascript
helpers: {
  WebDriver: {
    url: 'https://o3.openmrs.org',
    browser: 'firefox',
    waitForTimeout: 60000
  }
}
```

Update `Parameters/hospital1.json` with credentials:
```json
{
  "url": "https://o3.openmrs.org/openmrs/spa/login",
  "userName": "your-username",
  "password": "your-password"
}
```

## Test Management

Test cases are documented in Jira with:
- Scenarios and acceptance criteria
- Manual execution tracking
- Bug reports for failures

See `/test-management` for documentation.

## Troubleshooting

**"Cannot find module 'codeceptjs'"**
```bash
npm install
```

**"Element not found" errors**
- Increase `waitForTimeout` in config
- Verify selectors are current

**Selenium connection refused**
```bash
npx selenium-standalone start
```

**Port 4444 already in use (Linux)**
```bash
sudo lsof -ti:4444 | xargs kill -9
```

**Permission denied for geckodriver (Linux)**
```bash
sudo chmod +x node_modules/.bin/geckodriver
```


## 🤝 Contributing

This is a personal portfolio project. Suggestions and feedback are welcome!

## 📧 Contact

- GitHub: https://github.com/iremerdogan
- LinkedIn: https://linkedin.com/in/irem-nur-erdoğan
- Email: iremnurerdogan@protonmail.com