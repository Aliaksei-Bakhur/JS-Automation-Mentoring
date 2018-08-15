const creds = require("./creds");
const keycode = require("./node_modules/keycode");
assert = require("assert");
var webdriver = require("selenium-webdriver"),
  { describe, it, after, before } = require('selenium-webdriver/testing');
By = webdriver.By,
  assert = require('assert'),
  until = webdriver.until;
var driver;
var expect = require('chai').expect;

describe('home page scenarios', function () {
  this.timeout(50000);
  beforeEach(function () {
    driver = new webdriver.Builder()
      .usingServer('http://localhost:4444/wd/hub')
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
    driver.manage().timeouts().implicitlyWait(8000);
    driver.manage().window().maximize();
    driver.get('http://localhost:7000/');
    driver.findElement(By.name('userName')).clear();
    driver.findElement(By.id('userName')).sendKeys(creds.userName);
    driver.findElement(By.xpath('//input[@id="firstName"]')).clear();
    driver.findElement(By.xpath('//input[@id="firstName"]')).sendKeys(creds.firstName);
    driver.findElement(By.css('#lastName')).clear();
    driver.findElement(By.css('#lastName')).sendKeys(creds.lastName);
    driver.findElement(By.css('#email')).clear();
    driver.actions().sendKeys(creds.email).sendKeys(webdriver.Key.ENTER).perform();
    // driver.findElement(By.css('#email')).sendKeys(creds.email);
    // driver.findElement(By.xpath('//button[@type="submit"]')).click();
    driver.sleep(2000);
  });

  afterEach(function () {
    driver.quit();
  });

  it('My account left menu items are correct', function () {
    driver.wait(until.elementIsVisible(driver.findElement(By.xpath('.//div[contains(@class, "dropdown-menu_header")]'))), 8000)
      .then(() => {
        var menuHeader = 'div[class*="dropdown-menu_header"]';
        driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", driver.findElement(By.css(menuHeader)));
        driver.sleep(2000);
        driver.executeScript("arguments[0].style.backgroundColor = '" + "blue" + "'", driver.findElement(By.css(menuHeader)));
        driver.sleep(2000);
        return driver.findElement(By.css(menuHeader));
      })
      .then((menuHeader) => {
        driver.executeScript("arguments[0].click()", menuHeader);
        //driver.findElement(By.css('div[class*="dropdown-menu_header"]')).click();
      })
      .then(() => {
        return driver.findElements(By.xpath('.//div[contains(@class, "firstMenuColumn")]/div[contains(@class,"item_root")]'));
      })
      .then((elements) => {
        const promises = elements
          .map(element => {
            return element.getText();
          });
        return Promise.all(promises);
      })
      .then((arrayOfMenuItems) => {
        const expectedMenuItems = ['Home', 'Search', 'My Orders', 'My Profile', 'Sign Out'];
        expect(expectedMenuItems).to.eql(arrayOfMenuItems);
      })
  });

  it('User can navigate to the Search page from My Account left menu', function () {
    driver.wait(until.elementIsVisible(driver.findElement(By.xpath('.//div[contains(@class, "dropdown-menu_header")]'))), 8000)
      .then(() => {
        // driver.findElement(By.css('div[class*="dropdown-menu_header"]')).click();
        driver.actions().click(driver.findElement(By.css('div[class*="dropdown-menu_header"]'))).perform();
      })
      .then(() => {
        const myAccountMenuSelector = './/span[contains(@class, "menu_popoverContent")]';
        driver.wait(until.elementIsVisible(driver.findElement(By.xpath(myAccountMenuSelector))));
        driver.findElement(By.xpath(myAccountMenuSelector)).findElement(By.css('a[href="/search"]')).click();
        driver.wait(until.elementIsVisible(driver.findElement(By.css('h1[class*="header_root"]'))))
          .then(() => {
            return driver.findElement(By.css('h1[class*="header_root"]'));
          })
          .then((element) => {
            return element.getText();
          })
          .then((actualPageTitle) => {
            const expectedPageTitle = 'Search';
            assert.strictEqual(actualPageTitle, expectedPageTitle, 'Actual page title: ' + actualPageTitle + ' doesn\'t match to expected value: ' + expectedPageTitle);
          })
      })
  });

  it('User can navigate to the My Profile page from My Account left menu', function () {
    driver.wait(until.elementIsVisible(driver.findElement(By.xpath('.//div[contains(@class, "dropdown-menu_header")]'))), 8000)
      .then(() => {
        driver.findElement(By.css('div[class*="dropdown-menu_header"]')).click();
      })
      .then(() => {
        const myAccountMenuSelector = './/span[contains(@class, "menu_popoverContent")]';
        driver.wait(until.elementIsVisible(driver.findElement(By.xpath(myAccountMenuSelector))));
        driver.findElement(By.xpath(myAccountMenuSelector)).findElement(By.css('a[href="/my-profile"]')).click();
        driver.wait(until.elementIsVisible(driver.findElement(By.css('h1[class*="header_root"]'))))
          .then(() => {
            return driver.findElement(By.css('h1[class*="header_root"]'));
          })
          .then((element) => {
            return element.getText();
          })
          .then((actualPageTitle) => {
            const expectedPageTitle = 'My Profile';
            assert.strictEqual(actualPageTitle, expectedPageTitle, 'Actual page title: ' + actualPageTitle + ' doesn\'t match to expected value: ' + expectedPageTitle);
          })
      })
  })
});
