const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  ctx.redirect("/wx");
});

module.exports = router;
