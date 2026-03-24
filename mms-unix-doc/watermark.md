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
| `opacity` | 文字叠层整体透明度 `0~1`（仅无 `image` 时叠层生效）；为 `-1` 表示不用该属性 | `number` | `-1` |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 需要被盖水印的**业务内容**，须写在组件标签内部；**未传 `image` 时**为文字叠层模式 |

## 行为说明

- **无 `image`**：在插槽内容上方用多组文字平铺叠层（不依赖 canvas 透明），可正常预览；**长按保存**不可用（会提示）。
- **有 `image`**：使用 canvas 绘制「原图 + 水印」，盖在插槽之上；可**长按 canvas** 尝试保存到相册（需平台权限）。

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
