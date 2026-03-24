# 组件库 mms-unix 1.1.0（2026-03-23）

**简述：** ucss 兼容性优化；图标与单元格/宫格等能力补强。

## ucss 兼容性优化

本次更新全面适配跨端 UTS 工程的 ucss 样式约束，确保组件库在各目标端正常运行。

### CSS 样式重构

- 合并 CSS 文件：将 `flex.scss`、`utils.scss`、`color.scss` 合并到 `common.scss` 和 `mms.scss`
- 移除不支持的特性：
  - 移除 `linear-gradient` 渐变背景
  - 移除 CSS 变量和 `:root` 选择器
  - 移除 `@keyframes` 动画
  - 移除 `@media` 媒体查询
  - 移除伪元素选择器（`::before`、`::after`、`::-webkit-scrollbar` 等）
  - 移除浮动布局（`float`）
- 添加 `flex-direction: row` 到所有横向 flex 布局
- 仅使用类选择器（`.class`），禁用标签选择器和属性选择器

### 图标组件重构

- 使用宿主环境提供的字体加载能力动态加载自定义字体
- 重构 `mms-icon` 组件，使用 Unicode 字符映射替代 `:before` 伪元素
- 添加图标别名支持（如 `person` → `user`、`phone` → `telephone`）
- 整合 `mms-unix-doc/mms-icon-font` 字体文件到 `/static/iconfont/`

### 新增组件

- `mms-cell-group` - 单元格分组组件
- `mms-grid-item` - 宫格子项组件

### Bug 修复

- 修复 `index.js` 导入路径错误（`libs/request.uts` → `components/mms-tools/Request.uts`）
- 修复 `Request.uts` 中 `null` 类型检查问题
- 导出 `AnyRecord` 类型供外部使用
- 修复 `mms-grid` 组件支持 `column` 属性和 slot 内容
- 修复 `mms-cell` 组件支持 `title` 属性

### 项目结构调整

- 移动 `pages/login`、`pages/register`、`pages/forgot-password` 到 `pages_Me` 子包
- 更新所有页面跳转路径引用

### 文件变更

- 新增 `pages/index/myServiceData.uts` - 首页服务栏数据
- 新增 `uni_modules/mms-unix/libs/css/mms.scss` - MMS 简化工具类
- 删除 `uni_modules/mms-unix/libs/request.uts`（已迁移）
- 删除 `uni_modules/mms-unix/libs/css/flex.scss`（已合并）
- 删除 `uni_modules/mms-unix/libs/css/utils.scss`（已合并）
- 删除 `uni_modules/mms-unix/libs/css/color.scss`（已合并）

---

[返回索引](./README.md)
