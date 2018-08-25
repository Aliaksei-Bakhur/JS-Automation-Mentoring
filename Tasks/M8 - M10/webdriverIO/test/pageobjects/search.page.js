/* global browser,expect,assert */
const Page = require('../pageobjects/page');

const selectors = {
  filtersHeader: '[class$="filters-header_root"]',
  paginationBlock: '[class*="header-view-options_root"] [class*="pagination_root"]',
};

class SearchPage extends Page {
  get selectors() { return selectors; }
  get filtersHeader() { return browser.element(selectors.filtersHeader); }
  get paginationBlock() { return browser.element(selectors.paginationBlock); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.filtersHeader, this.paginationBlock],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return true;
  }

}
module.exports = new SearchPage();
