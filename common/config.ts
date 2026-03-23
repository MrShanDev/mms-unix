/**
 * 全局配置
 */
type AppConfig = {
	baseUrl: string
	mallBaseUrl: string
	storage: StorageConfig
	loginRequiredPaths: string[]
	configInfo: ConfigInfo
}

type StorageConfig = {
	token: string
	userInfo: string
}

export type ConfigInfo = {
	name: string
	logo: string
	desc: string
	phone: string
	qqmapsdkKey: string
	/** 托管费用（元），固定 198 */
	hostingFeePrice?: number
	/** 咨询电话（详情页「咨询了解」拨号） */
	consultPhone?: string
	/** 官网地址 */
	consultWebsite?: string
	/** 藏品易站 App 下载二维码图片地址 */
	appQrcodeUrl?: string
	/** 藏品易站 App 下载页地址（长按识别打开的链接） */
	appDownloadUrl?: string
	/** 藏品易站 App 名称 */
	appName?: string
	/** 藏品易站 App 描述/ slogan */
	appDesc?: string
	/** 藏品易站 App 图标 */
	appIcon?: string
	/** 安卓下载地址 */
	appDownloadUrlAndroid?: string
	/** iOS App Store 下载地址 */
	appDownloadUrlIos?: string
	/** H5 地址（非移动端时展示） */
	appH5Url?: string
	/** 用户协议文章 ID（打开文章详情页） */
	userAgreementArticleId?: string
	/** 隐私政策文章 ID（打开文章详情页） */
	privacyPolicyArticleId?: string
}

export const config: AppConfig = {
	// 本地开发地址
	baseUrl: 'http://localhost:8070',
	// 线上地址 （如果本地开发，请注释掉）
	mallBaseUrl: 'https://www.sscacptg.com/mall-api',
	// 存储 key
	storage: {
		token: 'token',
		userInfo: 'userInfo',
	},
	// 需要登录的页面路径（不含 pages/ 前缀）
	loginRequiredPaths: ['hosting_records', 'hosting_certificate', 'user_address', 'user_info'],
	// 应用基础信息（原 utils.js configInfo）
	configInfo: {
		name: '盛世长安',
		logo: 'https://ssca-1364461867.cos.ap-beijing.myqcloud.com/mms/upload/688c17e596d408e1ce66306b.png',
		desc: '盛世长安托管平台',
		phone: '16602910408',
		qqmapsdkKey: 'TDXBZ-ELKYX-OQJ4D-ZTJ4V-K7CR5-TLFN7',
		hostingFeePrice: 198,
		consultPhone: '18966608336',
		consultWebsite: 'https://www.sscacptg.com/',
		/** App 下载页地址（二维码内容，长按识别打开） */
		appDownloadUrl: 'https://cpyz.sscacptg.com/app-download.html',
		appName: '藏品易站',
		appDesc: '好藏品轻松易',
		appIcon: '/static/logo.png',
		appDownloadUrlAndroid: 'https://www.sscacptg.com/app.apk',
		appDownloadUrlIos: 'https://apps.apple.com/cn/app/藏品易站/id1234567890',
		appH5Url: 'https://www.sscacptg.com/',
		/** 用户协议文章 ID */
		userAgreementArticleId: '1980815793850224641',
		/** 隐私政策文章 ID */
		privacyPolicyArticleId: '1980815938721484801',
	},
}
