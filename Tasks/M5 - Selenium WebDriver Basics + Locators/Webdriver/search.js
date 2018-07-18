var credentials = require('../Demo 1 - Webdriver/Credentials');

var webdriver = require("selenium-webdriver");

function createDriver() {
    var driver = new webdriver.Builder()
        .usingServer('http://localhost:4444/wd/hub')
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    driver.manage().timeouts().setScriptTimeout(10000);
    return driver;
}

function logTitle() {
    browser.getTitle().then(function (title) {
        console.log('Current Page Title: ' + title);
    });
}

function findMostRelevant() {
    return browser.findElements(webdriver.By.css('[class$="home_titleWrapper"]')).then(function (result) {
        return result[0];
    });
}

function closeBrowser() {
    browser.quit();
}

var browser = createDriver();
browser.get('http://localhost:7000/');
browser.findElement(webdriver.By.name('userName')).sendKeys(credentials.userDetails.email);
browser.findElement(webdriver.By.xpath('//input[@id="firstName"]')).sendKeys(credentials.userDetails.firstName);
browser.findElement(webdriver.By.css('#lastName')).sendKeys(credentials.userDetails.lastName);
browser.findElement(webdriver.By.css('#email')).sendKeys(credentials.userDetails.email);
browser.findElement(webdriver.By.xpath('//button[@type="submit"]')).click();

browser.wait(findMostRelevant, 5000)
    .then(logTitle)
    .then(closeBrowser);
