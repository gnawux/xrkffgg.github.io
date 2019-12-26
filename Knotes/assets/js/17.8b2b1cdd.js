(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{260:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_13-npm-发布-vue-组件教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-npm-发布-vue-组件教程"}},[t._v("#")]),t._v(" 13. Npm 发布 Vue 组件教程")]),t._v(" "),a("h2",{attrs:{id:"_1-前-言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前-言"}},[t._v("#")]),t._v(" 1 前 言")]),t._v(" "),a("p",[t._v("平时我们在开发的时候经常使用 "),a("code",[t._v("npm")]),t._v(" 安装各种组件。")]),t._v(" "),a("p",[t._v("今天我们就来尝试下制作一个自己的组件发布到 "),a("code",[t._v("npm")]),t._v(" 上。")]),t._v(" "),a("p",[t._v("这里我以自己刚发布的一个 "),a("code",[t._v("Vue")]),t._v(" 组件来介绍。感兴趣的可以来下载玩玩。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/xrkffgg/k-progress",target:"_blank",rel:"noopener noreferrer"}},[t._v("k-progress"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"安-装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安-装"}},[t._v("#")]),t._v(" 安 装")]),t._v(" "),a("p",[a("code",[t._v("npm install -S k-progress")])]),t._v(" "),a("h3",{attrs:{id:"使-用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使-用"}},[t._v("#")]),t._v(" 使 用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'k-progress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'k-progress/dist/k-progress.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-开-发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开-发"}},[t._v("#")]),t._v(" 2 开 发")]),t._v(" "),a("h3",{attrs:{id:"_2-1-新建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-新建项目"}},[t._v("#")]),t._v(" 2.1 新建项目")]),t._v(" "),a("p",[t._v("新建一个 "),a("code",[t._v("Vue")]),t._v(" ，熟悉的可以直接略过哈。")]),t._v(" "),a("p",[t._v("这里我使用的是 "),a("code",[t._v("@vue/cli")]),t._v("。")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @vue/cli\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @vue/cli\n")])])]),a("ol",{attrs:{start:"2"}},[a("li")]),t._v(" "),a("p",[t._v("执行该命令，可检查是否安装成功。")]),t._v(" "),a("p",[a("code",[t._v("vue --version")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li")]),t._v(" "),a("p",[t._v("我经常使用 "),a("code",[t._v("vue ui")]),t._v(" 来新建项目，这个命令会生成一个可视化操作页面，特别方便。")]),t._v(" "),a("p",[t._v("我的项目用到了 "),a("code",[t._v("scss")]),t._v("，新建的时候勾选上。")]),t._v(" "),a("p",[t._v("至此项目新建完成。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-开发功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-开发功能"}},[t._v("#")]),t._v(" 2.2 开发功能")]),t._v(" "),a("p",[t._v("默认新建的项目有个 "),a("code",[t._v("HelloWorld.vue")]),t._v(" 的例子，我们可以在这个页面，引用我们的组件来检测开发效果。")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("src/components")]),t._v(" 中，我们新建一个 "),a("code",[t._v("progress.vue")]),t._v("，该文件名称随意。")]),t._v(" "),a("p",[t._v("具体的插件功能在此页面编写。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li")]),t._v(" "),a("p",[t._v("在同级目录下新建一个 "),a("code",[t._v("index.scss")]),t._v(" 文件用来保存插件使用的样式文件。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li")]),t._v(" "),a("p",[t._v("在同级目录下新建一个 "),a("code",[t._v("index.js")]),t._v(" 文件来注册 "),a("code",[t._v("Vue")]),t._v(" 组件。")]),t._v(" "),a("p",[t._v("这里以我为例。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" kProgress "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./progress.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Components "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    kProgress\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li")]),t._v(" "),a("p",[t._v("同时我们可以在 "),a("code",[t._v("HelloWorld.vue")]),t._v(" 文件中来调用我们的组件查看效果。")]),t._v(" "),a("h2",{attrs:{id:"_3-构-建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-构-建"}},[t._v("#")]),t._v(" 3 构 建")]),t._v(" "),a("p",[t._v("构建主要是对 "),a("code",[t._v("package.json")]),t._v(" 文件进行更改。以我的为例。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k-progress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dist/k-progress.common.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"files"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service serve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --target lib --k-progress main ./src/components/index.js"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("name")]),t._v(" : 插件名称；")]),t._v(" "),a("li",[a("code",[t._v("version")]),t._v(" : 版本号，每次 "),a("code",[t._v("npm publish")]),t._v(" 都需要进行更改；")]),t._v(" "),a("li",[a("code",[t._v("main")]),t._v(" : 插件的主文件路径；")]),t._v(" "),a("li",[a("code",[t._v("files")]),t._v(" : 发布保留的文件；")]),t._v(" "),a("li",[a("code",[t._v("private")]),t._v(" : 这里要改成 "),a("code",[t._v("false")]),t._v(" ;")]),t._v(" "),a("li",[a("code",[t._v("scripts")]),t._v(" : 执行命令；")])]),t._v(" "),a("p",[t._v("执行 "),a("code",[t._v("yarn package")]),t._v(" 进行构建命令，不熟悉 "),a("code",[t._v("yarn")]),t._v(" 的可以执行 "),a("code",[t._v("npm run package")]),t._v("，不过真心推荐 "),a("code",[t._v("yarn")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_4-发-布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-发-布"}},[t._v("#")]),t._v(" 4 发 布")]),t._v(" "),a("h3",{attrs:{id:"_4-1-注册账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-注册账号"}},[t._v("#")]),t._v(" 4.1 注册账号")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_4-2-登-录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-登-录"}},[t._v("#")]),t._v(" 4.2 登 录")]),t._v(" "),a("p",[t._v("在自己的项目中，执行 "),a("code",[t._v("npm login")]),t._v("，会提示让你输入 "),a("code",[t._v("npm")]),t._v(" 账号密码。")]),t._v(" "),a("p",[t._v("可以通过 "),a("code",[t._v("npm whoami")]),t._v(" 来检查自己是否登录成功。")]),t._v(" "),a("h3",{attrs:{id:"_4-3-发-布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-发-布"}},[t._v("#")]),t._v(" 4.3 发 布")]),t._v(" "),a("p",[a("code",[t._v("npm publish")])]),t._v(" "),a("p",[t._v("这里列出可能出现的 2 个错误。")]),t._v(" "),a("ol",[a("li",[a("code",[t._v('"private": true')]),t._v(" 会报错")]),t._v(" "),a("li",[a("code",[t._v("version")]),t._v(" ："),a("code",[t._v("publish")]),t._v(" 过一次后，相同版本的无法再次发布")])]),t._v(" "),a("h2",{attrs:{id:"_5-后-记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-后-记"}},[t._v("#")]),t._v(" 5 后 记")]),t._v(" "),a("p",[a("strong",[t._v("感谢支持。")])]),t._v(" "),a("p",[a("strong",[t._v("若不足之处，欢迎大家指出，共勉。")])]),t._v(" "),a("p",[a("strong",[t._v("如果觉得不错，记得 点赞，谢谢大家 ʚ💖ɞ")])]),t._v(" "),a("p",[a("strong",[t._v("欢迎关注。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/xrkffgg",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/user/59c369496fb9a00a4843a3e2",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘 金"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/u/4ca4daac5890",target:"_blank",rel:"noopener noreferrer"}},[t._v("简 书"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_5-1-原文地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-原文地址"}},[t._v("#")]),t._v(" 5.1 原文地址")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://xrkffgg.github.io/Knotes/blog/13.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://xrkffgg.github.io/Knotes/blog/13.html"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);