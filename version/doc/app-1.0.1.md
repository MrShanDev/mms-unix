# 演示工程 1.0.1（2026-03-24）

**简述：** 全局主色调整；「我的」与个人资料、联系页改版；服务菜单与配置更新。

## 主题

- 全局主色由 `#ff2727` 调整为 **`#ff0844`**（导航栏、Tab 选中色、个人中心头图、登录/注册/找回密码渐变、工具页按钮、`mms.scss` 工具类、演示页示例色等）。
- `common/config.ts` 中 `mmsUi.primaryColor` 与 `uni_modules/mms-unix/config/mms-ui-config.uts` 默认值对齐。

## 「我的」与个人相关页

- **个人中心**（`pages/user/user`）：顶部品牌色条 + **`mms-card`** 资料区 + **`mms-cell-group` / `mms-cell`** 列表菜单；`scroll-view` 承载内容；菜单项使用 **`mms-icon`**（`iconName` 配置）。
- **服务菜单数据**（`pages/user/myServiceData.uts`）：七项入口——介绍自己、开源项目、组件演示、联系我们、案例展示、公司业务、系统开发承接；路径与当前 `pages.json` 分包一致。
- **联系我们**（`pages_Me/contact/contact`，新建）：分组展示站点入口、商务说明、电话拨打（失败时弹窗展示号码）、邮箱入口。
- **个人资料**（`pages_Me/user_info/index`）：表单项改为 **`mms-cell` + `mms-cell-group`**；箭头使用 **`mms-icon`**；收货地址跳转地址列表页；右侧文案字号与行内对齐优化。

## 配置与文案

- `pages.json`：注册 `contact/contact`；导航栏背景色随主色更新。
- `locale/zh-Hans.json`、`locale/en.json`：新增 `page.contact`。
- `common/config.ts`：`loginRequiredPaths` 移除已不存在的 hosting 相关路径，保留 `user_address`、`user_info`。

## 版本字段

- `configInfo.versionName`：**1.0.1**（`versionCode` 递增）。

---

[返回索引](./README.md)
