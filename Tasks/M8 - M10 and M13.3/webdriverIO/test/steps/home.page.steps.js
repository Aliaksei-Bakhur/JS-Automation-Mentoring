/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import homePage from '../pageobjects/home.page';
const logger = require('../config/loggerConfig.js').logger;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \[Home] page$/, () => {
    logger.debug(`Waiting for [Home] page to load`);
    expect(homePage.waitPageReady()).is.equal(true);
    logger.debug(`[Home] page is loaded`);
  });

});
