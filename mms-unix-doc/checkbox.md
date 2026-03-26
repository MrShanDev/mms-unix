# mms-checkbox / mms-checkbox-group 多项选择

`mms-checkbox-group` 与 `mms-checkbox` 配合使用，可在同一组内多选；`v-model` 绑定值为**字符串数组**（各选中项的 `value`）。

> **自研说明**：本组件为 MMS-UNIX 自研；请勿与外部未授权商业组件源码混用或逐字对照非本库文档，以免授权风险。

## 使用

```uvue
<template>
	<mms-checkbox-group v-model="hobbies" name="hobbies" direction="row">
		<mms-checkbox value="read">
			<text>阅读</text>
		</mms-checkbox>
		<mms-checkbox value="sport">
			<text>运动</text>
		</mms-checkbox>
	</mms-checkbox-group>
</template>
```

**注意**：组内使用时 `mms-checkbox` 必须放在 `mms-checkbox-group` 内；每项 `value` 建议为非空字符串，且在组内唯一，便于与 `modelValue` 比较。

## mms-checkbox-group

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `modelValue` | 当前选中的 `value` 列表 | `string[]` | `[]` |
| `name` | 字段名（便于业务语义，不参与原生 form 提交） | `string` | `''` |
| `disabled` | 整组禁用 | `boolean` | `false` |
| `color` | 子项未单独设置 `color` 时的默认选中填充色 | `string` | `''`（子项内默认 `#5677fc`） |
| `borderColor` | 子项未单独设置 `borderColor` 时的默认边框色 | `string` | `''`（子项内默认 `#cccccc`） |
| `direction` | `column` 纵向 / `row` 横向 | `string` | `column` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:modelValue` | `v-model` 更新 | `string[]` |
| `input` | 与 `update:modelValue` 同步触发 | `string[]` |
| `change` | 选中集合变化 | `string[]` |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 多个 `mms-checkbox` |

## mms-checkbox

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `value` | 选项值；组内选中时写入 `modelValue`；独立使用时参与 `change` 回调 | `string` | `''` |
| `disabled` | 单项禁用（组 `disabled` 为 true 时全部禁用） | `boolean` | `false` |
| `checked` | **仅独立使用**：是否选中；建议 `:checked` + `@update:checked` 双向绑定（各端兼容） | `boolean` | `false` |
| `color` | 选中填充色；`checkOnly` 时为对号颜色 | `string` | `''`（继承组或 `#5677fc`） |
| `borderColor` | 未选中时的描边颜色 | `string` | `''`（继承组或 `#cccccc`） |
| `checkMarkColor` | 填充框内对号颜色 | `string` | `#ffffff` |
| `size` | 方框（或对号区）边长，rpx | `number \| string` | `40` |
| `scale` | 图标区域整体缩放倍数 | `number \| string` | `1` |
| `checkOnly` | 为 true 时选中仅显示对号，无填充底 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:checked` | 独立使用时切换选中 | `boolean` |
| `change` | 独立使用时选中状态变化 | `{ checked: boolean, value: string }` |
| `click` | 点击且状态已切换（组内为切换后的该项 `value`） | `string` |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 选项文案（如图标 + 文字） |

## 独立使用（无 group）

适用于协议勾选等单布尔场景：

```uvue
<mms-checkbox :checked="agree" value="1" @update:checked="agree = $event">
	<text>我已阅读并同意</text>
</mms-checkbox>
```

在部分小程序端自定义组件对 `v-model:checked` 支持不完整，推荐显式 `:checked` + `@update:checked`。也可监听 `@change` 自行维护状态。

## 与表单组合

可与 `mms-form`、`mms-input`、`mms-radio-group` 同页使用。演示见：

- `/pages_demo/form/form`：资料登记中的「爱好」多选  
- `/pages_demo/checkbox/checkbox`：多选能力分项示例  

## 与 mms-radio-group 的区别

| 场景 | 建议 |
|------|------|
| 互斥单选 | `mms-radio-group` + `mms-radio`，`v-model` 为单个 `string` |
| 多选、零项或多项 | `mms-checkbox-group` + `mms-checkbox`，`v-model` 为 `string[]` |
