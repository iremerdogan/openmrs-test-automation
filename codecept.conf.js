const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins


/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './Tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://o3.openmrs.org/openmrs/spa/login#',
      browser: 'firefox',
      windowSize: 'maximize',
      geckoDriver: './node_modules/.bin/geckodriver'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./Pages/loginPage.js",
    add_patientPage: "./Pages/add_patientPage.js",
    search_patientPage: "./Pages/search_patientPage.js",
    add_patientVisitPage: "./Pages/add_patientVisitPage.js",
    add_vitalsPage: "./Pages/add_vitalsPage.js",
    add_medicationPage: "./Pages/add_medicationPage.js",
    end_visitPage: "./Pages/end_visitPage.js",
    logoutPage: "./Pages/logoutPage.js"
  },
  plugins: {
    htmlReporter: {
      enabled: true
    }
  },
  name: 'Health_Project'
}