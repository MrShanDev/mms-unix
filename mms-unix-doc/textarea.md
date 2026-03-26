# mms-textarea 多行输入

基于 uni-app `textarea` 封装的表单多行输入，在 `mms-input` 的布局语言上提供固定高度 / 自动增高、字数统计、边框模式与 `flexStart` 顶端对齐等能力。

> **自研说明**：本组件为 MMS-UNIX 自研；请勿与外部未授权商业组件源码混用或逐字对照非本库文档，以免授权风险。

## 使用

```uvue
<template>
	<mms-textarea
		v-model="intro"
		label="简介"
		:flexStart="true"
		:isCounter="true"
		:maxlength="200"
		placeholder="请输入简介"
		height="200rpx"
		minHeight="200rpx"
	/>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `modelValue` | 双向绑定值 | `string` | `''` |
| `label` | 左侧标题；空则不展示标题区 | `string` | `''` |
| `required` | 是否显示必填星号 | `boolean` | `false` |
| `requiredColor` | 星号颜色 | `string` | `#EB0909` |
| `requiredTop` | `flexStart` 为 true 时星号下移量（rpx），与首行文字对齐 | `number \| string` | `32` |
| `labelSize` | 标题字号（rpx） | `number \| string` | `32` |
| `labelColor` | 标题颜色 | `string` | `#333333` |
| `labelWidth` | 标题最小宽度（rpx） | `number \| string` | `140` |
| `placeholder` | 占位符 | `string` | `''` |
| `placeholderStyle` | 占位符样式字符串；空则按 `size` 与 `placeholderColor` 生成 | `string` | `''` |
| `placeholderColor` | 占位符颜色（写入 `placeholder-style`） | `string` | `#c0c4cc` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `maxlength` | 最大长度；`-1` 表示不限制（内部用大值透传） | `number \| string` | `500` |
| `autoHeight` | 是否随内容自动增高；为 true 时不使用固定 `height` | `boolean` | `false` |
| `fixed` | 在 `position: fixed` 区域内使用时建议设为 true（同官方） | `boolean` | `false` |
| `focus` | 是否聚焦 | `boolean` | `false` |
| `cursorSpacing` | 光标与键盘距离（px） | `number` | `0` |
| `showConfirmBar` | 是否显示键盘上方「完成」栏 | `boolean` | `true` |
| `adjustPosition` | 键盘弹起时是否上推页面 | `boolean` | `true` |
| `holdKeyboard` | focus 时点击页面不收起键盘 | `boolean` | `false` |
| `confirmType` | 键盘右下角按钮类型 | `string` | `done` |
| `height` | 固定高度（`autoHeight` 为 false 时），如 `200rpx` | `string` | `200rpx` |
| `minHeight` | 最小高度 | `string` | `200rpx` |
| `flexStart` | 标题与输入区顶端对齐（多行推荐） | `boolean` | `false` |
| `size` | 正文字号（rpx） | `number \| string` | `32` |
| `color` | 正文颜色 | `string` | `#333333` |
| `textRight` | 文本右对齐 | `boolean` | `false` |
| `trim` | 失焦时是否去除首尾空格并回写 | `boolean` | `true` |
| `borderTop` | 是否显示顶部分割线 | `boolean` | `false` |
| `borderBottom` | 是否显示底部分割线 | `boolean` | `true` |
| `borderColor` | 分割线颜色；`textareaBorder` 为 true 时兼为描边色 | `string` | `rgba(0,0,0,0.08)` |
| `backgroundColor` | 行背景色 | `string` | `#FFFFFF` |
| `padding` | 行内边距 | `string` | `26rpx 30rpx` |
| `radius` | 行圆角（rpx） | `number \| string` | `0` |
| `textareaBorder` | 是否为输入区增加描边与内边距 | `boolean` | `false` |
| `textareaRadius` | 边框模式下输入区圆角（rpx） | `number \| string` | `8` |
| `error` | 底部错误提示 | `string` | `''` |
| `marginTop` | 与上一块的间距（rpx） | `number \| string` | `0` |
| `isCounter` | 是否显示右下角字数统计 | `boolean` | `false` |
| `counterColor` | 计数文字颜色 | `string` | `#999999` |
| `counterSize` | 计数字号（rpx） | `number \| string` | `28` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:modelValue` | `v-model` 更新 | 当前字符串 |
| `input` | 输入变化 | 当前字符串 |
| `focus` | 聚焦 | 原生事件 |
| `blur` | 失焦 | 原生事件 |
| `confirm` | 键盘完成 | 当前字符串 |
| `linechange` | 行高变化（同官方） | 原生事件 |

## 插槽

| 名称 | 说明 |
|------|------|
| `left` | 标题与输入区之间 |
| `right` | 输入区右侧 |

## 与 mms-input 的配合

- 单行用 `mms-input`，多行用 `mms-textarea`。  
- 二者均可放在 `mms-form` 内，视觉与分割线风格一致。  

演示：

- `/pages_demo/textarea/textarea`：多行能力分项示例  
- `/pages_demo/form/form`：资料登记中的「备注」多行  

## 平台说明

为兼容微信小程序端 `textarea` 能力，占位符颜色通过 `placeholder-style` 传入，未使用部分端不支持的 `placeholder-color` 属性；亦未向原生节点绑定 `name`（自定义组件场景下意义有限）。若业务强依赖字段名，请在业务层自行维护。
