# Solar-Space-Web

## 使用
### 环境
- Node.js
- 使用配置：Vue Cli
### 安装
1. 安装Node.js环境，详见 [Node.js 安装配置](https://www.runoob.com/nodejs/nodejs-install-setup.html)
2. 安装Vue Cli环境，详见 [Vue Cli安装](https://cli.vuejs.org/zh/guide/installation.html)
3. clone本仓库至本地
4. 进入子文件夹 `solar-space-web` 后使用命令安装依赖 `npm install`
## 已安装的插件及依赖
- Vue Router
- [axios](https://axios-http.com/)
- [foxone/mixin-sdk-jsbridge](https://github.com/fox-one/mixin-sdk-jsbridge)
- [foxone/uikit](https://github.com/fox-one/uikit)->UI组件库

## 版本号和自动部署  
自动部署激活条件为新的推送含有一定规则的 tag，规则为“v重大更新.新增功能.小修改和bug修复”（如 v0.2.4 表示增加两个功能后的小版本后又有新的四回小修改）的三段式。  
细碎的、小提交不需要打标签，而且不会自动部署，另外，如内测版本的 tag 遵顼 alphax.y.z的三段式（如 alpha0.2.4）也不会自动部署。  

链接：[common.js-Documentation]()