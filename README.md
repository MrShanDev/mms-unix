# mms-unix

基于 uni-app-x 的移动端项目，内置登录、注册、找回密码、会员中心等基础功能。

## 功能概览

- **登录**：快捷登录（手机号+验证码）、账号密码登录
- **注册**：手机号、验证码、用户名、密码
- **找回密码**：手机验证码重置
- **会员中心**：头像、昵称、收藏/足迹/优惠券、我的订单、服务工具宫格
- **接口请求**：`common/utils/request.uts` 封装 `uni.request`，支持 token、401 自动跳转登录
- **全局存储**：`common/utils/storage.uts` 读写 token、userInfo
- **登录拦截**：`common/utils/auth.uts`，会员中心等页面未登录自动跳转登录并带回跳

## 目录结构

```
mms-unix/
├── common/
│   ├── config.uts          # 全局配置（baseUrl、storage key 等）
│   ├── api/               # API 接口定义
│   └── utils/
│       ├── storage.uts     # 存储工具
│       ├── request.uts    # 请求封装
│       └── auth.uts       # 登录校验
├── pages/
│   ├── index/             # 首页
│   ├── login/             # 登录
│   ├── register/          # 注册
│   ├── forgot-password/   # 找回密码
│   └── user/              # 我的
├── static/
└── uni_modules/
    └── mms-unix/          # mms-unix 组件模块
```

## 配置说明

- **API 地址**：在 `common/config.uts` 中修改 `baseUrl`
- **登录态存储**：使用 `storage.getToken()`、`storage.setUserInfo()` 等
- **需要登录的页面**：在 `config.loginRequiredPaths` 中配置，或在页面内手动调用 `checkLogin(path)` 做拦截

## 开发说明

- 当前登录/注册/找回密码可直接对接 `common/api/auth.uts` 中的接口调用
- 会员中心各入口（收藏、订单、地址等）可根据业务需求进行扩展
- TabBar 图标可替换为自定义图标
