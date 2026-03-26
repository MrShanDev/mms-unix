# mms-switch 开关

布尔开关：默认使用系统原生 `switch`（各端一致的手势与无障碍表现）；可选 `type="checkbox"` 时使用本库自绘方框样式，便于与 `mms-checkbox` 视觉统一。

> **自研说明**：本组件为 MMS-UNIX 自研；请勿与外部未授权商业组件源码混用或逐字对照非本库文档，以免授权风险。

## 使用

```uvue
<template>
	<view class="row">
		<text>接收推送</text>
		<mms-switch v-model="pushOn" color="#07c160" />
	</view>
</template>
```

`v-model` 绑定 **`boolean`**。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `modelValue` | 是否打开 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `type` | `switch`：原生滑块；`checkbox`：自绘方框勾选 | `string` | `switch` |
| `color` | 打开态主色（透传原生 `color` / 方块填充） | `string` | `''`（内部 `#5677fc`） |
| `borderColor` | 仅 `checkbox`：未选中边框色 | `string` | `#cccccc` |
| `checkMarkColor` | 仅 `checkbox`：对号颜色 | `string` | `#ffffff` |
| `size` | 仅 `checkbox`：边长（rpx） | `number \| string` | `44` |
| `scale` | 整体缩放倍数 | `number \| string` | `1` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:modelValue` | `v-model` 更新 | `boolean` |
| `change` | 状态变化 | `boolean` |
| `input` | 与 `change` 同步，便于习惯 `input` 的表单场景 | `boolean` |

## 与表单组合

与 `mms-form`、行内 `label + 控件` 布局一起使用即可。演示：

- `/pages_demo/form/form`：资料登记中的「短信通知」  
- `/pages_demo/switch/switch`：滑块 / 颜色 / 缩放 / 禁用 / checkbox 样式  

## 平台说明

`type="switch"` 时外观以**系统原生**为准，不同 OS/小程序主题下轨道与滑块尺寸可能略有差异；`color` 在支持的端上作用于打开态强调色。`type="checkbox"` 为纯 `view` 绘制，跨端观感更一致。
