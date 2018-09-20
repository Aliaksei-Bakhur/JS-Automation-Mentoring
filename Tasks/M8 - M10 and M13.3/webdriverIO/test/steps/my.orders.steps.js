/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import { myOrders } from '../pageobjects/my.orders.page';
const logger = require('../config/loggerConfig.js').logger;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \[My Orders] page$/, () => {
    logger.debug(`Waiting for [My Orders] page to load`);
    myOrders.waitPageReady();
    logger.debug(`[My Orders] page is loaded`);
    expect('My Orders').is.equal(myOrders.pageName.getText());
    logger.info(`[My Orders] page has correct title`);
  });

  Then(/^I expect page title to be "(.*)"$/, (pageTitle) => {
    logger.debug(`Waiting for [My Orders] page to load`);
    myOrders.waitPageReady();
    logger.debug(`[My Orders] page is loaded`);
    expect(pageTitle).is.equal(myOrders.getPageTitle());
    logger.info(`[My Orders] page has correct title`);
  });

});