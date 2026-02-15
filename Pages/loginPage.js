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

    login: function()
    {
      I.amOnPage(parameters['url']);
      I.waitForElement(this.fields.userName, 30);
      I.fillField(this.fields.userName, parameters['userName']);
      I.click(this.buttons.continueBtn);
      I.waitForElement(this.fields.password, 20);
      I.fillField(this.fields.password, parameters['password']);
      I.waitForElement(this.buttons.loginBtn);
      I.click(this.buttons.loginBtn);
    },
}
