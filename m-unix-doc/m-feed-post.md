# m-feed-post 信息流帖子

## 概述

`m-feed-post` 为 **m-unix** 组件库中的信息流单条帖子展示组件（easycom：`m-feed-post`）。用于头像与昵称、正文、多图宫格或单视频、底部互动栏，以及可选的 **灰色互动区**（赞名单 + 评论列表）。脚本为 **UTS**，页面为 **uvue**，与仓库跨端工程一致。

## 引用方式

无需手动注册，依赖工程 `pages.json` 中 **easycom** 已配置的 `m-*` 规则即可在任意 `uvue` 页面书写标签 `<m-feed-post>`。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `postKey` | `string` | `'0'` | 列表项唯一键；参与子项 `key`，并在 `image-tap`、`comment-reply` 中回传 |
| `avatar` | `string` | `''` | 头像图地址 |
| `nickname` | `string` | `''` | 展示名 |
| `timeLabel` | `string` | `''` | 时间文案（由父级格式化后传入） |
| `content` | `string` | `''` | 正文 |
| `imageUrls` | `string[]` | `[]` | 图片 URL 列表；与 `videoSrc` 同时存在时 **优先展示视频** |
| `videoSrc` | `string` | `''` | 单视频地址；非空则仅展示视频区 |
| `maxPreviewImages` | `number` | `9` | 图片最多预览张数；超出部分在最后一张上以「+N」蒙层提示 |
| `liked` | `boolean` | `false` | 是否已赞；支持 **`v-model:liked`** |
| `likeCount` | `number` | `0` | 赞数（≥10000 显示为 x.x 万）；支持 **`v-model:like-count`** |
| `commentCount` | `number` | `0` | 评论数展示（过万同规则）；由父级维护，组件不自动改写 |
| `collected` | `boolean` | `false` | 是否已收藏；支持 **`v-model:collected`** |
| `likerNames` | `string[]` | `[]` | 赞区展示名列表（「、」拼接）；支持 **`v-model:liker-names`**；组件内在点赞切换时会自动增删展示名 **「我」** |
| `comments` | `FeedCommentItem[]` | `[]` | 评论列表，项结构见下表 |
| `showToolbar` | `boolean` | `true` | 是否显示底栏 |
| `activeColor` | `string` | `'#ff0844'` | 赞/收藏高亮与赞区图标强调色 |
| `customStyle` | `UTSJSONObject` | `{}` | 根节点样式合并 |

**`FeedCommentItem`**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 唯一键 |
| `author` | `string` | 评论者展示名 |
| `replyTo` | `string` | 被回复者；空字符串表示顶层评论 |
| `text` | `string` | 正文 |

## 双向绑定（v-model）

| 绑定 | 对应 `update` 事件 | 触发时机 |
|------|-------------------|----------|
| `v-model:liked` | `update:liked` | 点击赞按钮；新值为原值取反 |
| `v-model:like-count` | `update:likeCount` | 同上，同步递增或递减（不低于 0） |
| `v-model:liker-names` | `update:likerNames` | 同上；在名单末尾维护「我」的出现与否 |
| `v-model:collected` | `update:collected` | 点击收藏；新值为原值取反 |

父级仍可同时监听 `like`、`collect` 做埋点或二次拉取接口。

## 事件（Events）

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `avatar-tap` | — | 点击头像行 |
| `content-tap` | — | 点击正文 |
| `image-tap` | `(postKey: string, index: number)` | 点击某张图 |
| `like` | — | 点击赞（在发出 `update:*` 之后） |
| `comment` | — | 点击评论按钮 |
| `comment-reply` | `(postKey, commentId, author)` | 点击某条评论行，便于「回复某人」 |
| `collect` | — | 点击收藏（在发出 `update:collected` 之后） |

## 图标与字库

- **赞**：`m-icon` 名称 **`fabulous`**（与工程 `static/iconfont/iconfont.ttf` 映射一致）。
- **评论**：`message`
- **收藏**：`star`（是否收藏通过 `activeColor` 与普通灰色区分）

## 演示与模版

- **整页模版**：`/pages/templates/forum-feed/forum-feed`（含底部评论栏与列表示例；也可从「模版」Tab **论坛动态** 进入）。

## 使用示例

```vue
<m-feed-post
  post-key="a1"
  :avatar="avatarUrl"
  nickname="昵称"
  time-label="10 分钟前"
  content="正文"
  :image-urls="pics"
  v-model:liked="liked"
  v-model:collected="collected"
  v-model:like-count="likeCount"
  v-model:liker-names="likerNames"
  :comment-count="commentCount"
  :comments="comments"
  @image-tap="onImg"
  @comment="openComposer"
  @comment-reply="onReply"
/>
```

## 与 `forum-feed` 模版的关系

`forum-feed` 为业务模版页，组合 **`m-feed-post`**、**`m-input`**、**`m-button`** 与页面状态；组件层面的约定以本文与源码 `uni_modules/m-unix/components/m-feed-post/m-feed-post.uvue` 为准。

---

文档版本与组件实现同步维护；变更 API 时请更新本节。
