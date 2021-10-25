---
title: "API"
date: 2021-10-25
draft: false
weight: 1
description: "Use the API to monitor traffic and access your data."
---

This document describes the REST endpoints used to interact with Pirsch. The easiest way to get started is through one of the client SDKs. If you're looking on how you can integrate Pirsch into your backend to monitor traffic, please check out the [backend integration]({{<ref "get-started/backend-integration.md">}}).

To use the API, you must create a client. New clients can be created on the [settings page]({{<ref "settings/developer.md">}}).

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

To make requests to the API, you need to get an access token first. The token must be send with every request in the `Authorization` header in the format `Bearer <token>`. If you receive a status code 401 (unauthorized), you need to create a new access token and try again. `expires_at` timezone is set to UTC.

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

This endpoint is used to send page hits to Pirsch. It requires you to send information about the request made by the client. How you get these depends on the programming language and framework you're using. The example shows which fields are required and which are optional. We recommend sending all of them to make the results as accurate as possible.

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

## Sending an Event

This endpoint is used to send events to Pirsch. It requires you to send information about the request made by the client. How you get these depends on the programming language and framework you're using. The example shows which fields are required and which are optional. We recommend sending all of them to make the results as accurate as possible.

**Example request**

*Fields with underscores are comments.*

```Bash
POST https://api.pirsch.io/api/v1/event

{
    "event_name":       "Button Clicked",
    "_duration":        "event_duration is an optional number of seconds.",
    "event_duration":   42,
    "_metadata":        "event_meta is a single dimension object of scalar values (strings, numbers, and booleans)."
    "event_meta": {
        "key":             "value",
        "metadata fields": "are optional"
    },
    "_hit":             "The fields below are the same as for hits."
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

## Keeping a Session Alive

This endpoint is used to *manually* keep sessions alive. A session will usually be reset if no request (hit or event) is sent within a 30-minute timeframe. This feature can be used to extend a session indefinitely. It's not recommended to use this for regular websites, but can be useful to track apps or other custom build software.

**Example request**

```Bash
POST https://api.pirsch.io/api/v1/session

{
    "ip":               "123.456.789.0",
    "cf_connecting_ip": "CF-Connecting-IP header (optional)",
    "x_forwarded_for":  "X-Forwarded-For header (optional)",
    "forwarded":        "Forwarded header (optional)",
    "x_real_ip"         "X-Real-IP header (optional)",
    "dnt":              "DNT header (optional)",
    "user_agent":       "User-Agent header"
}
```

## Statistics

The following endpoints can be used to read statistics from Pirsch. To receive data, you need to set the filter. It will be skipped in the example requests for brevity.

### Filter

The following list contains all possible filter options. Only the required fields need to be set when making a request. Set the fields using URL query parameters, like `?from=2021-05-08&to=2021-05-15&language=en`.

| Parameter | Required | Example | Format/Description |
| - | - | - | - |
| id | yes | A5kgYzK14m | The domain ID. Use the list endpoint to get the domain ID for the client |
| from | yes | 2021-05-08 | YYYY-MM-DD |
| to | yes | 2021-05-15 | YYYY-MM-DD |
| path | no | /home | The page path |
| entry_path | no | /home | The entry page path |
| exit_path | no | /yte | The exit page path |
| pattern | no | (?i)^\\/path/[^\\/]+$ | A [regular expression](https://github.com/google/re2/wiki/Syntax) to filter and group pages. This option is used with [conversion goals]({{<ref "dashboard/conversion-goals.md">}}) |
| event | no | Button clicked | The name of an event to filter for. |
| event_meta_key | no | Clicks | The event meta key to filter for. This field is used to break down a single event. |
| language | no | en | ISO-639-1 language code, like en for English |
| country | no | jp | ISO-3166 Alpha-2 country code, like jp for Japan |
| city | no | London | Name of a city |
| referrer | no | https://referring-website.com/ | The referrer, usually a URL or name (note that the Pirsch dashboard does trim the protocol) |
| referrer_name | no | referring-website.com | The referrer name, usually the hostname |
| os | no | Windows | The operating system |
| browser | no | Firefox | The browser |
| platform | no | desktop | The platform, desktop, mobile, or unknown (not set) |
| screen_class | no | XXL | The screen class, XXL, XL, L, M, S |
| utm_source | no | Newsletter | The UTM source |
| utm_medium | no | Email | The UTM medium |
| utm_campaign | no | Summer Sale | The UTM campaign |
| utm_content | no | Header | The UTM content |
| utm_term | no | search terms | The UTM term |
| limit | no | 20 | Limits the number of results, note that this is hard limited to 100 |
| include_avg_time_on_page | no | true | Set to true, to include the average time on page when reading page statistics |

### Getting the Domain ID

Before you can make requests, you need to know the domain ID for the client. Make a request to the following endpoint and store the ID for the domain. Note that the domain will be returned in an array. The endpoint usually returns all domains a user has access to, but in this case it will always have one entry (except there is some permission error, then it will be empty).

**Example request**

`GET /api/v1/domain`

**Example response**

```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "user_id": "pzy1bjD1lv",
        "hostname": "example.com",
        "subdomain": "example",
        "identification_code": "oSdiAe...",
        "public": false,
        "google_user_id": null,
        "google_user_email": null,
        "gsc_domain": null,
        "new_owner": null,
        "user_role": ""
    }
]
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
        "title": "Home",
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

### Entry Pages

**Example request**

`GET /api/v1/statistics/page/entry`

**Example response**

```JSON
[
    {
        "path": "/home",
        "title": "Home",
        "visitors": 42,
        "sessions": 67,
        "entries": 56,
        "entry_rate": 0.298,
        "average_time_spent_seconds": 42
    },
    // ...
]
```

### Exit Pages

**Example request**

`GET /api/v1/statistics/page/exit`

**Example response**

```JSON
[
    {
        "path": "/bye",
        "title": "Bye",
        "visitors": 42,
        "sessions": 67,
        "exits": 56,
        "exit_rate": 0.298
    },
    // ...
]
```

### Conversion Goals

**Example request**

`GET /api/v1/statistics/goals`

**Example response**

```JSON
[
    {
        "page_goal": {
            "id": "A5kgYzK14m",
            "def_time": "2021-05-22T10:11:12.123456Z",
            "mod_time": "2021-05-22T10:11:12.123456Z",
            "domain_id": "M03loiem34",
            "name": "My Conversion Goal",
            "path_pattern": "/path/**",
            "pattern": "(?i)^\/path/[^\/]+$",
            "visitor_goal": 5432,
            "cr_goal": 42.11,
            "delete_reached": true,
            "email_reached": true
        }
        "stats": {
            "visitors": 432,
            "views": 563,
            "cr": 0.065
        }
    },
    // ...
]
```

`pattern` is the regex pattern stored for the conversion goal and can be used as the `pattern` parameter in the filter. `path_pattern` is the path pattern as configured by the user on the dashboard. The `pattern` will be generated from it.

### Events

This endpoint lists all events and their metadata keys. You can use the event metadata endpoint to receive the values for the event and a key.

**Example request**

`GET /api/v1/statistics/events`

**Example response**

```JSON
[
    {
        "name": "event name",
        "visitors": 432,
        "views": 563,
        "cr": 0.065,
        "average_duration_seconds": 42,
        "meta_keys": ["meta", "keys"]
    },
    // ...
]
```

### Event Metadata

This endpoint will break down the event meta keys and values for a single event. You must filter for an event name and meta key in order for this to work.

**Example request**

`GET /api/v1/statistics/event/meta`

**Example response**

```JSON
[
    {
        "name": "event name",
        "visitors": 432,
        "views": 563,
        "cr": 0.065,
        "average_duration_seconds": 42,
        "meta_value": "value",
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
        "sessions": 123,
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

### Operating System Version

**Example request**

`GET /api/v1/statistics/os`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "os": "Windows",
        "os_version": "10.0"
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

### Browser Version

**Example request**

`GET /api/v1/statistics/browser/version`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "browser": "Firefox",
        "browser_version": "89.0"
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

### City

**Example request**

`GET /api/v1/statistics/city`

**Example response**

```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "city": "London"
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

This endpoints requires the [Google Search Console integration]({{<ref "settings/general.md#search-console">}}). **We recommend using the Search Console API directly instead of calling it through Pirsch.**

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
