---
name: mms-unix-coding-standards
description: "Maintains mms-unix uni-app component library project structure and coding standards for uni-app + Vue + uni-uts. Use when working on this project, adding new features, refactoring code, or moving files between directories."
---

# MMS-UNIX 项目编码规范与结构标准

该文件定义了 `mms-unix` 项目的**项目结构约定**和**编码规范**。

> **注意**: UTS 语言规范、uvue 组件规范、CSS 规范、API 规范等通用规范请参考 `.cursor/rules/` 目录下的官方 rules 文件。

## 项目结构约定

### 根目录结构

```
mms-unix/
├── uni_modules/mms-unix/          # 组件库核心（所有可复用工具和组件在这里）
│   ├── components/
│   │   └── mms-tools/            # 核心工具类
│   │       ├── AuthNotifier.uts  # 认证变更通知（响应式触发）
│   │       ├── Storage.uts       # 本地存储工具（token/userInfo）
│   │       ├── Auth.uts          # 认证判断与拦截工具
│   │       ├── Request.uts       # HTTP 请求工具（带 401 拦截）
│   │       ├── Ut.uts            # 通用工具方法集合
│   │       ├── I18n.uts          # 国际化工具类
│   │       ├── useAuth.uts       # 组合式函数 - 响应式登录态
│   │       ├── CacheUtil.uts     # 带过期缓存工具
│   │       ├── LoginObject.uts   # 登录对象（兼容旧版）
│   │       ├── uenum/            # 枚举定义
│   │       └── utype/            # 类型定义
│   ├── locale/                    # 国际化初始化
│   │   └── index.uts             # 初始化入口
│   ├── libs/css/                  # 全局样式
│   │   ├── common.scss           # 公共样式
│   │   ├── flex.scss             # flex 布局
│   │   ├── color.scss            # 颜色变量
│   │   └── utils.scss            # 工具样式类（间距、文字、flex 等）
│   ├── components/               # 业务组件
│   │   ├── mms-button/
│   │   ├── mms-col/
│   │   ├── mms-grid/
│   │   ├── mms-login/
│   │   ├── mms-qrcode/
│   │   ├── mms-update/          # 版本更新检测组件
│   │   ├── mms-upload/
│   │   ├── mms-watermark/
│   │   └── ...
│   ├── index.scss                # 全局样式入口
│   └── index.uts                 # 组件库入口
├── locale/                        # 语言包目录
│   ├── zh-Hans.json              # 简体中文
│   └── en.json                   # 英文
├── common/                       # 项目业务代码（项目特有，不进组件库）
│   ├── api/                      # 业务 API 接口
│   ├── config.ts                 # 全局配置（API 地址、版本信息等）
│   ├── composables/              # 留空，已移动到组件库
│   └── utils/                    # 留空，已移动到组件库
├── pages/                        # 页面
├── static/                       # 静态资源
├── App.uvue                      # 入口组件
├── main.uts                      # 入口文件
└── pages.json                    # 页面路由配置
```

### 组件库 vs 业务代码

**必须放在 `uni_modules/mms-unix/` 中（可复用）：**
- 所有工具类（auth、storage、request、utils 等）
- 通用组件（button、grid、login、upload、update 等）
- 全局样式
- 类型和枚举定义

**必须放在 `common/` 中（项目业务相关）：**
- `common/config.ts` - 项目配置（API 地址、版本号等）
- `common/api/` - 业务接口（调用封装好的 request）

## 编码规范

### 导入路径规范

```ts
// ✅ 正确：使用组件库绝对路径
import { storage } from '@/uni_modules/mms-unix/components/mms-tools/Storage.uts'
import { useAuth } from '@/uni_modules/mms-unix/components/mms-tools/useAuth.uts'
import { t } from '@/uni_modules/mms-unix/locale/index.uts'
import { config } from '@/common/config'

// ❌ 错误：不应使用 common/utils（已移动到组件库）
import { storage } from '@/common/utils/storage'
```

### 文件命名规范

| 类型 | 命名规则 | 示例 |
|------|---------|------|
| 工具类 | `PascalCase.uts` | `Storage.uts`、`Auth.uts` |
| 组件 | `kebab-case.uvue` | `mms-update.uvue` |
| 类型定义 | `PascalCase.uts` | `utype/type.uts` |

### 注释规范

- 文件头部注释说明用途
- 函数/方法添加注释说明参数和返回值
- 复杂逻辑添加行内注释说明意图
- **不要**添加显而易见的注释（如 `// 获取 token`）

## 组件规范

### easycom 自动注册

- 所有组件命名必须以 `mms-` 开头
- 文件名必须匹配：`mms-xxx/mms-xxx.uvue`
- 不需要手动引入，pages.json 已配置 easycom

### Props 定义规范

```ts
defineProps({
  // ✅ 正确：给出默认值和注释
  title: {
    type: String,
    default: '',
    // 标题文字
  },
  // ✅ 正确：布尔值默认 false
  visible: {
    type: Boolean,
    default: false,
    // 是否显示
  },
})
```

### 事件命名规范

- 使用 kebab-case：`@update:visible` 风格
- 成功/失败：`success`、`fail`

## 配置规范

### AppConfig 类型定义

所有后端接口地址必须统一配置在 `common/config.ts`：

```ts
type AppConfig = {
  baseUrl: string
  mallBaseUrl: string      // 商城 API 地址，空则使用 baseUrl
  storage: StorageConfig
  loginRequiredPaths: string[]
  api: ApiConfig
  configInfo: ConfigInfo
}
```

### 版本更新组件规范

后端接口返回格式：

```json
{
  "code": 0,
  "data": {
    "hasUpdate": true,
    "title": "发现新版本",
    "desc": "1. 修复已知问题\n2. 优化用户体验",
    "versionCode": 2,
    "versionName": "1.1.0",
    "force": false,
    "apkUrl": "https://example.com/app.apk"
  }
}
```

### 认证与登录规范

1. **响应式设计**：
   - 使用 `authTrigger` + `notifyAuthChange()` 触发全局更新
   - 使用 `useAuth()` 获取响应式登录状态

2. **存储位置**：
   - token 和 userInfo 存在 `uni.setStorageSync`
   - 键名从 `config.storage` 配置读取

## 请求工具规范

### 统一请求工具 Request.uts

项目使用统一的请求工具，支持灵活配置：

```ts
import { request, http, ApiResponse } from '@/uni_modules/mms-unix/components/mms-tools/Request.uts'
```

### RequestOptions 配置项

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `url` | string | - | 请求地址 |
| `method` | 'GET'\|'POST'\|'PUT'\|'DELETE' | 'GET' | 请求方法 |
| `data` | AnyRecord | - | 请求数据 |
| `baseUrl` | string | config.baseUrl | 基础地址 |
| `withToken` | boolean | true | 是否携带 Token |
| `showError` | boolean | true | 是否显示错误提示 |
| `showLoading` | boolean | false | 是否显示加载提示 |
| `redirectOnUnauthorized` | boolean | true | 未登录是否跳转登录页 |
| `successCodes` | number[] | [0, 200] | 成功的响应码 |
| `unauthorizedCodes` | number[] | [401, 403] | 未授权的响应码 |

### 使用示例

**1. 基本请求：**
```ts
// GET 请求
const res = await http.get('/api/user/info')

// POST 请求
const res = await http.post('/api/user/login', { phone: '13800138000' })
```

**2. 公开接口（不需要登录）：**
```ts
const res = await http.public({
  url: '/api/article/list',
  method: 'GET',
  data: { page: 1 }
})
```

**3. 静默请求（不显示任何提示）：**
```ts
const res = await http.silent({
  url: '/api/user/check',
  method: 'GET'
})
```

**4. 带加载提示的请求：**
```ts
const res = await http.loading({
  url: '/api/order/submit',
  method: 'POST',
  data: orderData
}, '提交中...')
```

**5. 自定义配置：**
```ts
const res = await request({
  url: '/api/custom',
  method: 'POST',
  data: params,
  baseUrl: 'https://api.example.com',
  withToken: true,
  showError: true,
  redirectOnUnauthorized: true,
  successCodes: [0, 200, 1],
  unauthorizedCodes: [401, 403, 405]
})
```

**6. 业务 API 封装示例：**
```ts
// common/api/userApi.uts
import { request, ApiResponse } from '@/uni_modules/mms-unix/components/mms-tools/Request.uts'
import { config } from '@/common/config'

/** 获取用户信息（需登录） */
export function getUserInfo() {
  return request({
    url: '/api/user/info',
    method: 'GET',
    redirectOnUnauthorized: true
  })
}

/** 获取公开文章列表 */
export function getArticleList(page: number) {
  return request({
    url: '/api/article/list',
    method: 'GET',
    data: { page },
    withToken: false,
    redirectOnUnauthorized: false
  })
}
```

### 响应结构

```ts
type ApiResponse<T = any> = {
  code: number    // 响应码
  msg: string     // 响应消息
  data: T         // 响应数据
}
```

## 国际化规范

### 语言包规范

语言键命名采用 `模块.功能` 格式：

```json
{
  "app.name": "MMS-UNIX",
  "tabbar.home": "首页",
  "page.login": "登录",
  "common.confirm": "确定",
  "validation.phoneRequired": "请输入手机号",
  "button.sendCode": "发送验证码"
}
```

### 使用方式

```ts
import { t, setLocale, useI18n } from '@/uni_modules/mms-unix/locale/index.uts'

// 翻译文本
const title = t('page.login')

// 带参数翻译
const btnText = t('button.resendCode', { seconds: 60 })

// 切换语言
setLocale('en')

// 组合式 API
const { locale, t } = useI18n()
```

### pages.json 国际化（Web 平台）

```json
{
  "pages": [
    {
      "path": "pages/login/login",
      "style": {
        "navigationBarTitleText": "%page.login%"
      }
    }
  ]
}
```

### 注意事项

- **App 平台**：`pages.json` 不支持 `%key%` 方式，需通过 API 动态设置
- **Web 平台**：支持 `vue-i18n`，可在 `main.uts` 中集成
- 支持的语言：`zh-Hans`（简体中文）、`en`（英文）

## 文件移动与重构规则

1. **必须更新所有导入**：
   - 更新所有引用了原文件路径的代码
   - 检查项目中所有 import 语句

2. **保持向后兼容**：
   - 如果是公开 API，考虑保留导出重新导出 from 新位置
   - 但如果用户要求清理原目录，果断删除原文件

3. **清理原目录**：
   - 移动完成后删除原文件
   - 如果目录为空，可以清空保留（便于以后项目扩展）

4. **统一到组件库**：
   - 所有可复用工具必须在 `uni_modules/mms-unix/components/mms-tools/`
   - 所有可复用组件必须在 `uni_modules/mms-unix/components/mms-xxx/`
   - `common/` 只保留业务配置和业务 API

## 新增组件 Checklist

- [ ] 组件放在 `uni_modules/mms-unix/components/mms-xxx/`
- [ ] 组件文件名：`mms-xxx.uvue`
- [ ] 组件名称以 `mms-` 开头
- [ ] 添加注释说明用法
- [ ] 如果需要接口地址，配置在 `common/config.ts`
- [ ] 如果需要工具方法，放在 `mms-tools` 对应文件

## 总结

- **所有可复用代码 → `uni_modules/mms-unix/`**
- **所有业务配置 → `common/`**
- **接口地址统一 → `common/config.ts`**
- **请求工具统一 → `mms-tools/Request.uts`**
- **组件自动注册 → easycom 无需手动引入**