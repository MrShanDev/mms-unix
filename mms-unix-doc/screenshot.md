# mms-screenshot 截图

截图组件，用于截取页面生成图片。

## 使用

```uvue
<template>
	<view>
		<mms-screenshot ref="screenshot">
			<view class="content">
				<!-- 需要截图的内容 -->
			</view>
		</mms-screenshot>
		<mms-button @click="handleScreenshot">点击截图</mms-button>
	</view>
</template>

<script setup lang="uts">
	import { ref } from 'vue'
	const screenshot = ref(null)

	const handleScreenshot = () => {
		screenshot.value.capture().then(res => {
			console.log('截图成功', res.tempFilePath)
		}).catch(err => {
			console.error('截图失败', err)
		})
	}
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `quality` | 图片质量 0-1 | `number` | `0.8` |
| `delay` | 延迟截图，单位 ms | `number` | `200` |

## Methods

| 方法名 | 说明 | 返回 |
|--------|------|------|
| `capture()` | 开始截图 | `Promise<{ tempFilePath: string }>` |

## 示例

### 基础截图

```uvue
<mms-screenshot ref="screenshot">
	<view>
		<text>需要截图的内容</text>
	</view>
</mms-screenshot>

<mms-button type="primary" text="截图" @click="capture"></mms-button>
```

## 说明

基于 uni-app `uni.canvasToTempFilePath` 思路实现，uni-app-x 环境下使用 canvas 截图。
