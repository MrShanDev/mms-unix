# mms-countdown-verify 验证码倒计时

短信/邮箱等「获取验证码」按钮：**点击后**由业务请求接口，**成功后在父级递增 `successTick`** 即开始本地倒计时；支持 **重置**、**挂载即倒计时**、样式与 `mms-input` 右侧插槽组合。

> **自研说明**：本组件为 MMS-UNIX 自研；请勿与外部未授权商业组件源码混用或逐字对照非本库文档，以免授权风险。

## 使用流程

1. 用户点击 → 组件 `send` 事件，父级调发送验证码接口。  
2. 接口成功 → 父级执行 `successTick++`（或任意大于历史值的正整数递增）。  
3. 组件开始 `seconds` 秒倒计时；期间不可再点。  
4. 倒计时结束 → `end` 事件。  
5. 若发送失败或校验未通过 → 父级递增 **`resetTick`**，恢复可点（并清除等待态）。  

点击后若长时间未递增 `successTick`，组件会在 **`sendTimeoutMs`**（默认 30s）后自动结束「请稍候…」等待，避免卡死。

## 与 mms-input 组合

```uvue
<mms-input v-model="phone" label="手机" type="number" :clearable="true">
	<template #right>
		<mms-countdown-verify
			:successTick="smsOk"
			:resetTick="smsReset"
			color="#ff0844"
			borderColor="#ff0844"
			@send="onSendSms"
		/>
	</template>
</mms-input>
```

演示：`/pages_demo/form/form`（资料登记手机号行）、`/pages_demo/smsCountdown/smsCountdown`（H5 等端对带连字符路径可能未注册路由，演示页使用驼峰目录名）。

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `text` | 可点击时的文案 | `string` | `获取验证码` |
| `sendText` | 已点击、等待 `successTick` 时的文案 | `string` | `请稍候...` |
| `countdownSuffix` | 接在剩余秒数后的文案，如 `s后重新获取` → `59s后重新获取` | `string` | `s后重新获取` |
| `seconds` | 倒计时秒数 | `number` | `60` |
| `successTick` | 发送成功后由父级递增；大于上次记录且 `>0` 时开始倒计时 | `number` | `0` |
| `resetTick` | 由父级递增以立即恢复初始可点状态 | `number` | `0` |
| `start` | 为 `true` 时挂载后立即开始倒计时（无需先点发送） | `boolean` | `false` |
| `disabled` | 外部禁用 | `boolean` | `false` |
| `width` / `height` | 区域宽高 | `string` | `182rpx` / `56rpx` |
| `padding` / `margin` | 内边距、外边距 | `string` | `0` |
| `radius` | 圆角（rpx） | `number \| string` | `6` |
| `size` | 字号（rpx） | `number \| string` | `24` |
| `color` | 文字颜色 | `string` | `#5677fc` |
| `background` | 背景色 | `string` | `transparent` |
| `borderWidth` / `borderColor` | 边框 | `string` | `1rpx` / `#5677fc` |
| `countdownOpacity` | 倒计时中是否降低整体不透明度 | `boolean` | `true` |
| `hover` | 是否保留点击态弱反馈 | `boolean` | `true` |
| `sendTimeoutMs` | 点击后等待 `successTick` 的超时（毫秒），`0` 表示不超时 | `number` | `30000` |
| `params` | 透传到各事件回调 | `number \| string` | `0` |

## Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `send` | 用户点击且当前可发送 | `{ params }` |
| `countdown` | 每秒一次（含刚进入倒计时的首帧） | `{ seconds: 剩余秒数, params }` |
| `end` | 倒计时到 0 | `{ params }` |

## 与 mms-countdown 的区别

| 场景 | 建议 |
|------|------|
| 通用倒计时展示、活动结束时间 | `mms-countdown` |
| 短信验证码「获取 → 冷却 → 再获取」 | `mms-countdown-verify` |
