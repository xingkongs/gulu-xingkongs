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
                title: '组件',
                children: [
                    '/components/button/'
                ]
            },
        ]
    }
}