const context = require(/^.*\/\.index\.js$/);

const components = context.reduce((total,path)=>{
  const key = path.match(/(.*)\/index.js$/);

  total[key[1]] = context[path];

  return total;
},{});
