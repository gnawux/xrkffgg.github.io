(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{199:function(a,t,e){"use strict";e.r(t);var n=e(0),r=Object(n.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_1-js计算两个时间间隔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-js计算两个时间间隔","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. JS计算两个时间间隔")]),a._v(" "),e("h2",{attrs:{id:"_1-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 1 前言")]),a._v(" "),e("h3",{attrs:{id:"_1-1-业务场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-业务场景","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 业务场景")]),a._v(" "),e("p",[a._v("JavaScript计算两个时间相隔了 多少年多少月多少日。时分秒这里不作考虑。")]),a._v(" "),e("h2",{attrs:{id:"_2-实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 2 实现原理")]),a._v(" "),e("h3",{attrs:{id:"_2-1-获取当前时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-获取当前时间","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 获取当前时间")]),a._v(" "),e("p",[a._v("若需要和当前时间比较，这里提供当前时间的获取格式化方法。我这里是根据传入类型输出日期或者日期+时间，可以明显看出"),e("code",[a._v("type")]),a._v("为"),e("code",[a._v("day")]),a._v("时，输出日期。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("getNowDate(type){\n    let now = new Date()\n    let year = now.getFullYear()\n    let month = now.getMonth() + 1\n    let day = now.getDate()\n    let hh = now.getHours()\n    let mm = now.getMinutes()\n    let ss = now.getSeconds()\n\n    month = month < 10 ? '0'+ month : month\n    day = day < 10 ? '0'+ day : day\n\n    if(type == 'day'){\n      return year +'-'+ month +'-'+ day\n    } else {\n      return year +'-'+ month +'-'+ day + ' '+ hh + ':' + mm + ':' + ss\n    }\n},\n")])])]),e("h3",{attrs:{id:"_2-2比较时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2比较时间","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2比较时间")]),a._v(" "),e("p",[a._v("传入两个参数，格式如：2008-08-08")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("getDiffYmdBetweenDate(sDate1,sDate2){\n    var fixDate = function(sDate){\n        var aD = sDate.split('-');\n        for(var i = 0; i < aD.length; i++){\n            aD[i] = fixZero(parseInt(aD[i]));\n        }\n        return aD.join('-');\n    };\n      \n    var fixZero = function(n){\n        return n < 10 ? '0'+n : n;\n    };\n      \n    var fixInt = function(a){\n        for(var i = 0; i < a.length; i++){\n            a[i] = parseInt(a[i]);\n        }\n        return a;\n    };\n      \n    var getMonthDays = function(y,m){\n        var aMonthDays = [0,31,28,31,30,31,30,31,31,30,31,30,31];\n        if((y%400 == 0) || (y%4==0 && y%100!=0)){\n            aMonthDays[2] = 29;\n        }\n        return aMonthDays[m];\n    };\n      \n    var checkDate = function(sDate){\n    };\n    var y = 0;\n    var m = 0;\n    var d = 0;\n    var sTmp;\n    var aTmp;\n    sDate1 = fixDate(sDate1);\n    sDate2 = fixDate(sDate2);\n    if(sDate1 > sDate2){\n        return 'past'\n    }\n    var aDate1 = sDate1.split('-');\n    aDate1 = fixInt(aDate1);\n    var aDate2 = sDate2.split('-');\n    aDate2 = fixInt(aDate2);\n    //计算相差的年份\n    /*aTmp = [aDate1[0]+1,fixZero(aDate1[1]),fixZero(aDate1[2])];\n    while(aTmp.join('-') <= sDate2){\n        y++;\n        aTmp[0]++;\n    }*/\n    y = aDate2[0] - aDate1[0];\n    if( sDate2.replace(aDate2[0],'') < sDate1.replace(aDate1[0],'')){\n        y = y - 1;\n    }\n    //计算月份\n    aTmp = [aDate1[0]+y,aDate1[1],fixZero(aDate1[2])];\n    while(true){\n        if(aTmp[1] == 12){\n            aTmp[0]++;\n            aTmp[1] = 1;\n        }else{\n            aTmp[1]++;\n        }\n        if(([aTmp[0],fixZero(aTmp[1]),aTmp[2]]).join('-') <= sDate2){\n            m++;\n        } else {\n            break;\n        }\n    }\n    //计算天数\n    aTmp = [aDate1[0]+y,aDate1[1]+m,aDate1[2]];\n    if(aTmp[1] > 12){\n        aTmp[0]++;\n        aTmp[1] -= 12;\n    }\n    while(true){\n        if(aTmp[2] == getMonthDays(aTmp[0],aTmp[1])){\n            aTmp[1]++;\n            aTmp[2] = 1;\n        } else {\n            aTmp[2]++;\n        }\n        sTmp = ([aTmp[0],fixZero(aTmp[1]),fixZero(aTmp[2])]).join('-');\n        if(sTmp <= sDate2){\n            d++;\n        } else {\n            break;\n        }\n    }\n    return {y:y,m:m,d:d}\n},\n")])])]),e("p",[a._v("返回的结果是一个对象，包含了"),e("code",[a._v("y m d")]),a._v("三个属性，可根据业务进行取用展示。")]),a._v(" "),e("p",[a._v("比较时间的时候，若"),e("code",[a._v("sDate1")]),a._v("为小的时间，这里直接返回"),e("code",[a._v("past")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"_2-3-页面展示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-页面展示","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3 页面展示")]),a._v(" "),e("p",[a._v("这里根据业务不同可以作不同的展示。这里列出自己的Vue展示处理展示。")]),a._v(" "),e("p",[a._v("其中"),e("code",[a._v("this.dataForm.hasdata")]),a._v("为页面的v-model。这样的处理的效果是观看直观。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let now = this.getNowDate('day')\nlet diffDate = this.getDiffYmdBetweenDate(now,this.data)\nlet hasdata = ''\n\nif(diffDate == 'past'){\n    this.dataForm.hasdata = '已过期'\n} else {\n    if(diffDate.y > 0){\n        hasdata += diffDate.y + '年' + diffDate.m + '月'\n    } else if (diffDate.y == 0) {\n        if(diffDate.m > 0){\n            hasdata += diffDate.m + '月'\n        }\n    }\n    this.dataForm.hasdata = hasdata + diffDate.d + '日'\n}\n")])])]),e("h3",{attrs:{id:"_2-4-页面效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-页面效果","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.4 页面效果")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/25/169b36c63bcc7e20?w=429&h=61&f=jpeg&s=10216",alt:""}}),a._v(" "),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/25/169b373d33a7b9d5?w=406&h=56&f=jpeg&s=10588",alt:""}}),a._v(" "),e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/25/169b372318fa7e63?w=412&h=59&f=jpeg&s=10579",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"_3-后记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-后记","aria-hidden":"true"}},[a._v("#")]),a._v(" 3 后记")]),a._v(" "),e("p",[e("strong",[a._v("感谢支持。若不足之处，欢迎大家指出，共勉。")])]),a._v(" "),e("p",[e("strong",[a._v("如果觉得不错，记得 点赞 谢谢大家")]),a._v(" 😂")]),a._v(" "),e("h3",{attrs:{id:"_3-1-参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 参考资料")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.itkeyword.com/doc/3825817034839276x780",target:"_blank",rel:"noopener noreferrer"}},[a._v("www.itkeyword.com/doc/..."),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"_3-2-时间处理js库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-时间处理js库","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.2 时间处理js库")]),a._v(" "),e("p",[a._v("这里列举几个js库备查找使用，排序无意义。")]),a._v(" "),e("ul",[e("li",[a._v("moment")]),a._v(" "),e("li",[a._v("day")]),a._v(" "),e("li",[a._v("date-fns")]),a._v(" "),e("li",[a._v("miment")])])])},[],!1,null,null,null);t.default=r.exports}}]);