/**
 * mms-unix 全局配置
 * 组件库核心配置，所有项目通用配置在此定义
 */
type AppConfig = {
	/** 基础 API 地址 */
	baseUrl: string
	/** 商城 API 地址（可选，若为空则使用 baseUrl） */
	mallBaseUrl: string
	/** 存储 Key 配置 */
	storage: StorageConfig
	/** 需要登录才能访问的页面路径（不含 pages/ 前缀） */
	loginRequiredPaths: string[]
	/** API 接口路径配置 */
	api: ApiConfig
	/** 应用基础信息 */
	configInfo: ConfigInfo
}

type StorageConfig = {
	/** token 存储 key */
	token: string
	/** 用户信息存储 key */
	userInfo: string
}

/** API 接口路径配置 - 所有后端接口地址统一在这里配置 */
type ApiConfig = {
	/** 登录相关接口 */
	login: {
		/** token 自动登录 */
		tokenLogin: string
		/** 微信 code 获取 openId 登录 */
		codeGetOpenIdLogin: string
		/** 微信 code + 手机号注册/登录 */
		codeGetPhoneRegisterOrLogin: string
	}
	/** 版本更新相关接口 */
	update: {
		/** 检查版本更新 */
		checkUpdate: string
	}
}

/** 应用基础信息 - 用于版本更新、关于页面等 */
export type ConfigInfo = {
	/** 应用名称 */
	name: string
	/** 应用 Logo */
	logo: string
	/** 应用描述 */
	desc: string
	/** 当前版本号（用于版本更新检测，整数递增） */
	versionCode?: number
	/** 当前版本名称 */
	versionName?: string
	/** 腾讯地图 SDK key（可选） */
	qqmapsdkKey?: string
	/** App 下载页地址（长按识别打开的链接） */
	appDownloadUrl?: string
	/** App 名称（用于版本更新弹窗） */
	appName?: string
	/** App 描述/slogan */
	appDesc?: string
	/** App 图标 */
	appIcon?: string
	/** 安卓下载地址 */
	appDownloadUrlAndroid?: string
	/** iOS App Store 下载地址 */
	appDownloadUrlIos?: string
	/** H5 地址（非移动端展示） */
	appH5Url?: string
	/** 用户协议文章 ID */
	userAgreementArticleId?: string
	/** 隐私政策文章 ID */
	privacyPolicyArticleId?: string
}

export const config: AppConfig = {
	// 基础 API 地址
	baseUrl: 'http://localhost:8070',
	// 商城 API 地址（若为空则使用 baseUrl）
	mallBaseUrl: '',
	// 存储 Key
	storage: {
		token: 'token',
		userInfo: 'userInfo',
	},
	// 需要登录的页面路径（不含 pages/ 前缀）
	loginRequiredPaths: ['hosting_records', 'hosting_certificate', 'user_address', 'user_info'],
	// API 接口路径配置
	api: {
		login: {
			tokenLogin: '/api/v1/login/tokenLogin',
			codeGetOpenIdLogin: '/api/v1/login/codeGetOpenIdLogin',
			codeGetPhoneRegisterOrLogin: '/api/v1/login/codeGetPhoneRegisterOrLogin',
		},
		update: {
			checkUpdate: '/api/v1/common/checkUpdate',
		}
	},
	// 应用基础信息
	configInfo: {
		name: 'mms-unix',
		logo: 'https://ssca-1364461867.cos.ap-beijing.myqcloud.com/mms/upload/688c17e596d408e1ce66306b.png',
		desc: 'uni-app 组件库',
		versionCode: 1,
		versionName: '1.0.0',
	},
}
