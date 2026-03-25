# mms-input 单行输入

基于 uni-app `input` 封装的表单单行输入，提供左侧标题、必填标记、清除按钮、分割线样式与底部错误文案等常见能力，风格与 `mms-search` 等本库组件一致。

> 说明：本组件为 MMS-UNIX 自研实现，API 设计参考常见表单输入交互习惯；请勿与第三方商业组件混用或逐字对照外部文档，以免产生授权风险。

## 使用

```uvue
<template>
	<mms-input
		v-model="name"
		label="姓名"
		placeholder="请输入姓名"
		:clearable="true"
	/>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `modelValue` | 双向绑定值 | `string` | `''` |
| `label` | 左侧标题；空字符串则不展示标题区 | `string` | `''` |
| `required` | 是否显示必填红色星号 | `boolean` | `false` |
| `requiredColor` | 星号颜色 | `string` | `#EB0909` |
| `labelSize` | 标题字号（rpx） | `number \| string` | `32` |
| `labelColor` | 标题颜色 | `string` | `#333333` |
| `labelWidth` | 标题最小宽度（rpx） | `number \| string` | `140` |
| `placeholder` | 占位符 | `string` | `''` |
| `placeholderStyle` | 占位符样式字符串；空则按字号与 `placeholderColor` 生成 | `string` | `''` |
| `placeholderColor` | 占位符颜色 | `string` | `#c0c4cc` |
| `name` | 原生 `name` | `string` | `''` |
| `type` | 原生 `type`（如 `text`、`number`、`digit` 等，以平台支持为准） | `string` | `text` |
| `password` | 是否密码 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `maxlength` | 最大长度；`-1` 表示不限制（内部用大值透传） | `number \| string` | `140` |
| `clearable` | 是否显示清除按钮 | `boolean` | `false` |
| `clearSize` | 清除图标尺寸（rpx） | `number \| string` | `30` |
| `clearColor` | 清除图标颜色 | `string` | `#bfbfbf` |
| `confirmType` | 键盘右下角按钮类型 | `string` | `done` |
| `cursorSpacing` | 光标与键盘距离（px） | `number` | `0` |
| `size` | 输入文字字号（rpx） | `number \| string` | `32` |
| `color` | 输入文字颜色 | `string` | `#333333` |
| `textRight` | 输入是否右对齐 | `boolean` | `false` |
| `trim` | 失焦时是否去除首尾空格并回写 | `boolean` | `true` |
| `borderTop` | 是否显示顶部分割线 | `boolean` | `false` |
| `borderBottom` | 是否显示底部分割线 | `boolean` | `true` |
| `borderColor` | 分割线颜色；`inputBorder` 为 true 时同时作为输入框描边色 | `string` | `rgba(0,0,0,0.08)` |
| `backgroundColor` | 行背景色 | `string` | `#FFFFFF` |
| `padding` | 行内边距 | `string` | `26rpx 30rpx` |
| `radius` | 行圆角（rpx），`0` 为直角 | `number \| string` | `0` |
| `inputBorder` | 是否为输入区域增加描边与内边距 | `boolean` | `false` |
| `error` | 底部错误提示文案；空则不展示 | `string` | `''` |
| `marginTop` | 与上一块的间距（rpx） | `number \| string` | `0` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:modelValue` | `v-model` 更新 | 当前字符串 |
| `input` | 输入变化（与 `update:modelValue` 同步触发） | 当前字符串 |
| `focus` | 聚焦 | 原生事件 |
| `blur` | 失焦 | 原生事件 |
| `confirm` | 键盘完成 | 当前字符串 |
| `clear` | 点击清除 | `''` |

## 插槽

| 名称 | 说明 |
|------|------|
| `left` | 标题与输入框之间（如前置图标） |
| `right` | 清除按钮左侧（如后缀单位） |

## 与 mms-search 的区别

| 场景 | 建议组件 |
|------|----------|
| 列表页顶部搜索、带搜索按钮/取消 | `mms-search` |
| 表单里带标题、必填、校验提示的单行输入 | `mms-input` |
| 多行说明、简介、备注等 | [`mms-textarea`](./textarea.md) |

---

## mms-form 表单分组容器

用于把多条 `mms-input`（或其它表单项）包在统一白底、圆角容器内，便于与页面灰底背景区分。

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `title` | 顶部标题；空则不显示 | `string` | `''` |
| `backgroundColor` | 背景色 | `string` | `#FFFFFF` |
| `radius` | 圆角（rpx） | `number \| string` | `16` |
| `marginX` | 与屏幕左右边距（rpx） | `number \| string` | `24` |
| `padding` | 容器内边距 | `string` | `0` |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 表单项内容 |

### 示例

```uvue
<mms-form title="基本信息" padding="0">
	<mms-input v-model="name" label="姓名" :clearable="true" />
	<mms-input v-model="phone" label="手机" type="number" :borderBottom="false" />
</mms-form>
```

更多交互见演示页：`/pages_demo/form/form`。
