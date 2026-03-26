# 组件使用文档索引

本文档集（`mms-unix-doc/*.md`）描述 **mms-unix** 自研组件的用法、属性、事件与演示入口，与 `pages_demo` 分包中的示例一一对应。不涉及任何外部商业组件库名称。

## 文档与演示约定

- **演示路径**：均为分包根 `pages_demo` 下的页面，跳转使用 `/pages_demo/...`。
- **双向绑定**：表单类组件优先使用 `v-model` / `v-model:xxx`；文档中「Events」列出的 `update:*` 与之一一对应。
- **默认值**：以 `uni_modules/mms-unix/components/mms-*` 源码中 `props.default` 为准；文档表格与实现不一致时以源码为准。

## 按文档文件索引

| 文档 | 组件 | 演示页（示例） |
|------|------|----------------|
| [button.md](./button.md) | mms-button | pages_demo/button/button |
| [cell.md](./cell.md) | mms-cell | pages_demo/cell/cell |
| [input.md](./input.md) | mms-input、mms-form | pages_demo/form/input、form/form |
| [textarea.md](./textarea.md) | mms-textarea | pages_demo/textarea/textarea |
| [radio.md](./radio.md) | mms-radio、mms-radio-group | pages_demo/radio/radio |
| [checkbox.md](./checkbox.md) | mms-checkbox、mms-checkbox-group | pages_demo/checkbox/checkbox |
| [switch.md](./switch.md) | mms-switch | pages_demo/switch/switch |
| [tag.md](./tag.md) | mms-tag | pages_demo/tag/tag |
| [toast.md](./toast.md) | mms-toast | pages_demo/toast/toast |
| [loading.md](./loading.md) | mms-loading | pages_demo/loading/loading |
| [empty.md](./empty.md) | mms-empty | pages_demo/empty/empty |
| [grid.md](./grid.md) | mms-grid | pages_demo/grid/grid |
| [card.md](./card.md) | mms-card | pages_demo/card/card |
| [qrcode.md](./qrcode.md) | mms-qrcode | pages_demo/qrcode/qrcode |
| [clipboard.md](./clipboard.md) | mms-clipboard | pages_demo/ext/clipboard/clipboard |
| [notice-bar.md](./notice-bar.md) | mms-notice-bar | pages_demo/ext/notice-bar/notice-bar |
| [picker.md](./picker.md) | mms-picker | pages_demo/ext/picker/picker |
| [bubble-popup.md](./bubble-popup.md) | mms-bubble-popup | pages_demo/ext/bubble-popup/bubble-popup |
| [rate.md](./rate.md) | mms-rate | pages_demo/ext/rate/rate |
| [number-box.md](./number-box.md) | mms-number-box | pages_demo/ext/number-box/number-box |

其余组件见仓库内同目录 **`.md`** 文件；新增组件时请同步增加一篇说明与本表一行。

## 扩展演示索引

扩展类演示登记于 `pages.json` 的 `pages_demo` 分包，入口页：`pages_demo/extensions/extensions`。
