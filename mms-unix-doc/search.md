# mms-search 搜索框

搜索框组件，支持清除按钮。

## 使用

```uvue
<template>
	<mms-search
		v-model="keyword"
		placeholder="请输入搜索内容"
		@confirm="handleConfirm"
	/>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `modelValue` | 双向绑定值 | `string` | `''` |
| `placeholder` | 占位文字 | `string` | `请搜索` |
| `placeholderColor` | 占位文字颜色 | `string` | `#c0c4cc` |
| `radius` | 圆角大小，单位 rpx | `number` | `60` |
| `height` | 高度，单位 rpx | `number` | `60` |
| `iconSize` | 图标大小，单位 rpx | `number` | `32` |
| `bgColor` | 背景颜色 | `string` | `#f5f5f5` |
| `border` | 是否显示边框 | `boolean` | `false` |
| `clearabled` | 是否可清除 | `boolean` | `true` |
| `cancelabled` | 是否显示取消按钮 | `boolean` | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|--------|
| `input` | 输入内容变化 | `value` |
| `confirm` | 点击确认 | `value` |
| `clear` | 点击清除 | |
| `cancel` | 点击取消 | |
| `focus` | 获得焦点 | |
| `blur` | 失去焦点 | |

## 示例

### 基础用法

```uvue
<mms-search
	v-model="keyword"
	placeholder="搜索商品"
	@confirm="onSearch"
></mms-search>
```

### 显示取消按钮

```uvue
<mms-search
	v-model="keyword"
	placeholder="搜索"
	cancelabled
	@cancel="handleCancel"
></mms-search>
```
