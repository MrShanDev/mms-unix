# 更新日志

## 1.1.0 (2026-03-23)

### ucss 兼容性优化

本次更新全面适配 uni-app x 的 ucss 规范，确保组件库在各平台正常运行。

#### CSS 样式重构
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

#### 图标组件重构
- 使用 `uni.loadFontFace()` API 动态加载自定义字体
- 重构 `mms-icon` 组件，使用 Unicode 字符映射替代 `:before` 伪元素
- 添加图标别名支持（如 `person` → `user`、`phone` → `telephone`）
- 整合 `mms-unix-doc/mms-icon-font` 字体文件到 `/static/iconfont/`

#### 新增组件
- `mms-cell-group` - 单元格分组组件
- `mms-grid-item` - 宫格子项组件

#### Bug 修复
- 修复 `index.js` 导入路径错误（`libs/request.uts` → `components/mms-tools/Request.uts`）
- 修复 `Request.uts` 中 `null` 类型检查问题
- 导出 `AnyRecord` 类型供外部使用
- 修复 `mms-grid` 组件支持 `column` 属性和 slot 内容
- 修复 `mms-cell` 组件支持 `title` 属性

#### 项目结构调整
- 移动 `pages/login`、`pages/register`、`pages/forgot-password` 到 `pages_Me` 子包
- 更新所有页面跳转路径引用

#### 文件变更
- 新增 `pages/index/myServiceData.uts` - 首页服务栏数据
- 新增 `uni_modules/mms-unix/libs/css/mms.scss` - MMS 简化工具类
- 删除 `uni_modules/mms-unix/libs/request.uts`（已迁移）
- 删除 `uni_modules/mms-unix/libs/css/flex.scss`（已合并）
- 删除 `uni_modules/mms-unix/libs/css/utils.scss`（已合并）
- 删除 `uni_modules/mms-unix/libs/css/color.scss`（已合并）

---

## 1.0.0 (2026-03-23)

初始版本发布：

### 新增组件
- `mms-row` - 栅格行
- `mms-col` - 栅格列
- `mms-card` - 卡片容器
- `mms-cell` - 单元格
- `mms-gap` - 占位间距
- `mms-bottom-popup` - 底部弹窗
- `mms-button` - 按钮
- `mms-search` - 搜索框
- `mms-upload` - 图片上传
- `mms-datetime-picker` - 日期时间选择
- `mms-clipboard` - 剪贴板复制
- `mms-div` - 分割线
- `mms-empty` - 空状态
- `mms-loading` - 加载中
- `mms-loadmore` - 加载更多
- `mms-notice-bar` - 公告栏
- `mms-price` - 价格展示
- `mms-tag` - 标签
- `mms-tree` - 树形结构
- `mms-qrcode` - 二维码生成
- `mms-screenshot` - 页面截图
- `mms-watermark` - 水印
- `mms-overlay` - 遮罩层
- `mms-popup` - 弹出层
- `mms-toast` - 提示框
- `mms-countdown` - 倒计时
- `mms-grid` - 宫格
- `mms-icon` - 图标
- `mms-sticky-bottom` - 粘性底部
- `mms-wx-login` - 微信登录

### 新增工具库
- `utils.uts` - 常用工具函数
- `request.uts` - 网络请求封装

### 特性
- 全部自研实现，无第三方依赖
- 专为 uni-app-x UTS + uvue 定制
- 所有组件使用 `mms-` 独立前缀
- 每个组件独立打包，按需使用
- 适配微信小程序、App、H5