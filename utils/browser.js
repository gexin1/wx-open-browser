class Browser {
  constructor(agent) {
    this.agent = agent;
    //浏览器类别
    this.WX_ANDROID = `WX_ANDROID`;
    this.QQ_ANDROID = `QQ_ANDROID`;
    this.WX_IOS = `WX_IOS`;
    this.OTHER = `OTHER`;
  }
  getType() {
    const { agent, WX_ANDROID, OTHER, WX_IOS, QQ_ANDROID } = this;
    const WX_BrowerReg = /MicroMessenger/i;
    const QQ_BrowerReg = /MQQBrowser/i;
    const androidReg = /Android/i;
    const iosReg = /iPhone/i;
    const isAndroid = agent => androidReg.test(agent);
    const isIos = agent => iosReg.test(agent);
    while (true) {
      if (QQ_BrowerReg.test(agent)) {
        if (isAndroid(agent)) {
          return QQ_ANDROID;
        }
      }
      if (!WX_BrowerReg.test(agent)) {
        if (isAndroid(agent)) {
          return WX_ANDROID;
        }
        if (isIos(agent)) {
          return WX_IOS;
        }
      }
      return OTHER;
    }
  }
}

module.exports = Browser;
