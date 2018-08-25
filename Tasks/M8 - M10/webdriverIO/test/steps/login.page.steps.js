/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import { saml } from '../pageobjects/saml.page';
const creds = require("../config/creds");
import { config } from '../config/suite.cucumber.conf';

defineSupportCode(({ Given, Then, When }) => {
  When(/^I login to Portal$/, () => {
    browser.url(config.baseUrl);
    saml.waitPageReady();
    saml.userNameInput.setValue(creds.userName);
    saml.firstNameInput.setValue(creds.firstName);
    saml.lastNameInput.setValue(creds.lastName);
    saml.emailInput.setValue(creds.email);
    saml.roleSelect.selectByVisibleText(creds.role);
    saml.signInButton.click();
  });

});
