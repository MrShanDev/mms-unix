# utils 工具库

mms-unix 提供了一些常用的工具方法，方便开发。

## 使用

```uts
import { formatDate, debounce, throttle, deepClone } from 'mms-unix/libs/utils'
```

## 方法列表

### formatDate 格式化日期

```uts
// date 可以是时间戳、Date 对象
formatDate(date: number | Date, format: string = 'YYYY-MM-DD HH:mm:ss'): string
```

**示例**

```uts
formatDate(new Date(), 'YYYY-MM-DD') // 2026-03-23
formatDate(1689999999999, 'YYYY-MM-DD HH:mm') // 2023-07-21 15:33
```

### debounce 防抖

```uts
debounce(func: Function, wait: number = 300): Function
```

**示例**

```uts
const search = debounce((keyword) => {
	// 请求接口
}, 300)

input.addEventListener('input', (e) => {
	search(e.value)
})
```

### throttle 节流

```uts
throttle(func: Function, wait: number = 300): Function
```

**示例**

```uts
const onScroll = throttle(() => {
	// 滚动处理
}, 100)
```

### deepClone 深度克隆

```uts
deepClone<T>(obj: T): T
```

**示例**

```uts
const obj = { a: 1, b: { c: 2 } }
const cloned = deepClone(obj)
```

### padZero 补零

```uts
padZero(num: number): string
```

**示例**

```uts
padZero(5) // '05'
padZero(12) // '12'
```

### getRandom 获取随机数

```uts
getRandom(min: number, max: number): number
```

### isObject 判断是否为对象

```uts
isObject(value: any): boolean
```

### isArray 判断是否为数组

```uts
isArray(value: any): boolean
```

### isFunction 判断是否为函数

```uts
isFunction(value: any): boolean
```
