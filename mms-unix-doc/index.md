# mms-unix 安装与配置教程

> **组件 API 与演示索引**（属性、默认值、事件、示例路径）：见 [components-catalog.md](./components-catalog.md)。文档与 `pages_demo` 演示均为自研说明，不引用外部商业组件库名称。

## 安装教程

### 1. 环境要求

- HBuilderX 最新版本
- uni-app 项目（支持 uni-app-x）
- Node.js 16+

### 2. 导入组件库

将 `mms-unix` 放入项目的 `uni_modules` 目录下：

```bash
# 项目结构
your-project/
└── uni_modules/
    └── mms-unix/          # mms-unix 组件模块
```

### 3. 配置 easycom 自动导入

在项目根目录的 `pages.json` 中添加 `easycom` 配置：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^mms-(.*)": "@/uni_modules/mms-unix/components/mms-$1/mms-$1.uvue"
    }
  }
}
```

配置后，所有 `mms-` 开头的组件都会自动导入，无需手动在页面中引入。

### 4. 安装到 Vue 应用

在项目根目录的 `main.uts` 中注册 `mms-unix`：

```typescript
import App from './App.uvue'
import { createSSRApp } from 'vue'
import mmsUnix from '@/uni_modules/mms-unix'

export function createApp() {
  const app = createSSRApp(App)
  app.use(mmsUnix)
  return {
    app
  }
}
```

### 5. 导入样式

在项目根目录的 `uni.scss` 中引入 `mms-unix` 样式：

```scss
/* mms-unix 样式 */
@import '@/uni_modules/mms-unix/index.scss';
```

## 配置教程

### 1. 全局配置

安装完成后，`mms-unix` 会自动挂载到 `uni.$mms` 和 Vue 全局属性 `this.$mms`，可以直接在代码中使用：

```typescript
// 在 setup 中使用
uni.$mms.getSystemInfo()

// 在选项式 API 中使用
this.$mms.getSystemInfo()
```

### 2. 配置请求

mms-unix 内置了请求封装，可以在项目中配置：

```typescript
import { configure } from '@/uni_modules/mms-unix'

configure({
  baseUrl: 'https://api.example.com',  // 接口基础地址
  timeout: 10000,                       // 请求超时时间
  header: {                             // 全局请求头
    'Content-Type': 'application/json'
  }
})
```

### 3. 添加请求拦截器

```typescript
import { addInterceptor } from '@/uni_modules/mms-unix'

addInterceptor({
  // 请求前拦截
  request: (config) => {
    // 添加 token
    const token = uni.getStorageSync('token')
    if (token) {
      config.header['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  // 响应后拦截
  response: (response) => {
    // 统一处理响应数据
    const { statusCode, data } = response
    if (statusCode === 401) {
      // 未登录，跳转登录页
      uni.reLaunch({ url: '/pages/login/login' })
    }
    return response
  }
})
```

### 4. 使用组件

配置完成后，可以直接在模板中使用所有 mms- 开头的组件：

```html
<template>
  <view>
    <!-- 按钮 -->
    <mms-button type="primary" text="确定" @click="handleClick"></mms-button>
    
    <!-- 图标 -->
    <mms-icon name="arrow-right"></mms-icon>
    
    <!-- 卡片 -->
    <mms-card title="标题">
      <text>内容</text>
    </mms-card>
  </view>
</template>
```

所有组件自动导入，无需手动 import。

### 5. 创建项目配置

在项目根目录创建 `common/config.ts`，配置项目信息：

```typescript
/**
 * mms-unix 全局配置
 */
type AppConfig = {
  baseUrl: string                    // 基础 API 地址
  storage: StorageConfig            // 存储 Key 配置
  loginRequiredPaths: string[]      // 需要登录的页面路径
  api: ApiConfig                    // API 接口路径配置
  configInfo: ConfigInfo            // 应用基础信息
}

// 配置示例
export const config: AppConfig = {
  baseUrl: 'http://localhost:8070',
  storage: {
    token: 'token',
    userInfo: 'userInfo',
  },
  loginRequiredPaths: ['user_info', 'user_address'],
  api: {
    login: {
      tokenLogin: '/api/v1/login/tokenLogin',
      codeGetOpenIdLogin: '/api/v1/login/codeGetOpenIdLogin',
      codeGetPhoneRegisterOrLogin: '/api/v1/login/codeGetPhoneRegisterOrLogin',
    },
    update: {
      checkUpdate: '/api/v1/common/checkUpdate',
    }
  },
  configInfo: {
    name: '你的应用',
    logo: 'https://example.com/logo.png',
    desc: '应用描述',
    versionCode: 1,
    versionName: '1.0.0',
  },
}
```

### 6. 在页面中使用配置

**获取配置信息：**
```typescript
import { config } from '@/common/config'

// 获取 API 地址
console.log(config.baseUrl)
console.log(config.api.update.checkUpdate)

// 获取应用版本信息
const versionCode = config.configInfo.versionCode ?? 0
const versionName = config.configInfo.versionName ?? '1.0.0'
```

**使用存储工具：**
```typescript
import { storage } from '@/uni_modules/mms-unix/components/mms-tools/Storage.uts'

// 保存 token
storage.setToken('your-token')

// 获取 token
const token = storage.getToken()

// 保存用户信息
storage.setUserInfo({ id: 1, name: 'test' })

// 获取用户信息
const userInfo = storage.getUserInfo()

// 清除登录信息
storage.clearAuth()
```

**使用请求工具：**
```typescript
import { http } from '@/uni_modules/mms-unix/components/mms-tools/Request.uts'
import { config } from '@/common/config'

// GET 请求
http.get(config.api.update.checkUpdate, {
  currentVersionCode: config.configInfo.versionCode ?? 0
}).then(res => {
  console.log(res.data)
}).catch(err => {
  console.error(err)
})

// POST 请求
http.post('/api/user/login', {
  username: 'test',
  password: '123456'
}).then(res => {
  console.log(res.data)
})
```

**使用响应式登录：**
```html
<template>
  <view>
    <view v-if="hasLogin">
      <text>欢迎回来，{{ userInfo.nickname }}</text>
    </view>
    <view v-else>
      <text>请先登录</text>
      <button @tap="goLogin">去登录</button>
    </view>
  </view>
</template>

<script setup lang="uts">
import { useAuth } from '@/uni_modules/mms-unix/components/mms-tools/useAuth.uts'

const { hasLogin, userInfo } = useAuth()

function goLogin() {
  uni.navigateTo({ url: '/pages/login/login' })
}
</script>
```

**使用版本更新组件：**
```html
<template>
  <view class="index-page">
    <!-- 自动检查更新，有更新会弹窗提示 -->
    <mms-update :auto-check="true"></mms-update>
  </view>
</template>
```

### 7. 使用工具方法

所有工具方法都已经挂载到 `this.$mms` 和 `uni.$mms`：

```typescript
// 通过 uni.$mms 使用
uni.$mms.request.get('/api/user/info').then(res => {
  console.log(res.data)
})

uni.$mms.toast('操作成功')
uni.$mms.jumpTo('/pages/xxx/xxx')
const isValid = uni.$mms.checkPhone('13800138000')

// 通过 this.$mms 使用（选项式 API）
this.$mms.storage.getToken()
this.$mms.checkLogin()
```

## 常用组件列表

| 组件名 | 说明 |
|--------|------|
| mms-button | 按钮 |
| mms-icon | 图标 |
| mms-card | 卡片 |
| mms-cell | 单元格 |
| mms-dialog | 弹窗 |
| mms-toast | 提示框 |
| mms-loading | 加载动画 |
| mms-popup | 弹出层 |
| mms-search | 搜索框 |
| mms-grid | 宫格布局 |
| mms-row / mms-col | 栅格布局 |
| mms-login | 登录弹窗 |
| mms-wx-login | 微信一键登录 |
| mms-qrcode | 二维码生成 |
| mms-upload | 文件上传 |
| mms-watermark | 水印 |
| mms-update | 版本更新检测 |

## 常用工具方法

所有工具方法都已导出到 `$mms` 全局对象：

| 方法名 | 说明 |
|--------|------|
| `$mms.storage` | 存储工具（getToken/setToken/getUserInfo/setUserInfo/clearAuth） |
| `$mms.isLoggedIn` | 检查是否已登录 |
| `$mms.checkLogin` | 检查登录，未登录则跳转登录页 |
| `$mms.request` | 网络请求（get/post/put/delete） |
| `$mms.http` | HTTP 请求工具，同 request |
| `$mms.jumpTo` | 页面跳转 |
| `$mms.checkPhone` | 验证手机号 |
| `$mms.isEmpty` | 判断字符串是否为空 |
| `$mms.changeMoney` | 金额单位转换（元/万/亿） |
| `$mms.maskPhoneNumber` | 手机号脱敏 |
| `$mms.generateOrderNumber` | 生成订单号 |
| `$mms.useAuth` | 获取响应式登录状态 |
| `$mms.toast` | 提示框 |
| `$mms.dialog` | 对话框 |

## 项目结构

```
uni_modules/mms-unix/
├── components/
│   ├── mms-tools/              # 核心工具类
│   │   ├── AuthNotifier.uts   # 认证变更通知
│   │   ├── Storage.uts        # 本地存储工具
│   │   ├── Auth.uts           # 认证判断工具
│   │   ├── Request.uts        # HTTP 请求工具
│   │   ├── Ut.uts             # 通用工具方法
│   │   ├── useAuth.uts        # 响应式登录态
│   │   ├── CacheUtil.uts      # 带过期缓存
│   │   ├── LoginObject.uts    # 登录对象
│   │   ├── uenum/             # 枚举定义
│   │   └── utype/             # 类型定义
│   ├── mms-button/            # 按钮组件
│   ├── mms-update/            # 版本更新检测组件
│   ├── mms-login/             # 登录组件
│   └── ...                    # 其他组件
├── libs/css/
│   ├── common.scss            # 公共样式
│   ├── flex.scss              # flex 布局
│   ├── color.scss             # 颜色变量
│   └── utils.scss             # 工具样式类
└── index.scss                 # 样式入口
```

## 注意事项

| 方法名 | 说明 |
|--------|------|
| `$mms.request` | 网络请求 |
| `$mms.toast` | 提示框 |
| `$mms.loading` | 加载状态 |
| `$mms.dialog` | 对话框 |
| `$mms.clipboard` | 剪贴板 |
| `$mms.screenshot` | 截图 |
| `$mms.utils` | 工具函数集合 |

## 注意事项

1. 本组件库专为 uni-app-x 开发，请确保你的项目启用了 uni-app-x
2. 所有组件默认通过 easycom 自动导入，无需手动引用
3. `$mms` 已经挂载到全局，可以直接通过 `uni.$mms` 访问