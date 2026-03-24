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
| `errorLevel` | 容错级别 L/M/Q/H（仅微信小程序 canvas） | `string` | `M` |
| `logo` | 中心 Logo 图片地址，叠在二维码上 | `string` | `''` |

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

- **微信小程序**：使用 `uni.makeQrCode` + `canvas` 本地绘制；每个组件实例使用独立 `canvas-id`，避免同页多个二维码冲突。
- **App / H5 等**：在 `common/config.ts` 的 `api.qrCodeImageApiBase` 配置**自建**二维码 PNG 接口后才会请求（query 与常见 qrserver 风格兼容：`size`、`color`、`bgcolor`、`data`）；未配置则不显示联网二维码图；颜色仅支持常见 `#RRGGBB` 形式。
- **Logo**：各端均在二维码区域中心叠加小图（白底圆角），不依赖 `makeQrCode`。
