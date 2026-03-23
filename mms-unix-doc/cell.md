# mms-cell 单元格

列表单元格，常用于设置页菜单项。

## 使用

```uvue
<template>
	<view>
		<mms-cell
			label="用户名"
			value="zhangsan"
			is-link
			@click="handleClick"
		/>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `label` | 左侧标题 | `string` | `''` |
| `value` | 右侧内容 | `string` | `''` |
| `brief` | 标题下方说明文字 | `string` | `''` |
| `disabled` | 是否禁止点击 | `boolean` | `false` |
| `border` | 是否显示下边框 | `boolean` | `true` |
| `center` | 是否垂直居中对齐 | `boolean` | `false` |
| `isLink` | 是否链接形式（显示箭头） | `boolean` | `false` |
| `customStyle` | 自定义样式 | `object` | `{}` |

## Events

| 事件名 | 说明 |
|--------|------|
| `click` | 点击单元格时触发，disabled 不触发 |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 左侧标题内容（替换 label） |
| `icon` | 左侧图标插槽 |
| `right` | 右侧内容插槽 |

## 示例

### 基础用法

```uvue
<mms-cell label="姓名" value="张三"></mms-cell>
<mms-cell label="手机" value="138****8888"></mms-cell>
```

### 带简介

```uvue
<mms-cell
	label="姓名"
	value="张三"
	brief="简介文字"
></mms-cell>
```

### 链接样式

```uvue
<mms-cell
	label="关于我们"
	is-link
	@click="goAbout"
></mms-cell>
```

### 居中对齐

```uvue
<mms-cell
	label="头像"
	center
>
	<image slot="right" :src="avatar" style="width: 80rpx; height: 80rpx; border-radius: 50%;" />
</mms-cell>
```
