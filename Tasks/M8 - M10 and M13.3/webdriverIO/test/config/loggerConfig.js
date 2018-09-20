const log4js = require('log4js');

log4js.configure({
  appenders: {
    combined: {
      type: 'file',
      filename: getPath(),
    },
    console: { type: 'console' },
  },
  categories: { default: { appenders: ['combined', 'console'], level: 'debug' } }
});

const logger = log4js.getLogger('combined');

function getPath() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // as January is 0!
  let yyyy = today.getFullYear();
  let dateStamp;

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  dateStamp = mm + dd + yyyy;
  return 'logs' + dateStamp + '.log';
}

module.exports = {
  logger
}