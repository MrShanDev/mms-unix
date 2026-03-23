# mms-row 栅格行

栅格布局系统，和 `mms-col` 配合使用，总共 24 栅格。

## 使用

```uvue
<template>
	<mms-row :gutter="20">
		<mms-col :span="12">
			<view>
				<text> 一半宽度 </text>
			</view>
		</mms-col>
		<mms-col :span="12">
			<view>
				<text> 一半宽度 </text>
			</view>
		</mms-col>
	</mms-row>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `gutter` | 栅格间距，单位 rpx | `number` | `0` |

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 列内容 |

## 示例

### 间隔 20rpx

```uvue
<mms-row :gutter="20">
	<mms-col :span="12"><view>左</view></mms-col>
	<mms-col :span="12"><view>右</view></mms-col>
</mms-row>
```

### 无间隔

```uvue
<mms-row>
	<mms-col :span="12"><view>左</view></mms-col>
	<mms-col :span="12"><view>右</view></mms-col>
</mms-row>
```
