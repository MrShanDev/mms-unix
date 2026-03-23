# mms-bottom-popup 底部弹窗

底部弹窗，从底部弹出内容，支持遮罩层，适配安全区域。

## 效果

- 从底部向上弹出内容
- 点击蒙层关闭
- 适配 iPhone 底部安全区域
- 阻止遮罩下层滚动穿透

## 使用

```uvue
<template>
	<view>
		<mms-bottom-popup
			:show="showPopup"
			:height="600"
			:radius="true"
			@close="showPopup = false"
		>
			<view>
				<!-- 弹窗内容 -->
				<text>这里是弹窗内容</text>
			</view>
		</mms-bottom-popup>
	</view>
</template>

<script setup lang="uts">
	const showPopup = ref(false)
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `show` | 是否显示弹窗 | `boolean` | `false` |
| `mask` | 是否显示遮罩蒙层 | `boolean` | `true` |
| `backgroundColor` | 弹窗背景颜色 | `string` | `#fff` |
| `height` | 弹窗高度，单位 rpx | `number` | `0` (auto) |
| `radius` | 是否显示顶部圆角 | `boolean` | `true` |
| `zIndex` | 弹窗z-index层级 | `number` | `997` |
| `maskZIndex` | 蒙层z-index层级 | `number` | `996` |
| `translateY` | 弹窗垂直偏移 | `string` | `0` |
| `isSafeArea` | 是否适配底部安全区域 | `boolean` | `true` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|--------|
| `close` | 点击蒙层关闭时触发 | `-` |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 弹窗内容 |

## 示例

### 基础用法

```uvue
<mms-bottom-popup
	:show="show"
	height="800"
	@close="show = false"
>
	<view>
		<view class="content">
			<text>这是底部弹窗内容</text>
		</view>
	</view>
</mms-bottom-popup>
```

### 自定义高度

```uvue
<mms-bottom-popup
	:show="show"
	height="400"
	@close="show = false"
>
```

### 不显示圆角

```uvue
<mms-bottom-popup
	:show="show"
	:radius="false"
	@close="show = false"
>
```

## 注意事项

1. 默认已经阻止了蒙层下方的滚动穿透，不需要额外处理
2. 安全区域适配默认开启，如果不需要可以关闭
