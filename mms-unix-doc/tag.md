# mms-tag 标签

标签组件，支持多种样式、尺寸、颜色。

## 使用

```uvue
<template>
	<view>
		<mms-tag text="标签"></mms-tag>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `type` | 类型 `primary` / `success` / `warning` / `danger` / `default` | `string` | `default` |
| `size` | 尺寸 `medium` / `small` / `mini` | `string` | `small` |
| `text` | 标签文字 | `string` | `''` |
| `round` | 是否圆角 | `boolean` | `false` |
| `mark` | 是否标记样式 | `boolean` | `false` |
| `closable` | 是否可关闭 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `color` | 自定义文字颜色 | `string` | - |
| `bgColor` | 自定义背景颜色 | `string` | - |
| `customStyle` | 自定义样式 | `object` | `{}` |

## Events

| 事件名 | 说明 |
|--------|------|
| `click` | 点击标签触发 |
| `close` | 点击关闭按钮触发（closable = true 时有效） |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 标签文字 |

## 示例

### 不同类型

```uvue
<mms-tag type="primary" text="primary"></mms-tag>
<mms-tag type="success" text="success"></mms-tag>
<mms-tag type="warning" text="warning"></mms-tag>
<mms-tag type="danger" text="danger"></mms-tag>
<mms-tag type="default" text="default"></mms-tag>
```

### 不同尺寸

```uvue
<mms-tag type="primary" size="medium" text="medium"></mms-tag>
<mms-tag type="primary" size="small" text="small"></mms-tag>
<mms-tag type="primary" size="mini" text="mini"></mms-tag>
```

### 圆角

```uvue
<mms-tag type="primary" text="圆角" round></mms-tag>
```

### 标记样式

```uvue
<mms-tag type="primary" text="标记" mark></mms-tag>
```

### 可关闭

```uvue
<mms-tag text="可关闭" closable @close="handleClose"></mms-tag>
```

### 自定义颜色

```uvue
<mms-tag text="自定义" bg-color="#000000" color="#ffffff"></mms-tag>
