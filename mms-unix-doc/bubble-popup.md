# mms-bubble-popup 气泡弹层

带三角指向的气泡菜单，常用于按钮旁快捷操作、聊天场景等。支持全屏遮罩与点击关闭。

## 布局说明

- **`position="fixed"`**：根节点铺满视口作叠层，通过 `left` / `top` 等指定气泡相对**窗口**的位置。
- **`position="absolute"`**：根节点铺满**最近的 `position: relative` 祖先**，适合与按钮同放在锚点容器内，用 `top="100%"` 与 `translate-y` 把气泡摆在**按钮下方**（或配合 `translateY="-100%"` 摆在上方）。
- **遮罩**：相对根节点 **`position: absolute` 铺满**（与 `mms-alert` 一致），**不用** `fixed` 全屏蒙层，避免与气泡同为视口级 `fixed` 时部分端上蒙层盖住内容。
- **气泡**：相对根节点 **`absolute`**，`z-index` 高于蒙层；根为 `fixed` 且铺满视口时，效果等同视口定位。靠右时只设 `right`，勿再设 `left="auto"`（部分端对 `auto` 解析异常）。

## 常见问题：只看到遮罩、看不到气泡

遮罩与气泡为兄弟节点时，若遮罩的 `z-index` 高于气泡，会把气泡盖住。本组件已约定：**遮罩为 `zIndex - 1`，气泡框为 `zIndex`**，保证气泡始终叠在遮罩之上。

## 使用（与按钮对齐：锚点 + 下方展开）

```uvue
<template>
	<view class="anchor">
		<mms-button @tap="open = true">打开</mms-button>
		<mms-bubble-popup
			v-model:show="open"
			position="absolute"
			width="260rpx"
			left="0"
			top="100%"
			translate-y="12rpx"
			direction="top"
			triangle-left="48rpx"
			triangle-top="0"
			@close="open = false"
		>
			<view>
				<text>菜单项</text>
			</view>
		</mms-bubble-popup>
	</view>
</template>

<script setup lang="uts">
import { ref } from 'vue'
const open = ref(false)
</script>

<style lang="scss">
.anchor {
	position: relative;
}
</style>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `show` | 是否显示 | `boolean` | `false` |
| `mask` | 是否显示遮罩 | `boolean` | `true` |
| `maskBgColor` | 遮罩背景色 | `string` | `rgba(0, 0, 0, 0.4)` |
| `width` | 气泡宽度 | `string` | `300rpx` |
| `radius` | 圆角 | `string` | `8rpx` |
| `left` / `right` / `top` / `bottom` | 气泡定位（与 `position` 配合） | `string` | `auto` |
| `translateX` / `translateY` | `transform` 平移，如 `-100%` 上移一整格高度 | `string` | `0` |
| `backgroundColor` | 气泡背景色 | `string` | `#4c4c4c` |
| `color` | 默认文字色（作用于内容区） | `string` | `#ffffff` |
| `borderWidth` | 三角边框宽度（用于绘制箭头） | `string` | `12rpx` |
| `direction` | 三角朝向：`top` \| `bottom` \| `left` \| `right` | `string` | `top` |
| `triangleLeft` / `triangleRight` / `triangleTop` / `triangleBottom` | 三角相对气泡的定位 | `string` | `auto` |
| `position` | 根节点定位：`fixed` \| `absolute` | `string` | `fixed` |
| `zIndex` | 叠层层级（遮罩为 `zIndex - 1`） | `number` \| `string` | `10080` |

## Events

| 事件名 | 说明 |
|--------|------|
| `close` | 点击遮罩关闭时触发 |
| `update:show` | 关闭时发出 `false`，配合 `v-model:show` |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 气泡内容 |

## 注意事项

- 三角通过边框绘制，需同时设置 `direction` 与对应的 `triangle*` 定位，避免箭头贴边错位。
- 与页面滚动、自定义导航栏组合时，注意 `fixed` 下 `top` 是否需叠加状态栏高度（可按项目自行换算）。
