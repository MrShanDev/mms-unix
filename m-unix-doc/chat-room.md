# 聊天室页面模版（chat-room）

## 用途

提供可复制的 **会话列表 + 底部输入栏** 页面骨架，便于在 mUnix（m-unix）工程中快速落地私信、客服、群聊等场景的前端结构。消息发送与推送需替换为业务接口或即时通道，本模版仅用本地数组演示；**图片 / 视频** 当前为本地临时路径 + 气泡内预览，接入业务后应上传并改用网络地址。

## 页面路径

- 源码：`pages/templates/chat-room/chat-room.uvue`
- 路由：`/pages/templates/chat-room/chat-room`
- 需在 `pages.json` 主包 `pages` 中注册（已随仓库维护）。

## 依赖组件（easycom）

| 组件 | 作用 |
|------|------|
| `m-input` | 无标题单行输入，`confirm-type="send"`，支持清空 |
| `m-button` | 发送文字消息 |
| `m-icon` | 表情 / 图片 / 视频入口图标 |
| `scroll-view` | 消息区纵向滚动；`scroll-into-view` 锚定底部 |

气泡与布局为页面内样式，未单独拆组件，便于按业务改版配色与圆角。

## 布局要点

1. 页面 `disableScroll: true`，由根节点 `flex` 纵向分配：**上区域 `scroll-view` 占满剩余高度，下区域工具条 `flex-shrink: 0`**。
2. 消息区底部放置 **锚点视图**（`id="chat-bottom-anchor"`），发送后通过 `scroll-into-view` 滚到底；连续滚动时先将 `scroll-into-view` 置空再在 `nextTick` 中赋值，避免部分端不响应。
3. **底部合成区**（`.chat-composer`）：第一行为图标（表情切换、选图、选视频）+ 输入框 + 发送；第二行为可切换的 **表情面板**（`scroll-view` 内栅格，点击插入到 `draft`）。安全区通过 `padding-bottom: env(safe-area-inset-bottom)` 处理；键盘顶起行为各端差异大，接入真机时需按平台补充 `adjust-position`、键盘高度监听或官方推荐方案。

## 交互说明（本页已实现）

- **表情**：点击「表情」图标展开/收起面板；点击某一表情追加到输入框，与普通文字一起点发送即可发出。
- **图片**：`uni.chooseImage` 单选，`success` 内对 `tempFiles` / `tempFilePaths` 做归一后写入消息 `mediaSrc`，列表中以 `image` 展示，点击调 `uni.previewImage`。
- **视频**：`uni.chooseVideo`，对 `tempFilePath` / `tempFilePaths` 归一后写入 `mediaSrc`，列表中以 `video` 展示（带 `controls`）。

若某端 `chooseVideo` 与文档不一致，只需在 `normalizeVideoPath` 中按该平台返回值增补字段即可（与 `m-upload` 处理选图的思路一致）。

## 数据模型（示例）

```ts
type ChatMsgKind = 'text' | 'image' | 'video'

type ChatMsg = {
  id: string
  self: boolean  // true 表示自己发送，右对齐；媒体气泡无填充色块，仅圆角裁切
  kind: ChatMsgKind
  text: string    // 文本内容；图片 / 视频时可为空
  mediaSrc: string // 本地临时路径或业务 URL；纯文本时为空字符串
  time: string    // 展示用时间文案，可由业务格式化
}
```

接入真实数据时：拉取历史写入 `messages`，发送前上传媒体、调接口成功后再 `push` 或使用服务端回执更新状态；**切勿**把临时路径当持久化消息存储。

## 与主题色

己方文字气泡默认使用品牌红 `#ff0844`，与演示工程 `mUi` 主色一致；换肤时请同步修改 `.msg-bubble--self` 背景色或改为 CSS 变量。图片 / 视频气泡使用 `.msg-bubble--media` 取消背景，避免大红底包裹媒体。

## 扩展建议

- 长按消息：外层 `view` 包一层 `@longpress`，接 `m-action-sheet` 等。
- 语音条：扩展 `kind: 'audio'` 与 `m-icon`/`slider` 等播放 UI。
- 未读与通知：在导航栏或列表顶插入 `m-badge`、`m-notice-bar` 等现有能力。

## 版本说明

文档与 `pages/templates/chat-room/chat-room.uvue` 应保持行为一致；修改页面结构后请同步更新本节。
