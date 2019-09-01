const router = require("koa-router")();
const send = require("koa-send");
const path = require("path");
router.get("/test", async (ctx, next) => {
  await send(ctx, path.resolve("/public/assets/1.apk"));
});

module.exports = router;
