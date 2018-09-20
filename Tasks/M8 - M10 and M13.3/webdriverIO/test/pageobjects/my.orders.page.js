/* global browser,expect,assert */
const Page = require('../pageobjects/page');
const Mixin = require('../pageobjects/modules/mixin');

class MyOrders extends Mixin(Page) {
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
