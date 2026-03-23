# mms-sticky-bottom 粘性底部

固定在窗口底部，适配 iPhone 安全区域。

## 使用

```uvue
<template>
	<view>
		<mms-sticky-bottom>
			<mms-button type="primary" text="提交"></mms-button>
		</mms-sticky-bottom>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `zIndex` | 层级 | `number` | `998` |
| `safeAreaInsetBottom` | 是否适配底部安全区域 | `boolean` | `true` |
| `bgColor` | 背景颜色 | `string` | `#ffffff` |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 底部内容 |

## 示例

### 按钮放在粘性底部

```uvue
<mms-sticky-bottom>
	<mms-button type="primary" text="确认提交" @click="submit"></mms-button>
</mms-sticky-bottom>
```

### 自定义背景色

```uvue
<mms-sticky-bottom bgColor="#f5f5f5">
	<mms-button type="primary" text="确认提交"></mms-button>
</mms-sticky-bottom>
```
