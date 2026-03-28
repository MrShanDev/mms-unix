<p align="center">
  <img src="https://sxpcwlkj-test.oss-accelerate.aliyuncs.com/mmsMall/upload/69c63fc0f176d6c9a798a194.png" alt="mUnix" width="96" height="96" />
</p>

### mUnix

### 面向 uni-app x 的基础 UI 与工具库

## 说明

**mUnix**（包目录 `uni_modules/m-unix`，插件 ID **`m-unix`**）是面向 **uni-app x** 的自研 UI 方案：脚本为 **UTS**，页面与组件为 **uvue**，提供 **`m-*` 组件**、**`m-tools` 工具**与 **`mUi` 主题配置**，可在 **App / 微信小程序 / H5** 等端按需接入。

版本号、变更记录与联系方式以包内 **`package.json`**、**[`changelog.md`](./changelog.md)** 为准，与 [DCloud 插件市场](https://ext.dcloud.net.cn/plugin?name=m-unix) 展示同步维护。

## 特点

- **专为 uni-app x**：组件与工具均以 `.uvue` + UTS 编写，类型约束清晰。
- **独立命名**：组件统一 **`m-` 前缀**，避免与生态其它库冲突。
- **按需使用**：支持 easycom 自动引入，也可单独 import 组件或 `libs`。
- **主题可配**：通过 **`mUi`** / **`setMUiConfig`** 与业务侧配置对齐主色与资源。
- **多端适配**：安全区与常见端差异已在组件侧考虑（具体以各组件说明为准）。

## 文档

- **在线文档（站点）**：<https://mmsadmin.cn/m-unix/README.html>
- **更新日志（权威）**：本目录 **[`changelog.md`](./changelog.md)**（与 `package.json` 的 `version` 一致）
- **源码与 Issue**：<https://gitee.com/mmsAdmin/m-unix>

## 链接

- [DCloud 插件市场 · m-unix](https://ext.dcloud.net.cn/plugin?name=m-unix)（亦支持 `?id=m-unix`）
- [组件说明站点首页](https://mmsadmin.cn/m-unix/README.html)
- [Gitee 开源仓库](https://gitee.com/mmsAdmin/m-unix)
- [问题反馈（Gitee Issues）](https://gitee.com/mmsAdmin/m-unix/issues)

## 预览

在线文档中含组件说明与示例要点；本仓库示例工程 **`pages_demo`** 下为各组件演示页，可在 HBuilderX 中运行目标端查看效果。

以下为运行效果示意（多端以实际为准）：

| 预览 1 | 预览 2 |
| :---: | :---: |
| ![mUnix 预览 1](https://sxpcwlkj-test.oss-accelerate.aliyuncs.com/mmsMall/upload/69c63f8df176d6c9a798a190.jpg) | ![mUnix 预览 2](https://sxpcwlkj-test.oss-accelerate.aliyuncs.com/mmsMall/upload/69c63f93f176d6c9a798a191.jpg) |
| ![mUnix 预览 3](https://sxpcwlkj-test.oss-accelerate.aliyuncs.com/mmsMall/upload/69c63f99f176d6c9a798a192.jpg) | ![mUnix 预览 4](https://sxpcwlkj-test.oss-accelerate.aliyuncs.com/mmsMall/upload/69c63fa0f176d6c9a798a193.jpg) |

## 安装

#### **uni-app 插件市场链接** —— <https://ext.dcloud.net.cn/plugin?name=m-unix>

通过 HBuilderX **导入插件**或使用已有工程：将 **`uni_modules/m-unix`** 置于项目内，HBuilderX 会自动识别 **uni_modules** 规范插件（建议使用 **3.1.0** 及以上版本 HBuilderX）。

## 快速上手

1. 在 **`pages.json`** 中配置 **easycom**（规则见下「easycom」；与示例工程一致时可复制即用）。
2. 在 **`main.uts`** 中用 **`createSSRApp`** 创建应用并执行 **`app.use(mUnix)`**（会注册全局组件并挂载 **`uni.$m`** / **`this.$m`**，一般**不必**再调 **`mount$m()`**）。
3. 在 **`App.uvue`** 中 **`@import`** **`index.scss`**（主题与工具类样式，建议保留）。

详见下文「使用方法」。

## 使用方法

### easycom（`pages.json`）

在 **`pages.json`** 根级增加 **`easycom`**，使 **`m-组件名`** 无需手写 import 即可解析到包内路径：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^m-(.*)": "@/uni_modules/m-unix/components/m-$1/m-$1.uvue"
    }
  }
}
```

配置后模板中可直接使用：

```uvue
<m-button type="primary">确定</m-button>
```

### 全局安装（`main.uts`）

uni-app x 入口需使用 **`createSSRApp`**（来自 **`vue`**），并 **`export function createApp()`** 返回 **`{ app }`**，与框架约定一致：

```uts
import App from './App.uvue'
import { createSSRApp } from 'vue'
import mUnix from '@/uni_modules/m-unix'

export function createApp() {
  const app = createSSRApp(App)
  app.use(mUnix)
  return {
    app
  }
}
```

**说明**：

- **`app.use(mUnix)`** 会执行包内 **`install`**：批量注册 **`m-*`** 全局组件，并将工具合并到 **`uni.$m`** 与 **`Vue.config.globalProperties.$m`**。
- **`mUnix.mount$m()`** 仅向 **`uni.$m`** 注入工具；在已 **`app.use(mUnix)`** 的场景下通常**重复**，仅当**不使用** **`app.use`**、又需要 **`uni.$m`** 时可单独调用。

### 可选：多语言（`initI18n`）

若使用示例工程中的 **`initI18n()`**，需在 **`main.uts`** 于创建应用**前**调用，且项目中存在 **`locale/index.uts`** 所依赖的 **`@/locale/*.json`** 等资源（路径以你工程为准）。不使用 **`t()`** / 内置文案时可省略本步。

### 全局样式（`App.uvue`）

在应用根组件样式中引入（与示例工程一致）：

```scss
@import '@/uni_modules/m-unix/index.scss';
```

### 按需引入组件

仅使用个别组件时，可直接按路径引用（**easycom 与按需二选一即可**，勿重复注册）：

```uts
import MButton from '@/uni_modules/m-unix/components/m-button/m-button.uvue'
```

### 按需引入工具（`libs` / `m-tools`）

常用工具在 **`libs/utils.uts`**；网络请求在 **`components/m-tools/Request.uts`**（**无** **`libs/request.uts`** 路径）：

```uts
import { formatDate, debounce } from '@/uni_modules/m-unix/libs/utils.uts'
import { request, http } from '@/uni_modules/m-unix/components/m-tools/Request.uts'
```

**注意**：**`Request.uts`** 依赖宿主工程 **`@/common/config`** 等（如 **`baseUrl`**、业务约定），接入前请按在线文档配置 **`common/config`**，否则请求层无法正常编译或运行。

## 组件列表

以下与 `uni_modules/m-unix/components` 下 **`m-*` 组件目录**一致（按功能归类，便于检索）。**props / 事件 / 平台差异** 以 [在线文档](https://mmsadmin.cn/m-unix/README.html) 与源码注释为准；**`changelog.md`** 记录版本级变更。

### 布局与结构

| 组件 | 说明 |
|------|------|
| m-row | 栅格行 |
| m-col | 栅格列 |
| m-card | 卡片容器 |
| m-cell | 单元格 |
| m-cell-group | 单元格分组 |
| m-gap | 占位间距 |
| m-wing-blank | 两翼留白 |
| m-white-space | 上下留白 |
| m-section | 区块标题 |
| m-content | 内容区容器 |
| m-sticky | 吸顶 |
| m-sticky-bottom | 底部粘性栏 |

### 导航与路由辅助

| 组件 | 说明 |
|------|------|
| m-bottom-popup | 底部弹窗 |
| m-bottom-navigation | 底部导航 |
| m-tabs | 标签页 |
| m-top-back | 顶部返回 |
| m-fab | 悬浮按钮 |

### 表单与输入

| 组件 | 说明 |
|------|------|
| m-button | 按钮 |
| m-input | 输入框 |
| m-textarea | 多行输入 |
| m-form | 表单 |
| m-search | 搜索框 |
| m-upload | 图片上传 |
| m-datetime-picker | 日期时间选择 |
| m-clipboard | 剪贴板复制 |
| m-switch | 开关 |
| m-radio / m-radio-group | 单选 / 单选组 |
| m-checkbox / m-checkbox-group | 多选 / 多选组 |
| m-picker | 选择器 |
| m-code-input | 验证码输入框 |
| m-number-box | 步进器 |
| m-keyboard | 键盘 |
| m-dropdown-list | 下拉列表 |
| m-cascade-selection | 级联选择 |

### 展示与信息

| 组件 | 说明 |
|------|------|
| m-div | 分割线 |
| m-empty | 空状态 |
| m-loading | 加载中 |
| m-loadmore | 加载更多 |
| m-skeleton | 骨架屏 |
| m-swiper | 轮播图 |
| m-notice-bar | 公告栏 |
| m-notice-vertical | 纵向通告（可滚动长文） |
| m-pagination | 分页器 |
| m-rolling-news | 滚动消息 |
| m-segmented-control | 分段器 |
| m-price | 价格展示 |
| m-tag | 标签 |
| m-tree | 树形结构 |
| m-qrcode | 二维码 |
| m-screenshot | 页面截图 |
| m-watermark | 水印 |
| m-text | 文本 |
| m-richtext | 富文本 |
| m-collapse | 折叠面板 |
| m-steps | 步骤条 |
| m-time-axis / m-time-axis-item | 时间轴 / 子项 |
| m-banner-arc | 横幅弧形容器 |
| m-tips | 提示条 |

### 反馈与弹层

| 组件 | 说明 |
|------|------|
| m-overlay | 遮罩层 |
| m-popup | 弹出层 |
| m-toast | 轻提示 |
| m-dialog | 对话框 |
| m-action-sheet | 操作菜单 |
| m-bubble-popup | 气泡菜单 |
| m-alert | 警告提示 |

### 业务与扩展

| 组件 | 说明 |
|------|------|
| m-countdown | 倒计时 |
| m-countdown-verify | 验证码倒计时 |
| m-grid / m-grid-item | 宫格 / 宫格子项 |
| m-icon | 图标 |
| m-login | 登录 |
| m-wx-login | 微信登录 |
| m-link | 链接 |
| m-rate | 评分 |
| m-vcode | 图形验证码 |
| m-amount-inwords | 金额大写 |
| m-picture-cropper | 图片裁剪 |
| m-swipe-action | 滑动操作 |
| m-update | 应用更新 |

### 工具库（非 `m-*` 标签，随包或按需 import）

| 模块 | 说明 |
|------|------|
| `libs/utils.uts` | 常用工具函数 |
| `components/m-tools/Request.uts` | 网络请求封装（依赖宿主 `@/common/config`） |
| `components/m-tools/*` | 存储、认证、上传等（见目录） |

## 版权信息

**mUnix（m-unix）** 遵循 **MIT** 开源协议：可自由用于商业或个人项目，保留许可证声明即可。

**出品**：陕西品创网络
