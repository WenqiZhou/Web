const Handlebars = require('handlebars');
const fs = require('fs');
const { resolve } = require('path');

const { SafeString } = Handlebars;

const ieScripts = new SafeString('' +
  '<!-- script src="/node_modules/babel-polyfill/dist/polyfill.min.js"></script -->' +
  '<script src="/node_modules/es5-shim/es5-sham.min.js"></script>' +
  '<script src="/node_modules/console-polyfill/index.js"></script>' +
  '<script src="/dist/ie/common.js"></script>' +
  '<script src="/dist/ie/index.js"></script>');

const scripts = new SafeString('' +
  '<script src="/dist/common.js"></script>' +
  '<script src="/dist/index.js"></script>');

const file = fs.readFileSync(resolve('./views/index.hbs'), 'utf8');
if (!file) {
  throw new Error('template file not existed');
}
const template = Handlebars.compile(file);
const render = (html, state, isIe = false) => {
  return template({
    serverRending: new SafeString(html),
    initialState: new SafeString(encodeURIComponent(JSON.stringify(state))),
    scripts: isIe ? ieScripts : scripts
  });
};

module.exports = render;
