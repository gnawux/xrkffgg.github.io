(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-098f3044"],{"0634":function(e,t,n){"use strict";var i=n("9a02"),r=n.n(i);r.a},"16b9":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"js001"}},[n("div",{staticClass:"main-title"},[e._v("数字转千分")]),n("div",{staticClass:"main-title-time num"},[e._v("2019-09-18")]),n("div",{staticClass:"main-title-tip"},[e._v("\n    各有优缺\n  ")]),n("div",{staticClass:"main-content"},[n("el-form",{staticStyle:{width:"500px"},attrs:{"label-width":"100px"},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[n("el-row",[n("el-form-item",{attrs:{label:"转化前"}},[n("el-input",{attrs:{clearable:"",type:"number",placeholder:"请输入"},on:{clear:function(t){e.form.after=""}},model:{value:e.form.before,callback:function(t){e.$set(e.form,"before",t)},expression:"form.before"}})],1)],1),n("el-row",[n("el-form-item",{attrs:{label:"转化后"}},[n("el-input",{attrs:{readonly:""},model:{value:e.form.after,callback:function(t){e.$set(e.form,"after",t)},expression:"form.after"}})],1)],1)],1),n("div",{staticClass:"btns"},e._l(e.btns,function(t,i){return n("div",{key:i,staticStyle:{"margin-left":"20px"}},[n("el-button",{attrs:{loading:e.btnloading,type:"primary"},on:{click:function(t){return e.doChange(i+1)}}},[e._v(e._s(i+1+" "+t.name))])],1)}),0),n("el-tag",{staticStyle:{"margin-left":"40px","margin-top":"20px"}},[e._v("工具JS")]),n("el-link",{staticStyle:{"margin-left":"10px"},attrs:{href:"https://github.com/adamwdraper/Numeral-js",target:"_blank",type:"primary"}},[e._v("\n      numeraljs\n    ")])],1)])},r=[],a=(n("28a5"),n("a481"),{name:"js001",mixins:[],components:{},props:[],created:function(){},watch:{},mounted:function(){},data:function(){return{form:{before:"",after:""},btns:[{name:"零宽断言"},{name:"子项替换"},{name:"数组互转"},{name:"字符加分割"},{name:"数组加分割"},{name:"JS自带方法"}],btnloading:!1}},methods:{doChange:function(e){this.btnloading=!0;var t,n=this.form.before;switch(e){case 1:t=n.replace(/\d{1,3}(?=(\d{3})+$)/g,function(e){return e+","});break;case 2:t=n.replace(/(\d{1,3})(?=(\d{3})+$)/g,function(e){return e+","});break;case 3:t=n.split("").reverse().join("").replace(/(\d{3})+?/g,function(e){return e+","}).replace(/,$/,"").split("").reverse().join("");break;case 4:t=this.fun4(n);break;case 5:t=this.fun5(n);break;case 6:t=(+n).toLocaleString();default:break}this.form.after=t,this.btnloading=!1},fun4:function(e){var t="",n=0,i=e.length-1;while(i>=0)t+=n%3===0&&0!==n?","+e[i]:e[i],i--,n++;return t=t.split("").reverse().join(""),t},fun5:function(e){var t=0,n=e.length,i=e.split("");while(n-t>0)n>=t&&n-t!==n&&i.splice(n-t,0,","),t+=3,4;return i.join("")}}}),l=a,s=(n("0634"),n("2877")),o=Object(s["a"])(l,i,r,!1,null,"8bb31e6c",null);t["default"]=o.exports},"28a5":function(e,t,n){"use strict";var i=n("aae3"),r=n("cb7c"),a=n("ebd6"),l=n("0390"),s=n("9def"),o=n("5f1b"),c=n("520a"),u=n("79e5"),f=Math.min,d=[].push,m="split",p="length",h="lastIndex",v=4294967295,b=!u(function(){RegExp(v,"y")});n("214f")("split",2,function(e,t,n,u){var g;return g="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(r,e,t);var a,l,s,o=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,m=void 0===t?v:t>>>0,b=new RegExp(e.source,u+"g");while(a=c.call(b,r)){if(l=b[h],l>f&&(o.push(r.slice(f,a.index)),a[p]>1&&a.index<r[p]&&d.apply(o,a.slice(1)),s=a[0][p],f=l,o[p]>=m))break;b[h]===a.index&&b[h]++}return f===r[p]?!s&&b.test("")||o.push(""):o.push(r.slice(f)),o[p]>m?o.slice(0,m):o}:"0"[m](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var r=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,r,i):g.call(String(r),n,i)},function(e,t){var i=u(g,e,this,t,g!==n);if(i.done)return i.value;var c=r(e),d=String(this),m=a(c,RegExp),p=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),x=new m(b?c:"^(?:"+c.source+")",h),w=void 0===t?v:t>>>0;if(0===w)return[];if(0===d.length)return null===o(x,d)?[d]:[];var k=0,y=0,_=[];while(y<d.length){x.lastIndex=b?y:0;var S,j=o(x,b?d:d.slice(y));if(null===j||(S=f(s(x.lastIndex+(b?0:y)),d.length))===k)y=l(d,y,p);else{if(_.push(d.slice(k,y)),_.length===w)return _;for(var C=1;C<=j.length-1;C++)if(_.push(j[C]),_.length===w)return _;y=k=S}}return _.push(d.slice(k)),_}]})},"9a02":function(e,t,n){},aae3:function(e,t,n){var i=n("d3f4"),r=n("2d95"),a=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==r(e))}}}]);