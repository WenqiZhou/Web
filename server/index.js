require('babel-register')();
const Koa = require('koa');
const router = require('koa-router')();
const response = require('koa-response');
const fetch = require('autofetch');
const routers = require('./routers');
const mount = require('koa-mount');
const config = require('../config/app');
require('node.date-time');

fetch.callback(res => res.json());

const app = new Koa();

// 处理错误返回
app.use(response((ctx) => {
  console.log(`${new Date().format('Y-MM-dd HH:mm:SS:ms')} [REQUEST] ${ctx.originalUrl} ${JSON.stringify(ctx._POST)}
                       [RESPONSED] ${ctx.status} ${ctx._ERROR || ctx.message}`);
}));

// 处理异常捕获
app.use(async(ctx, next) => {
  try {
    await next();
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' || process.env.NODE_ENV !== 'test') {
      console.log(e);
    }
    ctx.throw(e.status || e.id || 500, (e instanceof Error) ? e.message : e);
  }
});

app.use(async(ctx, next) => {
  ctx._GET = ctx.query;

  await next();
});

// 处理所有路由的返回
app.use(mount(routers.middleware()));

router.all('*', async(ctx) => {
  ctx.throw();
});

app.use(router.routes()).use(router.allowedMethods({ throw: true }));

app.listen(config.server.port);

console.log(`${new Date().format('Y-MM-dd HH:mm:SS:ms')} Server start listened at ${config.server.port} with "${process.env.NODE_ENV}" env`);

