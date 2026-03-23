# mms-overlay 遮罩层

遮罩层，弹出框的蒙层。

## 使用

```uvue
<template>
	<view>
		<mms-overlay :show="show" @click="close"></mms-overlay>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `show` | 是否显示 | `boolean` | `false` |
| `opacity` | 透明度 0-1 | `number` | `0.5` |
| `zIndex` | z-index 层级 | `number` | `998` |
| `lockScroll` | 是否锁定背景滚动 | `boolean` | `true` |

## Events

| 事件名 | 说明 |
|--------|------|
| `click` | 点击遮罩时触发 |

## 示例

### 基础用法

```uvue
<mms-overlay
	:show="showPopup"
	@click="showPopup = false"
></mms-overlay>
```

### 自定义透明度

```uvue
<mms-overlay
	:show="show"
	:opacity="0.8"
></mms-overlay>
```
