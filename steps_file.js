// in this file you can append custom step methods to 'I' object

module.exports = function() {

  let parameters = require('./Parameters/hospital1.json');

  return actor({

    getEnvironmentParameters: function(key)
    {
      return parameters[key];
    },

  });
}