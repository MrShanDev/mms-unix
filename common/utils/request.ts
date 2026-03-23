/**
 * 接口请求工具 - 支持登录拦截
 */
import { config } from '@/common/config'
import { storage } from './storage'

type RequestOptions = {
	url: string
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
	data?: Record<string, any>
	header?: Record<string, string>
	needAuth?: boolean
	baseUrl?: string
	/** 401 时是否跳转登录页，公开接口（如首页）设为 false */
	redirectOn401?: boolean
}

export type ApiResult = {
	code: number
	msg: string
	data: any
}

/**
 * 统一请求
 */
export function request(options: RequestOptions): Promise<ApiResult> {
	const { url, method = 'GET', data = {}, header = {}, needAuth = true, baseUrl, redirectOn401 = true } = options

	const token = storage.getToken()
	const base = baseUrl ?? config.baseUrl
	const fullUrl = url.startsWith('http') ? url : base + (url.startsWith('/') ? '' : '/') + url

	const reqHeader = {
		'Content-Type': 'application/json',
	} as UTSJSONObject
	if (needAuth && token != '') {
		reqHeader['Authorization'] = token
	}

	return new Promise((resolve, reject) => {
		uni.request({
			url: fullUrl,
			method,
			data,
				header: reqHeader,
				success(res) {
					const result = res.data as ApiResult
				if (result.code === 200) {
					resolve(result)
				} else if (result.code === 401) {
					// 未登录或 token 过期
					storage.clearAuth()
					if (redirectOn401) {
						uni.showToast({ title: '请先登录', icon: 'none' })
						setTimeout(() => {
							uni.navigateTo({ url: '/pages/login/login' })
						}, 1500)
					}
					reject(result)
				} else {
					uni.showToast({ title: result.msg ?? '请求失败', icon: 'none' })
					reject(result)
				}
			},
			fail(err) {
				uni.showToast({ title: '网络异常', icon: 'none' })
				reject(err)
			},
		})
	})
}

export const http = {
	get(url: string, data?: Record<string, any>) {
		return request({ url, method: 'GET', data })
	},
	post(url: string, data?: Record<string, any>) {
		return request({ url, method: 'POST', data })
	},
	put(url: string, data?: Record<string, any>) {
		return request({ url, method: 'PUT', data })
	},
	delete(url: string, data?: Record<string, any>) {
		return request({ url, method: 'DELETE', data })
	},
}
