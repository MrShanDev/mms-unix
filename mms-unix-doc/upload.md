# mms-upload 图片上传

多图上传组件，支持预览、删除。

## 使用

```uvue
<template>
	<view>
		<mms-upload
			v-model:files="files"
			maxCount="9"
			@delete="handleDelete"
			@choose="handleChoose"
		></mms-upload>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `files` | 已上传文件列表 `{ url: string }[]` | `any[]` | `[]` |
| `maxCount` | 最多选择图片数量 | `number` | `9` |
| `count` | 每次选择数量 | `number` | `9` |
| `sizeType` | 图片尺寸 `original` / `compressed` | `string[]` | `['original', 'compressed']` |
| `sourceType` | 选择来源 `album` / `camera` | `string[]` | `['album', 'camera']` |

## Events

| 事件名 | 说明 |
|--------|------|
| `update:files` | 文件列表变化 |
| `choose` | 选择图片完成 | `{ tempFiles: any[] }` |
| `delete` | 删除图片 | `{ index: number, file: any }` |

## 示例

### 基础用法

```uvue
<template>
	<mms-upload
		v-model:files="files"
		:max-count="6"
		@choose="onChoose"
	>
	</mms-upload>
</template>

<script setup lang="uts">
	const files = ref([{ url: 'https://example.com/image1.jpg' }])
	const onChoose = ({ tempFiles }) => {
		// 上传到服务器，之后把返回的 url 添加到 files 中
		uni.uploadFile({
			url: 'https://xxx/upload',
			filePath: tempFiles[0].path,
			name: 'file',
			success: (res) => {
				// 处理返回结果，添加 url 到 files
				files.value.push({ url: data.url })
			}
		})
	}
</script>
```

## 说明

需要手动处理上传逻辑，组件只负责选择和展示。
