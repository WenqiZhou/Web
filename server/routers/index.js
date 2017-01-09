const Router = require('koa-router');
const send = require('koa-send');
const { join } = require('path');
const Controllers = require('../controllers');

const rootPath = join(__dirname, '../../');
const assetsRoot = join(rootPath, './assets');

const router = new Router();

router.get('*', async(ctx, next) => {
  const { status = 200, data, error } = await Controllers.render.render(ctx, next);
  ctx.throw(status, data || error, false)
});

module.exports = router;
