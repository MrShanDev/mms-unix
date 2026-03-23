# mms-wx-login 微信登录

微信小程序一键登录按钮组件。

## 使用

```uvue
<template>
	<view>
		<mms-wx-login
			type="code"
			text="微信一键登录"
			@success="handleSuccess"
			@fail="handleFail"
		></mms-wx-login>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `text` | 按钮文字 | `string` | `微信一键登录` |
| `type` | 登录类型 `code` 获取code / `userInfo` 获取用户信息 | `string` | `code` |

## Events

| 事件名 | 说明 | 回调 |
|--------|------|------|
| `login` | 点击按钮时触发 | - |
| `success` | 获取成功 | `type=code` 返回 `{ code }`，`type=userInfo` 返回 `{ userInfo }` |
| `fail` | 获取失败 | `err` 错误信息 |

## 示例

### 获取code（推荐）

```uvue
<mms-wx-login
	type="code"
	text="微信一键登录"
	@success="onLoginSuccess"
></mms-wx-login>

<script setup lang="uts">
	const onLoginSuccess = ({ code }) => {
		// 将code发送给后端，换取openId/会话
		console.log('code', code)
	}
</script>
```

### 获取用户信息

```uvue
<mms-wx-login
	type="userInfo"
	text="获取微信头像昵称"
	@success="onGetUserInfo"
></mms-wx-login>
```

## 说明

- 仅在微信小程序环境生效
- 需要在微信公众平台配置服务器域名
- 推荐使用 `code` 类型，后端拿code换取session，更安全
