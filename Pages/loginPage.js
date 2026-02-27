/**
 * TEST‑ID: SCRUM-23
 * -------------------------------------------------
 * Description : Admin login flow for OpenMRS.
 * Jira story   : https://iremnurerdogan.atlassian.net/browse/SCRUM-23
 *
 * This page‑object implements the login steps using CodeceptJS.
 * All selectors are kept in one place to simplify maintenance.
 */

const { I } = inject();

let parameters = require('../Parameters/hospital1.json');

module.exports = {

  fields: {
    userName: 'input#username',
    password: 'input#password'
  },

  buttons: {
    continueBtn : '//button[contains(text(),"Continue")]',
    loginBtn : '//button[contains(text(),"Log in")]'
  },

  messages: {
    popupMsg: '//p[contains(text(),"Welcome")]'
  },

    closePopup: async function(){
      try {
      I.wait(3);
      const popup = await I.grabNumberOfVisibleElements(this.messages.popupMsg);
      if (popup != 0)
      {
        I.click('//label[@class="cds--radio-button__label"]'); //click the first location
        I.click('//button[@type="submit"]');
      }
    } catch (e) {}},

    login: async function()
    {
      I.amOnPage(parameters['url']);
      I.waitForElement(this.fields.userName, 60);
      I.fillField(this.fields.userName, parameters['userName']);
      I.click(this.buttons.continueBtn);
      I.waitForElement(this.fields.password, 20);
      I.fillField(this.fields.password, parameters['password']);
      I.waitForElement(this.buttons.loginBtn);
      I.click(this.buttons.loginBtn);
      await this.closePopup();
    },
}
