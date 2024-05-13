import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { SitemapStream } from "sitemap";

const links = [];

export default {
    lang: "en-US",
    title: "Pirsch Documentation",
    description: "Pirsch is a simple, privacy-friendly, and open-source web analytics solution — lightweight, cookie-free and easily integrated into any website or backend.",
    cleanUrls: true,
    head: [
        ["meta", {name: "msapplication-TileColor", content: "#ffffff"}],
        ["meta", {name: "theme-color", content: "#000000"}],
        ["meta", {name: "twitter:card", content: "product"}],
        ["meta", {name: "twitter:site", content: "@PirschAnalytics"}],
        ["meta", {name: "twitter:title", content: "Pirsch Analytics Documentation"}],
        ["meta", {name: "twitter:description", content: "Pirsch is a simple, privacy-friendly, and open-source web analytics solution."}],
        ["meta", {name: "twitter:image", content: "https://docs.pirsch.io/twitter-card.png"}],
        ["meta", {name: "og:url", content: "https://docs.pirsch.io"}],
        ["meta", {name: "og:title", content: "Pirsch Analytics Documentation"}],
        ["meta", {name: "og:description", content: "Pirsch is a simple, privacy-friendly, and open-source web analytics solution."}],
        ["meta", {name: "og:image", content: "https://docs.pirsch.io/twitter-card.png"}],
        ["meta", {name: "og:type", content: "article"}],
        ["link", {rel: "shortcut icon", type: "image/png", href: "/favicon.png"}],
        ["script", {defer: true, type: "text/javascript", src: "https://api.pirsch.io/pa.js", id: "pianjs", "data-code": "6V8bSjEHJ19PK2hVxaaqJhItHUpSUekW"}]
    ],
    themeConfig: {
        logo: "/logo.png",
        algolia: {
            appId: "VAP7DI3OBV",
            apiKey: "20b32dacd2f4e3522a9c0848b54055ea",
            indexName: "pirsch"
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
                    {text: "Server-Side Integration", link: "/get-started/backend-integration"},
                    {text: "Client Hints", link: "/get-started/client-hints"},
                    {text: "Google Analytics Import", link: "/get-started/ga-import"},
                    {text: "Plausible Analytics Import", link: "/get-started/plausible-import"},
                    {text: "Fathom Analytics Import", link: "/get-started/fathom-import"},
                    {text: "Troubleshooting", link: "/get-started/troubleshooting"}
                ]
            },
            {
                text: "Integrations",
                items: [
                    {text: "Caddy", link: "/integrations/caddy"},
                    {text: "Docusaurus", link: "/integrations/docusaurus"},
                    {text: "Framer", link: "/integrations/framer"},
                    {text: "Gatsby", link: "/integrations/gatsby"},
                    {text: "Google Search Console", link: "/integrations/search-console"},
                    {text: "Google Tag Manager", link: "/integrations/tag-manager"},
                    {text: "Laravel", link: "/integrations/laravel"},
                    {text: "Webflow", link: "/integrations/webflow"},
                    {text: "WordPress", link: "/integrations/wordpress"}
                ]
            },
            {
                text: "Advanced",
                items: [
                    {text: "Referrer and UTM Parameters", link: "/advanced/referrer-utm"},
                    {text: "Tracking Conversion Goals", link: "/advanced/conversion-goals"},
                    {text: "Tracking Events", link: "/advanced/events"},
                    {text: "Tracking Outbound Links", link: "/advanced/outbound-links"},
                    {text: "Tracking File Downloads", link: "/advanced/file-downloads"},
                    {text: "Tracking 404 Errors", link: "/advanced/not-found-tracking"},
                    {text: "Segmentation and A/B Testing", link: "/advanced/segmentation-tags"},
                    {text: "Comparing Statistics", link: "/advanced/comparison"},
                    {text: "Additional Domains and Rollup Views", link: "/advanced/domains-rollup"},
                    {text: "Webhooks", link: "/advanced/webhooks"},
                    {text: "Email Reports", link: "/advanced/email-reports"},
                    {text: "Traffic Filter", link: "/advanced/traffic-filter"},
                    {text: "Traffic Spike Notifications", link: "/advanced/traffic-spike"},
                    {text: "Traffic Alerts", link: "/advanced/traffic-alerts"},
                    {text: "Extending Sessions", link: "/advanced/sessions"},
                    {text: "Proxying the Scripts", link: "/advanced/proxy"},
                    {text: "Proxying Through Cloudflare Workers", link: "/advanced/cf-workers"},
                    {text: "Access Management", link: "/advanced/access"},
                    {text: "Embedding the Dashboard", link: "/advanced/embedding"},
                    {text: "Theming", link: "/advanced/theme"},
                    {text: "Custom Domains", link: "/advanced/custom-domains"}
                ]
            },
            {
                text: "API and SDKs",
                items: [
                    {text: "API Guide", link: "/api-sdks/api-guide"},
                    {text: "API", link: "/api-sdks/api"},
                    {text: "SDKs", link: "/api-sdks/sdks"}
                ]
            },
            {
                items: [
                    {text: "FAQ", link: "/faq"},
                    {text: "Affiliate Program", link: "/affiliate"},
                    {text: "Billing", link: "/billing"},
                    {text: "Privacy", link: "/privacy"},
                    {text: "Changelog", link: "/changelog"}
                ]
            },
            {
                items: [
                    {text: "Terms and Conditions", link: "https://pirsch.io/terms"},
                    {text: "Privacy Policy", link: "https://pirsch.io/privacy"},
                    {text: "Legal Notice", link: "https://pirsch.io/legal"}
                ]
            }
        ]
    },
    transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id)) {
            links.push({
                url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2"),
                lastmod: pageData.lastUpdated
            });
        }
    },
    buildEnd: async ({ outDir }) => {
        const sitemap = new SitemapStream({
            hostname: "https://docs.pirsch.io/"
        })
        const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
        sitemap.pipe(writeStream);
        links.forEach((link) => sitemap.write(link));
        sitemap.end();
        await new Promise((r) => writeStream.on("finish", r));
    }
}
