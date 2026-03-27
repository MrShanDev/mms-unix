# mUnix（m-unix）组件库

面向 **uni-app x** 的自研 UI 组件库：脚本为 **UTS**，页面与组件为 **uvue**；提供 **`m-*` 组件**、**`m-tools` 工具**及 **`mUi` 主题配置**，可在 App、微信小程序、H5 等端按需接入。

**版本与对外说明**（插件市场、在线文档、联系方式、变更记录）见本包根目录 **[`changelog.md`](./changelog.md)** ——与 `package.json` 的 `version` 同步维护，**不依赖**工程内其它目录的 Markdown。

## 特点

- 🎯 **专为 uni-app-x** - 全部使用 `.uvue` + UTS 开发
- 🎨 **独立命名** - 所有组件使用 `m-` 前缀，不与其他库冲突
- 💪 **轻量简洁** - 每个组件独立，按需使用
- 📱 **适配完美** - 适配安全区域，支持微信小程序/字节/APP/H5
- 📖 **完整文档** - 每个组件参数详细说明

## 组件列表

### 布局
| 组件 | 说明 |
|------|------|
| m-row | 栅格行 |
| m-col | 栅格列 |
| m-card | 卡片容器 |
| m-cell | 单元格 |
| m-gap | 占位间距 |

### 导航
| 组件 | 说明 |
|------|------|
| m-bottom-popup | 底部弹窗 |

### 表单
| 组件 | 说明 |
|------|------|
| m-button | 按钮 |
| m-search | 搜索框 |
| m-upload | 图片上传 |
| m-datetime-picker | 日期时间选择 |
| m-clipboard | 剪贴板复制 |

### 展示
| 组件 | 说明 |
|------|------|
| m-div | 分割线 |
| m-empty | 空状态 |
| m-loading | 加载中 |
| m-loadmore | 加载更多 |
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

### 反馈
| 组件 | 说明 |
|------|------|
| m-overlay | 遮罩层 |
| m-popup | 弹出层 |
| m-toast | 提示框 |

### 功能组件
| 组件 | 说明 |
|------|------|
| m-countdown | 倒计时 |
| m-grid | 宫格 |
| m-icon | 图标 |
| m-sticky-bottom | 粘性底部 |

### 工具库
| 工具 | 说明 |
|------|------|
| utils | 常用工具函数 |
| request | 网络请求封装 |

完整说明、版本历史与 **在线文档地址** 见 [`changelog.md`](./changelog.md) 开头章节；上架 DCloud 插件市场后请在 `changelog.md` 中填写文档链接与联系方式。

## 使用

### 安装

已经以 `uni_modules` 方式放置在项目中，HBuilderX 自动识别，无需额外安装。

### 自动引入

uni-app-x 支持 easycom，配置后可直接使用：

```uvue
<!-- 不需要 import，直接使用 -->
<m-button type="primary">确定</m-button>
```

### 全局引入

在 `main.uts` 中引入并安装：

```uts
import mUnix from '@/uni_modules/m-unix'
import App from './App.uvue'

const app = createApp(App)
app.use(mUnix)
// 挂载工具到 uni 上
mUnix.mount$m()
```

在 `App.uvue` 中引入全局样式：

```scss
@import '@/uni_modules/m-unix/index.scss';
```

### 按需使用

```uts
import MButton from '@/uni_modules/m-unix/components/m-button/m-button.uvue'
import { formatDate, debounce } from '@/uni_modules/m-unix/libs/utils.uts'
import { request } from '@/uni_modules/m-unix/libs/request.uts'
```

## 协议

MIT
