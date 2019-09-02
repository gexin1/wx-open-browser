### wx-open-phone-browser

### 项目启动

安装依赖

```
npm i
```

启动项目

```
npm run dev
```

### 安卓微信链接自动打开默认浏览器

**请使用andorid微信扫码体验**
<br /> 
<img width='200' src="http://wx.riverxin.cn/images/qrcode.png" >

### 实现方案

1.根据 user-agent 判断当前链接在安卓微信环境,增加响应头，设置状态码为 206 安卓微信就会自动打开默认浏览器

```
  "Content-Disposition": "attachment;filename=river.apk"
```

Response Headers 如下

```
   HTTP/1.1 206 Partial Content
   Content-Disposition: attachment;filename=river.apk
   Content-Type: text/plain; charset=utf-8
   Content-Length: 0
   Date: Sun, 01 Sep 2019 14:54:31 GMT
   Connection: keep-alive
```

2.  微信自动打开默认浏览器,会重新请求链接我们判断一下 user-agent,我们就可以根据做我们需要的操作了

### 参考文档

[Content-Disposition](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition)
