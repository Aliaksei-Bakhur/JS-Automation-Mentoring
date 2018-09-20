module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      errorShots: ['test/reports/errorShots/*'],
      allureResults: ['test/reports/allure-results/*'],
      jsonResults: ['test/reports/json-results/*'],
      junitResults: ['test/reports/junit-results/*'],
      logFiles: ['*.log'],
    },
    webdriver: {
      tests: {
        configFile: './test/config/suite.cucumber.conf.js'
      }
    },
    exec: {
      createHtmlReportLocally: {
        command: 'npm run allure-report',
        stdout: false,
        stderr: false,
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-cucumberjs');
  grunt.loadNpmTasks('grunt-webdriver');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-continue');

  grunt.registerTask('default', [
    'clean:errorShots',
    'clean:allureResults',
    'clean:jsonResults',
    'clean:junitResults',
    'clean:logFiles',
    'continue:on',
    'webdriver:tests',
    'exec:createHtmlReportLocally',
  ]);
};
