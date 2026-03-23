# mms-qrcode 二维码

生成二维码图片组件。

## 使用

```uvue
<template>
	<view>
		<mms-qrcode :value="text" :size="200"></mms-qrcode>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `value` | 二维码内容 | `string` | `''` |
| `size` | 二维码大小，单位 rpx | `number` | `200` |
| `color` | 二维码颜色 | `string` | `#000000` |
| `bgColor` | 背景颜色 | `string` | `#ffffff` |
| `margin` | 边距 | `number` | `0` |
| `errorLevel` | 容错级别 L/M/Q/H | `string` | `M` |

## 示例

### 基础二维码

```uvue
<mms-qrcode
	value="https://www.example.com"
	:size="300"
></mms-qrcode>
```

### 自定义颜色

```uvue
<mms-qrcode
	value="https://www.example.com"
	color="#f56c6c"
	bg-color="#f5f5f5"
	:size="300"
></mms-qrcode>
```

## 说明

组件内部使用 uni-app 提供的 `uni.makeQrCode` API生成二维码，需要 HBuilderX 3.5.0+ 支持。
