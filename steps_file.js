// in this file you can append custom step methods to 'I' object

module.exports = function() {

  let parameters = require('./Parameters/hospital1.json');

  const fields=
  {
    userName : "input#username",
    password : "input#password"
  };

  const buttons=
  {
    continueBtn : '//button[contains(text(),"Continue")]',
    loginBtn : '//button[contains(text(),"Log in")]'
  };

  return actor({

    getEnvironmentParameters: function(key)
    {
      return parameters[key];
    },

    login: function()
    {
      this.amOnPage('url');
      this.waitForElement(fields.userName, 20);
      this.fillField(fields.userName, this.getEnvironmentParameters('userName'));
      this.click(buttons.continueBtn);
      this.waitForElement(fields.password, 20);
      this.fillField(fields.password, this.getEnvironmentParameters('password'));
      this.waitForElement(buttons.loginBtn);
      this.click(buttons.loginBtn);
    },

  });
}