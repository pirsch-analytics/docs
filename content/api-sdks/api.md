---
title: "API"
date: 2021-05-15
draft: false
weight: 1
description: "Use the API to monitor traffic and access your data."
---

This document describes the REST endpoints used to interact with Pirsch. The easiest way to get started is through one of the client SDKs. If you're looking on how you can integrate Pirsch into your backend to monitor traffic, please check out the [backend integration]({{<  ref "get-started/backend-integration.md"  >}}).

## Error Handling

In case of an error, Pirsch will return a JSON object in the body describing the issue and what you can do about it together with a meaningful HTTP status code. Errors have the following structure.

```JSON
{
    "validation": {
        "field": "error message"
    },
    "error": [
        "error message"
    ]
}
```

* `validation` lists errors related to input parameters
* `error` lists general errors, like when an object could'nt be found. There will usually be only one error message

## Get an Access Token

To make requests to the API, you need to get an access token first. The token must be send with every request in the `Authorization` header in the format `Bearer <token>`. If you receive a status code 401 (unauthorized), you need to create a new access token and try again. `expires_at` time zone is set to UTC.

The examples for the other endpoints in this document will omit the header.

**Example request**

```Bash
POST https://api.pirsch.io/api/v1/token

{
    "client_id": "<client_id>",
    "client_secret": "<client_secret>"
}
```

**Example response**

```JSON
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI...",
    "expires_at": "2020-12-12T00:11:39.903607271Z"
}
```

## Sending a Page Hit

This endpoint is used to send page hits to Pirsch. It requires you to send information about the request made by the client. How you get these depends on the programming language and framework you're using. The example shows which fields are required and which are optional. We recommend to send all of them to make the results as accurate as possible.

**Example request**

```Bash
POST https://api.pirsch.io/api/v1/hit

{
    "url":              "https://example.com/full/url?including=parameters",
    "ip":               "123.456.789.0",
    "cf_connecting_ip": "CF-Connecting-IP header (optional)",
    "x_forwarded_for":  "X-Forwarded-For header (optional)",
    "forwarded":        "Forwarded header (optional)",
    "x_real_ip"         "X-Real-IP header (optional)",
    "dnt":              "DNT header (optional)",
    "user_agent":       "User-Agent header",
    "accept_language":  "Accept-Language header (optional)",
    "referrer" :        "Referer header (optional)",
    "screen_width":     1920,
    "screen_height":    1080
}
```

One small optimization you can make is to check the `DNT` (Do Not Track) header before you make the request. Check if the header is set to `1`, if true you can ignore the request, otherwise send it.

## Statistics

The following endpoints can be used to read statistics from Pirsch. To receive data, you need to set the filter. It will be skipped in the example requests for brevity.

### Filter

Here is a full example for a filter. Only the required fields need to be set when making a request.

```JSON
{
    "from":                     "2021-05-08",                     // YYYY-MM-DD, required
    "to":                       "2021-05-15",                     // YYYY-MM-DD, required
    "path":                     "/home",                          // the page path
    "language":                 "en",                             // ISO-639-1 language code, like en for English
    "country":                  "jp",                             // ISO-3166 Alpha-2 country code, like jp for Japan
    "referrer":                 "https://referring-website.com/", // the referrer, usually a URL or name (note that the Pirsch dashboard does trim the protocol)
    "os":                       "Windows",                        // the operating system
    "browser":                  "Firefox",                        // the browser
    "platform":                 "desktop",                        // the platform, desktop, mobile, or unknown (not set)
    "screen_class":             "XXL",                            // the screen class, XXL, XL, L, M, S
    "utm_source":               "Newsletter",                     // the UTM source
    "utm_medium":               "Email",                          // the UTM medium
    "utm_campaign":             "Summer Sale",                    // the UTM campaign
    "utm_content":              "Header",                         // the UTM content
    "utm_term":                 "search terms",                   // the UTM term
    "limit":                    20,                               // limits the number of results, note that this is hard limited to 100
    "include_avg_time_on_page": true                              // set to true, to include the average time on page when reading page statistics
}
```

### Session Duration

**Example request**

`GET /api/v1/statistics/duration/session`

**Example response**

```JSON
[
    {
        "day": "2021-05-12T00:00:00Z",
        "average_time_spent_seconds": 42
    },
    // ...
]
```

### Time on Page

**Example request**

`GET /api/v1/statistics/duration/page`

**Example response**

```JSON
[
    {
        "day": "2021-05-12T00:00:00Z",
        "path" "/home",
        "average_time_spent_seconds": 42
    },
    // ...
]
```

### UTM Source

**Example request**

`GET /api/v1/statistics/utm/source`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.342,
        "utm_source": "source"
    },
    // ...
]
```

### UTM Medium

**Example request**

`GET /api/v1/statistics/utm/medium`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.342,
        "utm_medium": "medium"
    },
    // ...
]
```

### UTM Campaign

**Example request**

`GET /api/v1/statistics/utm/campaign`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.342,
        "utm_campaign": "campaign"
    },
    // ...
]
```

### UTM Content

**Example request**

`GET /api/v1/statistics/utm/content`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.342,
        "utm_content": "content"
    },
    // ...
]
```

### UTM Term

**Example request**

`GET /api/v1/statistics/utm/term`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.342,
        "utm_term": "term"
    },
    // ...
]
```

### Visitors

**Example request**

`GET /api/v1/statistics/visitor`

**Example response**

```JSON
[
    {
        "day": "2021-05-12T00:00:00Z",
        "visitors": 42,
        "views": 56,
        "sessions": 48,
        "bounces": 23,
        "bounce_rate": 0.4791
    },
    // ...
]
```

### Pages

**Example request**

`GET /api/v1/statistics/page`

**Example response**

```JSON
[
    {
        "path": "/home",
        "visitors": 42,
        "views": 56,
        "sessions": 48,
        "bounces": 23,
        "relative_visitors": 0.342,
        "relative_views": 0.298,
        "bounce_rate": 0.765,
        "average_time_spent_seconds": 42
    },
    // ...
]
```

### Growth Rates

**Example request**

`GET /api/v1/statistics/growth`

**Example response**

```JSON
{
    "visitors_growth": 0.34,
    "views_growth": -0.05,
    "sessions_growth": 0.32,
    "bounces_growth": 0.65,
    "time_spent_growth": 0.45
}
```

### Active Visitors

**Example request**

`GET /api/v1/statistics/active`

**Example response**

```JSON
{
    "stats": [
        {
            "path": "/home",
            "visitors": 42
        },
        // ...
    ],
    "visitors": 298
}
```

### Visitors by Time of Day

**Example request**

`GET /api/v1/statistics/hours`

**Example response**

```JSON
[
    {
        "hour": 0,
        "visitors": 42,
    },
    {
        "hour": 1,
        "visitors": 29,
    },
    // ...
]
```

### Languages

**Example request**

`GET /api/v1/statistics/language`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "language": "en"
    },
    // ...
]
```

### Referrer

**Example request**

`GET /api/v1/statistics/referrer`

**Example response**

```JSON
[
    {
        "referrer": "Referrer",
        "referrer_name": "Name",
        "referrer_icon": "Icon",
        "visitors": 42,
        "relative_visitors": 0.256,
        "bounces": 21,
        "bounce_rate": 0.5
    },
    // ...
]
```

### Operating System

**Example request**

`GET /api/v1/statistics/os`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "os": "Windows"
    },
    // ...
]
```

### Browser

**Example request**

`GET /api/v1/statistics/browser`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "browser": "Firefox"
    },
    // ...
]
```

### Country

**Example request**

`GET /api/v1/statistics/country`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "country": "jp"
    },
    // ...
]
```

### Platform

**Example request**

`GET /api/v1/statistics/platform`

**Example response**

```JSON
{
    "platform_desktop": 457,
    "platform_mobile": 204,
    "platform_unknown": 98,
    "relative_platform_desktop": 0.56,
    "relative_platform_mobile": 0.34,
    "relative_platform_unknown": 0.17
}
```

### Screen Classes

**Example request**

`GET /api/v1/statistics/screen`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "screen_class": "XXL"
    },
    // ...
]
```

### Keywords

This endpoints requires the [Google Search Console integration]({{< ref "dashboard/general-settings.md#search-console" >}}). **We recommend using the Search Console API directly instead of calling it through Pirsch.**

**Example request**

`GET /api/v1/statistics/keywords`

**Example response**

```JSON
[
    {
        "keys": ["key", "word"],
        "clicks": 456,
        "impressions": 920,
        "ctr": 0.49,
        "position": 4
    },
    // ...
]
```
