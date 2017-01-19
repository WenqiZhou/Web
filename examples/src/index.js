// 读取当前目录下的所有文件夹作为一级路由,文件名作为二级路由
const contexts = require.context('./', true, /.*\/.*\/.*\.js$/);
const keys = contexts.keys();

module.exports = keys.reduce((total, current) => {
  const key = current.split('/').slice(1, 3).map(k => k.replace(/\.js?$/, ''));

  total[key[0]] = total[key[0]] || {};
  total[key[0]][key[1]] = contexts(current);

  return total;
}, {});
