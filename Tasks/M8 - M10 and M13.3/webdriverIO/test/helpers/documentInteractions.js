let highlightElement = (selectorCSS) => {
  let styleOptions = "background: red";
  return browser.execute((style, selector) => {
    document.querySelector(selector).setAttribute('style', style)
  }, styleOptions, selectorCSS);
};

module.exports = {
  highlightElement
}