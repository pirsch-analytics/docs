export default {
    title: "Pirsch Documentation",
    description: "Pirsch is a simple, privacy-friendly, open-source alternative to Google Analytics — lightweight, cookie-free and easily integrated into any website or backend.",
    themeConfig: {
        sidebar: [
            {
                text: "Getting started",
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
                    {text: "Affiliate", link: "/affiliate"},
                    {text: "Privacy", link: "/privacy"},
                    {text: "Changelog", link: "/changelog"}
                ]
            }
        ]
    }
}
