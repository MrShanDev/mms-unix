# mms-loading 加载中

加载中动画，三点跳动效果。

## 使用

```uvue
<template>
	<view>
		<mms-loading text="加载中..."></mms-loading>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `text` | 提示文字 | `string` | `加载中...` |
| `color` | 颜色 | `string` | `#c0c4cc` |
| `full` | 是否全屏 | `boolean` | `false` |
| `anim` | 是否开启动画 | `boolean` | `true` |

## 示例

### 基础用法

```uvue
<mms-loading></mms-loading>
```

### 全屏加载

```uvue
<mms-loading full text="加载中..."></mms-loading>
```

### 自定义颜色

```uvue
<mms-loading text="加载中" color="#ff2727"></mms-loading>
```
