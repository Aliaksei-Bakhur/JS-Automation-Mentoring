How to run tests:
1. Copy creds.js file to project folder.
2. Run on command line: npm install
3. Run on separate command line: run.bat (for executing tests on selenium server)
4. Run on separate command line saml-idp project in order to have access to login page that will be used by tests 
5. Run on command line: mocha

Introduced changes in comparison with the task for the module #5.
1. Added the line using actions: sending keys (string value and enter):
driver.actions().sendKeys(creds.email).sendKeys(webdriver.Key.ENTER).perform();
2. Added the line with performed click action:
driver.actions().click(driver.findElement(By.css('div[class*="dropdown-menu_header"]'))).perform();
3. Added the lines with changing background color for web element via executing script:
driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", driver.findElement(By.css(menuHeader)));
driver.executeScript("arguments[0].style.backgroundColor = '" + "blue" + "'", driver.findElement(By.css(menuHeader)));
4. Added the line where script was executed to click on the web element:
driver.executeScript("arguments[0].click()", menuHeader);

To start hub execute hub_3.4.0.bat file.
To register nodes execute se-node-chrome-3.4.0.bat (with chrome browser), se-node-firefox-3.4.0.bat (with firefox browser) and se-node-ie-3.4.0.bat (with IE browser).
To execute tests on specific node update webdriver's Capabilities on the code where webdriver is created.
See a couple of screenshots in 'Selenium Grid.docx' how selenium grid was setup.