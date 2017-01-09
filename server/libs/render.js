const Handlebars = require('handlebars');
const fs = require('fs');
const { resolve } = require('path');

const { SafeString } = Handlebars;

const file = fs.readFileSync(resolve('./views/index.hbs'), 'utf8');
if (!file) {
  throw new Error('template file not existed');
}
const template = Handlebars.compile(file);
const render = (html, state) => {
  return template({
    serverRending: new SafeString(html),
    initialState: new SafeString(encodeURIComponent(JSON.stringify(state)))
  });
};

module.exports = render;
