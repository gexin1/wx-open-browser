const router = require("koa-router")();
const send = require("koa-send");
const path = require("path");
router.get("/download", async (ctx, next) => {
  const name = "yan-h.jpg";
  ctx.set({
    "Content-Disposition": `attachment;filename=${name}`
  });
  await send(ctx, path.resolve(`/public/images/${name}`));
});

module.exports = router;
