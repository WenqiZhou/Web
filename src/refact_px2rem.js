/**
 * Creator: yeliex
 * Description: refact `px` to `rem`
 */
const fs = require('fs');
const { join } = require('path');
const { sync } = require('glob');

const files = sync('./desktop{/*.less,/*/*.less,/*/*/*.less}').filter(item => !item.match(/base\.less/));

files.forEach((file) => {
  const path = join(__dirname, file);
  const bakPath = `${path}_bak`;
  const content = fs.readFileSync(fs.existsSync(bakPath) ? bakPath : path, 'utf-8');

  const detect = content.match(/(\d*px)/g);

  if (detect) {
    const newContent = content.replace(/(\d*\.?\d*px)/g, (str) => {
      const number = str.replace(/px$/, '');

      if (number === 1) {
        return str;
      }

      const result = Number(Number(number) / 100).toFixed(6).replace(/^0\./, '.');
      return `${result}rem`;
    });

    fs.writeFileSync(bakPath, content, 'utf-8');
    fs.writeFileSync(`${path}`, newContent, 'utf-8');
    console.log(path, 'success');
  } else {
    console.log(path, 'nothing to change');
  }
});
