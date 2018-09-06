The framework was created based on https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD.

How to install project and execute the tests:
1. Copy creds.js file to /test/config folder.
2. Run on command line: npm install.
3. Run on separate command line saml-idp project in order to have access to login page that will be used by the tests.
4. Run grunt to start executing scripts.

Note: the tests will be executed in 2 browsers in parallel, after the execution Allure report will be locally generated and opened in the browser. It's known issue that grunt task never completes after the report generation - please stop it manually via Ctrl+C command.

9th Module description:
A) Mixin
1. Added new feature file '03 Mixin use' which use steps with Mixin use (that last one).
2. The step is from my.orders.steps.js and uses method 'getPageTitle()' inherited by myOrders class from Mixin.
B) Factory
1. Added loginFactory with implemented case of 'sam-idp' login.
2. Saml-idp login then is used by Login step.

Note: automated generation of Allure report now is disabled.