# 组件库 m-unix 1.2.4（2026-03-30）

**简述：** 新增 **`m-feed-post`** 信息流帖子组件；支持 **`v-model:liked` / `v-model:collected` / `v-model:like-count` / `v-model:liker-names`** 与既有事件；演示页 **`pages_demo/feed-post`**；文案与教程表述收紧为中性宿主与自研表述。

## 新增与变更

- **`m-feed-post`**（`uni_modules/m-unix/components/m-feed-post/`）：多图/视频、互动栏、灰色互动区（赞名单 + 评论列表）；点赞行内同步 **`我`** 于赞名单；图标 **`fabulous` / `message` / `star`**。
- **`m-wx-login`**：默认按钮文案改为 **「一键登录」**；注释改为宿主小程序表述。
- **`m-login`**：提示文案改为 **「当前宿主请对接业务登录接口」**。
- **`m-icon`**：已含 **`like` / `like-fill`** 映射（沿用）；信息流赞展示以 **`fabulous`** 为准以匹配仓库字库。
- **文档**：`m-unix-doc/m-feed-post.md`、`m-unix-doc/README.md` 索引；`forum-feed.md` 与模版数据改用本地静态资源说明。
- **`package.json`**：**`version`** **1.2.4**；**`keywords`** 去除非统一关键词；**`description`** 端能力表述中性化。
- **合规排查（本版触及范围）**：演示入口 **「宿主登录」**；`pages_demo/ext/wx-login` 标题与说明中性化；`config.ts` / `baseApi` 注释去品牌化。

## 说明

- 详细条目同步 **`uni_modules/m-unix/changelog.md`** § **1.2.4**。
- 演示工程版本见 **`app-1.0.2.md`**（与 `configInfo.versionName` 对齐）。

---

[返回索引](./README.md)
