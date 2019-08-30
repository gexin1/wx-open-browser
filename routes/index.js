const router = require("koa-router")();
//router.prefix('/')
router.get("/android-wx", async (ctx, next) => {
  const userAgent = ctx.req.headers["user-agent"];

  const WX_BrowerReg = /MicroMessenger/i;
  const androidPhone = /Android/i;

  if (WX_BrowerReg.test(userAgent) && androidPhone.test(userAgent)) {
    //如果是安卓微信浏览器 就返回一个文件
    ctx.set({
      "Content-Disposition": "attachment;filename=river.apk"
    });
    ctx.response.status = 206;
    ctx.body = "";
  } else {
    // await ctx.render("ios-user-guide", {
    //   title: "ios用户打开浏览器引导"
    // });
    await ctx.render("demo", {
      title: "river test 微信浏览打开默认浏览器"
    });
  }
});
module.exports = router;
