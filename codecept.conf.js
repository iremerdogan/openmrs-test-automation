const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './Tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://o3.openmrs.org/openmrs/spa/login#',
      browser: 'firefox',
      geckoDriver: './node_modules/.bin/geckodriver'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./Pages/loginPage.js",
  },
  plugins: {
    htmlReporter: {
      enabled: true
    }
  },
  name: 'Health_Project'
}