(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{249:function(e,r,a){"use strict";a.r(r);var t=a(1),v=Object(t.a)({},function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_13-npm-发布-vue-组件教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-npm-发布-vue-组件教程","aria-hidden":"true"}},[e._v("#")]),e._v(" 13. Npm 发布 Vue 组件教程")]),e._v(" "),a("h2",{attrs:{id:"_1-前-言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前-言","aria-hidden":"true"}},[e._v("#")]),e._v(" 1 前 言")]),e._v(" "),a("p",[e._v("平时我们在开发的时候经常使用 "),a("code",[e._v("npm")]),e._v(" 安装各种组件。")]),e._v(" "),a("p",[e._v("今天我们就来尝试下制作一个自己的组件发布到 "),a("code",[e._v("npm")]),e._v(" 上。")]),e._v(" "),a("p",[e._v("这里我以自己刚发布的一个 "),a("code",[e._v("Vue")]),e._v(" 组件来介绍。感兴趣的可以来下载玩玩。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/xrkffgg/k-progress",target:"_blank",rel:"noopener noreferrer"}},[e._v("k-progress"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"安-装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安-装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安 装")]),e._v(" "),a("p",[a("code",[e._v("npm install -S k-progress")])]),e._v(" "),a("h3",{attrs:{id:"使-用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使-用","aria-hidden":"true"}},[e._v("#")]),e._v(" 使 用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// main.js\nimport 'k-progress';\nimport 'k-progress/dist/k-progress.css';\n")])])]),a("h2",{attrs:{id:"_2-开-发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开-发","aria-hidden":"true"}},[e._v("#")]),e._v(" 2 开 发")]),e._v(" "),a("h3",{attrs:{id:"_2-1-新建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-新建项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 新建项目")]),e._v(" "),a("p",[e._v("新建一个 "),a("code",[e._v("Vue")]),e._v(" ，熟悉的可以直接略过哈。")]),e._v(" "),a("p",[e._v("这里我使用的是 "),a("code",[e._v("@vue/cli")]),e._v("。")]),e._v(" "),a("ol",[a("li")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g @vue/cli\n# OR\nyarn global add @vue/cli\n")])])]),a("ol",{attrs:{start:"2"}},[a("li")]),e._v(" "),a("p",[e._v("执行该命令，可检查是否安装成功。")]),e._v(" "),a("p",[a("code",[e._v("vue --version")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li")]),e._v(" "),a("p",[e._v("我经常使用 "),a("code",[e._v("vue ui")]),e._v(" 来新建项目，这个命令会生成一个可视化操作页面，特别方便。")]),e._v(" "),a("p",[e._v("我的项目用到了 "),a("code",[e._v("scss")]),e._v("，新建的时候勾选上。")]),e._v(" "),a("p",[e._v("至此项目新建完成。")]),e._v(" "),a("h3",{attrs:{id:"_2-2-开发功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-开发功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 开发功能")]),e._v(" "),a("p",[e._v("默认新建的项目有个 "),a("code",[e._v("HelloWorld.vue")]),e._v(" 的例子，我们可以在这个页面，引用我们的组件来检测开发效果。")]),e._v(" "),a("ol",[a("li")]),e._v(" "),a("p",[e._v("在 "),a("code",[e._v("src/components")]),e._v(" 中，我们新建一个 "),a("code",[e._v("progress.vue")]),e._v("，该文件名称随意。")]),e._v(" "),a("p",[e._v("具体的插件功能在此页面编写。")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li")]),e._v(" "),a("p",[e._v("在同级目录下新建一个 "),a("code",[e._v("index.scss")]),e._v(" 文件用来保存插件使用的样式文件。")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li")]),e._v(" "),a("p",[e._v("在同级目录下新建一个 "),a("code",[e._v("index.js")]),e._v(" 文件来注册 "),a("code",[e._v("Vue")]),e._v(" 组件。")]),e._v(" "),a("p",[e._v("这里以我为例。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import Vue from 'vue';\nimport kProgress from './progress.vue';\nimport './index.scss';\n\nconst Components = {\n    kProgress\n};\n\nObject.keys(Components).forEach(name => {\n    Vue.component(name, Components[name]);\n});\n\nexport default Components;\n")])])]),a("ol",{attrs:{start:"4"}},[a("li")]),e._v(" "),a("p",[e._v("同时我们可以在 "),a("code",[e._v("HelloWorld.vue")]),e._v(" 文件中来调用我们的组件查看效果。")]),e._v(" "),a("h2",{attrs:{id:"_3-构-建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-构-建","aria-hidden":"true"}},[e._v("#")]),e._v(" 3 构 建")]),e._v(" "),a("p",[e._v("构建主要是对 "),a("code",[e._v("package.json")]),e._v(" 文件进行更改。以我的为例。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"name": "k-progress",\n"version": "1.0.0",\n"main": "./dist/k-progress.common.js",\n"files": [\n    "dist"\n],\n"private": false,\n"scripts": {\n    "serve": "vue-cli-service serve",\n    "build": "vue-cli-service build",\n    "package": "vue-cli-service build --target lib --k-progress main ./src/components/index.js"\n},\n')])])]),a("ul",[a("li",[a("code",[e._v("name")]),e._v(" : 插件名称；")]),e._v(" "),a("li",[a("code",[e._v("version")]),e._v(" : 版本号，每次 "),a("code",[e._v("npm publish")]),e._v(" 都需要进行更改；")]),e._v(" "),a("li",[a("code",[e._v("main")]),e._v(" : 插件的主文件路径；")]),e._v(" "),a("li",[a("code",[e._v("files")]),e._v(" : 发布保留的文件；")]),e._v(" "),a("li",[a("code",[e._v("private")]),e._v(" : 这里要改成 "),a("code",[e._v("false")]),e._v(" ;")]),e._v(" "),a("li",[a("code",[e._v("scripts")]),e._v(" : 执行命令；")])]),e._v(" "),a("p",[e._v("执行 "),a("code",[e._v("yarn package")]),e._v(" 进行构建命令，不熟悉 "),a("code",[e._v("yarn")]),e._v(" 的可以执行 "),a("code",[e._v("npm run package")]),e._v("，不过真心推荐 "),a("code",[e._v("yarn")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"_4-发-布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-发-布","aria-hidden":"true"}},[e._v("#")]),e._v(" 4 发 布")]),e._v(" "),a("h3",{attrs:{id:"_4-1-注册账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-注册账号","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.1 注册账号")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"_4-2-登-录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-登-录","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.2 登 录")]),e._v(" "),a("p",[e._v("在自己的项目中，执行 "),a("code",[e._v("npm login")]),e._v("，会提示让你输入 "),a("code",[e._v("npm")]),e._v(" 账号密码。")]),e._v(" "),a("p",[e._v("可以通过 "),a("code",[e._v("npm whoami")]),e._v(" 来检查自己是否登录成功。")]),e._v(" "),a("h3",{attrs:{id:"_4-3-发-布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-发-布","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.3 发 布")]),e._v(" "),a("p",[a("code",[e._v("npm publish")])]),e._v(" "),a("p",[e._v("这里列出可能出现的 2 个错误。")]),e._v(" "),a("ol",[a("li",[a("code",[e._v('"private": true')]),e._v(" 会报错")]),e._v(" "),a("li",[a("code",[e._v("version")]),e._v(" ："),a("code",[e._v("publish")]),e._v(" 过一次后，相同版本的无法再次发布")])]),e._v(" "),a("h2",{attrs:{id:"_5-后-记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-后-记","aria-hidden":"true"}},[e._v("#")]),e._v(" 5 后 记")]),e._v(" "),a("p",[a("strong",[e._v("感谢支持。")])]),e._v(" "),a("p",[a("strong",[e._v("若不足之处，欢迎大家指出，共勉。")])]),e._v(" "),a("p",[a("strong",[e._v("如果觉得不错，记得 点赞，谢谢大家 ʚ💖ɞ")])]),e._v(" "),a("p",[a("strong",[e._v("欢迎关注。")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2",target:"_blank",rel:"noopener noreferrer"}},[e._v("掘 金"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[e._v("简 书"),a("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=v.exports}}]);