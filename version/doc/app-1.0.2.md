# MMS-Unix 演示工程 1.0.2（2026-03-30）

**简述：** 与 **`m-unix` 1.2.4** 对齐的演示工程迭代：信息流模版、组件演示入口、版本号与合规文案；沿用仓库名 **mms-unix**，品牌展示名 **mUnix**。

## 模版与演示

- **`pages/templates/forum-feed`**：**`m-feed-post`** + **`v-model`** 赞/收藏/计数/赞名单；底部 **`m-input`** 评论；配图 **`/static/logo.png`**，无外链演示依赖。
- **`pages_demo/feed-post`**：**m-feed-post** 双向绑定与事件演示；**`pages.json`** 已注册。
- **「组件」Tab首页**：**业务示例** 增加 **信息流帖子**；**宿主登录**（原列表文案调整）。

## 教程文档（m-unix-doc）

- **`m-feed-post.md`**：组件属性、默认值、`v-model`、事件、演示路径、示例代码。
- **`README.md`**：教程索引表。
- **`forum-feed.md`**：模版页说明与数据约定。

## 配置

- **`common/config.ts`** → **`configInfo.versionName`：1.0.2**，**`versionCode`：3**；登录相关注释中性化。

## 合规说明

本版对 **今日触及的组件、演示页、配置注释、包说明** 做了一轮排查：减少对特定商业产品或外站图床的硬编码依赖；**runtime 条件编译标识**（如 `MP-WEIXIN`）为框架能力保留。历史文件未列入本版变更清单的，可在后续迭代继续收敛。

## 与组件库版本的关系

- **演示工程**：本文件 · **1.0.2**
- **组件库包**：**`uni_modules/m-unix/package.json` → `1.2.4`**，见 **`lib-1.2.4.md`**

---

[返回索引](./README.md)
