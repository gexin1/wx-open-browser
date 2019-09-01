const router = require("koa-router")();
const { Browser } = require("../utils/index");
//router.prefix('/')
router.get("/wx", async (ctx, next) => {
  const { "user-agent": userAgent } = ctx.req.headers;
  const browser = new Browser(userAgent);
  const browserType = browser.getType();

  switch (browserType) {
    case browser.WX_ANDROID:
      //如果是安卓微信浏览器 就返回一个文件
      ctx.set({
        "Content-Disposition": "attachment;filename=river.apk"
      });
      ctx.response.status = 206;
      ctx.body = "";
      break;
    case browser.WX_IOS:
      await ctx.render("ios-user-guide", {
        title: "ios用户打开浏览器引导"
      });
      break;
    default:
      await ctx.render("demo", {
        title: "river test 微信浏览打开默认浏览器"
      });
      break;
  }
});
module.exports = router;
