# mms-unix 更新日志

本文件位于 **uni_modules 组件包根目录**（与 `package.json` 同级），符合 **uni-app-x / uni_modules** 组件库约定：用于记录版本变更，便于使用者与插件市场对照。

- **当前版本**：以 `package.json` 的 `version` 为准。
- **详细验收与索引**：工程内另见 `version/doc/lib-x.y.z.md` 与 `version/doc/README.md`。

---

## [Unreleased]

> 以下条目已合入仓库，待与下一正式版号一并写入 `package.json` 后可将本节并入对应版本。

### 新增

- **mms-swiper**：图片轮播；支持 `list`（字符串或对象）、`imageKey` / `titleKey`、`showTitle`、指示器（dot/line）、`slidePadding` 单页内左右留白、`previousMargin` / `nextMargin` 卡片露边、`circular` 衔接（露边时建议列表 ≥3 项）、`bgColor` 空则不透出默认灰底、`v-model:current` 等。
- **mms-pagination**：分页器；`change` / `update:current`、自定义插槽等。
- **mms-segmented-control**：分段器；`update:current`、`click` / `change`。
- **mms-notice-vertical**：纵向可滚动长文通告容器。

### 变更

- **mms-notice-bar**：对齐常见通告能力（`content`、跑马灯/单行、`padding` 数组、`isLeft`/`isRight`、`leftClick`/`rightClick`、`params` 等）；修正横向滚动与插槽结构。
- **mms-rolling-news**：支持对象列表与 `prop` 字段、`lines` 多行截断、`background`、右侧插槽、`change` 等事件。

### 修复

- **mms-tools**：`mmsUnix.uts`、`LoginObject.uts` 中 `StoreMemberVo` 的导入路径修正为 `components/mms-tools/utype/type.uts`，避免 `@/utype/type` 解析失败。

### 演示工程（非组件包运行时依赖）

- `pages_demo`：分页、分段器、通告栏、纵向通告、滚动资讯、轮播等独立演示页；组件 Tab 分类「扩展 / 分页与通告」等。

---

## 1.1.1（2026-03-24）

### 变更

- 默认主题色与工具类主色同步为 **`#ff0844`**（`mms-ui-config.uts`、`libs/css/mms.scss`），与业务侧 `config.mmsUi.primaryColor` 推荐值一致。

### 说明

- 仍可通过 `setMmsUiConfig` 或 `config.mmsUi` 覆盖主色。

---

## 1.1.0（2026-03-23）

### 变更（ucss 兼容性）

- 样式合并与裁剪：`flex.scss` / `utils.scss` / `color.scss` 并入 `common.scss`、`mms.scss`；移除各端不支持的渐变、CSS 变量、部分动画/媒体查询/伪元素等；横向 flex 显式 `flex-direction: row`。
- **mms-icon**：字体与 Unicode 映射重构；支持常用别名（如 `person` → `user`）。

### 新增

- **mms-cell-group**、**mms-grid-item**。

### 修复

- `index.js` 请求模块路径；`Request.uts` 空值判断；导出 `AnyRecord`；**mms-grid** `column` 与 slot；**mms-cell** `title` 等。

### 其他

- 业务登录相关页面迁移至 `pages_Me` 子包；删除已迁移的 `libs/request.uts` 等。

---

## 1.0.0（2026-03-23）

### 新增

- 首批 **mms-*** 基础组件与 **mms-tools** 工具（请求、存储、认证等），详见 `version/doc/lib-1.0.0.md` 组件列表。
- 全量 **uvue + UTS**，`mms-` 前缀，面向小程序 / App / Web 多端。

---

## 维护约定

1. 发版前：在 `changelog.md` 顶部的 `[Unreleased]` 整理条目，写入新版本标题与日期，并同步 `package.json` 的 `version`。
2. 若项目要求双份说明，可在 `version/doc/` 增加 `lib-x.y.z.md` 做验收级补充，避免与本文长期重复两套事实源。
