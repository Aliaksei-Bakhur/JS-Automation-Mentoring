/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import searchPage from '../pageObjects/search.page';
import { myOrders } from '../pageObjects/my.orders.page';

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \"([^\"]*)\" page$/, (expPage) => {
    switch (expPage) {
      case 'Search':
        searchPage.waitPageReady();
        expect('Search').is.equal(searchPage.pageName.getText());
        break;
      case 'My Orders':
        myOrders.waitPageReady();
        expect('My Orders').is.equal(myOrders.pageName.getText());
        break;
    }
  });
});
