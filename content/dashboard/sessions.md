---
title: "Sessions"
date: 2022-06-25
draft: false
weight: 5
description: "Manually extend visitor sessions."
---

Pirsch has the option to keep sessions alive. We do not recommend using this feature for regular websites, but it can be handy for mobile apps, single-page applications, and other types of software where you have long-running sessions. Otherwise, a session will only be kept alive if you send a page view, which is usually the desired behavior.

Extending a session prevents creating unnesseccary page views.

## Extending Sessions Using the API

Sessions can be extended by sending a simple request to the [API]({{<ref "api-sdks/api.md">}}).

```Bash
POST https://api.pirsch.io/api/v1/session

{
    "ip":               "123.456.789.0",
    "dnt":              "DNT header (optional)",
    "user_agent":       "User-Agent header"
}
```

**The `cf_connecting_ip`, `x_forwarded_for`, `forwarded`, and `x_real_ip` parameters are now deprecated! They can easily be manipulated for IP spoofing. Please make sure you set the `ip` parameter correctly. If you're behind a proxy or load balancer, look up the documentation to see which header to use and how to parse it. Our SDKs will be updated to handle this in a more comfortable fashion.**

The data must be identical to the data used when sending a regular page view.

## Extending Sessions Using Javascript

It's possible to extend a session from the browser, without adding anything. Here is a snippet keeping the session alive. It calls the session endpoint once a minute to make sure it's kept alive.

```JavaScript
const identificationCode = "website_identification_code";

setInterval(() => {
    const req = new XMLHttpRequest();
    req.open("POST", `https://api.pirsch.io/session?nc=${new Date().getTime()}&code=${identificationCode}&url=${encodeURIComponent(location.href.substr(0, 1800))}`);
    req.send();
}, 60_000);
```
