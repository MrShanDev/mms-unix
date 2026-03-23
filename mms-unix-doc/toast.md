# mms-toast 提示框

提示框，用于短暂显示提示信息。

## 使用

```uvue
<template>
	<view>
		<mms-toast
			:show="show"
			text="操作成功"
		></mms-toast>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `show` | 是否显示 | `boolean` | `false` |
| `text` | 提示文字 | `string` | `''` |
| `icon` | 图标 URL | `string` | `''` |
| `position` | 位置 `center` / `top` / `bottom` | `string` | `center` |
| `mask` | 是否显示遮罩 | `boolean` | `false` |

## 示例

### 文字提示

```uvue
<mms-toast :show="show" text="这是提示"></mms-toast>
```

### 带图标

```uvue
<mms-toast
	:show="show"
	text="成功"
	icon="https://example.com/success.png"
></mms-toast>
```

### 底部显示

```uvue
<mms-toast
	:show="show"
	text="提示"
	position="bottom"
></mms-toast>
```

### 带遮罩

```uvue
<mms-toast
	:show="show"
	text="加载中..."
	mask
></mms-toast>
```
