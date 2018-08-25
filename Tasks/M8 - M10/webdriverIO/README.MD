The framework was created based on https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD.

How to install project and execute the tests:
1. Copy creds.js file to /test/config folder.
2. Run on command line: npm install.
3. Run on separate command line saml-idp project in order to have access to login page that will be used by the tests.
4. Run grunt to start executing scripts.

Note: the tests will be executed in 2 browsers in parallel, after the execution Allure report will be locally generated and opened in the browser. It's known issue that grunt task never completes after the report generation - please stop it manually via Ctrl+C command.