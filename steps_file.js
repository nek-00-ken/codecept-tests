
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    login: function (username, password) {
      this.amOnPage('/');
      this.appendField('//*[@id="username"]', username);
      this.appendField('//*[@id="password"]', password);
      this.click('Login.Submit');
      this.wait(2)
    },
    loadPage: function (path) {
      this.amOnPage(path);
      this.wait(5)
    }
  });
};
