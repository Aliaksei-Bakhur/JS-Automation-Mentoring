/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
const creds = require('../config/creds');
const { config } = require('../config/suite.cucumber.conf');
const loginFactory = require('../helpers/loginFactory');

defineSupportCode(({ Given, Then, When }) => {
  When(/^I login to Portal via saml-idp$/, () => {
    browser.url(config.baseUrl);
    const saml = loginFactory('saml-idp');
    saml.waitPageReady();
    saml.userNameInput.setValue(creds.userName);
    saml.firstNameInput.setValue(creds.firstName);
    saml.lastNameInput.setValue(creds.lastName);
    saml.emailInput.setValue(creds.email);
    saml.roleSelect.selectByVisibleText(creds.role);
    saml.signInButton.click();
  });

});
