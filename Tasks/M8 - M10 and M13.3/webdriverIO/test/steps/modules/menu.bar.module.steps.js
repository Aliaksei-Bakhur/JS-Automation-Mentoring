/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
const menuBar = require('../../pageobjects/modules/menu.bar.module');
import { checkStatus } from '../../helpers/checkStatus';
import { config } from '../../config/suite.cucumber.conf';
const logger = require('../../config/loggerConfig.js').logger;
const highlightElement = require('../../helpers/documentInteractions').highlightElement;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect \[Menu Bar] is( not)* displayed$/, (falseCase) => {
    const menuBarElement = menuBar.taskBar;
    logger.info(`I check status of Menu Bar`);
    checkStatus(menuBarElement, 'displayed', falseCase);
  });

  Then(/^I expect \[Logo] is present in \[Menu Bar]$/, () => {
    logger.info(`I check Logo is present in Menu Bar`);
    const actualStatus = menuBar.logoImage.waitForVisible();
    expect(actualStatus).is.equal(true);
  });

  Then(/^I expect "(.*)" menu item is( not)* present in \[Menu Bar]$/, (menuItemName, falseCase) => {
    logger.info(`I check status of ${menuItemName} menu`);
    const status = menuBar.menuByText(menuItemName).waitForVisible();
    expect(status).is.equal(!falseCase);
  });

  Then(/^I highlight "(.*)" menu in \[Menu Bar]$/, (menuItemName) => {
    logger.info(`I highlight ${menuItemName} menu in Menu Bar`);
    return highlightElement(menuBar.selectors.myAccountDropDown);
  });

  When(/^I click "(.*)" menu item in \[Menu Bar]$/, (menuItemName) => {
    logger.info(`I click on ${menuItemName} menu`);
    menuBar.menuByText(menuItemName).click();
  });

  Then(/^I expect "(.*)" menu contains following submenu items in strict order for "(.*)" column$/, (menuItemName, columnNumber, table) => {
    logger.info(`I check ${menuItemName} contains all expected submenu items in strict order for ${columnNumber} column`);
    const expected = [].concat(...table.rows());
    const actual = menuBar.getMySubMenuItemsByColumn(menuItemName, columnNumber);
    assert.sameOrderedMembers(expected, actual, `expected :\n${expected} actual :\n${actual}\n`);
  });

  When(/^I click "(.*)" - \"([^\"]*)\" submenu item in \[Menu Bar]$/, (menuItemName, submenuItemName) => {
    logger.info(`I click on ${menuItemName} menu`);
    menuBar.menuByText(menuItemName).click();
    menuBar.subMenu.waitForVisible();
    logger.info(`I click on ${submenuItemName} submenu`);
    menuBar.getSubMenuItemByText(submenuItemName).click();
    menuBar.subMenu.waitForVisible(config.waitforTimeout, true);
  });
});
