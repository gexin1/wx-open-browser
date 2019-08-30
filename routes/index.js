const router = require("koa-router")();
//router.prefix('/')
router.get("/android-wx", async (ctx, next) => {
  const userAgent = ctx.req.headers["user-agent"];

  const WX_BrowerReg = /MicroMessenger/i;
  const androidPhone = /Android/i;
  //如果是安卓微信浏览器 就返回一个文件
  if (WX_BrowerReg.test(userAgent) && androidPhone.test(userAgent)) {
    ctx.body = "";
    ctx.response.status = 206;
    ctx.set({
      "Accept-Ranges": "bytes",
      Connection: "keep-alive",
      "Content-Disposition": "attachment;filename=river.apk",
      "Content-Length": 0,
      "Content-Range": "bytes 0-1/1",
      "Content-Type": "text/plain; charset=utf-8"
    });
  } else {
    await ctx.render("demo", {
      title: "river test 微信浏览打开默认浏览器"
    });
  }
});
module.exports = router;
