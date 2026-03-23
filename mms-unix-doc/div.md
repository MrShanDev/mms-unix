# mms-div 分割线

分割线，支持文字在左/中/右。

## 使用

```uvue
<template>
	<view>
		<mms-div></mms-div>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `backgroundColor` | 分割线颜色 | `string` | - (继承) |
| `textColor` | 文字颜色 | `string` | `#909399` |
| `fontSize` | 文字大小，单位 rpx | `number` | `28` |
| `height` | 分割线高度 | `string` | `1rpx` |
| `contentPosition` | 文字位置 `left` / `center` / `right` | `string` | `center` |
| `text` | 文字内容 | `string` | `''` |
| `textClass` | 文字自定义类名 | `string` | `''` |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 文字内容（替换 text） |

## 示例

### 实线

```uvue
<mms-div></mms-div>
```

### 带文字

```uvue
<mms-div text="分割线"></mms-div>
```

### 文字居左

```uvue
<mms-div text="分割线" content-position="left"></mms-div>
```

### 自定义颜色

```uvue
<mms-div text="红色分割线" text-color="#f56c6c"></mms-div>
```
