# mms-col 栅格列

栅格布局系统，和 `mms-row` 配合使用，总共 24 栅格。

## 演示

- 路径：`pages_demo/row/row`（与 `mms-row` 同页）

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
| `span` | 栅格占据的列数，总共 24 | `number` | `24` |
| `offset` | 左侧偏移列数 | `number` | `0` |
| `width` | 自定义宽度 | `number` \| `string` | - |
| `padding` | 左右内边距（rpx 数值或带 `rpx`/`px` 的字符串）；与父行 `gutter` 同时使用时，常设为 gutter 的一半 | `number` \| `string` | - |

## Events

无。

## 插槽

| 名称 | 说明 |
|------|------|
| `default` | 列内容 |

## 示例

### 三栏等宽

```uvue
<mms-row :gutter="10">
	<mms-col :span="8"><view>1/3</view></mms-col>
	<mms-col :span="8"><view>1/3</view></mms-col>
	<mms-col :span="8"><view>1/3</view></mms-col>
</mms-row>
```

### 不等宽

```uvue
<mms-row :gutter="20">
	<mms-col :span="6"><view>1/4</view></mms-col>
	<mms-col :span="18"><view>3/4</view></mms-col>
</mms-row>
```

### 偏移

```uvue
<mms-row :gutter="20">
	<mms-col :span="6" :offset="6">
		<view> 偏移 6 列 </view>
	</mms-col>
</mms-row>
```
