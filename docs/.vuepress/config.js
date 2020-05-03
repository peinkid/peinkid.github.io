module.exports = {
    base: '/',
    title: 'Peinkid--风逝冰蓠',
    description: 'Peinkid Blog',
    head: [
        ['script', {
            src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.4.1/jquery.min.js'
        }],
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: '/favicon.ico'
        }],
        ["link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css"
        }],
        ["link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/gh/peinkid/peinkid.github.io@v0.5/live2d/css/live2d.css"
        }],
    ],
    themeConfig: {
        smoothScroll: true,
        logo: 'https://cdn.jsdelivr.net/gh/peinkid/peinkid.github.io@v0.1/eye.png',
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/peinkid/peinkid.github.io',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '个人创作',
                link: 'all/blog/blog1.md'
            },
            {
                text: '技术博客',
                link: 'all/tech/tech1.md'
            },
            {
                text: '关于Peinkid',
                link: 'all/about/blog1.md'
            }
        ],
        sidebar: [{
                title: '首页',
                path: '/'
            },
            {
                title: '个人创作',
                children: [
                    'all/blog/blog1.md',
                    'all/blog/blog2.md',
                ]
            },
            {
                title: '技术博客',
                children: [{
                        title: 'js防抖与节流',
                        path: 'all/tech/tech1.md'
                    },
                    {
                        title: '设置Chrome解决本地开发跨域',
                        path: 'all/tech/tech2.md'
                    }
                ]
            },
            {
                title: '关于Peinkid'
            }
        ],
        lastUpdated: true,
    }
}