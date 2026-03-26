# mms-picker 联动选择器

底部弹出的 `picker-view` 级联选择，支持 **1～3 列**、树形 `pickerData`（或旧名 `tree`），确认后返回每列的 **文案** 与 **value**。

> **自研说明**：本组件为 MMS-UNIX 自研；请勿与外部未授权商业组件源码混用或逐字对照非本库文档，以免授权风险。

> 超过 3 级的数据请使用本库 `mms-cascade-selection` 等方案分段选择。

## 使用

```uvue
<template>
	<mms-button @click="show = true">选择省市</mms-button>
	<mms-picker
		:show="show"
		:pickerData="cityData"
		:layer="2"
		title="选择地区"
		confirmColor="#ff0844"
		@update:show="show = $event"
		@confirm="onConfirm"
	/>
</template>
```

小程序端若对自定义组件的 `v-model:show` 支持不完整，请使用 `:show` + `@update:show` 自行同步（与演示页一致）。

## 数据格式

每项为对象，默认字段：

| 字段 | 说明 |
|------|------|
| `text` | 展示文案（可用 `textField` / `textKey` 改名） |
| `value` | 业务值（可用 `valueField` / `valueKey` 改名） |
| `children` | 子级数组（可用 `childrenField` / `childrenKey` 改名） |

- **单列**：`pickerData` 为一维数组，无 `children` 或子级为空。  
- **多列**：父级带 `children`，列数由 **`layer`** 决定（与数据实际深度可不一致，缺列时用占位 `-`）。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `show` | 是否显示 | `boolean` | `false` |
| `pickerData` | 数据源；非空时优先于 `tree` | `array` | `[]` |
| `tree` | 与 `pickerData` 相同含义的旧名 | `array` | `[]` |
| `layer` | 列数 1～3 | `number \| string` | `3` |
| `textKey` / `textField` | 展示字段名，`textField` 非空时优先 | `string` | `text` / `''` |
| `valueKey` / `valueField` | 取值字段名，`valueField` 非空时优先 | `string` | `value` / `''` |
| `childrenKey` / `childrenField` | 子节点字段名 | `string` | `children` / `''` |
| `title` | 顶部中间标题 | `string` | `''` |
| `titleSize` | 标题字号（rpx） | `number \| string` | `32` |
| `titleColor` | 标题颜色 | `string` | `#333333` |
| `cancelText` / `confirmText` | 两侧按钮文案 | `string` | `取消` / `确定` |
| `cancelColor` / `confirmColor` | 按钮颜色 | `string` | `#888888` / `#5677fc` |
| `btnSize` | 按钮字号（rpx） | `number \| string` | `30` |
| `maskClosable` | 点击遮罩是否关闭 | `boolean` | `true` |
| `showMask` | 是否显示遮罩 | `boolean` | `true` |
| `zIndex` | 面板 z-index（遮罩为 zIndex-1） | `number` | `10002` |
| `indicatorStyle` | 选中行指示条样式（透传 picker-view） | `string` | `height: 50px;` |
| `backgroundColor` | 面板背景色 | `string` | `#ffffff` |
| `itemColor` / `itemSize` | 选项文字颜色、字号（rpx） | `string` / `number \| string` | `#333333` / `30` |
| `params` | 自定义透传，会出现在 `hide` 与确认结果的 `params` 中 | `number \| string` | `0` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:show` | 关闭时（确定、取消、可关闭的遮罩） | `false` |
| `confirm` | 点击确定 | 见下表「确认载荷」 |
| `change` | 与 `confirm` 同时触发，载荷相同 | 同 `confirm` |
| `cancel` | 点击取消或可关闭遮罩关闭 | - |
| `hide` | 取消或遮罩关闭时 | `{ params }` |
| `columnchange` | 某一列滚动导致联动重置 | `{ column, value }` |

### 确认载荷（`confirm` / `change`）

| 字段 | 说明 |
|------|------|
| `labels` | 各列选中文案 `string[]`，长度与 `layer` 一致（缺数据时可能含空串） |
| `values` | 各列选中 value 转成的 `string[]` |
| `nodes` | 选中的节点对象数组 |
| `indices` | 各列选中下标 |
| `value` | 与 `indices` 相同（兼容旧习惯） |
| `params` | 即 props `params` |

## 演示路径

- `/pages_demo/ext/picker/picker`：单列 / 双列 / 三级示例  
- `/pages_demo/form/form`：资料登记「地区」双列选择  

## 与 mms-datetime-picker 的区别

| 场景 | 建议 |
|------|------|
| 日期、时间 | `mms-datetime-picker` |
| 自定义树形字典（省市区、分类等） | `mms-picker` |
