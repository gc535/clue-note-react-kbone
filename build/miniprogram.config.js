/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        index: [
            '/pages/index/index'
        ],
        other: [
            '/test/list/:id',
            '/test/detail/:id',
        ],
    },
    redirect: {
        notFound: 'index',
        accessDenied: 'index',
    },
    generate: {
        autoBuildNpm: 'npm',
    },
    app: {
        navigationBarTitleText: '妙探寻凶笔记',
    },
	appExtraConfig: {
        // sitemapLocation: 'sitemap.json',
	},
    global: {
        share: true,
        shareTimeline: true
    },
    pages: {},
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
    projectConfig: {
        projectname: '妙探寻凶笔记',
        appid: '',
    },
}
