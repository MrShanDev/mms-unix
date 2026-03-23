/**
 * 登录拦截与认证逻辑
 */
import { storage } from './storage'
import { config } from '@/common/config'

/** 是否已登录 */
export function isLoggedIn(): boolean {
	return storage.getToken() != ''
}

/** 检查并跳转登录 */
export function checkLogin(toPath?: string): boolean {
	if (isLoggedIn()) return true
	const url = toPath != null && toPath != ''
		? '/pages/login/login?redirect=' + encodeURIComponent(toPath)
		: '/pages/login/login'
	uni.navigateTo({ url })
	return false
}

/** 需要登录才能访问的页面 */
export function needLogin(path: string): boolean {
	const p = path.replace(/^\//, '').replace(/\.uvue$/, '')
	return config.loginRequiredPaths.some((r) => p.includes(r))
}
