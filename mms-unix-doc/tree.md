# mms-tree 树形结构

树形结构，用于展示层级菜单、分类列表。

## 使用

```uvue
<template>
	<mms-tree
		:data="treeData"
		:default-expand-keys="defaultExpandKeys"
		@item-click="handleItemClick"
	/>
</template>

<script setup lang="uts">
	const treeData = [
		{
			id: '1',
			label: '一级 1',
			children: [
				{
					id: '1-1',
					label: '二级 1-1',
				}
			]
		}
	]
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `data` | 树形数据 | `array` | `[]` |
| `defaultExpandKeys` | 默认展开的节点 id 数组 | `array` | `[]` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|--------|
| `item-click` | 点击节点触发 | `{ item }` |
| `item-toggle` | 展开/收起节点触发 | `{ item, expanded }` |

## 数据结构

### 节点数据结构

```ts
interface TreeNode {
	id: string | number
	label: string
	children?: TreeNode[]
}
```

## 插槽

| 名称 | 说明 | 参数 |
|------|------|------|
| `item` | 自定义节点内容 | `{ item }` |

## 示例

### 基础树形

```uvue
<mms-tree
	:data="data"
	@item-click="handleClick"
/>
```

### 默认展开某些节点

```uvue
<mms-tree
	:data="data"
	:default-expand-keys="['1', '2']"
/>
```
