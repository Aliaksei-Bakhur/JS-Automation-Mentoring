/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
const { config } = require('../config/suite.cucumber.conf');
const loginFactory = require('../helpers/loginFactory');
const logger = require('../config/loggerConfig.js').logger;

defineSupportCode(({ Given, Then, When }) => {
  When(/^I login to Portal via "(.*)"$/, (loginMethod) => {
    logger.info(`I login to Portal via ${loginMethod}`);
    browser.url(config.baseUrl);
    browser.pause(2000);
    const login = loginFactory(loginMethod);
    login.loginToPortal();
  });

});
