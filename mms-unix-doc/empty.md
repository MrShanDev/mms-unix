# mms-empty 空状态

空状态时的占位提示，用于列表为空、没有数据等场景。

## 使用

```uvue
<template>
	<mms-empty description="暂无数据"></mms-empty>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `image` | 自定义图片 URL | `string` | 默认图片 |
| `description` | 文字说明 | `string` | `暂无数据` |
| `paddingTop` | 图片距离顶部距离，单位 rpx | `number` | `200` |

## 插槽

| 名称 | 说明 |
|------|------|
| `icon` | 自定义图标插槽（替换默认图片） |
| `default` | 底部内容，一般放按钮 |

## 示例

### 基础用法

```uvue
<mms-empty description="暂无合同数据"></mms-empty>
```

### 自定义图片

```uvue
<mms-empty
	description="暂无数据"
	image="https://example.com/empty.png"
></mms-empty>
```

### 底部按钮

```uvue
<mms-empty description="暂无数据">
	<mms-button type="primary" text="去添加"></mms-button>
</mms-empty>
```
