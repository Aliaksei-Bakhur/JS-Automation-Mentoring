/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import { myOrders } from '../pageobjects/my.orders.page';

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \[My Orders] page$/, () => {
    myOrders.waitPageReady();
    expect('My Orders').is.equal(myOrders.pageName.getText());
  });

});