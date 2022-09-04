---
title: "Proxing the Scripts"
date: 2022-09-04
draft: false
weight: 4
description: "Learn on how to set up a proxy for the Pirsch JavaScript snippets."
---

> Proxies are a more advanced setup and require you to install software on your server. We recommend starting with the [backend]({{<ref "get-started/backend-integration.md">}}) or [frontend]({{<ref "get-started/frontend-integration.md">}}) integration.

## What Is a Proxy and Why Should You Use It

A proxy is a self-hosted middleware that allows you to serve the Pirsch JavaScript snippets from your own domain.

The benefit of this is that your website will only make first-party requests. Requests to pirsch.io will be proxied through your server, preventing them from being blocked by ad or script blockers.

Additionally, you can create rollup views and send data to multiple dashboards with a single request to the proxy, instead of requiring the client to make multiple requests.

Here is an example for a JS snippet using your proxy. The integration for the event script is similar.

```html
<script defer type="text/javascript"
    src="/pirsch/pirsch.min.js"
    id="pirschjs"></script>
```

As you can see, it loads the script from your own domain (`/pirsch/pirsch.min.js`). The page view will be sent to your own domain as well (on `/pirsch/hit`), and then forwarded to your Pirsch dashboard.

## Available Proxies

We offer two proxy servers you can install on your server. Both are open-source and can be found on GitHub.

The [PHP proxy](https://github.com/pirsch-analytics/pirsch-php-proxy) can easily be installed on any PHP server by downloading the latest release and extracting it on your server.

The [Go server](https://github.com/pirsch-analytics/pirsch-go-proxy) is suitable for any VPS (virtual private server) and can be installed using Docker or by running the executable on your server directly (using systemd on Linux for example). No additional software is required, making it lightweight and easy to install.

For details and installation instructions, please check out the readme on GitHub.
