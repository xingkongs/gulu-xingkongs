module.exports = {
    base: '/gulu-xingkongs/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    ['/install/','安装'],
                    ['/quick-start/', '快速开始'],
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button/'
                ]
            },
        ]
    }
}