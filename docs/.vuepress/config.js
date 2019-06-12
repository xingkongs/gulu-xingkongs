module.exports = {
    base: "/gulu-xingkongs/",
    title: "gulu-xingkong",
    description: "一个vue UI 组件",
    themeConfig: {
        nav: [
            {text: "首页", link: "/"},
            {text: "blog", link: "https://www.jianshu.com/u/fe7e60498141"},
        ],
        sidebar: [
            {
                title: "组件",
                children: [
                    "/components/button/",
                    "/components/input/",
                    "/components/tab/",
                    "/components/grid/",
                    "/components/layout/",
                    "/components/toast/",
                    "/components/popover/",
                    "/components/collapse/",
                    "/components/cascader/",
                ]
            },
        ]
    }
};