<<<<<<< HEAD
# mms-ui-nux

基于 uni-app-x + uview-ultra 的移动端脚手架，内置登录、注册、找回密码、会员中心等基础功能。

## 功能概览

- **uview-ultra** 组件库（需从插件市场导入，见下方说明）
- **登录**：快捷登录（手机号+验证码）、账号密码登录
- **注册**：手机号、验证码、用户名、密码
- **找回密码**：手机验证码重置
- **会员中心**：头像、昵称、会员等级、收藏/足迹/优惠券、我的订单、服务工具宫格
- **接口请求**：`common/utils/request.ts` 封装 `uni.request`，支持 token、401 自动跳转登录
- **全局存储**：`common/utils/storage.ts` 读写 token、userInfo
- **登录拦截**：`common/utils/auth.ts`，会员中心等页面未登录自动跳转登录并带回跳

## 目录结构

```
mms-ui-nux/
├── common/
│   ├── config.ts          # 全局配置（baseUrl、storage key 等）
│   ├── api/               # API 接口定义
│   └── utils/
│       ├── storage.ts     # 存储工具
│       ├── request.ts    # 请求封装
│       └── auth.ts       # 登录校验
├── pages/
│   ├── index/             # 首页
│   ├── login/             # 登录
│   ├── register/          # 注册
│   ├── forgot-password/   # 找回密码
│   └── member-center/     # 会员中心
├── static/
└── uni_modules/
    └── uview-ultra/       # 占位，需导入完整插件
```

## uview-ultra 安装

1. 打开 [uni-app 插件市场 uview-ultra](https://ext.dcloud.net.cn/plugin?name=uview-ultra)
2. 选择 **uni_modules 版本** → **使用 HBuilderX 导入插件**
3. 选择本项目中 `mms-ui-nux` 作为导入目标
4. 导入完成后重启 HBuilderX 或重新编译

本项目已预置 uview-ultra 的配置（main.uts、App.uvue、uni.scss、pages.json easycom、manifest mergeVirtualHostAttributes），导入插件后可直接使用 `up-` 前缀组件。

## 配置说明

- **API 地址**：在 `common/config.ts` 中修改 `baseUrl`
- **登录态存储**：使用 `storage.getToken()`、`storage.setUserInfo()` 等
- **需要登录的页面**：在 `config.loginRequiredPaths` 中配置，或在页面内手动调用 `checkLogin(path)` 做拦截

## 开发说明

- 当前登录/注册/找回密码使用 Mock 逻辑，可替换为 `common/api/auth.uts` 中的接口调用
- 会员中心各入口（收藏、订单、地址等）为占位，需后续对接业务接口
- TabBar 图标暂用 `static/logo.png`，可替换为 `tab-home.png`、`tab-user.png` 等
=======
# mms-unix

#### 介绍
本公司自己使用。

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
>>>>>>> 3c3e67ba260aa9e8c37b21722a58b94e9bcd3f3e
