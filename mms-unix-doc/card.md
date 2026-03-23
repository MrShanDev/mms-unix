# mms-card 卡片容器

卡片容器，用于包裹内容，提供边框、圆角、阴影。

## 使用

```uvue
<template>
	<mms-card>
		<view>
			<text>卡片内容</text>
		</view>
	</mms-card>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `border` | 是否显示边框 | `boolean` | `true` |
| `shadow` | 是否显示阴影 | `boolean` | `false` |
| `full` | 是否通栏（左右无间距） | `boolean` | `false` |
| `customStyle` | 自定义样式 | `object` | `{}` |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 卡片内容 |

## 示例

### 基础卡片

```uvue
<mms-card>
	<view>
		<text>这是卡片内容</text>
	</view>
</mms-card>
```

### 阴影卡片

```uvue
<mms-card :shadow="true">
	<view>
		<text>带阴影的卡片</text>
	</view>
</mms-card>
