const router = require("koa-router")();
const send = require("koa-send");
const path = require("path");
// 流的方式下载
router.get("/download", async (ctx, next) => {
  await send(ctx, path.resolve("/public/assets/test.apk"));
});

module.exports = router;
