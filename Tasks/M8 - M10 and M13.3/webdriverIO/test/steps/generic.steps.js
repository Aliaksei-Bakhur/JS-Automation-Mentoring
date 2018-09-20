/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import searchPage from '../pageObjects/search.page';
import { myOrders } from '../pageObjects/my.orders.page';
const logger = require('../config/loggerConfig.js').logger;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \"([^\"]*)\" page$/, (expPage) => {
    switch (expPage) {
      case 'Search':
        logger.info(`I check Search page title`);
        searchPage.waitPageReady();
        expect('Search').is.equal(searchPage.pageName.getText());
        break;
      case 'My Orders':
        logger.info(`I check My Orders page title`);
        myOrders.waitPageReady();
        expect('My Orders').is.equal(myOrders.pageName.getText());
        break;
    }
  });
});
