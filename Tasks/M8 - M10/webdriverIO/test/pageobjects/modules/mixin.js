const Mixin = Sup => class extends Sup {
  getPageTitle() {
    return browser.getTitle();
  }

}

module.exports = Mixin;