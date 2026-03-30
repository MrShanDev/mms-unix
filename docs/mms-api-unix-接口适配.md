# mms-unix ↔ mms-api-unix 接口适配说明

本文档供 **uni-app `mms-unix` 项目** 对接主仓 **`mms-api-unix`（`MmsMobileApiApplication`）** 时使用。  
请求根地址与 `common/config.ts` 中的 **`config.baseUrl`** 一致（例如本机 `http://localhost:8070`）。

> **说明：** `mms-unix/common/api/mallApi.uts` 里大量路径形如 `/v1/common/...`，与当前 `mms-api-unix` 已统一的 **`/api/{模块}/v1`** 不一致。要对齐本后端，请在网关中做路径映射，或直接修改 `mallApi.uts` / `config.ts` 中的 path。

---

## 1. 通用约定

| 项 | 约定 |
|----|------|
| 路径风格 | `/api/{模块名}/v1/{资源...}`，子路径多为 **kebab-case** |
| 返回体 | 统一 `R<T>`（`code`、`msg`、`data` 等，与现有 `mms` 移动端一致） |
| 登录态 | 与 Sa-Token 移动端约定一致（请求头携带 token，具体字段名以现网配置为准） |
| 需登录接口 | 未登录通常返回 401/403（`mms-unix` 中 `mallApi` 已配置 `unauthorizedCodes: [401, 403]`） |

---

## 2. mms-unix 现用路径 → mms-api-unix 目标路径

以下仅列出 **在本仓库 `mms-api-unix` 中已实现**、且与商城会员/基础能力相关的对应关系。

| mms-unix 调用来源 | 当前 path（摘自代码） | 应改为（直连本后端时） | HTTP | 备注 |
|-------------------|----------------------|-------------------------|------|------|
| `mallApi.selectByAdvertisingCode` | `GET /v1/common/location/selectByAdvertisingCode` | `GET /api/ad/v1/by-code` | GET | Query：`advertisingCode`，可选 `size`（默认 5） |
| `mallApi.storeToolAreaList` | `GET /v1/common/common/storeToolAreaList` | `GET /api/base/v1/store-tool-areas` | GET | Query：可选 `provincialName`、`cityName` |
| `mallApi.mallSendSmsCode` | `POST /v1/common/common/smsCode` | `POST /api/base/v1/sms-code` | POST | **JSON Body**：`StoreSmsBo`：`phone`、`type`（1 注册 2 登录 3 改密 4 支付密码 5 换绑手机 6 实名） |
| `mallApi.tokenLogin` | `GET /v1/common/login/tokenLogin` | `GET /api/member/v1/token-login` | GET | Query：可选 `latitude`、`longitude` |
| `mallApi.weixinLogin` | `GET /v1/common/login/codeGetPhoneRegisterOrLogin` | `GET /api/member/v1/code-phone-register-or-login` | GET | Query：`code`；可选 `phoneCode` 或（旧）`encryptedData`+`iv`；可选经纬度 |
| `mallApi.mallAccountLogin` | `POST /v1/common/login/accountLogin` | `POST /api/member/v1/account-login` | POST | Body：`StoreMemberEmailLoginBo`（邮箱 `email`、密码 `password`）；可选 query 经纬度 |
| `mallApi.phoneSmsLogin` | `POST /v1/common/login/login` | `POST /api/member/v1/login` | POST | Body：`StoreMemberLoginPhoneBo`（`phone`、`smsCode`、`invitationCode` 等）；可选 query 经纬度 |
| `mallApi.accountRegister` | `POST /v1/common/login/accountRegister` | 见下 | — | 若业务等同于「手机号+验证码注册并登录」，与 **`POST /api/member/v1/login`** 一致；若为别的注册形态需单独对照后端 |
| `mallApi.findPassword` | `POST /v1/common/login/findPassword` | `POST /api/member/v1/find-password` | POST | Body：`StoreMemberSetPasswordBo` |
| `mallApi.addressList` | `POST /v1/common/member/address/list` | `POST /api/member/v1/addresses/list` | POST | Body：`PageQuery`（与后端分页字段一致） |
| `mallApi.addressDetail` | `GET /v1/common/member/address/{id}` | `GET /api/member/v1/addresses/{id}` | GET | 需登录 |
| `mallApi.addressEdit` | `POST /v1/common/member/address/edit` | `POST /api/member/v1/addresses/edit` | POST | Body：`StoreMemberAddressBo` |
| `mallApi.addressInsert` | `POST /v1/common/member/address/insert` | `POST /api/member/v1/addresses/insert` | POST | Body：`StoreMemberAddressBo` |
| `mallApi.deleteAddress` | `GET /v1/common/member/address/delete/{id}` | `GET /api/member/v1/addresses/delete/{id}` | GET | 与后端保持一致（历史为 GET 删除） |
| `mallApi.updateMemberInfo` | `POST /v1/common/member/updateMember` | `POST /api/member/v1/update-member` | POST | Body：`StoreMemberUpdateBo` |
| `mallApi.checkUpdate` | `config.api.update.checkUpdate`（默认 `GET /api/v1/common/checkUpdate`） | `GET /api/app/v1/upgrade-check` | GET | **参数不一致**：后端为 `type`（1=iOS，2=Android，默认 2）；前端若传 `currentVersionCode` 需改后端或网关做转换 |
| `config.api.upload.image` | `/api/v1/common/upload/image` | `POST /api/base/v1/uploads` | POST | **multipart**，字段名 **`file`**；需登录 |
| `config.api.login.*`（m-unix 组件用） | `/api/v1/login/tokenLogin` 等 | 见登录节 | — | 建议统一改为 **`/api/member/v1/...`** 下列路径 |

---

## 3. mms-api-unix 开放接口清单（直连时唯一事实源）

### 3.1 基础 `/api/base/v1`

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/base/v1/website` | 网站配置列表（`website_` 前缀） |
| GET | `/api/base/v1/configs/{key}` | 单个配置 |
| POST | `/api/base/v1/sms-code` | 短信验证码 |
| POST | `/api/base/v1/uploads` | 上传文件（multipart `file`，需登录） |
| GET | `/api/base/v1/store-tool-areas` | 省市区（Deprecated） |
| POST | `/api/base/v1/email-codes` | 邮件验证码 |

### 3.2 会员与登录 `/api/member/v1`（`ApiLoginController` + `ApiMemberController`）

**登录（节选）**

| 方法 | 路径 |
|------|------|
| GET | `/api/member/v1/token-login` |
| GET | `/api/member/v1/code-open-id-login` |
| GET | `/api/member/v1/code-phone-register-or-login` |
| POST | `/api/member/v1/login` |
| POST | `/api/member/v1/account-login` |
| POST | `/api/member/v1/find-password` |
| POST | `/api/member/v1/oauth-authorize` |
| POST | `/api/member/v1/oauth-polling` |
| POST | `/api/member/v1/logout` |

**会员资料 / 地址 / 钱包（节选）**

| 方法 | 路径 |
|------|------|
| GET | `/api/member/v1/info` |
| POST | `/api/member/v1/update-member` |
| GET | `/api/member/v1/authentication` |
| GET | `/api/member/v1/authentication-with-bound-phone` |
| POST | `/api/member/v1/addresses/list` |
| GET | `/api/member/v1/addresses/{id}` |
| POST | `/api/member/v1/addresses/edit` |
| GET | `/api/member/v1/addresses/default` |
| POST | `/api/member/v1/addresses/insert` |
| GET | `/api/member/v1/addresses/delete/{id}` |
| GET | `/api/member/v1/bind-email` |
| GET | `/api/member/v1/signature` |
| GET | `/api/member/v1/tags` |
| GET | `/api/member/v1/member-bg-img` |
| POST | `/api/member/v1/wallet-accounts/bind` |
| DELETE | `/api/member/v1/wallet-accounts/unbind/{id}` |
| PUT | `/api/member/v1/wallet-accounts/default/{id}` |
| GET | `/api/member/v1/wallet-accounts` |

### 3.3 文章 `/api/article/v1`

| 方法 | 路径 |
|------|------|
| POST | `/api/article/v1/categories` |
| GET | `/api/article/v1/articles` |
| GET | `/api/article/v1/articles/by-id` |
| POST | `/api/article/v1/articles/publish` |
| GET | `/api/article/v1/articles/detail` |
| POST | `/api/article/v1/articles/edit` |
| DELETE | `/api/article/v1/articles` |
| GET | `/api/article/v1/articles/stats` |
| POST | `/api/article/v1/articles/mine` |

与 `mallApi.articleList`（POST `/v1/article/articleList`）**路径与方法均不同**：若文章模块要接本后端，请按上表改为 **GET `/articles`** 并传 `cateId`、`pageNum`、`pageSize`（见 `ApiStoreArticleController`）。

### 3.4 广告 `/api/ad/v1`

| 方法 | 路径 |
|------|------|
| GET | `/api/ad/v1/locations` |
| GET | `/api/ad/v1/by-code` |

### 3.5 CMS `/api/cms/v1`

| 方法 | 路径 |
|------|------|
| GET | `/api/cms/v1/navigation` |
| GET | `/api/cms/v1/quick-entries` |
| GET | `/api/cms/v1/search-hot` |

### 3.6 论坛 `/api/bbs/v1`

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/bbs/v1/categories` | 分类 |
| GET | `/api/bbs/v1/topics` | 话题分页 |
| POST | `/api/bbs/v1/topics` | 发布话题 |
| GET | `/api/bbs/v1/topics/delete` | 删除 |
| GET | `/api/bbs/v1/topics/detail` | 详情 |
| GET | `/api/bbs/v1/comments` | 发评论（query） |
| GET | `/api/bbs/v1/comments/delete` | 删评论 |
| GET | `/api/bbs/v1/comments/list` | 评论列表 |
| GET | `/api/bbs/v1/interactions/like` | 点赞 |
| GET | `/api/bbs/v1/interactions/collect` | 收藏 |
| GET | `/api/bbs/v1/interactions/attention` | 关注 |
| GET | `/api/bbs/v1/me/stats` | 我的统计 |
| GET | `/api/bbs/v1/me/topics` | 我的内容 |
| GET | `/api/bbs/v1/me/received-likes` | 收到赞藏 |
| GET | `/api/bbs/v1/me/following` | 关注列表 |
| GET | `/api/bbs/v1/me/at-me` | @ 我 |

### 3.7 App 版本 `/api/app/v1`

| 方法 | 路径 |
|------|------|
| GET | `/api/app/v1/upgrade-check` |

---

## 4. mms-unix 中尚未在本开放服务出现的接口（清理掉）

以下在 **`mallApi.uts`** 中出现，**当前 `mms-api-unix` 工程内无对应 Controller**（多为托管/藏品/订单/合同等业务），需 **其它微服务** 或 **网关** 提供，或后续在本应用扩展：

- `/v1/collection/**`（列表、详情、证书、我的托管等）
- `/api/v1/storeProduct/productList`
- `/v1/common/order/payOrderPlus`
- `/api/mall/contract/**`

---

## 5. `common/api/auth.uts` 说明

该文件中路径为 **`/api/auth/...`**（示例风格），**与 `mms-api-unix` 当前会员登录路径不一致**。  
若小程序实际走 **`mms-api-unix`**，请改用 **`/api/member/v1`** 下登录接口，或保留该文件仅作其它网关使用。

---

## 6. 建议的 config.ts 调整示例（对接本后端）

将 `config.ts` 中 `api.login`、`api.update`、`api.upload` 改为与上表一致，例如：

```ts
login: {
  tokenLogin: '/api/member/v1/token-login',
  codeGetOpenIdLogin: '/api/member/v1/code-open-id-login',
  codeGetPhoneRegisterOrLogin: '/api/member/v1/code-phone-register-or-login',
},
update: {
  checkUpdate: '/api/app/v1/upgrade-check',
},
upload: {
  image: '/api/base/v1/uploads',
},
```

**详参 Body/Query 请以服务端源码或 Knife4j/OpenAPI 为准。**

---

*文档随 `mms-api-unix` 路由变更时请同步更新本文。*
