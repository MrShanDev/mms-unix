# mms-notice-bar 公告栏

滚动公告栏，用于展示通知公告。

## 使用

```uvue
<template>
	<mms-notice-bar
		text="这里是公告内容"
		showIcon
		@click="handleClick"
	/>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `text` | 公告文字 | `string` | `''` |
| `showIcon` | 是否显示左侧喇叭图标 | `boolean` | `true` |
| `showRight` | 是否显示右侧箭头 | `boolean` | `false` |
| `scrollable` | 是否可以滚动 | `boolean` | `true` |
| `wrapable` | 是否换行 | `boolean` | `false` |
| `bgColor` | 背景颜色 | `string` | `#fdf6ec` |
| `textColor` | 文字颜色 | `string` | `#f56c6c` |

## Events

| 事件名 | 说明 |
|--------|------|
| `click` | 点击公告栏触发 |

## 插槽

| 名称 | 说明 |
|------|------|
| `icon` | 左侧图标插槽 |
| `right` | 右侧内容插槽 |

## 示例

### 基础用法

```uvue
<mms-notice-bar
	text="这里是滚动公告内容"
></mms-notice-bar>
```

### 不滚动，换行

```uvue
<mms-notice-bar
	text="这里是很长的公告内容，需要换行显示"
	:scrollable="false"
	wrapable
></mms-notice-bar>
```

### 显示右侧箭头

```uvue
<mms-notice-bar
	text="点击查看更多"
	showRight
	@click="handleClick"
></mms-notice-bar>
```
