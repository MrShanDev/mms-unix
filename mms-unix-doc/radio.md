# mms-radio / mms-radio-group 单项选择

`mms-radio-group` 与 `mms-radio` 配合使用，在一组互斥选项中选中一项，通过 `v-model` 绑定当前选中项的 `value`（字符串）。实现为本库自研，与常见单选交互一致；请勿与第三方商业组件源码混用。

## 使用

```uvue
<template>
	<mms-radio-group v-model="payType" name="payType" direction="row">
		<mms-radio value="wx">
			<text>微信支付</text>
		</mms-radio>
		<mms-radio value="ali">
			<text>支付宝</text>
		</mms-radio>
	</mms-radio-group>
</template>
```

**注意**：`mms-radio` 必须放在 `mms-radio-group` 内；`value` 建议为非空字符串，并与 `modelValue` 严格相等才会显示为选中。

## mms-radio-group

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `modelValue` | 当前选中的 `mms-radio` 的 `value` | `string` | `''` |
| `name` | 字段名（便于业务语义，不参与原生 form 提交） | `string` | `''` |
| `disabled` | 整组禁用 | `boolean` | `false` |
| `color` | 子项未单独设置 `color` 时的默认选中填充色 | `string` | `''`（子项内默认 `#5677fc`） |
| `borderColor` | 子项未单独设置 `borderColor` 时的默认边框色 | `string` | `''`（子项内默认 `#cccccc`） |
| `direction` | `column` 纵向 / `row` 横向 | `string` | `column` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:modelValue` | `v-model` 更新 | 选中的 `value` |
| `input` | 与 `update:modelValue` 同步触发 | 选中的 `value` |
| `change` | 选中项变化 | 选中的 `value` |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 多个 `mms-radio` |

## mms-radio

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 选项值，选中时写入 group 的 `modelValue` | `string` | `''` |
| `disabled` | 单项禁用（组 `disabled` 为 true 时全部禁用） | `boolean` | `false` |
| `color` | 选中填充色；`checkOnly` 时为对号颜色 | `string` | `''`（继承组或 `#5677fc`） |
| `borderColor` | 未选中时的描边颜色 | `string` | `''`（继承组或 `#cccccc`） |
| `checkMarkColor` | 实心圆内对号颜色 | `string` | `#ffffff` |
| `size` | 圆（或对号区）尺寸，rpx | `number \| string` | `40` |
| `scale` | 图标区域整体缩放倍数 | `number \| string` | `1` |
| `checkOnly` | 为 true 时选中仅显示对号，无实心圆填充 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `click` | 点击且成功切换选中时 | 当前项 `value` |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 选项文案（如图标 + 文字） |

## 与表单组合

可与 `mms-form`、`mms-input` 同页使用。演示见：

- `/pages_demo/form/form`：资料登记中的「性别」行  
- `/pages_demo/radio/radio`：单选能力分项示例  

## 与 mms-segmented-control 的区别

| 场景 | 建议 |
|------|------|
| 分段切换、文案短、条状 UI | `mms-segmented-control` |
| 表单问卷、带自定义文案/禁用项、圆形单选视觉 | `mms-radio-group` + `mms-radio` |
