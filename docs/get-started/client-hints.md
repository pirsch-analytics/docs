# Enabling Client Hints

Client Hints are a modern replacement for the User-Agent header to inform a website about a visitor's browser and operating system. We use Client Hints to detect the browser and operating system more reliably than it would be possible using the User-Agent header alone. For example, Windows 11 can only be detected using Client Hints.

To improve the accuracy of your data on Pirsch, we recommend that you explicitly request Client Hints from the visitor's browser and forward them to our service or your proxy.

## Server-side Client Hints

To enable server-slide Client Hints, set the following response headers on all sites where you're using Pirsch.

```
Accept-CH: Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-Width, Sec-CH-Viewport-Width
Permissions-Policy: ch-ua=(self "https://api.pirsch.io"), ch-ua-mobile=(self "https://api.pirsch.io"), ch-ua-platform=(self "https://api.pirsch.io"), ch-ua-platform-version=(self "https://api.pirsch.io"), ch-width=(self "https://api.pirsch.io"), ch-viewport-width=(self "https://api.pirsch.io")
```

The `Permissions-Policy` headers asks the browser to forward the Client Hints (`Accept-CH`) to Pirsch. If you've set up a proxy, the policy should include your proxy URL.

## iframe Client Hints

If your website is embedded as an `iframe`, you will need to set the `allow` attribute in a similar way to the server-side headers.

```html
<iframe src="https://example.com" allow="ch-ua,ch-ua-mobile,ch-ua-platform,ch-ua-platform-version,ch-width,ch-viewport-width"></iframe>
```
