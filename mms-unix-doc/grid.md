# mms-grid 宫格

九宫格布局，常用于首页金刚区导航。

## 使用

```uvue
<template>
	<mms-grid
		:col="4"
		:list="gridList"
		@click="handleClick"
	/>
</template>

<script setup lang="uts">
	const gridList = [
		{ icon: 'xxx', text: '导航一' },
		{ icon: 'xxx', text: '导航二' },
		{ icon: 'xxx', text: '导航三' },
		{ icon: 'xxx', text: '导航四' },
	]
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `col` | 宫格列数 | `number` | `4` |
| `list` | 宫格数据 | `array` | `[]` |
| `square` | 是否固定正方形 | `boolean` | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|--------|
| `click` | 点击宫格项触发 | `{ item, index }` |

## 插槽

| 名称 | 说明 |
|------|------|
| `item` | 自定义宫格项内容 | 参数：`{ item, index }` |

## 示例

### 四列宫格

```uvue
<mms-grid :col="4" :list="list" @click="handleClick"></mms-grid>
```

### 五列宫格 正方形

```uvue
<mms-grid :col="5" :square="true" :list="list" @click="handleClick"></mms-grid>
```

### 自定义宫格项

```uvue
<mms-grid :col="4" :list="list">
	<template #item="{item}">
		<view>
			<image :src="item.icon"></image>
			<text>{{item.text}}</text>
		</view>
	</template>
</mms-grid>
```
