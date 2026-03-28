# mUnix 项目进度明细

> 本文档汇总近期已落地改动与待办项，便于验收与排期。随迭代更新时请同步修订。  
> **未完成 / 未验证 / 测试清单（汇总）：**见 [`version/doc/qa-open-items.md`](./version/doc/qa-open-items.md)。  
> **版本与变更说明：**见 [`version/doc/README.md`](./version/doc/README.md)。

---

## 一、导航与信息架构

| 项 | 状态 | 说明 |
|----|------|------|
| 底部 Tab 四项 | ✅ 已完成 | **组件** / **工具** / **模版** / **我的**（`pages.json` + `locale`） |
| 组件入口 | ✅ 已完成 | 主包 `pages/components/components` 为默认首页；分包 `pages_demo/index` 仅 `switchTab` 兼容旧路径 |
| 原首页 `pages/index` | ✅ 已完成 | 已移除；登录/注册成功后回 **组件 Tab** |
| 工具页 | ✅ 已完成 | `pages/tools/tools`（剪贴板、`jumpTo` 演示） |
| 模版页 | ✅ 已完成 | `pages/templates/templates`（文章列表、登录、注册、关于等） |
| `Ut.uts` Tab 路径 | ✅ 已完成 | `tabBarPaths` 与上述四个 Tab 一致 |

---

## 二、文案与合规

| 项 | 状态 | 说明 |
|----|------|------|
| 去除历史外部示例库相关字样 | ✅ 已完成 | 演示文案、`extensions` 示例、`pages.json` 标题、注释等 |
| 组件列表分组 | ✅ 已完成 | 基础 / 表单 / 反馈 / 展示 / **布局与扩展** / 业务 |

---

## 三、静态资源与外链策略（代码侧）

| 项 | 状态 | 说明 |
|----|------|------|
| 位图改走本地路径 | ✅ 已完成 | 关于页、文章占位、Card/裁剪演示、`m-empty` 默认图、`mUnix` 默认 logo 等指向 `/static/img/...` |
| H5/App 二维码 | ✅ 已完成 | 不写死第三方图床；使用合并后的 `qrCodeImageApiBase`（见 `common/config.ts` 的 `api` / `mUi`）；未配置则不请求 |
| 占位目录 | ✅ 已完成 | `static/img/.gitkeep`、`static/tabbar/.gitkeep` |
| 实际 PNG 资源 | 部分完成 | `static/tabbar` 已含四套 Tab 独立图标；`static/img/*` 业务图仍按需补齐 |

---

## 四、规范与体验（ucss / 布局）

| 项 | 状态 | 说明 |
|----|------|------|
| 禁用 `vh` | ✅ 已处理 | 组件 Tab 页等使用 `windowHeight`（px）等方案 |
| `scoped` | ✅ 已处理 | 与项目 ucss 约定冲突的页面样式已调整 |
| 伪类选择器 | ✅ 已处理 | 模版列表用类名 + `rowClass(index)` 替代 `:last-child` |
| `flex-direction` | ✅ 已处理 | 工具/模版等根布局显式声明 |
| APP 滚动容器 | ✅ 已处理 | 组件列表页对 APP 使用 `scroll-view` 条件编译 |

---

## 五、m-unix UI 配置体系

| 项 | 状态 | 说明 |
|----|------|------|
| 库内模块 | ✅ 已完成 | `uni_modules/m-unix/config.uts` |
| API | ✅ 已完成 | `getMUiConfig()`、`setMUiConfig()`、`clearMUiRuntimeOverrides()` |
| 工程入口 | ✅ 已完成 | `common/config.ts`：`MUiUserConfig`、`config.mUi` |
| 合并优先级 | ✅ 已实现 | 运行时 > `config.mUi` > `configInfo.logo`（仅 logo）> `api.qrCodeImageApiBase`（仅二维码）> 库默认 |
| 便捷导出 | ✅ 已完成 | `Ut.uts` 再导出上述三个方法 |
| 已接线 | ✅ 已完成 | `m-empty`、`m-qrcode`；`about_me`、`user`、`user_info`、`articleList`、`myServiceData`、部分 `pages_demo`、`mUnix` 等 |

---

## 六、文档

| 项 | 状态 | 说明 |
|----|------|------|
| `m-unix-doc/qrcode.md` | ✅ 已更新 | 与自建 `qrCodeImageApiBase` 行为一致 |
| `.cursor/skills/...` 示例 | ✅ 已微调 | Tab 文案与当前结构对齐（以仓库为准） |

---

## 七、待办与风险（非代码自动完成项）

| 项 | 类型 | 说明 |
|----|------|------|
| 静态图片文件 | 资产 | 补齐 `static/img` 下业务图；Tab 已各有独立 PNG（见 `static/tabbar/`） |
| Tab 图标精修 | 可选 | 当前为脚本生成的区分占位图，可替换同名文件或改 `_gen_tab_icons.py` 后重跑 |
| 二维码 PNG 服务 | 后端 | H5/App 需自建兼容 query 的接口并配置 `mUi` 或 `api` |
| `common/common.uts` | 风险 | `mUnix.uts` 依赖该文件；若工程缺失需补桩或改数据源 |
| 全端回归 | 测试 | Tab、登录回跳、分包演示、上传/空态/二维码真机 |

---

## 八、近期 UI 与版本（2026-03-24）

| 项 | 状态 | 说明 |
|----|------|------|
| 全局主色 | ✅ 已完成 | `#ff0844`；`pages.json` 导航/Tab、`config.uts`、`m.scss`、`common/config.mUi` 及主要演示/业务页硬编码色已对齐 |
| 「我的」改版 | ✅ 已完成 | `m-card` + `m-cell-group`；`myServiceData.uts` 七项菜单与分包路径一致 |
| 联系页 | ✅ 已完成 | `pages_Me/contact/contact`；`page.contact` 文案 |
| 个人资料页 | ✅ 已完成 | `m-cell` 化、`m-icon` 箭头、收货地址跳转、字号/对齐 |
| 版本日志 | ✅ 已完成 | `version/doc/` 分文件（`app-1.0.1.md`、`lib-1.1.1.md` 等） |

---

## 九、一句话结论

**信息架构与 Tab、历史外部示例字样清理、本地资源路径、ucss 相关修复，以及可合并的 `config.uts` + `config.mUi` 已在代码侧落地；2026-03-24 起主色与个人中心/资料/联系页改版及版本说明已写入 `version/doc/`（`app-*.md` / `lib-*.md`）。当前主要缺口仍是静态资源落盘、可选 Tab 图标精修、非宿主内置能力端的二维码服务配置与全端回归。**

---

*最后更新：2026-03-24；修订本文件时请同步更新日期与 `version/doc/` 下对应版本文档。*
