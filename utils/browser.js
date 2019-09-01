class Browser {
  constructor(agent) {
    this.agent = agent;
    //浏览器类别
    this.WX_ANDROID = `WX_ANDROID`;
    this.WX_IOS = `WX_IOS`;
    this.OTHER = `OTHER`;
  }
  getType() {
    const { agent, WX_ANDROID, OTHER, WX_IOS } = this;
    const WX_BrowerReg = /MicroMessenger/i;
    const androidReg = /Android/i;
    const iosReg = /iPhone/i;
    while (true) {
      if (!WX_BrowerReg.test(agent)) {
        return OTHER;
      }
      if (androidReg.test(agent)) {
        return WX_ANDROID;
      }
      if (iosReg.test(agent)) {
        return WX_IOS;
      }
      return OTHER;
    }
  }
}

module.exports = Browser;
