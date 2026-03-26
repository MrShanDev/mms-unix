# 组件库 mms-unix 1.2.0（2026-03-25）

**简述：** 新增轮播、分页、分段器、纵向通告；强化通告栏与滚动资讯；修复工具模块类型导入路径；演示页与 Tab 分类补齐。

## 新增组件

- **mms-swiper**：图片轮播（指示器、标题、`slidePadding`、`previousMargin`/`nextMargin` 卡片露边、`circular` 衔接、`bgColor` 可选等）。
- **mms-pagination**：分页器（`change` / `update:current`、插槽）。
- **mms-segmented-control**：分段器（`update:current`、`click` / `change`）。
- **mms-notice-vertical**：纵向长文通告滚动容器。

## 组件变更

- **mms-notice-bar**：`content`、跑马灯/单行、`padding`、`isLeft`/`isRight`、侧栏点击与 `params` 等能力对齐常见交互。
- **mms-rolling-news**：对象列表 + `prop`、`lines`、`background`、右侧插槽、`change` 等。

## 修复

- **mms-tools**：`mmsUnix.uts`、`LoginObject.uts` 中 `StoreMemberVo` 改为从 `components/mms-tools/utype/type.uts` 导入，避免 `@/utype/type` 解析失败。

## 文档与规范

- **uni_modules/mms-unix/changelog.md**：按 uni_modules 约定维护更新日志。

## 演示工程（参考）

- `pages_demo`：分页、分段器、通告栏、纵向通告、滚动资讯、轮播等独立页；组件 Tab「扩展 / 分页与通告」等。

---

[返回索引](./README.md)
