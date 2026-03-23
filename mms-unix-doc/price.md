# mms-price 价格展示

价格展示组件，支持符号、小数缩小。

## 使用

```uvue
<template>
	<view>
		<mms-price :price="199.00"></mms-price>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `price` | 价格数值 | `number` \| `string` | `0.00` |
| `symbol` | 货币符号 | `string` | `¥` |
| `small` | 是否小数部分缩小 | `boolean` | `true` |
| `color` | 文字颜色 | `string` | `#303133` |

## 示例

### 基础用法

```uvue
<mms-price price="199.00"></mms-price>
```

### 不缩小小数

```uvue
<mms-price price="99.00" :small="false"></mms-price>
