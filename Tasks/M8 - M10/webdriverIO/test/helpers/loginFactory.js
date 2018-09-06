const saml = require('../pageobjects/saml.page');

module.exports = (loginType) => {
  let loginObj;
  switch (loginType) {
    case 'saml-idp': {
      loginObj = saml;
      break;
    }
    case 'okta': {
      loginObj = undefined;
      break;
    }
    default: {
      loginObj = undefined;
      break;
    }
  }
  return loginObj;
};
