/**
 * mms-unix 全局配置
 * 组件库核心配置，所有项目通用配置在此定义
 */


/** 修改 env 或各环境地址后，需与此处保持一致 */
const env: AppEnv = 'local'
const localBaseUrl = 'http://localhost:8070'
const devBaseUrl = ''
const prodBaseUrl = ''

export const config: AppConfig = {
	env,
	localBaseUrl,
	devBaseUrl,
	prodBaseUrl,
	baseUrl: resolveBaseUrl(env, localBaseUrl, devBaseUrl, prodBaseUrl),
	// 存储 Key
	storage: {
		token: 'token',
		userInfo: 'userInfo',
	},
	// 需要登录的页面路径（不含 pages/ 前缀）
	loginRequiredPaths: ['user_address', 'user_info'],
	// 组件库演示登录页（mms-login 非微信端跳转用）
	loginPagePath: '/pages_demo/login/login',
	// API 接口路径配置
	api: {
		login: {
			tokenLogin: '/api/v1/login/tokenLogin',
			codeGetOpenIdLogin: '/api/v1/login/codeGetOpenIdLogin',
			codeGetPhoneRegisterOrLogin: '/api/v1/login/codeGetPhoneRegisterOrLogin',
		},
		update: {
			checkUpdate: '/api/v1/common/checkUpdate',
		},
		upload: {
			image: '/api/v1/common/upload/image',
		},
		/** 留空则使用 mms-unix 库内默认（演示用公网 qrserver）；正式请改为自建接口根地址 */
		qrCodeImageApiBase: '',
	},
	// 应用基础信息
	configInfo: {
		name: 'mms-unix',
		logo: '/uni_modules/mms-unix/static/mms-app-logo.png',
		desc: 'uni-app 组件库',
		versionCode: 2,
		versionName: '1.0.1',
	},
}

/** 接口环境：本机 / 开发服 / 生产 */
export type AppEnv = 'local' | 'dev' | 'prod'

/** 与 uni_modules/mms-unix/config.uts 的 MmsUiPartial 字段对齐，供 TypeScript 项目配置 */
export type MmsUiUserConfig = {
	/** 应用展示名（与 configInfo.name 合并，见 getMmsUiConfig().appName） */
	appName?: string
	/** 开发环境 API 根（未填时兜底为 config.baseUrl） */
	apiDevelopmentBase?: string
	/** 生产环境 API 根 */
	apiProductionBase?: string
	/** 用户协议路由 */
	agreementRoute?: string
	/** 隐私政策路由 */
	privacyRoute?: string
	appLogo?: string
	emptyDefaultIcon?: string
	avatarDefault?: string
	articlePlaceholder?: string
	/** 演示页示例图（card、cropper 等） */
	demoImage?: string
	qrCodeImageApiBase?: string
}

type AppConfig = {
	/** 当前运行环境，决定 baseUrl 取自哪一项 */
	env: AppEnv
	/** 本机/本地后端 API 根（env 为 local 时使用） */
	localBaseUrl: string
	/** 开发/测试环境 API 根（env 为 dev 时使用；可为空则回退 localBaseUrl） */
	devBaseUrl: string
	/** 生产环境 API 根（env 为 prod 时使用；可为空则依次回退 dev、local） */
	prodBaseUrl: string
	/**
	 * 当前生效的 API 根（由 env 与上述三者解析得到）
	 * Request / mallApi / 上传等默认使用此字段
	 */
	baseUrl: string
	/** 存储 Key 配置 */
	storage: StorageConfig
	/** 需要登录才能访问的页面路径（不含 pages/ 前缀） */
	loginRequiredPaths: string[]
	/** token 失效等非微信端跳转的登录页路径（与 pages.json 一致，需前导 /） */
	loginPagePath: string
	/** API 接口路径配置 */
	api: ApiConfig
	/** 应用基础信息 */
	configInfo: ConfigInfo
	/**
	 * mms-unix 组件库 UI 资源与主题（可选）
	 * 与 uni_modules/mms-unix/config.uts 中默认值合并，未填则使用库内默认路径
	 */
	mmsUi?: MmsUiUserConfig
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
	/** 文件上传（multipart，字段名与组件 uploadName 一致） */
	upload: {
		/** 默认图片上传路径；组件未传 uploadUrl 且开启 autoUpload 时使用 */
		image: string
	}
	/**
	 * H5/App 端 mms-qrcode 拉取二维码 PNG 的接口根地址（须自建，query 与 qrserver 兼容：size、color、bgcolor、data）
	 * 留空则不请求任何外链，非微信端不显示联网二维码（微信端仍用 canvas 本地绘制）
	 */
	qrCodeImageApiBase: string
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

function resolveBaseUrl(env: AppEnv, local: string, dev: string, prod: string): string {
	if (env === 'local') {
		return local
	}
	if (env === 'dev') {
		return dev !== '' ? dev : local
	}
	// prod
	if (prod !== '') {
		return prod
	}
	if (dev !== '') {
		return dev
	}
	return local
}

