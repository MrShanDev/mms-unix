# 组件库 mms-unix 1.1.1（2026-03-24）

**简述：** 默认主题色与工具类主色同步为 `#ff0844`。

## 主题与样式基线

- **默认主色**：`config.uts` 中 `primaryColor` 默认值由 `#ff2727` 调整为 **`#ff0844`**，与演示工程 `common/config.ts` 的 `mmsUi.primaryColor` 推荐配置一致。
- **工具类**：`libs/css/mms.scss` 中与主色相关的文字色、背景色同步为 `#ff0844`。

## 说明

- 本次为配置与样式默认值调整；业务侧仍可通过 `setMmsUiConfig` 或 `config.mmsUi` 覆盖主色。

---

[返回索引](./README.md)
