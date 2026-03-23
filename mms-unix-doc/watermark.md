# mms-watermark 水印

图片水印组件，给图片添加文字水印。

## 使用

```uvue
<template>
	<view>
		<mms-watermark
			:image="imageUrl"
			content="mms.unix"
			:font-size="20"
			color="rgba(255, 255, 255, 0.5)"
		>
			<!-- 可以自定义内容 -->
		</mms-watermark>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `image` | 原图图片地址 | `string` | `''` |
| `content` | 水印文字内容 | `string` | `''` |
| `fontSize` | 字体大小 | `number` | `20` |
| `color` | 字体颜色透明度 | `string` | `rgba(255, 255, 255, 0.5)` |
| `gap` | 水印间距 [x, y] | `array` | `[50, 50]` |
| `rotate` | 旋转角度 | `number` | `-30` |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 需要水印的内容，如果用图片水印就不传内容 |

## 示例

### 文字水印

```uvue
<mms-watermark
	image="https://example.com/image.jpg"
	content="我的水印"
	color="rgba(0, 0, 0, 0.3)"
></mms-watermark>
```

### 自定义内容水印

```uvue
<mms-watermark>
	<image src="https://example.com/image.jpg"></image>
</mms-watermark>
```
