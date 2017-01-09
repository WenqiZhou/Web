/**
 * 读取目录下的所有controllers并统一返回
 */

const fs = require('fs');

const controllers = {};

fs.readdirSync(__dirname).forEach((controller) => {
  const reg = controller.match(/(.*)\.controller\.js?$/);
  if (reg) {
    /* eslint import/no-dynamic-require:0 */
    controllers[reg[1]] = require(`./${controller}`);
  }
});

module.exports = controllers;
