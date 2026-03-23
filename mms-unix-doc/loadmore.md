# mms-loadmore 加载更多

列表滚动到底部加载更多提示。

## 使用

```uvue
<template>
	<view>
		<scroll-view scroll-y @scrolltolower="loadMore">
			<!-- 列表内容 -->
			<mms-loadmore :status="status"></mms-loadmore>
		</scroll-view>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `status` | 状态 `loading` / `nomore` / `error` | `string` | `nomore` |
| `loadingText` | 加载中文字 | `string` | `加载中...` |
| `nomoreText` | 没有更多文字 | `string` | `已经到底了` |
| `errorText` | 加载失败文字 | `string` | `加载失败，点击重试` |

## Events

| 事件名 | 说明 |
|--------|------|
| `retry` | 加载失败点击重试 |

## 示例

### 加载中

```uvue
<mms-loadmore status="loading"></mms-loadmore>
```

### 没有更多

```uvue
<mms-loadmore status="nomore"></mms-loadmore>
```

### 加载失败

```uvue
<mms-loadmore status="error" @retry="loadMore"></mms-loadmore>
```
