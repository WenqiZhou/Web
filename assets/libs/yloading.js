/**
 * Creator: yeliex
 * Site: https://github.com/yeliex
 */

// Append style
!(function () {
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(
    '.yloading {position: fixed; top: 0; left: 0; right: 0; bottom: 0;background-color: rgba(0, 0, 0, .7); z-index: 10001; display: none; }' +
    '.yloading.visible {display: block;}' +
    '@-webkit-keyframes loading { from { -webkit-transform: rotate(0); transform: rotate(0); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }' +
    '@keyframes loading { from { -webkit-transform: rotate(0); transform: rotate(0); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }' +
    '.yloading .loading { -webkit-animation: loading 2.5s ease infinite; animation: loading 2.5s ease infinite; display: block; width: 32px; height: 32px; top: 50%; left: 50%; margin-top: -38px; margin-left: -16px; position: absolute; background: url("/assets/images/icon_loading.png") center no-repeat; background-size: 32px;}' +
    '.yloading .text { width: 100%; top: 50%; position: absolute; text-align: center; color: #fff }'
  ));
  document.head.appendChild(style);
}());

var loading = function (params) {
  params = params || {};
  var selectors = this;
  var isjQuery = window.jQuery && selectors instanceof jQuery;
  selectors = isjQuery || selectors instanceof Array ? selectors : [selectors];

  var item = document.createElement('div');
  item.className = 'yloading';
  var loading = document.createElement('div');
  loading.className = 'loading';
  item.appendChild(loading);

  if (params.text) {
    var text = document.createElement('p');
    text.className = 'text';
    text.appendChild(document.createTextNode(params.text));
    item.appendChild(text)
  }

  var start = function () {
    var callback = function (selector) {
      var hasElement = Array.prototype.slice.call(selector.children).some(function (i) {
        return i.className.match(/yloading/);
      });
      if (!hasElement) {
        selector.appendChild(item);
      }
      item.className += ' visible';
    };

    isjQuery ? selectors.each(callback) : selectors.forEach(callback);
  };

  var stop = function () {
    item.className = item.className.replace(/ visible/, '');
  };

  var remove = function () {
    var callback = function (selector) {
      selector.removeChild(item);
    };

    isjQuery ? selectors.each(callback) : selectors.forEach(callback);
  };

  return {
    start: start,
    stop: stop,
    remove: remove
  }
};
if (window.jQuery) {
  jQuery.fn.loading = loading;
} else {
  Element.prototype.loading = loading;
}