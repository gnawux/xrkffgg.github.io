(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{193:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_2-js实现页面查看zip文件中的内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-js实现页面查看zip文件中的内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. JS实现页面查看zip文件中的内容")]),t._v(" "),r("h2",{attrs:{id:"_1-前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 前言")]),t._v(" "),r("h3",{attrs:{id:"_1-1-业务场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-业务场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 业务场景")]),t._v(" "),r("p",[t._v("附件zip上传到服务器后，在页面中可直接查看zip中的文件内容，如：readme.txt。")]),t._v(" "),r("h2",{attrs:{id:"_2-实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 实现原理")]),t._v(" "),r("h3",{attrs:{id:"_2-1-引入工具库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-引入工具库","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 引入工具库")]),t._v(" "),r("blockquote",[r("p",[t._v("jszip、jszip-utils")])]),t._v(" "),r("p",[r("code",[t._v("npm i jszip -S")])]),t._v(" "),r("p",[r("code",[t._v("npm i jszip-utils -S")])]),t._v(" "),r("h3",{attrs:{id:"_2-2-查看txt中内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-查看txt中内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 查看txt中内容")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('// 查看\nview(row){\n    var JSZip = require("jszip")\n    var JSZipUtils = require("jszip-utils")\n    let that = this\n\n    JSZipUtils.getBinaryContent(row.downloadPath, function(err, data) {\n        if(err) {\n            throw err; \n        }\n        JSZip.loadAsync(data).then(function (files) {\n            files.files[\'readme.txt\'].async("string").then(function(con){\n            that.content = con\n            that.dialog = true\n            })\n        })\n    })\n},\n')])])]),r("p",[t._v("在vue中引入，其中在"),r("code",[t._v("JSZipUtils")]),t._v("使用中"),r("code",[t._v("this")]),t._v("的指向进行了重定向。")]),t._v(" "),r("p",[r("code",[t._v("row.downloadPath")]),t._v("是附件的下载地址，"),r("code",[t._v("con")]),t._v("是txt中内容。")]),t._v(" "),r("p",[r("code",[t._v("readme.txt")]),t._v("是要查看的文件名+后缀。")]),t._v(" "),r("p",[t._v("这里使用了"),r("code",[t._v("input")]),t._v("定义的"),r("code",[t._v('v-model="content"')]),t._v("来展示。")]),t._v(" "),r("h2",{attrs:{id:"_3-后记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-后记","aria-hidden":"true"}},[t._v("#")]),t._v(" 3 后记")]),t._v(" "),r("p",[r("strong",[t._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),r("p",[r("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家")]),t._v(" 😂")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("欢迎关注 我的：")]),t._v(" "),r("a",{attrs:{href:"https://github.com/xrkffgg/Tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Github】"),r("OutboundLink")],1),r("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2/posts",target:"_blank",rel:"noopener noreferrer"}},[t._v("【掘金】"),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("【简书】"),r("OutboundLink")],1),r("a",{attrs:{href:"https://blog.csdn.net/xrk_ffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【CSDN】"),r("OutboundLink")],1),r("a",{attrs:{href:"https://my.oschina.net/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【OSCHINA】"),r("OutboundLink")],1),r("a",{attrs:{href:"https://segmentfault.com/u/xrkffgg/articles",target:"_blank",rel:"noopener noreferrer"}},[t._v("【SF】"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("这两个库都是关于JS处理压缩文件的，功能很多，目前只学到了一小点，更多功能还需再研究。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1 参考资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/sujun10/article/details/76038886",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog.csdn.net/sujun10..."),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/lovefive5/article/details/80527320",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog.csdn.net/lovefive5..."),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://stuk.github.io/jszip/documentation/api_jszip.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSZip API"),r("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=n.exports}}]);