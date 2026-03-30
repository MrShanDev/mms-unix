# 论坛动态页面模版（forum-feed）

## 用途

提供 **信息流列表 + 单帖互动** 的页面骨架：使用 **`m-feed-post`** 展示每条内容，**点赞 / 收藏 / 点赞数 / 赞名单** 通过 **`v-model`** 与组件双向同步；底部 **`m-input`** + **`m-button`** 发表评论。适用于社区、动态流等场景，对接接口后替换本地数据即可。

## 页面路径

- 源码：`pages/templates/forum-feed/forum-feed.uvue`
- 路由：`/pages/templates/forum-feed/forum-feed`
- 已在 `pages.json` 主包注册；`disableScroll: true`，由 **`scroll-view`** 与底部输入区分栏分担高度。

## 数据说明

- 演示中 **头像与配图** 使用按 **seed** 区分的随机示例图地址（需联网；接入业务后请替换为自有 CDN 或上传结果）。
- **视频** 演示项 `videoSrc` 可为空，由业务侧传入可播地址。
- 组件级 API、默认值与事件详见 **[m-feed-post.md](./m-feed-post.md)**。

## 扩展建议

- 评论发表成功后调用服务端刷新列表，或本地 `comments` / `commentCount` 与接口字段对齐。
- 长列表可结合分页、虚拟列表等由业务侧实现。

---

文档与 `forum-feed.uvue`、`m-feed-post.uvue` 保持一致。
