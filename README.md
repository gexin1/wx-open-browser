### wx-open-phone-browser

### 安卓微信链接自动打开默认浏览器

扫码体验 如果打开失败请提 issue  
<img width='200' src="http://wx.riverxin.cn/images/qrcode.png" >

### 实现方案

1.我们需要判断当前链接是否在安卓微信环境,如果是就增加响应头，设置状态码为 206

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

2.  微信就会自动打开默认浏览器,打开浏览器会重新请求链接我们判断一下 user-agent,我们就可以根据做我们需要的操作了
