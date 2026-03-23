# mms-popup 弹出层

弹出层容器，用于展示弹窗、菜单等内容，支持从顶部、底部、中间弹出。

## 使用

```uvue
<template>
	<view>
		<mms-popup
			:show="show"
			position="bottom"
			round
			closeable
			@close="show = false"
		>
			<view>
				<text>弹出内容</text>
			</view>
		</mms-popup>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `show` | 是否显示弹出层 | `boolean` | `false` |
| `position` | 弹出位置 `top` / `center` / `bottom` | `string` | `bottom` |
| `round` | 是否显示圆角 | `boolean` | `true` |
| `overlayOpacity` | 遮罩透明度 | `number` | `0.5` |
| `closeable` | 是否显示关闭按钮 | `boolean` | `false` |
| `closeOnClickOverlay` | 点击遮罩是否关闭 | `boolean` | `true` |
| `zIndex` | 层级 | `number` | `999` |
| `maxHeight` | 最大高度，单位 vh | `number` | `80` |

## Events

| 事件名 | 说明 |
|--------|------|
| `close` | 关闭弹出层时触发 |
| `overlay-click` | 点击遮罩触发 |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 弹出层内容 |

## 示例

### 底部弹出

```uvue
<mms-popup
	:show="show"
	position="bottom"
	round
	closeable
	@close="show = false"
>
	<view>
		<text>底部弹出内容</text>
	</view>
</mms-popup>
```

### 中间弹出弹窗

```uvue
<mms-popup
	:show="show"
	position="center"
	round
>
	<view class="dialog">
		<text>弹窗内容</text>
	</view>
</mms-popup>
```
