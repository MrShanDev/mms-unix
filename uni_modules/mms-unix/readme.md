# mms-unix 组件库

专为 uni-app-x 项目定制的自研基础组件库，完全原创实现。

**更新日志与对外信息（插件市场 / 文档 / 联系方式）：**本包根目录 [`changelog.md`](./changelog.md)（**唯一随包发布的变更与文档入口说明**，不依赖其它目录的 Markdown）。

## 特点

- 🎯 **专为 uni-app-x** - 全部使用 `.uvue` + UTS 开发
- 🎨 **独立命名** - 所有组件使用 `mms-` 前缀，不与其他库冲突
- 💪 **轻量简洁** - 每个组件独立，按需使用
- 📱 **适配完美** - 适配安全区域，支持微信小程序/字节/APP/H5
- 📖 **完整文档** - 每个组件参数详细说明

## 组件列表

### 布局
| 组件 | 说明 |
|------|------|
| mms-row | 栅格行 |
| mms-col | 栅格列 |
| mms-card | 卡片容器 |
| mms-cell | 单元格 |
| mms-gap | 占位间距 |

### 导航
| 组件 | 说明 |
|------|------|
| mms-bottom-popup | 底部弹窗 |

### 表单
| 组件 | 说明 |
|------|------|
| mms-button | 按钮 |
| mms-search | 搜索框 |
| mms-upload | 图片上传 |
| mms-datetime-picker | 日期时间选择 |
| mms-clipboard | 剪贴板复制 |

### 展示
| 组件 | 说明 |
|------|------|
| mms-div | 分割线 |
| mms-empty | 空状态 |
| mms-loading | 加载中 |
| mms-loadmore | 加载更多 |
| mms-swiper | 轮播图 |
| mms-notice-bar | 公告栏 |
| mms-notice-vertical | 纵向通告（可滚动长文） |
| mms-pagination | 分页器 |
| mms-rolling-news | 滚动消息 |
| mms-segmented-control | 分段器 |
| mms-price | 价格展示 |
| mms-tag | 标签 |
| mms-tree | 树形结构 |
| mms-qrcode | 二维码 |
| mms-screenshot | 页面截图 |
| mms-watermark | 水印 |

### 反馈
| 组件 | 说明 |
|------|------|
| mms-overlay | 遮罩层 |
| mms-popup | 弹出层 |
| mms-toast | 提示框 |

### 功能组件
| 组件 | 说明 |
|------|------|
| mms-countdown | 倒计时 |
| mms-grid | 宫格 |
| mms-icon | 图标 |
| mms-sticky-bottom | 粘性底部 |

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
<mms-button type="primary" text="确定"></mms-button>
```

### 全局引入

在 `main.uts` 中引入并安装：

```uts
import mmsUnx from '@/uni_modules/mms-unix'
import App from './App.uvue'

const app = createApp(App)
app.use(mmsUnx)
// 挂载工具到 uni 上
mmsUnx.mount$mms()
```

在 `App.uvue` 中引入全局样式：

```scss
@import '@/uni_modules/mms-unix/index.scss';
```

### 按需使用

```uts
import mmsButton from '@/uni_modules/mms-unix/components/mms-button/mms-button.uvue'
import { formatDate, debounce } from '@/uni_modules/mms-unix/libs/utils.uts'
import { request } from '@/uni_modules/mms-unix/libs/request.uts'
```

## 协议

MIT
