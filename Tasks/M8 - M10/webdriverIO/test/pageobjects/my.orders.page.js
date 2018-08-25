/* global browser,expect,assert */
const Page = require('../pageobjects/page');

class MyOrders extends Page {
  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.pageName],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return true;
  }

}
export const myOrders = new MyOrders();
