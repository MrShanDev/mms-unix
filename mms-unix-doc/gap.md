# mms-gap 占位间距

占位空白间距，用于拉开元素距离。

## 使用

```uvue
<template>
	<view>
		<view>内容</view>
		<mms-gap></mms-gap>
		<view>内容</view>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `height` | 高度，单位 rpx | `number` | `20` |
| `background` | 背景颜色 | `string` | `transparent` |

## 示例

### 间距 20rpx

```uvue
<view>A</view>
<mms-gap></mms-gap>
<view>B</view>
```

### 间距 50rpx

```uvue
<view>A</view>
<mms-gap :height="50"></mms-gap>
<view>B</view>
```
