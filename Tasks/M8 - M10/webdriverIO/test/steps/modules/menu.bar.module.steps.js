/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
const menuBar = require('../../pageobjects/modules/menu.bar.module');
import { checkStatus } from '../../helpers/checkStatus';
import { config } from '../../config/suite.cucumber.conf';

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect \[Menu Bar] is( not)* displayed$/, (falseCase) => {
    const menuBarElement = menuBar.taskBar;
    checkStatus(menuBarElement, 'displayed', falseCase);
  });

  Then(/^I expect \[Logo] is present in \[Menu Bar]$/, () => {
    const actualStatus = menuBar.logoImage.waitForVisible();
    expect(actualStatus).is.equal(true);
  });

  Then(/^I expect "(.*)" menu item is( not)* present in \[Menu Bar]$/, (menuItemName, falseCase) => {
    const status = menuBar.menuByText(menuItemName).waitForVisible();
    expect(status).is.equal(!falseCase);
  });

  When(/^I click "(.*)" menu item in \[Menu Bar]$/, (menuItemName) => {
    menuBar.menuByText(menuItemName).click();
  });

  Then(/^I expect "(.*)" menu contains following submenu items in strict order for "(.*)" column$/, (menuItemName, columnNumber, table) => {
    const expected = [].concat(...table.rows());
    const actual = menuBar.getMySubMenuItemsByColumn(menuItemName, columnNumber);
    assert.sameOrderedMembers(expected, actual, `expected :\n${expected} actual :\n${actual}\n`);
  });

  When(/^I click "(.*)" - \"([^\"]*)\" submenu item in \[Menu Bar]$/, (menuItemName, submenuItemName) => {
    menuBar.menuByText(menuItemName).click();
    menuBar.subMenu.waitForVisible();
    menuBar.getSubMenuItemByText(submenuItemName).click();
    menuBar.subMenu.waitForVisible(config.waitforTimeout, true);
  });
});
