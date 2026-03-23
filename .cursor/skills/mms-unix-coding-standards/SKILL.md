---
name: mms-unix-coding-standards
description: "Maintains mms-unix uni-app component library project structure and coding standards for uni-app + Vue + uni-uts. Use when working on this project, adding new features, refactoring code, or moving files between directories."
---

# MMS-UNIX 项目编码规范与结构标准

该文件定义了 `mms-unix` 项目的**项目结构约定**和**编码规范**，帮助 AI 保持一致性，方便后期维护和升级。

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
│   │       ├── useAuth.uts       # 组合式函数 - 响应式登录态
│   │       ├── CacheUtil.uts     # 带过期缓存工具
│   │       ├── LoginObject.uts   # 登录对象（兼容旧版）
│   │       ├── uenum/            # 枚举定义
│   │       └── utype/            # 类型定义
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
│   │   ├── mms-update/          # 版本更新检测组件（新增）
│   │   ├── mms-upload/
│   │   ├── mms-watermark/
│   │   └── ...
│   ├── index.scss                # 全局样式入口
│   └── libs/request.uts         # 请求配置（原）
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

### TypeScript / UTS

1. **文件命名**：
   - 工具类：`PascalCase.uts`（如 `Storage.uts`、`Auth.uts`）
   - 组件：`kebab-case.uvue`（如 `mms-update.uvue`）
   - 每个文件一个主要导出，避免多个无关功能混在一起

2. **导入语句**：
   - 组件库内部导入使用绝对路径：`@/uni_modules/mms-unix/components/mms-tools/XXX.uts`
   - 配置导入：`import { config } from '@/common/config'`

3. **注释规范**：
   - 文件头部注释说明用途
   - 函数/方法添加注释说明参数和返回值
   - 复杂逻辑添加行内注释说明意图
   - 不要添加显而易见的注释（如 `// 获取 token`）

### 组件规范

1. **easycom 自动注册**：
   - 所有组件命名必须以 `mms-` 开头
   - 文件名必须匹配：`mms-xxx/mms-xxx.uvue`
   - 不需要手动引入，pages.json 已配置 easycom

2. **Props 定义**：
   - 给出默认值
   - 添加注释说明每个 props 的用途

3. **事件命名**：
   - 使用 kebab-case：`@update:visible` 风格
   - 成功/失败：`success`、`fail`

### 样式规范

1. **工具样式**：
   - 通用工具样式放在 `uni_modules/mms-unix/libs/css/utils.scss`
   - 使用原子化类名：`m-0`（margin 0）、`p-10`（padding 10px）、`f-x`（flex row）等

2. **组件样式**：
   - 组件内样式使用 scoped
   - 命名空间：`.mms-component-name__element` 格式

## 文件移动与重构规则

当用户要求移动文件时：

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

## API 接口配置规范

所有后端接口地址必须统一配置在 `common/config.ts`：

```ts
export type AppConfig = {
  // ...
  api: {
    login: {
      tokenLogin: string
      codeGetOpenIdLogin: string
      codeGetPhoneRegisterOrLogin: string
    }
    update: {
      checkUpdate: string
    }
  }
}
```

不要在组件中硬编码接口地址。

## 版本更新组件规范

版本更新检测组件 `mms-update`：

1. **后端接口返回格式**：
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

2. **多端适配**：
   - App：打开浏览器下载 APK
   - 小程序：调用 `updateManager.applyUpdate()`
   - H5：在新窗口打开下载页

## 认证与登录规范

1. **响应式设计**：
   - 使用 `authTrigger` + `notifyAuthChange()` 触发全局更新
   - 使用 `useAuth()` 获取响应式登录状态

2. **存储位置**：
   - token 和 userInfo 存在 uni.setStorageSync
   - 键名从 `config.storage` 配置读取

## 新增组件 Checklist

当新增组件时：

- [ ] 组件放在 `uni_modules/mms-unix/components/mms-xxx/`
- [ ] 组件文件名：`mms-xxx.uvue`
- [ ] 组件名称以 `mms-` 开头
- [ ] 添加注释说明用法
- [ ] 如果需要接口地址，配置在 `common/config.ts`
- [ ] 如果需要工具方法，放在 `mms-tools` 对应文件

## 示例：正确的导入路径

**✅ 正确**
```ts
import { storage } from '@/uni_modules/mms-unix/components/mms-tools/Storage.uts'
import { useAuth } from '@/uni_modules/mms-unix/components/mms-tools/useAuth.uts'
import { config } from '@/common/config'
```

**❌ 错误**（不应保留在 common/utils）
```ts
import { storage } from '@/common/utils/storage'
```

## 总结

- **所有可复用代码 → `uni_modules/mms-unix/`**
- **所有业务配置 → `common/`**
- **接口地址统一 → `common/config.ts`**
- **工具方法都导出到 `$mms` 全局**
- **组件自动注册 → easycom 无需手动引入**
