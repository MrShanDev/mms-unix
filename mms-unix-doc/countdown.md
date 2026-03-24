# mms-countdown 倒计时

倒计时组件，用于获取验证码、活动倒计时等。

## 使用

```uvue
<template>
	<view>
		<mms-countdown
			:time="time"
			:format="HH:mm:ss"
			@finish="handleFinish"
		/>
	</view>
</template>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| `time` | 倒计时秒数 | `number` | `60` |
| `seconds` | 与 `time` 同义；**大于 0 时优先于 `time`**（便于与演示写法一致） | `number` | `0` |
| `format` | 格式化字符串 `DD` 天 `HH` 小时 `mm` 分钟 `ss` 秒（非短信文案模式时） | `string` | `HH:mm:ss` |
| `autoStart` | 是否自动开始 | `boolean` | `true` |
| `type` | `button` 时为带边框底色的块状样式，否则为纯文字 | `string` | `''` |
| `suffix` | 短信倒计时：进行中显示为「剩余秒数 + suffix」，如 `秒后重试` | `string` | `''` |
| `endText` | 短信倒计时：结束后显示；默认可点击重新开始（见 `restartOnTap`） | `string` | `''` |
| `startText` | `autoStart` 为 `false` 且未调用 `start` 时显示的文案 | `string` | `''` |
| `restartOnTap` | 已结束且设置了 `endText` 时，点击是否重新倒计时 | `boolean` | `true` |

## Events

| 事件名 | 说明 |
|--------|------|
| `change` | 倒计时变化时触发，参数含 day、hour、minute、second |
| `finish` | 倒计时结束时触发 |
| `tap` | 组件被点击时触发 |

## Methods

| 方法名 | 说明 |
|--------|------|
| `start` | 开始倒计时 |
| `pause` | 暂停倒计时 |
| `reset` | 重置倒计时 |

## 示例

### 验证码倒计时

```uvue
<template>
	<mms-button
		v-if="countdown <= 0"
		type="primary"
		text="获取验证码"
		@click="sendCode"
	></mms-button>
	<mms-button
		v-else
		disabled
		text="{{ countdown }}s后重新获取"
	></mms-button>
</template>

<script setup lang="uts">
	const countdown = ref(0)
	const countdownRef = ref(null)

	const sendCode = () => {
		// 发送验证码逻辑
		countdown.value = 60
		countdownRef.value.start()
	}

	const handleFinish = () => {
		countdown.value = 0
	}
</script>
```
