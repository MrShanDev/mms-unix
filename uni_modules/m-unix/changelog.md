<p align="center">
  <img src="https://mmsadmin.cn/image/mUnix-logo.png" alt="mUnix" width="72" height="72" />
</p>
<p align="center"><strong>mUnix</strong> · uni-app x 组件库</p>

---

# mUnix 更新日志

本文档位于 **`uni_modules/m-unix` 组件包根目录**（与 `package.json`、`readme.md`、`logo.png` 同级），用于：

- 在 **DCloud 插件市场** 展示版本变更与使用说明；
- 作为组件库 **唯一权威的变更记录**（**不依赖**工程内其它目录的 Markdown；历史与条目均以本文为准）。

**当前版本号**以本目录 `package.json` 的字段 **`version`** 为准。

---

## 1. 组件库信息

| 项目 | 说明 |
|------|------|
| **名称** | m-unix（`m-` 前缀 UI 组件与工具） |
| **定位** | 面向 **uni-app-x** 的基础组件库；脚本为 **UTS**，页面/组件为 **uvue** |
| **包标识** | `package.json` 的 `id` / `name`：`mUnix`；目录：`uni_modules/m-unix` |
| **关键词** | uni-app-x、components、uts、uvue、m-unix、mUnix（见 `package.json` 的 `keywords`） |
| **出品** | **陕西品创网络** |

### 1.1 在线文档（UI 组件库）

| 类型 | 地址 |
|------|------|
| **组件说明（站点）** | <https://mmsadmin.cn/m-unix/README.html> |
| **站点首页** | <https://mmsadmin.cn> |
| **开源仓库** | <https://gitee.com/mmsAdmin/m-unix> |
| **DCloud 插件市场** | 发布后插件详情页：<https://ext.dcloud.net.cn/plugin?id=（填写插件 ID）> |

> 插件市场上架后，将上表「插件市场」一行中的插件 ID 补全，便于从市场跳转文档与仓库。

### 1.2 机构与联系方式

以下为 **陕西品创网络** 对外信息（与整合本组件的 **App 内「关于我们」「联系我们」** 页面一致；以 App 内展示为准）。

| 类型 | 内容 |
|------|------|
| **机构** | 陕西品创网络 |
| **邮箱** | sxpcwlkj@163.com |
| **微信** | qq942879858（咨询与合作，可在 App「联系我们」内复制） |
| **反馈渠道** | 插件市场评论、Gitee Issue、邮件 / 微信 |

**说明**：使用本仓库示例工程时，路径 **`pages_Me/about_me/about_me`** 为「关于我们」，**`pages_Me/contact/contact`** 为「联系我们」，内含产品介绍、文档链接与联系方式。

---

## 2. 版本记录书写约定

- **版本号**：遵循语义化版本（SemVer），与 `package.json` 的 `version` **同步更新**。
- **日期**：格式 `YYYY-MM-DD`，与发版日一致（可与插件市场上架日相同）。
- **条目分类**（按需选用）：
  - **新增**：新组件、新 API、新样式能力等；
  - **变更**：行为调整、不兼容说明、重命名、默认项变化等；
  - **修复**：缺陷修复；
  - **说明**：迁移提示、平台差异、与业务工程配合方式等。
- **`[Unreleased]`**：开发中累积；**发版前**将本节内容合并到 **新版本标题**，清空或重建 `[Unreleased]`，并提升 `package.json` 的 `version`。

---

## [Unreleased]

> 下一版本发版前：将本节并入新版本章节，并同步提升 `package.json` 的 `version`。

### 不兼容变更（品牌与命名）

- **包目录**：`uni_modules/mms-unix` 重命名为 **`uni_modules/m-unix`**；`package.json` 的 **`id` / `name`** 为 **`mUnix`**。
- **组件标签**：原 **`mms-*`** 全部改为 **`m-*`**（如 `m-button`、`m-icon`）；**easycom** 规则已同步为 `^m-(.*)`。
- **工具目录**：**`m-tools`**（原 `mms-tools`）；全局 **`uni.$m` / `this.$m`**（原 `$mms`）；**`mount$m`**（原 `mount$mms`）。
- **主题配置**：**`config.mUi`**、**`getMUiConfig` / `setMUiConfig`**（原 `mmsUi` / `getMmsUiConfig` 等）；常量 **`M_UI_*`**（原 `MMS_UI_*`）。
- **样式入口**：主题工具类文件为 **`libs/css/m.scss`**（原 `mms.scss`）；库内占位图 **`m-app-logo.png`** 等（原 `mms-*.png` 文件名）。

### 说明（2026-03-27 迁移核对）

- 已对仓库做全文检索：`.uvue` / `.uts` / `.ts` / `pages.json` / `manifest.json` 等**运行时代码**中，**`mms-*`、`mms-unix`、`$mms`、`getMmsUiConfig` 等旧名已无残留**；**`version/doc`**、**`.cursor/skills`**、**`uni_modules/m-unix/docs`** 内文档与示例中的 **`MMS-UNIX`、`mms.scss`** 等表述已同步为当前命名。
- 本节前 **「不兼容变更」** 条目中仍保留旧名，**仅作迁移对照**；第三方域名（如 **`mmsadmin.cn`**）、Gitee 组织名（**`mmsAdmin`**）等**未改**。

### 新增

- **全局样式**：`libs/css/animate.scss`（由 `index.scss` 引入），提供基于 `transition` 的淡入淡出、滑入、缩放及图标单次旋转等工具类（符合 ucss 不使用 `@keyframes` 的约定）。
- **m-icon**：`getIconChar` 增加 **`wechat`** 名称映射，便于菜单与业务使用微信相关图标。

### 变更（配置与主题 `mUi`）

- **`emptyDefaultImage` → `emptyDefaultIcon`**：`m-icon` 的 `name` 字符串，默认 `file-common-filling`；**m-empty** 默认空状态仅使用图标字体，不再依赖业务工程 `/static/img/empty-default.png`。
- 移除未使用的 `serviceIconRead`、`serviceIconCertificate`、`serviceIconGroup`、`serviceIconAddress`、`serviceIconAbout`（类型与 `mUi` 已同步）。
- 移除从未被组件读取的 **`primaryColor`**（主题色以 `libs/css/m.scss` 为准）；`demoCardThumb` 与 `cropperDemo` 合并为 **`demoImage`**；`appLogo` / 头像与文章占位默认使用 **本包 `static/`** 下内置资源，并导出 **`M_UI_BUILTIN_*`** 常量供 `<image @error>` 兜底。

### 变更（组件）

- **m-picture-cropper**：默认 **`interactive: true`**，**`movable-area` + `movable-view`** 支持单指拖动、双指缩放；新增 **`scaleMin` / `scaleMax` / `panRoom`**；**「重置」**；**`cropper` / `viewChange`** 携带 **`x`、`y`、`scale`、`stageW`、`stageH`**；**`interactive: false`** 仍为静态示意。
- **m-upload**：新增 **`columns`**（默认 **4**）、**`gap`**（默认 **20** rpx）；格子正方形布局等。
- **m-code-input**：新增 **`boxSize`**、**`cellGap`** 等。
- **m-vcode**：H5 / 新版 canvas 使用 **`createCanvasContextAsync`** 等；新增 **`mode`**（`text` | `math`）、**`verify(input)`** 等。
- **m-dialog**：无标题时正文区样式与居中策略优化。
- **m-countdown**：**`primary`**、**`type="cells"`**、**`format`** 占位符与 **`calendar`** 等能力扩展。
- **m-tabs** / **m-segmented-control** / **m-notice-bar** / **m-wing-blank** / **m-richtext** 等：交互与样式能力对齐与增强（详见下列已发布版本中的对应条目，发版时可将本节精简合并）。

### 变更（组件修复）

- **m-update**：`m-dialog` 的 **`buttons`** 传入 **`updateButtons()`** 的返回值，避免将方法引用当作按钮配置。
- **m-tree**：展开箭头使用 **`m-icon`**（`arrow-down` / `arrow-right`），替代非本库统一的 `<icon>` 标签。

### 说明

- 若使用本仓库中的 **示例工程**：`pages_demo` 分包内已补充布局辅助、日期时间、应用更新、底部固定栏、截图、m-tips、加载更多、树形、微信登录等演示页；**仅用于集成演示**，是否随业务工程发布由项目自行决定。

### 变更（工程与小程序）

- **`pages.json` / `manifest.json`**：标题、tabBar、`name`、`description` 等改为**字面量中文**（与 `locale/zh-Hans.json` 对齐），**不再使用** `%page.xxx%`、`%app.name%` 等占位；**微信小程序**等端可正常展示。
- **`manifest.json` · `mp-weixin`**：增加 **`lazyCodeLoading`: `requiredComponents`**（按需注入自定义组件）。
- **全局样式 `uni.scss`**：宽屏（`min-width: 600px`）下对 **`.demo-page`、`.ext-page`** 限制 **`max-width: 430px`** 并居中，**H5 桌面预览**时避免 `rpx` 随视口拉满导致按钮等演示显得过大（真机窄屏不受影响）。

### 变更（m-banner-arc）

- **仅保留内凹弧**：移除外凸（`out`）相关绘制与 **`arcMode` / `arcOutTransform`** 等 API；**`top-convex` / `bottom-convex`** 仍解析为同边，按**凹**绘制以兼容旧写法。
- 结构：**沿口容器** `m-banner-arc__edge--top/bottom` + **`m-banner-arc__arc--in`**；根节点形态类 **`m-banner-arc--variant-*-concave`**（及双弧 **`--variant-dual`**）。
- 支持 **`height: auto`**（`min-height` 按弧高估算）；**无插槽**，演示页需在组件外包一层叠放文案。

### 变更（m-button）

- 默认与各 **`btnSize`** 档位**略收紧字号**（默认由 32rpx 调整为 **28rpx** 等）；**`mini` / `tiny`** 档位字号进一步下调（如 **18rpx / 12rpx**），与按钮高度更匹配。
- **内联样式**使用 **`'font-size'`**（kebab-case）；非微信端 **`m-btn__inner`** 同步绑定字号，避免插槽内文字未继承。
- **`getSize()`**：显式 **`size`** 与 **`btnSize`** 判断加固（`btnSize` 做 **trim + toLowerCase**），避免档位字号不随 `btnSize` 变化。

### 变更（多端内联样式）

- 凡 **`:style` / `UTSJSONObject`** 中表示字号的键，统一为 **`'font-size'`**（及 **`'font-weight'`** 等），避免部分端对驼峰 **`fontSize`** 忽略导致「各档位看起来一样大」。涉及 **`m-input`、`m-textarea`、`m-text`、`m-tabs`、`m-steps`、`m-picker`、`m-pagination`** 等多数带字号样式的组件；动态赋值使用 **`st['font-size']`**、**`st['font-weight']`**。

### 修复（m-tools）

- **`httpGet`** 第三个参数由错误写法 **`showMgs ? :boolean`** 修正为 **`showMgs ?: boolean`**，避免编译到 H5 出现 **`Unexpected token .`** 等语法错误。
- 请求超时分支中 **`requestTask?.abort()`** 改为 **`requestTask != null` 后 `abort()`**，减少可选链在个别运行环境的兼容性风险。

### 变更（工程与元数据）

- **`package.json`**：补充 **`license`、`author`、`homepage`、`repository`、`bugs`**，优化 **`description` / `keywords` / `displayName`**。
- **`readme.md`**：包简介与 **`changelog.md`**、**`version`** 对齐说明。
- **根目录 `index.html`**：增加 **`/static/logo.png`** 的 **favicon** 链接，减轻 H5 开发时默认 **`/favicon.ico` 404**。

### 说明（项目规范）

- **`.cursor/skills/mms-unix-coding-standards/SKILL.md`**：新增 **「内联样式 `:style`（多端一致）」**，约定 CSS 属性名使用 **kebab-case 字符串键**，与 **Vue 组件 props 驼峰**区分。

### 修复（样式与规范）

- 多处 **WXSS** 避免使用 **`*`** 等通用选择器（微信小程序不支持），改为 **`gap`** 或显式标签选择器。
- 组件与 demo 中 **`m-button`** 文案使用**默认插槽**，勿使用不存在的 **`text`** prop。

---

## 3. 历史版本

### 1.2.0（2026-03-25）

#### 新增

- **m-swiper**：图片轮播；`list`、`imageKey` / `titleKey`、`showTitle`、指示器、`slidePadding`、`previousMargin` / `nextMargin`、`circular`、`v-model:current` 等。
- **m-pagination**：分页器；`change` / `update:current`、自定义插槽等。
- **m-segmented-control**：分段器；`update:current`、`click` / `change`。
- **m-notice-vertical**：纵向可滚动长文通告容器。
- 本包根目录 **`changelog.md`**：与插件市场、版本号同步维护。

#### 变更

- **m-notice-bar**：对齐常见通告能力（内容、跑马灯/单行、左右侧与点击、`params` 等）。
- **m-rolling-news**：对象列表与 `prop`、`lines`、背景、右侧插槽、`change` 等。

#### 修复

- **m-tools**：`StoreMemberVo` 等类型的导入路径修正为包内 `components/m-tools/utype/type.uts`，避免解析失败。

---

### 1.1.1（2026-03-24）

#### 变更

- 默认主题色与工具类主色同步为 **`#ff0844`**（`config.uts`、`libs/css/m.scss`），与业务侧 `mUi` 推荐主色一致。

#### 说明

- 仍可通过 **`setMUiConfig`** 或业务 **`mUi`** 覆盖主色。

---

### 1.1.0（2026-03-23）

#### 变更（ucss 兼容性）

- 样式合并与裁剪：`flex.scss` / `utils.scss` / `color.scss` 并入 `common.scss`、`m.scss`；移除各端不支持的写法；横向 flex 显式 **`flex-direction: row`**。
- **m-icon**：字体与 Unicode 映射重构；支持常用别名（如 `person` → `user`）。

#### 新增

- **m-cell-group**、**m-grid-item**。

#### 修复

- `index.js` 请求模块路径；`Request.uts` 空值判断；导出 `AnyRecord`；**m-grid** `column` 与 slot；**m-cell** `title` 等。

---

### 1.0.0（2026-03-23）

#### 新增

- 首批 **m-*** 基础组件与 **m-tools** 工具（请求、存储、认证等）。
- 全量 **uvue + UTS**，**`m-`** 前缀，面向小程序 / App / Web 多端。

---

## 4. 维护检查清单（发版前）

1. 将 **`[Unreleased]`** 内容整理为**新版本**小节，填写 **日期**。
2. 更新 **`package.json`** 的 **`version`**，与本文新版本标题一致。
3. 更新 **§1.1 在线文档**、**§1.2 联系方式**（若有变更）。
4. 在 DCloud 插件市场提交或更新插件时，可将 **§1** 与 **§3 最新一节** 摘要到插件详情说明中。
