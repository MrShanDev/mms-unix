# MMS-UNIX 更新日志

本文档位于 **`uni_modules/mms-unix` 组件包根目录**（与 `package.json`、`readme.md` 同级），用于：

- 在 **DCloud 插件市场** 展示版本变更与使用说明；
- 作为组件库 **唯一权威的变更记录**（**不依赖**工程内其它目录的 Markdown；历史与条目均以本文为准）。

**当前版本号**以本目录 `package.json` 的字段 **`version`** 为准。

---

## 1. 组件库信息

| 项目 | 说明 |
|------|------|
| **名称** | mms-unix（`mms-` 前缀 UI 组件与工具） |
| **定位** | 面向 **uni-app-x** 的基础组件库；脚本为 **UTS**，页面/组件为 **uvue** |
| **包标识** | `package.json` 的 `id` / `name`：`mms-unix` |
| **关键词** | uni-app-x、components、uts、uvue、mms（见 `package.json` 的 `keywords`） |

### 1.1 在线文档（UI 组件库）

发布至 [DCloud 插件市场](https://ext.dcloud.net.cn/) 后，请将 **对外文档入口** 固定为下列之一（便于使用者从插件页跳转）：

| 类型 | 地址 |
|------|------|
| **插件市场文档** | `https://ext.dcloud.net.cn/plugin?id=（发布后填写插件 ID）` |
| **备用文档站**（可选） | `（可填：语雀 / Git 仓库 Wiki / 自建文档站点 URL）` |

> 若暂未申请插件 ID：可暂留插件市场首页 `https://ext.dcloud.net.cn/` 作为入口，或仅保留本包内 `readme.md` 的安装与组件索引说明。

### 1.2 联系方式

| 类型 | 内容 |
|------|------|
| **维护者 / 组织** | `（请填写）` |
| **邮箱** | `（请填写）` |
| **问题与建议** | `（请填写：插件市场评论、QQ 群、Issue 链接等）` |

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

### 新增

- **全局样式**：`libs/css/animate.scss`（由 `index.scss` 引入），提供基于 `transition` 的淡入淡出、滑入、缩放及图标单次旋转等工具类（符合 ucss 不使用 `@keyframes` 的约定）。
- **mms-icon**：`getIconChar` 增加 **`wechat`** 名称映射，便于菜单与业务使用微信相关图标。

### 变更（配置与主题 `mmsUi`）

- **`emptyDefaultImage` → `emptyDefaultIcon`**：`mms-icon` 的 `name` 字符串，默认 `file-common-filling`；**mms-empty** 默认空状态仅使用图标字体，不再依赖业务工程 `/static/img/empty-default.png`。
- 移除未使用的 `serviceIconRead`、`serviceIconCertificate`、`serviceIconGroup`、`serviceIconAddress`、`serviceIconAbout`（类型与 `mmsUi` 已同步）。
- 移除从未被组件读取的 **`primaryColor`**（主题色以 `libs/css/mms.scss` 为准）；`demoCardThumb` 与 `cropperDemo` 合并为 **`demoImage`**；`appLogo` / 头像与文章占位默认使用 **本包 `static/`** 下内置资源，并导出 **`MMS_UI_BUILTIN_*`** 常量供 `<image @error>` 兜底。

### 变更（组件）

- **mms-picture-cropper**：默认 **`interactive: true`**，**`movable-area` + `movable-view`** 支持单指拖动、双指缩放；新增 **`scaleMin` / `scaleMax` / `panRoom`**；**「重置」**；**`cropper` / `viewChange`** 携带 **`x`、`y`、`scale`、`stageW`、`stageH`**；**`interactive: false`** 仍为静态示意。
- **mms-upload**：新增 **`columns`**（默认 **4**）、**`gap`**（默认 **20** rpx）；格子正方形布局等。
- **mms-code-input**：新增 **`boxSize`**、**`cellGap`** 等。
- **mms-vcode**：H5 / 新版 canvas 使用 **`createCanvasContextAsync`** 等；新增 **`mode`**（`text` | `math`）、**`verify(input)`** 等。
- **mms-dialog**：无标题时正文区样式与居中策略优化。
- **mms-countdown**：**`primary`**、**`type="cells"`**、**`format`** 占位符与 **`calendar`** 等能力扩展。
- **mms-tabs** / **mms-segmented-control** / **mms-notice-bar** / **mms-wing-blank** / **mms-richtext** 等：交互与样式能力对齐与增强（详见下列已发布版本中的对应条目，发版时可将本节精简合并）。

### 变更（组件修复）

- **mms-update**：`mms-dialog` 的 **`buttons`** 传入 **`updateButtons()`** 的返回值，避免将方法引用当作按钮配置。
- **mms-tree**：展开箭头使用 **`mms-icon`**（`arrow-down` / `arrow-right`），替代非本库统一的 `<icon>` 标签。

### 说明

- 若使用本仓库中的 **示例工程**：`pages_demo` 分包内已补充布局辅助、日期时间、应用更新、底部固定栏、截图、mms-tips、加载更多、树形、微信登录等演示页；**仅用于集成演示**，是否随业务工程发布由项目自行决定。

---

## 3. 历史版本

### 1.2.0（2026-03-25）

#### 新增

- **mms-swiper**：图片轮播；`list`、`imageKey` / `titleKey`、`showTitle`、指示器、`slidePadding`、`previousMargin` / `nextMargin`、`circular`、`v-model:current` 等。
- **mms-pagination**：分页器；`change` / `update:current`、自定义插槽等。
- **mms-segmented-control**：分段器；`update:current`、`click` / `change`。
- **mms-notice-vertical**：纵向可滚动长文通告容器。
- 本包根目录 **`changelog.md`**：与插件市场、版本号同步维护。

#### 变更

- **mms-notice-bar**：对齐常见通告能力（内容、跑马灯/单行、左右侧与点击、`params` 等）。
- **mms-rolling-news**：对象列表与 `prop`、`lines`、背景、右侧插槽、`change` 等。

#### 修复

- **mms-tools**：`StoreMemberVo` 等类型的导入路径修正为包内 `components/mms-tools/utype/type.uts`，避免解析失败。

---

### 1.1.1（2026-03-24）

#### 变更

- 默认主题色与工具类主色同步为 **`#ff0844`**（`config.uts`、`libs/css/mms.scss`），与业务侧 `mmsUi` 推荐主色一致。

#### 说明

- 仍可通过 **`setMmsUiConfig`** 或业务 **`mmsUi`** 覆盖主色。

---

### 1.1.0（2026-03-23）

#### 变更（ucss 兼容性）

- 样式合并与裁剪：`flex.scss` / `utils.scss` / `color.scss` 并入 `common.scss`、`mms.scss`；移除各端不支持的写法；横向 flex 显式 **`flex-direction: row`**。
- **mms-icon**：字体与 Unicode 映射重构；支持常用别名（如 `person` → `user`）。

#### 新增

- **mms-cell-group**、**mms-grid-item**。

#### 修复

- `index.js` 请求模块路径；`Request.uts` 空值判断；导出 `AnyRecord`；**mms-grid** `column` 与 slot；**mms-cell** `title` 等。

---

### 1.0.0（2026-03-23）

#### 新增

- 首批 **mms-*** 基础组件与 **mms-tools** 工具（请求、存储、认证等）。
- 全量 **uvue + UTS**，**`mms-`** 前缀，面向小程序 / App / Web 多端。

---

## 4. 维护检查清单（发版前）

1. 将 **`[Unreleased]`** 内容整理为**新版本**小节，填写 **日期**。
2. 更新 **`package.json`** 的 **`version`**，与本文新版本标题一致。
3. 更新 **§1.1 在线文档**、**§1.2 联系方式**（若有变更）。
4. 在 DCloud 插件市场提交或更新插件时，可将 **§1** 与 **§3 最新一节** 摘要到插件详情说明中。
