export default {
    lang: "en-US",
    title: "Documentation",
    description: "Pirsch is a simple, privacy-friendly, and open-source web analytics solution — lightweight, cookie-free and easily integrated into any website or backend.",
    head: [
        ["meta", {name: "msapplication-TileColor", content: "#ffffff"}],
        ["meta", {name: "theme-color", content: "#000000"}],
        ["meta", {name: "twitter:card", content: "product"}],
        ["meta", {name: "twitter:site", content: "@PirschAnalytics"}],
        ["meta", {name: "twitter:title", content: "Pirsch Analytics Documentation"}],
        ["meta", {name: "twitter:description", content: "Pirsch is a simple, privacy-friendly, and open-source web analytics solution."}],
        ["meta", {name: "twitter:image", content: "https://docs.pirsch.io/static/twitter-card.png"}],
        ["meta", {name: "og:url", content: "https://docs.pirsch.io"}],
        ["meta", {name: "og:title", content: "Pirsch Analytics Documentation"}],
        ["meta", {name: "og:description", content: "Pirsch is a simple, privacy-friendly, and open-source web analytics solution."}],
        ["meta", {name: "og:image", content: "https://docs.pirsch.io/static/twitter-card.png"}],
        ["meta", {name: "og:type", content: "article"}],
        ["link", {rel: "shortcut icon", type: "image/png", href: "/static/favicon.png"}],
        ["script", {defer: true, type: "text/javascript", src: "https://api.pirsch.io/pirsch.js", id: "pirschjs", "data-code": "6V8bSjEHJ19PK2hVxaaqJhItHUpSUekW"}]
    ],
    themeConfig: {
        logo: "/static/logo.png",
        algolia: {
            appId: "",
            apiKey: "",
            indexName: ""
        },
        nav: [
            {text: "Website", link: "https://pirsch.io"},
            {text: "GitHub", link: "https://github.com/pirsch-analytics/docs"}
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    {text: "Website Integration", link: "/get-started/frontend-integration"},
                    {text: "Server-side Integration", link: "/get-started/backend-integration"},
                    {text: "Proxying the Scripts", link: "/get-started/proxy"}
                ]
            },
            {
                text: "Integrations",
                items: [
                    {text: "WordPress", link: "/integrations/wordpress"},
                    {text: "Google Tag Manager", link: "/integrations/tag-manager"},
                    {text: "Laravel", link: "/integrations/laravel"},
                    {text: "Caddy", link: "/integrations/caddy"},
                    {text: "Gatsby", link: "/integrations/gatsby"},
                    {text: "Webflow", link: "/integrations/webflow"}
                ]
            },
            {
                text: "API and SDKs",
                items: [
                    {text: "API", link: "/api-sdks/api"},
                    {text: "SDKs", link: "/api-sdks/sdks"}
                ]
            },
            {
                items: [
                    {text: "Affiliate Program", link: "/affiliate"},
                    {text: "Privacy", link: "/privacy"},
                    {text: "Changelog", link: "/changelog"}
                ]
            }
        ],
        footer: {
            message: "<a href='https://github.com/pirsch-analytics/docs'>GitHub</a> <a href='https://pirsch.io/terms'>Terms</a> <a href='https://pirsch.io/privacy'>Privacy</a> <a href='https://pirsch.io/legal'>Legal</a>",
            copyright: "Copyright Emvi Software GmbH"
        }
    }
}
