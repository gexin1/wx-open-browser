const router = require("koa-router")();
const send = require("koa-send");
const path = require("path");
// 流的方式下载
router.get("/download", async (ctx, next) => {
  ctx.set({
    "Content-Disposition": "attachment;filename=1.png"
  });
  await send(ctx, path.resolve("/public/assets/qrcode.png"));
});

module.exports = router;
