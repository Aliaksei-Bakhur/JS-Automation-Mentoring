/* global browser,expect,assert */
const Page = require('../page');

const selectors = {
  taskBar: '[class*="header_root"]',
  logoImage: '[class*="header_logo"]',
  menuByText: (text) => `//div[div[text()="${text}" and  contains(@class, "dropdown-menu_header")]]`,
  myAccountDropDown: '[class*=dropdown-menu_header]',
  cartIcon: '[class*="header-menu_cartButton"]',
  cartCounter: '[class*="badge-counter_root"]',
  searchDropdown: '[class*="search-input_dropdown"]',
  searchDropdownOptions: '[class*="option_root"]>span',
  searchDropdownPopup: '[class*="search-input_dropdownPopover"]',
  searchInput: '[class*="search-input_input"]',
  menuItemsHeader: '//div[contains(@class, "dropdown-menu_header")]',
  subMenu: '[class*="dropdown-menu_popoverContent"]',
  subMenuColumns: '[class*="column_root"]',
  subMenuItems: '[class*="item_root"]',
};

class MenuBarModule extends Page {
  get selectors() { return selectors; }
  get taskBar() { return browser.element(selectors.taskBar); }
  get logoImage() { return browser.element(selectors.logoImage); }
  get cartIcon() { return browser.element(selectors.cartIcon); }
  get cartCounter() { return browser.element(selectors.cartCounter); }
  get searchDropdown() { return browser.element(selectors.searchDropdown); }
  get searchDropdownPopup() { return browser.element(selectors.searchDropdownPopup); }
  get searchDropdownOptions() { return browser.elements(selectors.searchDropdownOptions); }
  get searchInput() { return browser.element(selectors.searchInput); }
  get menuItemsHeader() { return browser.elements(selectors.menuItemsHeader); }
  get subMenu() { return browser.element(selectors.subMenu); }
  get subMenuColumns() { return browser.elements(selectors.subMenuColumns); }
  get subMenuItems() { return browser.elements(selectors.subMenuItems); }
  get myAccountDropDown() { return browser.element(selectors.myActtountDropDown); }
  menuByText(text) { return browser.element(selectors.menuByText(text)); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.logoImage, this.menuItemsHeader, this.cartIcon, this.searchDropdown, this.searchInput],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return this;
  }

  getMySubMenuItemsByColumn(menuName, columnNumber) {
    const subMenuItems = [];
    const columnIndex = columnNumber - 1;
    this.subMenu.waitForVisible();
    const subMenuColumn = this.menuByText(menuName).elements(selectors.subMenuColumns);
    subMenuColumn.value[columnIndex].elements(selectors.subMenuItems).value
      .forEach(item => {
        subMenuItems.push(item.getText());
      });
    return subMenuItems;
  }

  getSubMenuItemByText(text) {
    this.subMenuItems.waitForVisible();
    return this.subMenuItems.value
      .find(item => {
        return item.getText() === text;
      });
  }

}
module.exports = new MenuBarModule();
