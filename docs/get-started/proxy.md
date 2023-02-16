# Proxying the Scripts

Proxies are a more advanced setup and require you to install software. We recommend starting with the [server-side](/get-started/backend-integration) or [website](/get-started/frontend-integration) integration.

## What Is a Proxy and Why Should You Use It

A proxy is self-hosted middleware that allows you to serve the Pirsch JavaScript snippets from your own domain.

The advantage of this is that your website will only make first-party requests. Requests to pirsch.io are proxied through your server, preventing them from being blocked by ad or script blockers.

Additionally, you can create rollup views and send data to multiple dashboards with a single request to the proxy, rather than requiring the client to make multiple requests.

Here is an example of a JS snippet that uses your proxy. The integration for the event script is similar:

```html
<script defer type="text/javascript"
    src="/pirsch/pirsch.min.js"
    id="pirschjs"></script>
```

As you can see, it loads the script from your own domain, using a relative path (`/pirsch/pirsch.min.js`). Page views will be sent to your own domain (on `/pirsch/hit`) and then forwarded to your Pirsch dashboard.

## Available Proxies

We provide two proxy servers that you can install on your server. Both are open source and can be found on GitHub.

The [PHP proxy](https://github.com/pirsch-analytics/pirsch-php-proxy) can be easily installed on any PHP server by downloading the latest version and unpacking it on your server.

The [Go server](https://github.com/pirsch-analytics/pirsch-go-proxy) is suitable for any VPS (virtual private server) and can be installed using Docker or by running the executable directly on your server (e.g. using systemd on Linux). No additional software is required, making it lightweight and easy to install.

See the readme on GitHub for details and installation instructions.
