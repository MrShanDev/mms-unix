# mms-button 按钮

按钮组件，支持多种样式、尺寸、颜色，支持微信开放能力。

## 使用

```uvue
<template>
	<view>
		<mms-button type="primary" text="确定" @click="handleClick"></mms-button>
	</view>
</template>

<script setup lang="uts">
	const handleClick = () => {
		console.log('点击了按钮')
	}
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `type` | 样式类型，`primary` / `white` / `danger` / `warning` / `green` / `blue` / `gray` / `black` / `brown` | `string` | `primary` |
| `shadow` | 是否显示阴影 | `boolean` | `false` |
| `width` | 宽度，单位 rpx 或 % | `string` | `100%` |
| `height` | 高度，单位 rpx | `string` | - (自动计算) |
| `btnSize` | 预设尺寸 `medium` / `small` / `mini` | `string` | - |
| `size` | 字体大小，单位 rpx | `number` \| `string` | `0` (自动) |
| `bold` | 字体加粗 | `boolean` | `false` |
| `margin` | 外边距 | `string` | `0` |
| `shape` | 形状 `circle` (圆角) / `square` (方形) / `rightAngle` (平角) | `string` | `square` |
| `plain` | 是否空心边框 | `boolean` | `false` |
| `link` | 是否链接样式 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `disabledGray` | 禁用后是否灰色背景 | `boolean` | `false` |
| `loading` | 是否显示加载中 | `boolean` | `false` |
| `formType` | 表单类型 `submit` / `reset` | `string` | - |
| `openType` | 微信开放能力 | `string` | - |
| `appParameter` | openType 额外参数 | `string` | - |
| `preventClick` | 是否防止重复点击 | `boolean` | `false` |
| `index` | 索引 | `number` \| `string` | `0` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|--------|
| `click` | 点击按钮时触发 | `{ index: number }` |
| `getuserinfo` | 获取用户信息 | `detail` |
| `getphonenumber` | 获取手机号 | `detail` |
| `contact` | 打开客服 | `detail` |
| `error` | 错误 | `detail` |
| `chooseavatar` | 选择头像 | `detail` |
| `launchapp` | 打开app | `detail` |

## 类型说明

### type 可选值

| 值 | 说明 |
|-----|------|
| `primary` | 主色调 - 蓝色 |
| `danger` | 危险 - 红色 |
| `warning` | 警告 - 橙色 |
| `green` | 成功 - 绿色 |
| `blue` | 蓝色 |
| `gray` | 灰色 |
| `white` | 白色 |
| `black` | 黑色 |
| `brown` | 棕色 |

### btnSize 预设尺寸

| 值 | 宽度 | 高度 |
|-----|------|------|
| `medium` | 368rpx | 80rpx |
| `small` | 240rpx | 80rpx |
| `mini` | 116rpx | 64rpx |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 按钮文字 |

## 示例

### 主要样式

```uvue
<mms-button type="primary" text="主按钮"></mms-button>
<mms-button type="danger" text="危险按钮"></mms-button>
<mms-button type="warning" text="警告按钮"></mms-button>
<mms-button type="success" text="成功按钮"></mms-button>
```

### 空心按钮

```uvue
<mms-button type="primary" plain text="空心按钮"></mms-button>
```

### 圆角按钮

```uvue
<mms-button type="primary" shape="circle" text="圆角按钮"></mms-button>
```

### 禁用状态

```uvue
<mms-button type="primary" disabled text="禁用按钮"></mms-button>
```

### 加载中

```uvue
<mms-button type="primary" loading text="加载中"></mms-button>
```

### 开放能力 - 获取手机号

```uvue
<mms-button
	type="primary"
	open-type="getphonenumber"
	@getphonenumber="handleGetPhone"
	text="获取手机号"
></mms-button>
```
