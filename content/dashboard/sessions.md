---
title: "Sessions"
date: 2022-11-26
draft: false
weight: 5
description: "Manually extend visitor sessions."
---

Pirsch has the option to keep sessions alive. We do not recommend using this feature for regular websites, but it can be handy for mobile apps, single-page applications, and other types of software where you have long-running sessions. Otherwise, a session will only be kept alive if you send a page view, which is usually the desired behavior.

Extending a session prevents the creation of unnecessary page views.

> Note that a single session extension is counted as 10% of a page view and therefore counts towards your page view limit. Updating a session 10 times will be counted as one page view.

## Extending Sessions Using Javascript

To extends sessions from the browser, add the `pirsch-sessions.js` snippet to your website and adjust the identification code.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="YOUR_IDENTIFICATION_CODE"></script>
```

This will automatically send a ping to Pirsch every 60 seconds. If you wish to adjust the interval, add the `data-interval-ms` attribute. You can then specifiy the interval in milliseconds.

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

The data must be identical to the data used when sending a regular page view.
