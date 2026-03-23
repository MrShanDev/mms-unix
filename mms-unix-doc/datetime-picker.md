# mms-datetime-picker 日期时间选择器

弹出式日期时间选择器。

## 使用

```uvue
<template>
	<view>
		<mms-cell label="选择日期" :value="dateText" @click="showPicker = true"></mms-cell>
		<mms-datetime-picker
			v-model:show="showPicker"
			v-model="currentDate"
			mode="date"
			@confirm="handleConfirm"
			@cancel="showPicker = false"
		></mms-datetime-picker>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `show` | 是否显示 | `boolean` | `false` |
| `modelValue` | 当前值 | `number` | `0` |
| `mode` | 模式 `date` / `time` / `datetime` | `string` | `datetime` |
| `minDate` | 最小可选时间戳 | `number` | - 十年前 |
| `maxDate` | 最大可选时间戳 | `number` | - 十年后 |
| `defaultValue` | 默认值 | `number` | - 当前时间 |
| `title` | 顶部标题 | `string` | `'选择日期时间'` |
| `confirmText` | 确认按钮文字 | `string` | `'确定'` |
| `cancelText` | 取消按钮文字 | `string` | `'取消'` |

## Events

| 事件名 | 说明 |
|--------|------|
| `confirm` | 点击确认按钮 | `{ value: number, text: string }` |
| `cancel` | 点击取消按钮 |
| `close` | 弹窗关闭 |

## 示例

### 选择日期

```uvue
<mms-datetime-picker
	v-model:show="show"
	v-model="date"
	mode="date"
	@confirm="confirmDate"
	@cancel="show = false"
></mms-datetime-picker>
```

### 选择时间

```uvue
<mms-datetime-picker
	v-model:show="show"
	v-model="time"
	mode="time"
></mms-datetime-picker>
```
