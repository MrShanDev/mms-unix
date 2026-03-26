# mms-empty 空状态

空状态时的占位提示，用于列表为空、没有数据等场景。

## 使用

```uvue
<template>
	<mms-empty description="暂无数据"></mms-empty>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `image` | 自定义图片 URL | `string` | `''` |
| `description` | 文字说明 | `string` | `暂无数据` |
| `text` | 与 `description` 相同含义，非空时优先显示 | `string` | `''` |
| `icon` | `mms-icon` 的 `name`；未传且未使用 `image` 时，默认使用内置图标 `file-common-filling`（不依赖 `/static` 插图） | `string` | `''` |
| `paddingTop` | 区域距离顶部距离（数字默认 rpx） | `number \| string` | `200` |

## 插槽

| 名称 | 说明 |
|------|------|
| `icon` | 自定义图标；不写则用默认 `mms-icon`（`file-common-filling`） |
| `footer` | 底部内容，一般放按钮 |
| `default` | 底部内容，与 `footer` 可同时使用 |

底部使用 `mms-button` 时，请用 **`btnSize`**（如 `small`）控制按钮规格；`mms-button` 的 **`size` 表示字号 rpx**，写成 `size="small"` 不会得到小按钮，且默认 **`width` 为 100%** 会拉满一行。

## 示例

### 基础用法

```uvue
<mms-empty description="暂无合同数据"></mms-empty>
```

### 自定义图片

```uvue
<mms-empty
	description="暂无数据"
	image="https://example.com/empty.png"
></mms-empty>
```

### 底部按钮

```uvue
<mms-empty description="暂无数据">
	<template #footer>
		<mms-button type="primary" btnSize="small">去添加</mms-button>
	</template>
</mms-empty>
```
