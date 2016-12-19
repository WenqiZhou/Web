// 其实本不需要这个,但是如果没有这个文件,eslint会报错
const context = require(/^.*\/\.index\.js$/);

const components = context.reduce((total,path)=>{
  const key = path.match(/(.*)\/index.js$/);

  total[key[1]] = context[path];

  return total;
},{});
