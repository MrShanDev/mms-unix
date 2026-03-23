# mms-clipboard 剪贴板

复制文本到剪贴板工具。

## 使用

```uvue
<template>
	<view>
		<mms-clipboard text="要复制的文字" @copy="handleCopy">
			<mms-button type="primary" text="复制"></mms-button>
		</mms-clipboard>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `text` | 需要复制的文本 | `string` | `''` |

## Events

| 事件名 | 说明 |
|--------|------|
| `copy` | 点击复制成功后触发 | `{ text: string, success: boolean }` |

## 示例

### 基础用法

```uvue
<mms-clipboard
	text="https://example.com"
	@copy="handleCopy"
>
	<mms-button type="primary" text="复制链接"></mms-button>
</mms-clipboard>
```

## 说明

基于 uni-app `uni.setClipboardData` API 封装。
