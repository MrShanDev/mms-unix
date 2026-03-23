# request 网络请求

基于 uni.request 封装的网络请求工具，支持拦截器、超时、统一错误处理。

## 使用

```uts
import { request } from 'mms-unix/libs/request'

// GET 请求
const getList = async () => {
	const res = await request.get('/api/list', { page: 1 })
	return res.data
}

// POST 请求
const createData = async (data) => {
	const res = await request.post('/api/create', data)
	return res.data
}
```

## 配置

### 基础配置

```uts
import { configure } from 'mms-unix/libs/request'

configure({
	baseURL: 'https://your-api-domain.com',
	timeout: 10000,
	showError: true // 是否自动显示错误提示
})
```

## API

### request(options)

发起请求

```uts
request({
	url: '/api/xxx',
	method: 'POST',
	data: {}
}).then(res => {
	console.log(res.data)
}).catch(err => {
	console.error(err)
})
```

### request.get(url, params?)

GET 请求

```uts
request.get('/api/list', { page: 1 })
```

### request.post(url, data?)

POST 请求

```uts
request.post('/api/create', { name: 'test' })
```

### request.put(url, data?)

PUT 请求

### request.delete(url, data?)

DELETE 请求

### 拦截器

```uts
import { addInterceptor } from 'mms-unix/libs/request'

// 请求拦截器
addInterceptor('request', (config) => {
	// 添加 token
	const token = uni.getStorageSync('token')
	if (token) {
		config.header = {
			...config.header,
			'Authorization': `Bearer ${token}`
		}
	}
	return config
})

// 响应拦截器
addInterceptor('response', (response) => {
	// 可以统一处理返回数据
	if (response.data.code !== 0) {
		uni.showToast({ title: response.data.msg, icon: 'none' })
		return Promise.reject(response.data)
	}
	return response.data
})
```

## 返回格式

默认约定后端返回格式：

```json
{
	"code": 0,
	"msg": "success",
	"data": {}
}
```

## 错误处理

- 网络错误自动提示
- 业务错误根据 code 处理
- 支持自定义错误处理回调
