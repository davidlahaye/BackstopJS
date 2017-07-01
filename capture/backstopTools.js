window.isVisible = function (selector) {
  var style = window.getComputedStyle(selector);
  return (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0');
};

window.exists = function (selector) {
  return document.querySelectorAll(selector).length;
};

var _consoleLogger = '';
window._hasLogged = function (str) {
  return new RegExp(str).test(_consoleLogger);
};
function startConsoleLogger () {
  var log = console.log.bind(console);
  console.log = function () {
    _consoleLogger += Array.from(arguments).join('\n');
    log.apply(this, arguments);
  };
}
startConsoleLogger();

console.info('backstopTools are running');