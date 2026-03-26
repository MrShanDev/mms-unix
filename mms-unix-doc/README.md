# mmsUnx - uni-app-x 基础组件库

mmsUnx 是为 uni-app-x 项目定制的基础组件库，完全自研原创实现，遵循 uni-app-x 规范。

## 特点

- 🎯 **专为 uni-app-x** - 全部使用 `.uvue` + UTS 开发
- 🎨 **独立命名** - 所有组件使用 `mms-` 前缀，不与其他库冲突
- 💪 **轻量简洁** - 每个组件独立，按需使用
- 📱 **适配完美** - 适配安全区域，支持微信小程序/字节/APP
- 📖 **完整文档** - 每个组件参数详细说明

## 组件列表

### 布局
| 组件 | 说明 | 文档 |
|------|------|------|
| mms-row | 栅格行 | [文档](./row.md) |
| mms-col | 栅格列 | [文档](./col.md) |
| mms-card | 卡片容器 | [文档](./card.md) |
| mms-cell | 单元格 | [文档](./cell.md) |
| mms-gap | 占位间距 | [文档](./gap.md) |

### 导航
| 组件 | 说明 | 文档 |
|------|------|------|
| mms-bottom-popup | 底部弹窗 | [文档](./bottom-popup.md) |

### 表单
| 组件 | 说明 | 文档 |
|------|------|------|
| mms-button | 按钮 | [文档](./button.md) |
| mms-input | 单行输入 | [文档](./input.md) |
| mms-textarea | 多行输入 | [文档](./textarea.md) |
| mms-form | 表单分组容器 | [文档](./input.md#mms-form-表单分组容器) |
| mms-radio-group | 单选组 | [文档](./radio.md) |
| mms-radio | 单选项 | [文档](./radio.md) |
| mms-checkbox-group | 多选组 | [文档](./checkbox.md) |
| mms-checkbox | 多选项 | [文档](./checkbox.md) |
| mms-switch | 开关 | [文档](./switch.md) |
| mms-search | 搜索框 | [文档](./search.md) |
| mms-upload | 图片上传 | [文档](./upload.md) |
| mms-datetime-picker | 日期时间选择 | [文档](./datetime-picker.md) |
| mms-picker | 联动选择（1～3 列） | [文档](./picker.md) |
| mms-clipboard | 剪贴板复制 | [文档](./clipboard.md) |

### 展示
| 组件 | 说明 | 文档 |
|------|------|------|
| mms-div | 分割线 | [文档](./div.md) |
| mms-empty | 空状态 | [文档](./empty.md) |
| mms-loading | 加载中 | [文档](./loading.md) |
| mms-loadmore | 加载更多 | [文档](./loadmore.md) |
| mms-notice-bar | 公告栏 | [文档](./notice-bar.md) |
| mms-price | 价格展示 | [文档](./price.md) |
| mms-tag | 标签 | [文档](./tag.md) |
| mms-tree | 树形结构 | [文档](./tree.md) |
| mms-qrcode | 二维码 | [文档](./qrcode.md) |
| mms-screenshot | 页面截图 | [文档](./screenshot.md) |
| mms-watermark | 水印 | [文档](./watermark.md) |

### 反馈
| 组件 | 说明 | 文档 |
|------|------|------|
| mms-overlay | 遮罩层 | [文档](./overlay.md) |
| mms-popup | 弹出层 | [文档](./popup.md) |
| mms-toast | 提示框 | [文档](./toast.md) |

### 功能组件
| 组件 | 说明 | 文档 |
|------|------|------|
| mms-countdown | 倒计时 | [文档](./countdown.md) |
| mms-countdown-verify | 验证码倒计时 | [文档](./countdown-verify.md) |
| mms-grid | 宫格 | [文档](./grid.md) |
| mms-icon | 图标 | [文档](./icon.md) |
| mms-sticky-bottom | 粘性底部 | [文档](./sticky-bottom.md) |
| mms-wx-login | 微信登录 | [文档](./wx-login.md) |

### 工具库
| 工具 | 说明 | 文档 |
|------|------|------|
| utils | 常用工具函数 | [文档](./utils.md) |
| request | 网络请求封装 | [文档](./request.md) |

## 使用指南

### 安装
mmsUnx 已经以 `uni_modules` 方式放在你的项目 `uni_modules/mms-unix` 中，HBuilderX 会自动识别，无需额外安装。

### 全局引入（推荐）

在 `main.uts` 中引入并安装：

```uts
import mmsUnx from '@/uni_modules/mms-unix'
import App from './App.uvue'

const app = createApp(App)
app.use(mmsUnx)
// 挂载工具函数到 uni.$mms
mmsUnx.mount$mms()
```

在 `App.uvue` 的样式中引入全局样式：

```scss
@import '@/uni_modules/mms-unix/index.scss';
```

### 按需引入
uni-app-x 支持 easycom，配置后可直接使用组件，不需要 import：

```uts
<!-- 不需要引入，直接使用 -->
<mms-button type="primary" text="确定"></mms-button>
```

如果需要手动引入：

```uts
import mmsButton from '@/uni_modules/mms-unix/components/mms-button/mms-button.uvue'
```

### 规范
- 组件前缀：`mms-`
- 文件位置：`uni_modules/mms-unix/components/mms-xxx/mms-xxx.uvue`
- 支持 uni-app-x easycom

## 更新日志

- v1.0.4 初始版本
  - 基础组件完成
  - 支持 uni-app-x
