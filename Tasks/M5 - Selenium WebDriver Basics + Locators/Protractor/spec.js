const creds = require("./creds");
var EC = protractor.ExpectedConditions;

describe('home page scenarios', function() {
    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.driver.manage().timeouts().implicitlyWait(5000);
      browser.driver.manage().window().maximize();
      browser.get('http://localhost:7000/');
      browser.findElement(By.name('userName')).clear();
      browser.findElement(By.name('userName')).sendKeys(creds.userName);
      browser.findElement(By.xpath('//input[@id="firstName"]')).clear();
      browser.findElement(By.xpath('//input[@id="firstName"]')).sendKeys(creds.firstName);
      browser.findElement(By.css('#lastName')).clear();
      browser.findElement(By.css('#lastName')).sendKeys(creds.lastName);
      browser.findElement(By.css('#email')).clear();
      browser.findElement(By.css('#email')).sendKeys(creds.email);
      browser.findElement(By.xpath('//button[@type="submit"]')).click();
    });

    it('My account left menu items are correct', function(){
      browser.wait(EC.visibilityOf(element(By.xpath('.//div[contains(@class, "dropdown-menu_header")]'))),8000)
          .then(() => {
            browser.findElement(By.css('div[class*="dropdown-menu_header"]')).click();
          })
          .then(() => {
            return browser.findElements(By.xpath('.//div[contains(@class, "firstMenuColumn")]/div[contains(@class,"item_root")]'));
          })
          .then((elements) => {
            const promises = elements
              .map(element => {
                return element.getText();
              });
            return Promise.all(promises);
          })
          .then((arrayOfMenuItems) => {
            var actualMenuItems = '';
            arrayOfMenuItems.forEach(function(item) {
                actualMenuItems += item + ', ';
            })
            const expectedMenuItems = 'Home, Search, My Orders, My Profile, Sign Out, ';
            expect(actualMenuItems).toEqual(expectedMenuItems);
          })
      });
    
    it('User can navigate to the Search page from My Account left menu', function(){
        browser.wait(EC.visibilityOf(element(By.xpath('.//div[contains(@class, "dropdown-menu_header")]'))),8000)
        .then(() => {
          browser.findElement(By.css('div[class*="dropdown-menu_header"]')).click();
        })
        .then(() => {
          const myAccountMenuSelector = './/span[contains(@class, "menu_popoverContent")]';
          browser.wait(EC.visibilityOf(element(By.xpath(myAccountMenuSelector))));
          element(By.xpath(myAccountMenuSelector)).element(By.css('a[href="/search"]')).click();
          browser.wait(EC.visibilityOf(element(By.css('h1[class*="header_root"]'))))
        })
        .then(() => {
          return browser.findElement(By.css('h1[class*="header_root"]'));    
        })
        .then((element) => {
          return element.getText();
        })
        .then((actualPageTitle) => {
          const expectedPageTitle = 'Search';
          expect(actualPageTitle).toEqual(expectedPageTitle);
        })
    });

    it('User can navigate to the My Profile page from My Account left menu', function(){
      browser.wait(EC.visibilityOf(element(By.xpath('.//div[contains(@class, "dropdown-menu_header")]'))), 8000)
        .then(() => {
          element(By.css('div[class*="dropdown-menu_header"]')).click();
        })
        .then(() => {
          const myAccountMenuSelector = './/span[contains(@class, "menu_popoverContent")]';
          browser.wait(EC.visibilityOf(element(By.xpath(myAccountMenuSelector))));
          element(By.xpath(myAccountMenuSelector)).element(By.css('a[href="/my-profile"]')).click();
          browser.wait(EC.visibilityOf(element(By.css('h1[class*="header_root"]'))))
            .then(() => {
              return browser.findElement(By.css('h1[class*="header_root"]'));    
            })
            .then((element) => {
              return element.getText();
            })
            .then((actualPageTitle) => {
              const expectedPageTitle = 'My Profile';
              expect(actualPageTitle).toEqual(expectedPageTitle);
            })
        })
    })
})