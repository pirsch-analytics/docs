# API

This document describes the API endpoints used to interact with Pirsch. The easiest way to get started is to use one of the client SDKs. If you're looking for how to integrate Pirsch into your backend to collect traffic, please see the [server-side integration](/get-started/backend-integration).

If you're just getting started, we recommend reading the [API guide](/api-sdks/api-guide).

::: info
Note that the examples do not necessarily show correct data. IDs from a request may not match the response. You should also be careful not to confuse IDs in their context. Fields are often just called **id**, but they represent different objects.
:::

## Getting an Access Token

In order to make requests to the API, you must first obtain an access token or use an access key (write-only). The token must be sent with each request in the `Authorisation` header in the format `Bearer <token>`. If you receive a status code of 401 (unauthorized), you must create a new token and try again. The `expires_at' timezone is set to UTC.

**The examples for the other endpoints in this document omit the header.**

`POST https://api.pirsch.io/api/v1/token`

::: details EXAMPLE REQUEST
```JSON
{
    "client_id": "<client_id>",
    "client_secret": "<client_secret>"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI...",
    "expires_at": "2020-12-12T00:11:39.903607271Z"
}
```
:::

## Sending Page Views

This endpoint is used to send page views to Pirsch. It requires you to send information about the request made by the client. How you get this information depends on the programming language and framework you're using. The example shows which fields are required and which are optional. We recommend sending all of them to make the results as accurate as possible.

`POST https://api.pirsch.io/api/v1/hit`

::: details EXAMPLE REQUEST
```JSON
{
    "url":                          "https://example.com/full/url?including=parameters",
    "ip":                           "123.456.789.0",
    "user_agent":                   "User-Agent header",
    "accept_language":              "Accept-Language header (optional)",
    "sec_ch_ua":                    "Sec-CH-UA header (optional)",
	"sec_ch_ua_mobile":             "Sec-CH-UA-Mobile header (optional)",
	"sec_ch_ua_platform":           "Sec-CH-UA-Platform header (optional)",
	"sec_ch_ua_platform_version":   "Sec-CH-UA-Platform-Version header (optional)",
	"sec_ch_width":                 "Sec-CH-Width header (optional)",
    "sec_ch_viewport_width":        "Sec-CH-Viewport-Width header (optional)",
    "title":                        "Page title (optional)",
    "referrer" :                    "Referer header (optional)",
    "screen_width":                 1920,
    "screen_height":                1080,
    "tags": {
        "author": "John",
        "post": "My first blogpost"
    }
}
```
:::

It's possible to send multiple page views at once. If you use the batch endpoint, make sure the page views are in order, otherwise they throw off your statistics. This works well for sites that run on a single server where you can buffer page views.

`POST https://api.pirsch.io/api/v1/hit/batch`

::: details EXAMPLE REQUEST
```JSON
[
    {
        // Same parameters as for singe page views, plus the time the request was made to your server.
        "time": "2023-01-02T14:15:32Z"
    },
    // ...
]
```
:::

## Sending Events

This endpoint is used to send events to Pirsch. It requires you to send information about the request made by the client. How you get this depends on the programming language and framework you're using. The example shows which fields are required and which are optional. We recommend sending all of them to make the results as accurate as possible.

`POST https://api.pirsch.io/api/v1/event`

::: info
Fields with underscores are comments.
:::

::: details EXAMPLE REQUEST
```JSON
{
    "event_name":       "Button Clicked",
    "_duration":        "event_duration is an optional number of seconds.",
    "event_duration":   42,
    "_metadata":        "event_meta is a single dimension object of scalar values (strings, numbers, and booleans).",
    "event_meta": {
        "key":             "value",
        "metadata fields": "are optional"
    },
    "_hit":                         "The fields below are the same as for hits.",
    "url":                          "https://example.com/full/url?including=parameters",
    "ip":                           "123.456.789.0",
    "user_agent":                   "User-Agent header",
    "accept_language":              "Accept-Language header (optional)",
    "sec_ch_ua":                    "Sec-CH-UA header (optional)",
	"sec_ch_ua_mobile":             "Sec-CH-UA-Mobile header (optional)",
	"sec_ch_ua_platform":           "Sec-CH-UA-Platform header (optional)",
	"sec_ch_ua_platform_version":   "Sec-CH-UA-Platform-Version header (optional)",
	"sec_ch_width":                 "Sec-CH-Width header (optional)",
    "sec_ch_viewport_width":        "Sec-CH-Viewport-Width header (optional)",
    "title":                        "Page title (optional)",
    "referrer" :                    "Referer header (optional)",
    "screen_width":                 1920,
    "screen_height":                1080
}
```
:::

It's possible to send multiple events at once. If you use the batch endpoint, make sure the events are in order or they throw off your statistics. This works well for sites that run on a single server where you can buffer events.

`POST https://api.pirsch.io/api/v1/event/batch`

::: details EXAMPLE REQUEST
```JSON
[
    {
        // Same parameters as for singe event, plus the time the request was made to your server.
        "time": "2023-01-02T14:15:32Z"
    },
    // ...
]
```
:::

## Keeping Sessions Alive

This endpoint is used to **manually** keep sessions alive. A session is normally reset if no request (hit or event) is sent within a 30 minute timeframe. This feature can be used to extend a session indefinitely. It's not recommended to use this for regular websites, but can be useful for tracking applications or other custom software.

`POST https://api.pirsch.io/api/v1/session`

::: details EXAMPLE REQUEST
```JSON
{
    "ip":                           "123.456.789.0",
    "user_agent":                   "User-Agent header",
    "sec_ch_ua":                    "Sec-CH-UA header (optional)",
	"sec_ch_ua_mobile":             "Sec-CH-UA-Mobile header (optional)",
	"sec_ch_ua_platform":           "Sec-CH-UA-Platform header (optional)",
	"sec_ch_ua_platform_version":   "Sec-CH-UA-Platform-Version header (optional)",
	"sec_ch_width":                 "Sec-CH-Width header (optional)",
    "sec_ch_viewport_width":        "Sec-CH-Viewport-Width header (optional)"
}
```
:::

It's possible to send multiple requests at once. If you use the batch endpoint, make sure the updates are in order or they throw off your statistics. This works well for sites that run on a single server where you can buffer requests.

`POST https://api.pirsch.io/api/v1/session/batch`

::: details EXAMPLE REQUEST
```JSON
[
    {
        // Same parameters as for a singe update, plus the time the request was made to your server.
        "time": "2023-01-02T14:15:32Z"
    },
    // ...
]
```
:::

## Statistics

The following endpoints can be used to read statistics from Pirsch. To receive data, you must set the filter. It is skipped in the sample requests for brevity.

### Filter

The following list contains all possible filter options. Only the required fields need to be set when making a request. Set the fields using URL query parameters, such as `?from=2021-05-08&to=2021-05-15&language=en`.

You can test whether a value is not present in the result set by prepending it with the `!` prefix, such as `?path=!/home`. To test whether a value contains a string, prefix it with `~`, such as `?path=~blog`. To test whether a value does not contain a string by prepending the `^` prefix, such as `?path=^blog`.

::: details FILTER OPTIONS
| Parameter | Required | Example | Format/Description |
| - | - | - | - |
| id | yes | A5kgYzK14m | The domain ID. Use the list endpoint to get the domain ID for the client. |
| from | yes | 2021-05-08 | YYYY-MM-DD |
| to | yes | 2021-05-15 | YYYY-MM-DD |
| from_time | no | 12:34 | Sets the start time to group results by minute in the format of HH:MM. This only applies if the start and end date (to and from) are equal. |
| to_time | no | 15:07 | Sets the end time to group results by minute in the format of HH:MM. This only applies if the start and end date (to and from) are equal. |
| tz | no | Europe/Berlin | The time zone. If not set, the default time zone for the dashboard is used. |
| start | no | 600 | Queries data for the past seconds (10 minutes in this example). The date range filters is ignored if set. The maximum is one hour (3600 seconds). |
| scale | no | week | The scale to group results. Can either be day (default), week, month, or year. |
| path | no | /home | The page path. |
| entry_path | no | /home | The entry page path. |
| exit_path | no | /yte | The exit page path. |
| pattern | no | (?i)^\\/path/[^\\/]+$ | A [regular expression](https://github.com/google/re2/wiki/Syntax) to filter and group pages. |
| event | no | Button clicked | The name of an event to filter for. |
| event_meta_key | no | Clicks | The event meta key to filter for. This field is used to break down a single event. |
| meta_(key) | no | `meta_key0=value0&meta_key1=value1` | The event metadata key and values to filter for. Multiple keys can be set by prefixing them using `meta_` and appending them to the URL. Only events with all key-value pairs are returned. |
| language | no | en | ISO-639-1 language code, like en for English. |
| country | no | jp | ISO-3166 Alpha-2 country code, like jp for Japan. |
| city | no | London | Name of a city. |
| referrer | no | https://referring-website.com/ | The referrer, usually a URL or name (note that the Pirsch dashboard does trim the protocol). |
| referrer_name | no | referring-website.com | The referrer name, usually the hostname. |
| os | no | Windows | The operating system. |
| browser | no | Firefox | The browser. |
| platform | no | desktop | The platform, desktop, mobile, or unknown (not set). |
| screen_class | no | XXL | The screen class, XXL, XL, L, M, S. |
| utm_source | no | Newsletter | The UTM source. |
| utm_medium | no | Email | The UTM medium. |
| utm_campaign | no | Summer Sale | The UTM campaign. |
| utm_content | no | Header | The UTM content. |
| utm_term | no | search terms | The UTM term. |
| custom_metric_type | no | integer | The custom metric type used to aggregate statistics. This will be used to parse the `custom_metric_key` event metadata key. It can be either `float` or `integer`. |
| custom_metric_key | no | integer | The custom metric key used to aggregate statistics. This will be used to parse the an event metadata value. Used in combination with the `custom_metric_type`. |
| tag | no | author | The tag key to filter for. This field is used to break down a single tag. |
| tag_(key) | no | `tag_key0=value0&tag_key1=value1` | The tag key and values to filter for. Multiple keys can be set by prefixing them using `tag_` and appending them to the URL. Only results with all key-value pairs are returned. |
| visitor_id | no | 1234... | Sets the visitor ID to return details for a single session. The `session_id` must also be set. |
| session_id | no | 1234... | Sets the session ID to return details for a single session. The `visitor_id` must also be set. |
| offset | no | 0 | Sets the offset for the result set. |
| limit | no | 20 | Limits the number of results, note that this is hard limited to 100. |
| include_avg_time_on_page | no | true | Set to true, to include the average time on page when reading page statistics. |
| sort | no | visitors | Sort results by given field. This is only available for pages, entry/exit pages, referrers, UTM statistics, conversion goals, events, demographics, and device statistics. |
| direction | no | desc | Sort results in ascending (asc) or descending (desc) order. This is only available for pages, entry/exit pages, referrers, UTM statistics, conversion goals, events, demographics, and device statistics. |
| search | no | /home | Search the primary field for given string (contains). For pages this is the path, for browsers the browser name, and so on. This is only available for pages, entry/exit pages, referrers, UTM statistics, conversion goals, events, demographics, and device statistics. |
:::

### Filter Options

The following endpoints return available filtering options for a time period. For brevity, only one example request and response is given.

::: details FILTER OPTIONS
```
GET /api/v1/statistics/options/referrer/name
GET /api/v1/statistics/options/hostname
GET /api/v1/statistics/options/page
GET /api/v1/statistics/options/referrer
GET /api/v1/statistics/options/event
GET /api/v1/statistics/options/country
GET /api/v1/statistics/options/region
GET /api/v1/statistics/options/city
GET /api/v1/statistics/options/language
GET /api/v1/statistics/options/metadata
GET /api/v1/statistics/options/utm/source
GET /api/v1/statistics/options/utm/medium
GET /api/v1/statistics/options/utm/campaign
GET /api/v1/statistics/options/utm/content
GET /api/v1/statistics/options/utm/term
GET /api/v1/statistics/options/tag
GET /api/v1/statistics/options/tag/value
```
:::

`/api/v1/statistics/options/tag/value` requires exactly one tag to be set in the filter.

It's possible to use an access code by setting the `access` query parameter.

`GET /api/v1/statistics/options/page?id=A5kgYzK14m&from=2022-02-01&to=2022-03-27`

::: details EXAMPLE RESPONSE
```JSON
[
    "/",
    "/some/path",
    "/other/path",
    // ...
]
```
:::

### Overview

This endpoint returns basic statistics and the number of members for given domain ID. The results are cached.

`GET /api/v1/statistics/overview?id=A5kgYzK14m`

::: details EXAMPLE RESPONSE
```JSON
{
    "visitors": 52,
    "views": 102,
    "visitor_growth": 0.02,
    "views_growth": 0.23,
    "visitors_time_series": [
        {
            "day": "2024-04-10T00:00:00Z",
            "visitors": 42,
            "views": 57,
            "sessions": 48,
            "bounces": 22,
            "bounce_rate": 0.5312,
            "cr": 0,
            "custom_metric_avg": 0,
            "custom_metric_total": 0
        },
        // ...
    ],
    "member": 4
}
```
:::

### Session Duration

`GET /api/v1/statistics/duration/session`

::: details EXAMPLE RESPONSE
Which time component is set depends on the `scale` filter. Setting it to `day` (default) sets the `day` field. Otherwise the corresponding field will be set.

```JSON
[
    {
        "day": "2021-05-12T00:00:00Z",
        "week": null,
        "month": null,
        "year": null,
        "average_time_spent_seconds": 42
    },
    // ...
]
```
:::

### Time on Page

`GET /api/v1/statistics/duration/page`

::: details EXAMPLE RESPONSE
Which time component is set depends on the `scale` filter. Setting it to `day` (default) sets the `day` field. Otherwise the corresponding field is set.

```JSON
[
    {
        "day": "2021-05-12T00:00:00Z",
        "week": null,
        "month": null,
        "year": null,
        "path" "/home",
        "average_time_spent_seconds": 42
    },
    // ...
]
```
:::

### UTM Source

`GET /api/v1/statistics/utm/source`

::: details EXAMPLE RESPONSE
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
:::

### UTM Medium

`GET /api/v1/statistics/utm/medium`

::: details EXAMPLE RESPONSE
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
:::

### UTM Campaign

`GET /api/v1/statistics/utm/campaign`

::: details EXAMPLE RESPONSE
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
:::

### UTM Content

`GET /api/v1/statistics/utm/content`

::: details EXAMPLE RESPONSE
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
:::

### UTM Term

`GET /api/v1/statistics/utm/term`

::: details EXAMPLE RESPONSE
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
:::

### Total Visitors

This endpoint returns the total number of visitors, views, sessions, bounces, bounce rate, conversion rate, and custom metrics. The difference from the visitors endpoint (see below) is that the results are not grouped by day. Manually summing visitors for multiple days gives a different result because returning visitors are counted multiple times.

`GET /api/v1/statistics/total`

::: details EXAMPLE RESPONSE
```JSON
{
    "visitors": 42,
    "views": 56,
    "sessions": 48,
    "bounces": 23,
    "bounce_rate": 0.4791,
    "cr": 0.25,
	"custom_metric_avg": 42.1,
	"custom_metric_total": 598
}
```
:::

### Total Visitors, Page Views, and Members

This endpoint returns the total number of visitors, page views, and team members. Responses are cached for up to 30 minutes.

`GET /api/v1/statistics/overview`

::: details EXAMPLE RESPONSE
```JSON
{
    "visitors": 42,
    "views": 56,
    "visitors_growth": 0.42,
    "views_growth": 0.57,
    "member": 7
}
```
:::

### Visitors

`GET /api/v1/statistics/visitor`

::: details EXAMPLE RESPONSE
Which time component is set depends on the `scale` filter. Setting it to `day` (default) sets the `day` field. Otherwise the corresponding field is set.

```JSON
[
    {
        "day": "2021-05-12T00:00:00Z",
        "week": null,
        "month": null,
        "year": null,
        "visitors": 42,
        "views": 56,
        "sessions": 48,
        "bounces": 23,
        "bounce_rate": 0.4791,
        "cr": 0.25,
        "custom_metric_avg": 42.1,
        "custom_metric_total": 598
    },
    // ...
]
```
:::

### Hostnames

`GET /api/v1/statistics/hostname`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "hostname": "example.com",
        "visitors": 42,
        "views": 56,
        "sessions": 48,
        "bounces": 23,
        "relative_visitors": 0.342,
        "relative_views": 0.298,
        "bounce_rate": 0.765
    },
    // ...
]
```
:::

### Pages

`GET /api/v1/statistics/page`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "hostname": "example.com",
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
:::

### Entry Pages

`GET /api/v1/statistics/page/entry`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "hostname": "example.com",
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
:::

### Exit Pages

`GET /api/v1/statistics/page/exit`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "hostname": "example.com",
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
:::

### Event Pages

This endpoint returns all pages on which an event was triggered. It requires the event name filter to be set.

`GET /api/v1/statistics/event/page`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "hostname": "example.com",
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
:::

### Conversion Goals

`GET /api/v1/statistics/goals`

::: details EXAMPLE RESPONSE
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
            "event_name": "event",
            "event_meta_key": "currency",
            "event_meta_value": "USD",
            "custom_metric_key": "amount",
            "custom_metric_type": "float",
            "visitor_goal": 5432,
            "cr_goal": 42.11,
            "custom_metric_total_goal": 346,
	        "custom_metric_avg_goal": 95.3,
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

`pattern` is the regex pattern stored for the conversion goal, which can be used as the `pattern` parameter in the filter. `path_pattern` is the path pattern as configured by the user in the dashboard. The `pattern` is generated from this.

`path_pattern`, `pattern` and any of the event/custom metric members are optional and `null` in case they're not set.

`custom_metric_type` can be either `integer` or `float`.

:::

### Events

This endpoint lists all events and their metadata keys. You can use the event metadata endpoint to get the values for the event and a key.

`GET /api/v1/statistics/events`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "name": "event name",
        "count": 499,
        "visitors": 432,
        "views": 563,
        "cr": 0.065,
        "average_duration_seconds": 42,
        "meta_keys": ["meta", "keys"]
    },
    // ...
]
```
:::

### Event Metadata

This endpoint breaks down the event meta keys and values for a single event. You must filter for an event name and meta key in order for this to work.

`GET /api/v1/statistics/event/meta`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "name": "event name",
        "count": 499,
        "visitors": 432,
        "views": 563,
        "cr": 0.065,
        "average_duration_seconds": 42,
        "meta_value": "value",
    },
    // ...
]
```
:::

### Listing Events

This endpoint lists all events, including metadata. Note that this can be an expensive operation if you select events without filtering. Events are grouped by name and metadata. We recommend filtering by path ("all events on this page") and optionally by metadata key-value pairs.

`GET /api/v1/statistics/event/list`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "name": "Read article",
        "meta": {
            "title": "How We Develop and Operate Pirsch"
        },
        "visitors": 123,
        "count": 237
    },
    {
        "name": "Read article",
        "meta": {
            "title": "How to Track the Reading Time of Blog Articles and Registrations"
        },
        "visitors": 98,
        "count": 105
    },
    // ...
]
```
:::

### Growth Rates

`GET /api/v1/statistics/growth`

::: details EXAMPLE RESPONSE
```JSON
{
    "visitors_growth": 0.34,
    "views_growth": -0.05,
    "sessions_growth": 0.32,
    "bounces_growth": 0.65,
    "time_spent_growth": 0.45,
    "cr_growth": 0.22,
	"custom_metric_avg_growth": 0.09,
	"custom_metric_total_growth": 0.11
}
```
:::

### Active Visitors

Returns active visitors and pages for the past **n** seconds. **n** can be defined by passing the `start` query parameter and is set to 10 minutes by default.

Return the active visitors for the last minute.

`GET /api/v1/statistics/active?start=60`

::: details EXAMPLE RESPONSE
```JSON
{
    "stats": [
        {
            "hostname": "example.com",
            "path": "/home",
            "visitors": 42
        },
        // ...
    ],
    "countries": [
        {
            "visitors": 42,
            "relative_visitors": 0.24,
            "country_code": "jp"
        },
        // ...
    ],
    "visitors": 298
}
```
:::

### Visitors by Time of Day

`GET /api/v1/statistics/hours`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "hour": 0,
        "visitors": 42,
        "views": 56,
        "sessions": 48,
        "bounces": 23,
        "bounce_rate": 0.4791,
        "cr": 0.25,
        "custom_metric_avg": 42.1,
        "custom_metric_total": 598
    },
    {
        "hour": 1,
        "visitors": 29,
        "views": 52,
        "sessions": 21,
        "bounces": 19,
        "bounce_rate": 0.3219,
        "cr": 0.25,
        "custom_metric_avg": 42.1,
        "custom_metric_total": 598
    },
    // ...
]
```
:::

### Visitors by Minute

`GET /api/v1/statistics/minutes`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "minute": 0,
        "visitors": 42,
        "views": 56,
        "sessions": 48,
        "bounces": 23,
        "bounce_rate": 0.4791,
        "cr": 0.25,
        "custom_metric_avg": 42.1,
        "custom_metric_total": 598
    },
    {
        "minute": 1,
        "visitors": 29,
        "views": 52,
        "sessions": 21,
        "bounces": 19,
        "bounce_rate": 0.3219,
        "cr": 0.25,
        "custom_metric_avg": 42.1,
        "custom_metric_total": 598
    },
    // ...
]
```
:::

### Visitors by Weekday and Time

This endpoint returns visitors grouped by weekday and the full hour. Monday is `0`.

`GET /api/v1/statistics/weekdays`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "weekday": 0,
        "hour": 0,
        "visitors": 42,
        "views": 56,
        "sessions": 48,
        "bounces": 23
    },
    {
        "weekday": 0,
        "hour": 1,
        "visitors": 22,
        "views": 31,
        "sessions": 24,
        "bounces": 5
    },
    // ...
]
```
:::

### Languages

`GET /api/v1/statistics/language`

::: details EXAMPLE RESPONSE
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
:::

### Referrer

`GET /api/v1/statistics/referrer`

::: details EXAMPLE RESPONSE
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
:::

### Operating System

`GET /api/v1/statistics/os`

::: details EXAMPLE RESPONSE
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
:::

### Operating System Version

`GET /api/v1/statistics/os`

::: details EXAMPLE RESPONSE
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
:::

### Browser

`GET /api/v1/statistics/browser`

::: details EXAMPLE RESPONSE
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
:::

### Browser Version

`GET /api/v1/statistics/browser/version`

::: details EXAMPLE RESPONSE
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
:::

### Country

`GET /api/v1/statistics/country`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "country_code": "jp"
    },
    // ...
]
```
:::

### Region

`GET /api/v1/statistics/region`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "country_code": "jp",
        "region": "Tokyo"
    },
    // ...
]
```
:::

### City

`GET /api/v1/statistics/city`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "visitors": 42,
        "relative_visitors": 0.24,
        "country_code": "jp",
        "region": "Tokyo",
        "city": "London"
    },
    // ...
]
```
:::

### Platform

`GET /api/v1/statistics/platform`

::: details EXAMPLE RESPONSE
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
:::

### Screen Classes

`GET /api/v1/statistics/screen`

::: details EXAMPLE RESPONSE
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
:::

### Tags

This endpoint returns a list of tag keys. To break down a single tag, use `/api/v1/statistics/tag/details`.

`GET /api/v1/statistics/tags`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "key": "author",
	    "visitors": 42,
	    "views": 57,
	    "relative_visitors": 0.24,
	    "relative_views": 0.35
    },
    // ...
]
```
:::

### Tag Breakdown

This endpoint returns a breakdown for a single tag.

`GET /api/v1/statistics/tag/details`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "key": "author",
        "value": "Alice",
	    "visitors": 42,
	    "views": 57,
	    "relative_visitors": 0.24,
	    "relative_views": 0.35
    },
    // ...
]
```
:::

### Funnels

This endpoint returns a funnel including its definition and data for the selected period. Other filter parameters do not have an effect on it.

Funnels need to be definied before they can be queried. The `funnel_id` query parameter must be set in addition to the filter period and domain ID.

`GET /api/v1/statistics/funnel`

::: details EXAMPLE RESPONSE
```JSON
{
    "definition": {
        // see "Managing Funnels"
    },
	"data": [
        {
            "step": 1,
            "visitors": 123,
            "relative_visitors": 1,
            "previous_visitors": 0,
            "relative_previous_visitors": 0,
            "dropped": 0,
            "drop_off": 0
        },
        {
            "step": 2,
            "visitors": 50,
            "relative_visitors": 0.43,
            "previous_visitors": 123,
            "relative_previous_visitors": 1,
            "dropped": 73,
            "drop_off": 0.57
        },
        // ...
    ]
}
```
:::

### Sessions

This endpoint returns a list of sessions for the given filter. The `visitor_id` is a string, as the number is too big for JavaScript/JSON (unsigned integer 64 bit).

`GET /api/v1/statistics/session/list`

::: details EXAMPLE RESPONSE
```JSON
[
    {
	    "visitor_id": "12345...",
	    "session_id": 12345,
	    "time": "2024-04-10T15:16:56Z",
	    "start": "2024-04-10T15:03:31Z",
	    "duration_seconds": 42,
	    "entry_path": "/",
	    "exit_path": "/pricing",
	    "page_views": 4,
	    "is_bounce": false,
	    "entry_title": "Home",
	    "exit_title": "Pricing",
	    "language": "en",
	    "country_code": "us",
	    "city": "San Francisco",
	    "referrer": "https://google.com",
	    "referrer_name": "Google",
	    "referrer_icon": "",
	    "os": "Windows",
	    "os_version": "11.0",
	    "browser": "Firefox",
	    "browser_version": "124.0",
	    "desktop": true,
	    "mobile": false,
	    "screen_class": "XXL",
	    "utm_source": "",
	    "utm_medium": "",
	    "utm_campaign": "",
	    "utm_content": "",
	    "utm_term": "",
	    "extended": 0
    },
    // ...
]
```
:::

### Session Breakdown

This endpoint breaks down a single session and returns all page views and events in chronological order. The `visitor_id` and `session_id` for the filter must both be set.

`GET /api/v1/statistics/session/details`

::: details EXAMPLE RESPONSE
```JSON
[
    {
	    "page_view": {
	        "visitor_id": 12345,
	        "session_id": 12345,
	        "time": "2024-04-10T15:16:56Z",
	        "duration_seconds": 0,
	        "path": "/",
	        "title": "Home",
	        "language": "en",
	        "country_code": "us",
	        "city": "San Francisco",
	        "referrer": "https://google.com",
	        "referrer_name": "Google",
	        "referrer_icon": "",
	        "os": "Windows",
	        "os_version": "11.0",
            "browser": "Firefox",
            "browser_version": "124.0",
            "desktop": true,
            "mobile": false,
            "screen_class": "XXL",
            "utm_source": "",
            "utm_medium": "",
            "utm_campaign": "",
            "utm_content": "",
            "utm_term": "",
	        "tag_keys": ["author", "abtest"],
	        "tag_values": ["John", "a"]
        },
	    "event": null
    },
    {
	    "page_view": null,
	    "event": {
            "visitor_id": 12345,
	        "session_id": 12345,
	        "time": "2024-04-10T15:16:56Z",
            "name": "event",
            "meta_keys": ["key"],
            "meta_values": ["value"],
            "duration_seconds": 42,
            "path": "/",
	        "title": "Home",
	        "language": "en",
	        "country_code": "us",
	        "city": "San Francisco",
            "referrer": "https://google.com",
	        "referrer_name": "Google",
	        "referrer_icon": "",
	        "os": "Windows",
	        "os_version": "11.0",
            "browser": "Firefox",
            "browser_version": "124.0",
            "desktop": true,
            "mobile": false,
            "screen_class": "XXL",
            "utm_source": "",
            "utm_medium": "",
            "utm_campaign": "",
            "utm_content": "",
            "utm_term": ""
        }
    },
    // ...
]
```
:::

### Keywords

This endpoints requires the [Google Search Console integration](/integrations/search-console).

::: info
We recommend using the Search Console API directly instead of calling it through Pirsch.
:::

`GET /api/v1/statistics/keywords`

::: details EXAMPLE RESPONSE
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
:::

### Exporting Statistics to CSV

This endpoint exports a selection of statistics to CSV inside a zip file.

`GET /api/v1/statistics`

The query parameters are:

| Parameter | Required | Format |
| - | - | - |
| id | Yes | String |
| access | No | Access key. |
| from | Yes | YYYY-MM-DD |
| to | Yes | YYYY-MM-DD |
| visitors | No | `true` or `1` |
| pages | No | `true` or `1` |
| session_duration | No | `true` or `1` |
| growth | No | `true` or `1` |
| languages | No | `true` or `1` |
| referrer | No | `true` or `1` |
| os | No | `true` or `1` |
| browser | No | `true` or `1` |
| country | No | `true` or `1` |
| region | No | `true` or `1` |
| city | No | `true` or `1` |
| platform | No | `true` or `1` |
| screen | No | `true` or `1` |
| utm | No | `true` or `1` |
| conversion_goals | No | `true` or `1` |
| events | No | `true` or `1` |
| tags | No | `true` or `1` |
| hostname | No | `true` or `1` |

### Deleting Statistics

This endpoint deletes data asynchronously for given domain ID and dates.

The kind can be left empty to delete everything or set to:

* `all` to delete statistics collected by Pirsch (excluding imported statistics)
* `events` to only delete events or
* `imported` to only delete imported statistics

`DELETE /api/v1/statistics`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
	"kind": "",
	"from": "2024-01-01",
	"to": "2024-02-15"
}
```
:::

## Managing Domains

Domains can be managed by creating a user client (on the account settings page).

### Getting the Domain ID

Most API endpoints require you to set a domain ID. We call them domains, but you can also think of them as a single dashboard. The terms are used interchangeably.

For clients created for a dashboard, only one domain is returned. For clients created on the account settings page, this endpoint returns all domains that you have access to.

Don't forget to set the access token or access key in the `Authorization` header: `Bearer <oAuth access token or access key>`.

`GET /api/v1/domain`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "user_id": "pzy1bjD1lv",
        "organization_id": null,
        "hostname": "example.com",
        "subdomain": "example",
        "identification_code": "oSdiAe...",
        "public": false,
        "google_user_id": null,
        "google_user_email": null,
        "gsc_domain": null,
        "new_owner": null,
        "timezone": "Europe/Berlin",
	    "group_by_title": false,
	    "active_visitors_seconds": 600,
        "disable_scripts": false,
        "statistics_start": null,
        "imported_statistics": false,
        "metadata": {},
        "theme_id": "x98y1bjAm72",
	    "theme": {
            // key value pairs
        },
        "custom_domain": "my.custom-domain.com",
        "user_role": "Owner", // Admin, Viewer
        "settings": {},
        "theme_settings": {
            // key value pairs
        },
        "display_name": "My Website",
        "subscription_active": true
    }
]
```
:::

### Creating a Domain

This endpoint adds a new domain. Only the `hostname`, `subdomain`, and `timezone` are required. The other fields are optional and can be changed later using other API endpoints. They are just here to set some configuration options when creating the dashboard instead of requiring multiple API requests.

`POST /api/v1/domain`

::: details EXAMPLE REQUEST
```JSON
{
    "hostname": "example.com",
    "subdomain": "example",
    "timezone": "Europe/Berlin",
    "organization_id": null,
    "theme_id": null,
    "public": false,
	"group_by_title": false,
	"active_visitors_seconds": 0,
	"disable_scripts": false,
	"display_name": "",
	"traffic_spike_threshold": 0,
	"traffic_warning_threshold_days": 0
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "user_id": "pzy1bjD1lv",
    "organization_id": null,
    "hostname": "example.com",
    "subdomain": "example",
    "identification_code": "oSdiAe...",
    "public": false,
    "google_user_id": null,
    "google_user_email": null,
    "gsc_domain": null,
    "new_owner": null,
    "timezone": "Europe/Berlin",
    "group_by_title": false,
    "active_visitors_seconds": 600,
    "disable_scripts": false,
    "statistics_start": null,
    "imported_statistics": false,
    "metadata": {},
    "theme_id": "x98y1bjAm72",
    "theme": {
        // key value pairs
    },
    "custom_domain": "my.custom-domain.com",
    "user_role": "Owner", // Admin, Viewer
    "settings": {},
    "theme_settings": {
        // key value pairs
    },
    "display_name": "My Website",
    "subscription_active": true
}
```
:::

### Deleting a Domain

This endpoint deletes a domain.

`DELETE /api/v1/domain?id=A5kgYzK14m`

### Listing Domains

This endpoint is described in more detail in the [Statistics section](/api-sdks/api#getting-the-domain-id). It returns all domains for a user client or a specific domain for the ID, subdomain, custom domain, or access code.

```
GET /api/v1/domain?id=A5kgYzK14m
GET /api/v1/domain?subdomain=example
GET /api/v1/domain?domain=my-domain.com
GET /api/v1/domain?access=03kDM6o...
```

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "user_id": "pzy1bjD1lv",
    "organization_id": null,
    "hostname": "example.com",
    "subdomain": "example",
    "identification_code": "oSdiAe...",
    "public": false,
    "google_user_id": null,
    "google_user_email": null,
    "gsc_domain": null,
    "new_owner": null,
    "timezone": "Europe/Berlin",
    "group_by_title": false,
    "active_visitors_seconds": 600,
    "disable_scripts": false,
    "statistics_start": null,
    "imported_statistics": false,
    "metadata": {},
    "theme_id": "x98y1bjAm72",
    "theme": {
        // key value pairs
    },
    "custom_domain": "my.custom-domain.com",
    "user_role": "Owner", // Admin, Viewer
    "settings": {},
    "theme_settings": {
        // key value pairs
    },
    "display_name": "My Website",
    "subscription_active": true
}
```
:::

### Resetting the Identification Code

This endpoint resets the identification code for the domain and return a new one.

`PUT /api/v1/domain`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "identification_code": "..."
}
```
:::

### Updating the Hostname

This endpoint updates the hostname for your domain.

`POST /api/v1/domain/hostname`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "hostname": "new-hostname.com"
}
```
:::

### Updating the Subdomain

This endpoint updates the subdomain for your dashboard (on `your-sub-domain.pirsch.io`).

`POST /api/v1/domain/subdomain`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "subdomain": "new-subdomain"
}
```
:::

### Toggle the Visiblity of Your Dashboard

This endpoint toggles the visibility of your dashboard from private to public or vice versa.

`POST /api/v1/domain/public`

::: details EXAMPLE RESPONSE
```JSON
{
    "domain_id": "A5kgYzK14m"
}
```
:::

### Disable Scripts

This endpoint toggles the option to send data via scripts for a given domain.

`POST /api/v1/domain/scripts`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m"
}
```
:::

### Toggle Grouping by Title

This endpoint toggles if statistics are grouped by page title.

`POST /api/v1/domain/title`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m"
}
```
:::

### Changing the Active Visitors Time

This endpoint changes the time in seconds that visitors are considered active on your site.

`POST /api/v1/domain/active`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "time": 123
}
```
:::

### Changing the Time Zone

This endpoint changes the time zone for the dashboard.

`POST /api/v1/domain/timezone`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "timezone": "Europe/Berlin"
}
```
:::

### Updating the metadata field.

This endpoint will update the metadata field. The field can be used to store user defined tags or configuration. Do what you want with it.

`POST /api/v1/domain/metadata`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "metadata": {
        // generic object
    }
}
```
:::

### Setting a Domain as Favorite

This endpoint sets one of your domains as a favorite. This requires a user client.

`POST /api/v1/user/favorite`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m"
}
```
:::

### Pinning a Domain

This endpoint pins a domain. This requires a user client.

`POST /api/v1/user/pin`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m"
}
```
:::

### Showing Active Visitors in the Page Title

This endpoint toggles whether or not to display active visitors in the page title (tab).

`POST /api/v1/user/active`

### Toggle Full Width

This endpoint toggles displaying the dashboard at full width.

`POST /api/v1/user/fullwidth`

## Managing Access Links

### Listing Access Links

This endpoint lists all access links.

`GET /api/v1/domain/link?domain_id=A5kgYzK14m`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "A5kgYzK14m",
        "code": "...",
        "description": "...",
        "valid_until": "2021-06-01T00:00:00.000000Z"
    },
    // ...
]
```

The code can be used to create a URL with read-only access to a domain. To do that, replace `<subdomain>` and `<code` for the domain in the following URL: `https://<subdomain>.pirsch.io/?access=<code>`
:::

### Set Base Theme

This endpoint sets the base theme for a dashboard. The settings from the theme will be overwritten by specific settings for the dashboard.

`PUT /api/v1/domain/theme`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "theme_id": "83MD02kxoe"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    // key value pairs with the theme settings
}
```
:::

### Update the Theme Settings

This endpoint updates the theme settings for given domain. The settings will overwrite the base theme.

`POST /api/v1/domain/theme`

::: details EXAMPLE REQUEST
```
FormData:

logo_light: File
logo_dark: File
favicon: File
data: JSON {
    "domain_id": "A5kgYzK14m",
    "settings": {
        // key value pairs
    }
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    // complete domain with the updated settings
}
```
:::

### Set a Custom Domain

This endpoint updates the custom domain for given dashboard.

`POST /api/v1/domain/custom`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "hostname": "my-domain.com"
}
```
:::

### Check Whether a Custom Domain Exists

This endpoint checks whether a custom domain exists already. A custom domain can only be used for a single dashboard.

`GET /api/v1/domain/custom?domain=my-domain.com`

### Creating an Access Link

This endpoint creates a new access link. You can leave the `valid_until` date empty if you don't want the link to expire.

`POST /api/v1/domain/link`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "description": "...",
    "valid_until": "2024-10-01T00:00:00.000000Z"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "A5kgYzK14m",
    "code": "...",
    "description": "..."
}
```
:::

### Updating an Access Link

This endpoint updates an existing access link. You can leave the `valid_until` date empty if you don't want the link to expire.

`PUT /api/v1/domain/link`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
    "description": "...",
    "valid_until": "2024-10-01T00:00:00.000000Z"
}
```
:::

### Deleting an Access Link

This endpoint deletes an access link.

`DELETE /api/v1/domain/link?id=0DJ0mo934`

## Managing Members and Permissions

### Listing Members

This endpoint lists all members for a domain or an organization.

```
GET /api/v1/member?id=A5kgYzK14m
GET /api/v1/member?organization_id=kco39ID2
```

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "user_id": "pzy1bjD1lv",
        "domain_id": "A5kgYzK14m",
        "organization_id": "kco39ID2",
        "role": "admin",
        "user": {
            "id": "0DJ0mo934",
            "email": "...",
            "full_name": "...",
            "picture": "..."
        }
    },
    // ...
]
```
:::

### Inviting Members

This endpoint invites new members to a domain or an organization via email. New members have the **Viewer** role. They'll receive an account activation if they don't have an account yet.

`POST /api/v1/member`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
    "organization_id": null,
    "emails": ["member@foo.com", "member@bar.com" /* ... */]
}
```

`id` is the domain ID. Either the `id` or `organization_id` must be set.
:::

### Updating the Role of a Member

This endpoint updates a single member's role. Valid roles are **Viewer** and **Admin** (the **Owner** role requires a domain transfer). This works for domains and organizations.

`PUT /api/v1/member`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
    "role": "admin"
}
```

`id` is the member ID.
:::

### Removing a Member

This endpoint removes a member from a domain or an organization.

`DELETE /api/v1/member?id=0DJ0mo934`

### Listing Invitations

This endpoint lists all invitations for the user, a domain, or an organization.

```
GET /api/v1/invitation
GET /api/v1/invitation?domain_id=A5kgYzK14m
GET /api/v1/invitation?organization_id=39oOw9mKD31
```

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "I309Dow31",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "A5kgYzK14m",
        "organization_id": null,
        "email": "user@example.com",
        "domain": {
            // complete domain
        },
        "organization": null // or complete organization if ID is set
    },
    // ...
]
```
:::

### Deleting an Invitation

This endpoint deletes an invitation to a domain or an organization.

`DELETE /api/v1/invitation`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "organization_id": null,
    "id": "I309Dow31"
}
```

`domain_id` and `organization_id` are optional. They are used to look up the invitationf or a domain or an organization instead of the currently signed in user.
:::

### Accepting an Invitation

This endpoint will accept an invitation for the currently signed in user.

`POST /api/v1/invitation`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "I309Dow31"
}
```
:::

## Managing Alternative Domains

Alternative domains allow you to add additional traffic sources. By default, Pirsch will block a request that doesn't come from the domain configured on the dashboard. For example, if you want to create a roll-up view, you will need to add any domain that could send traffic to the dashboard as an additional domain.

Always add the domain alternatives at the **receiving** end.

### Listing Alternative Domains

This endpoint returns all alternative domains associated with a website.

`GET /api/v1/domain/alternative?domain_id=0DJ0mo934`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "0DJ0mo934",
        "hostname": "alternative.domain.com"
    },
    // ...
]
```
:::

### Creating Alternative Domains

This endpoint creates a new alternate domain for a Website.

`POST /api/v1/domain/alternative`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934",
    "hostname": "alternative.domain.com"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "0DJ0mo934",
    "hostname": "alternative.domain.com"
}
```
:::

### Updating Alternative Domains

This endpoint updates the hostname for an alternative domain.


`PUT /api/v1/domain/alternative`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
    "hostname": "new-alternative.domain.com"
}
```
:::

### Deleting Alternative Domains

This endpoint deletes an alternative domain by ID.

`DELETE /api/v1/domain/alternative?id=A5kgYzK14m`

## Managing Snippets

The snippets can be customized for advanced usage. There are two snippet configurations: `page view` and `event`.

### Updating a Snippet

This endpoint updates a snippet for a domain and type. The type can either be `page view` or `event`.

`POST /api/v1/domain/snippet`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "type": "page view",
	"dev": true,
	"include": "\/include,\/path\/.*",
	"exclude": "\/exclude,\/path\/.*",
	"domains": "example.com,domain.com",
	"endpoint": "https://pirsch.proxy.com/hit",
	"sample": "/sample,/paths"
}
```
:::

### Getting a Snippet

This endpoint returns the snippet details for a domain and type. The type can be either `page view`, `event`, or `session`.

`GET /api/v1/domain/snippet?domain_id=A5kgYzK14m&type=event`

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "9do3JD31z",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "A5kgYzK14m",
    "type": "event",
	"dev": true,
	"include": "\/include,\/path\/.*",
	"exclude": "\/exclude,\/path\/.*",
	"domains": "example.com,domain.com",
	"endpoint": "https://pirsch.proxy.com/hit",
	"sample": "/sample,/paths"
}
```
:::

## Managing Clients

It's possible to manage domain clients with a user client.

### Listing Clients

This endpoint lists all clients.

`GET /api/v1/client?id=0DJ0mo934`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "0DJ0mo934",
        "client_id": "...", // 32 characters
        "description": "...",
        "scope_hit": "w",
        "scope_event": "w",
        "scope_session": "w",
        "scope_statistics": "r",
        "scope_domains": "w",
        "scope_organizations": "w",
	    "scope_themes": "w",
	    "scope_billing": "r"
    },
    // ...
]
```
:::

### Creating a Client

This endpoint creates a new client.

`POST /api/v1/client`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934",
    "type": "token",
    "description": "...",
    "scope_hit": "w",
    "scope_event": "w",
    "scope_session": "w",
    "scope_statistics": "r",
    "scope_domains": "w",
    "scope_organizations": "w",
    "scope_themes": "w",
    "scope_billing": "r"
}
```
:::

The type can either be `oauth` or `token`. `oauth` will create an oAuth client with a client ID and secret that can be used to read and write data. The `token` type is read-only and typically used to send statistics.

Scopes can grant read or write access. The table below shows the possible values for available scopes.

| Scope | Read | Write |
| - | - | - |
| hit | | x |
| event | | x |
| session | | x |
| statistics | x | |
| domains | x | x |
| organizations | x | x |
| themes | x | x |
| billing | x | |

The `domains` scope has two different meanings, depending on whether it's used for a domain or a user client:

* For user clients, it provides access to most user actions, such as creating or deleting domains and settings.
* For domain clients, it provides access to domain-specific settings, such as the subdomain or access links.

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "0DJ0mo934",
    "client_id": "...", // 32 characters
    "client_secret": "...", // 64 characters
    "description": "...",
    "scope_hit": "w",
    "scope_event": "w",
    "scope_session": "w",
    "scope_statistics": "r",
    "scope_domains": "w",
    "scope_organizations": "w",
    "scope_themes": "w",
    "scope_billing": "r"
}
```
:::

### Updating a Client

This endpoint updates the description for a client.

`POST /api/v1/client`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
    "description": "..."
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "0DJ0mo934",
    "client_id": "...", // 32 characters
    "description": "...",
    "scope_hit": "w",
    "scope_event": "w",
    "scope_session": "w",
    "scope_statistics": "r",
    "scope_domains": "w",
    "scope_organizations": "w",
    "scope_themes": "w",
    "scope_billing": "r"
}
```
:::

### Deleting a Client

This endpoint deletes a client.

`DELETE /api/v1/client?id=A5kgYzK14m`

## Managing Email Reports

### Listing Email Reports

This endpoint lists all email reports.

`GET /api/v1/report?id=0DJ0mo934`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "0DJ0mo934",
        "email": "...",
        "interval": 2,
        "link_to": "custom",
        "next_report": "2021-05-22T10:11:12.123456Z"
    },
    // ...
]
```
:::

### Creating Email Reports

This endpoint creates a new email report.

`link_to` sets the link to the dashboard within the email report. By default, it will link to the private dashboard (dashboard.pirsch.io). In order for it to link to public dashboards or custom domains, they need to be configured. Otherwise, the report will fall back to the private dashboard.

`POST /api/v1/report`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934",
    "emails": ["member@foo.com", "member@bar.com"],
    "interval": 1, // weeks or 0 for daily
    "link_to": "dashboard" // empty/dashboard, public, custom
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "0DJ0mo934",
        "email": "...",
        "interval": 1,
        "link_to": "dashboard",
        "next_report": "2021-05-22T10:11:12.123456Z"
    },
    // ...
]
```
:::

### Updating an Email Report

This endpoint updates an existing email report.

`PUT /api/v1/report`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
    "interval": 4, // weeks or 0 for daily
    "link_to": "public" // empty/dashboard, public, custom
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "0DJ0mo934",
    "email": "...",
    "interval": 4,
    "link_to": "public",
    "next_report": "2021-05-22T10:11:12.123456Z"
}
```
:::

### Deleting an Email Report

This endpoint deletes an email report.

`DELETE /api/v1/report?id=A5kgYzK14m`

## Managing Webhooks

### Listing Webhooks

This endpoint lists all webhooks.

`GET /api/v1/webhook?domain_id=0DJ0mo934`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "0DJ0mo934",
	    "description": "Description",
	    "event": "event_name",
	    "endpoint": "https://example.com/api/webhook",
	    "active": true
    },
    // ...
]
```
:::

### Creating/Updating Webhooks

This endpoint creates or updates a webhook. Updating an exising webhooks, even if no fields are changed, will activate it again if it has been disabled due to failed requests.

`POST /api/v1/webhook`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m", // updates the webhook if set
    "domain_id": "0DJ0mo934",
    "description": "Description",
    "event": "event_name",
    "endpoint": "https://example.com/api/webhook"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "0DJ0mo934",
    "description": "Description",
    "event": "event_name",
    "endpoint": "https://example.com/api/webhook",
    "active": true
}
```
:::

### Deleting Webhooks

This endpoint will delete a webhook.

`DELETE /api/v1/webhook?id=A5kgYzK14m`

## Managing Traffic Filters

### Listing Filters

This endpoint lists all traffic filters.

`GET /api/v1/filter?domain_id=0DJ0mo934`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "0DJ0mo934",
	    "type": "ip",
	    "description": "IP Address Filter",
	    "filter": "89.56.99.71"
    },
    // ...
]
```
:::

### Creating/Updating Traffic Filters

This endpoint creates or updates a traffic filter.

`POST /api/v1/filter`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m", // updates the filter if set
    "domain_id": "0DJ0mo934",
    "type": "ip",
    "description": "Description",
	"filter": "89.56.99.71"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "0DJ0mo934",
    "type": "ip",
    "description": "IP Address Filter",
    "filter": "89.56.99.71"
}
```
:::

### Deleting a Traffic Filter

This endpoint deletes a traffic filter.

`DELETE /api/v1/filter?id=A5kgYzK14m`

## Managing Traffic Spike Notifications

### Enabling/Disabling Traffic Spike Notifications

This endpoint will toggle traffic spike notifications.

`PUT /api/v1/traffic/spike`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934"
}
```
:::

### Configuring Traffic Spike Notifications

This endpoint will configure traffic spike notifications. Don't forget to enable them using the endpoint above. `threshold` is the number of unique visitors that need to be on the site at the same time to trigger the warning.

`POST /api/v1/traffic/spike`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934",
    "threshold": 100
}
```
:::

## Managing Traffic Warnings

### Enabling/Disabling Traffic Warnings

This endpoint will toggle traffic warnings.

`PUT /api/v1/traffic/warning`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934"
}
```
:::

### Configuring Traffic Warnings

This endpoint will configure traffic warnings. Don't forget to enable them using the endpoint above. `threshold` is the number of days that might pass before a notification is send.

`POST /api/v1/traffic/warning`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934",
    "threshold": 5
}
```
:::

## Managing Conversion Goals

### Listing Conversion Goals

This endpoint lists all conversion goals.

`GET /api/v1/goal?id=0DJ0mo934`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "0DJ0mo934",
        "name": "...",
        "path_pattern": "...", // regex, null if not set
        "pattern": "/checkout/**", // or null if not set
        "event_name": "event", // or null if not set
        "event_meta_key": "currency", // or null if not set
        "event_meta_value": "USD", // or null if not set
        "custom_metric_key": "amount", // or null if not set
        "custom_metric_type": "float", // integer, float, or null if not set
        "visitor_goal": 123, // or null if not set
        "cr_goal": 1.23, // or null if not set
        "custom_metric_total_goal": 346, // or null if not set
        "custom_metric_avg_goal": 95.3, // or null if not set
        "delete_reached": false,
        "email_reached": true
    },
    // ...
]
```
:::

### Creating a Conversion Goal

This endpoint creates a new conversion goal.

`POST /api/v1/goal`

Either the `path_pattern` and/or event fields must be set.

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934",
    "name": "...",
    "path_pattern": "/checkout/**", // or null
    "event_name": "event", // or null
    "event_meta_key": "currency", // or null
    "event_meta_value": "USD", // or null
    "custom_metric_key": "amount", // or null
    "custom_metric_type": "float", // integer, float, or null
    "visitors": 123, // 0 to pass
    "cr": 1.23, // 0 to pass
    "custom_metric_total_goal": 346, // 0 to pass
    "custom_metric_avg_goal": 95.3, // 0 to pass
    "delete_reached": false,
    "email_reached": true
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "0DJ0mo934",
    "name": "...",
    "path_pattern": "...", // regex or null if not set
    "pattern": "/checkout/**", // or null if not set
    "event_name": "event", // or null if not set
    "event_meta_key": "currency", // or null if not set
    "event_meta_value": "USD", // or null if not set
    "custom_metric_key": "amount", // or null if not set
    "custom_metric_type": "float", // integer, float, or null
    "visitor_goal": 123, // or null if not set
    "cr_goal": 1.23, // or null if not set
    "custom_metric_total_goal": 346, // or null if not set
    "custom_metric_avg_goal": 95.3, // or null if not set
    "delete_reached": false,
    "email_reached": true
}
```
:::

### Updating a Conversion Goal

This endpoint updates an existing converion goal.

`PUT /api/v1/goal`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
    "domain_id": "0DJ0mo934",
    "name": "...",
    "path_pattern": "/checkout/**", // or null
    "event_name": "event", // or null
    "event_meta_key": "currency", // or null
    "event_meta_value": "USD", // or null
    "custom_metric_key": "amount", // or null
    "custom_metric_type": "float", // integer, float, or null
    "visitors": 123, // 0 to pass
    "cr": 1.23, // 0 to pass
    "custom_metric_total_goal": 346, // 0 to pass
    "custom_metric_avg_goal": 95.3, // 0 to pass
    "delete_reached": false,
    "email_reached": true
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "0DJ0mo934",
    "name": "...",
    "path_pattern": "...", // regex or null if not set
    "pattern": "/checkout/**", // or null if not set
    "event_name": "event", // or null if not set
    "event_meta_key": "currency", // or null if not set
    "event_meta_value": "USD", // or null if not set
    "custom_metric_key": "amount", // or null if not set
    "custom_metric_type": "float", // integer, float, or null
    "visitor_goal": 123, // or null if not set
    "cr_goal": 1.23, // or null if not set
    "custom_metric_total_goal": 346, // or null if not set
    "custom_metric_avg_goal": 95.3, // or null if not set
    "delete_reached": false,
    "email_reached": true
}
```
:::

### Deleting a Conversion Goal

This endpoint deletes a conversion goal.

`DELETE /api/v1/goal?id=A5kgYzK14m`

### Testing the Regular Expression for a Conversion Goal

This endpoint tests whether a regular expression is valid for a conversion goal. Use it to see if you can use an expression before creating or updating a conversion goal.

`POST /api/v1/goal/regex`

::: details EXAMPLE REQUEST
```JSON
{
    "regex": "(?i)^/regular/expression/[^/]*$",
    "sample": "/regular/expression/example"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "match": true
}
```
:::

An error is returned if the expression is invalid. Otherwise, it returns if the regular expression matches the pattern.

## Managing Funnels

### Listing Funnels

This endpoint lists all funnels.

`GET /api/v1/funnel?id=0DJ0mo934`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "0DJ0mo934",
        "name": "Funnel",
        "steps": [
            {
                "id": "i4OMo204x",
                "def_time": "2021-05-22T10:11:12.123456Z",
                "mod_time": "2021-05-22T10:11:12.123456Z",
                "funnel_id": "A5kgYzK14m",
                "name": "Step 1",
                "step": 0, // starting at 0
                "filter": {
                    "path": [ /*...*/ ],
                    "entry_path": [ /*...*/ ],
                    "exit_path": [ /*...*/ ],
                    "path_pattern": [ /*...*/ ],
                    "path_regex": [ /*...*/ ],
                    "language": [ /*...*/ ],
                    "country": [ /*...*/ ],
                    "region": [ /*...*/ ],
                    "city": [ /*...*/ ],
                    "referrer": [ /*...*/ ],
                    "referrer_name": [ /*...*/ ],
                    "os": [ /*...*/ ],
                    "os_version": [ /*...*/ ],
                    "browser": [ /*...*/ ],
                    "browser_version": [ /*...*/ ],
                    "platform": "desktop", // desktop, mobile
                    "screen_class": [ /*...*/ ],
                    "utm_source": [ /*...*/ ],
                    "utm_medium": [ /*...*/ ],
                    "utm_campaign": [ /*...*/ ],
                    "utm_content": [ /*...*/ ],
                    "utm_term": [ /*...*/ ],
                    "tags": { /* key-value pairs */ },
                    "tag": [ /*...*/ ],
                    "event_name": [ /*...*/ ],
                    "event_meta_key": [ /*...*/ ],
                    "event_meta": : { /* key-value pairs */ }
                }
            },
            // ...
        ]
    },
    // ...
]
```
:::

### Creating and Updating a Funnel

This endpoint creates or updates a funnel. If the ID is set, the funnel will be updated, otherwise a new funnel is created.

`POST /api/v1/funnel`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934",
    "id": "A5kgYzK14m", // optional
    "name": "Funnel",
    "steps": [
        {
            "name": "Step 1",
            "filter": {
                // filter fields
            }
        },
        // ...
    ]
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "0DJ0mo934",
    "name": "Funnel",
    "steps": [
        {
            "id": "i4OMo204x",
            "def_time": "2021-05-22T10:11:12.123456Z",
            "mod_time": "2021-05-22T10:11:12.123456Z",
            "funnel_id": "A5kgYzK14m",
            "name": "Step 1",
            "step": 0, // starting at 0
            "filter": {
                // filter fields
            }
        },
        // ...
    ]
}
```
:::

### Deleting a Funnel

This endpoint deletes a funnel.

`DELETE /api/v1/funnel?id=A5kgYzK14m`

## Managing Views

### Listing Views

This endpoint returns a list of views for a given domain.

`GET /api/v1/view?domain_id=A5kgYzK14m`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "Jk49fgm38",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "domain_id": "A5kgYzK14m",
        "user_id": "94jO3jDM2",
        "name": "My View",
        "from": "2022-01-02",
        "to": "2022-03-04",
        "from_time": "14:56",
	    "to_time": "15:07",
        "period": 5,
        "compare": null, // previous, year, custom
        "compare_from": null, // date
        "compare_to": null, // date
        "compare_weekday": true,
        "path": ["/sample/path"],
        "entry_path": null,
        "exit_path": null,
        "pattern": null,
        "language": null,
        "country": null,
        "city": null,
        "referrer": null,
        "referrer_name": null,
        "os": null,
        "browser": null,
        "platform": null,
        "screen_class": null,
        "utm_source": null,
        "utm_medium": null,
        "utm_campaign": null,
        "utm_content": null,
        "utm_term": null,
        "event": ["event"],
        "event_meta_key": ["meta_key"],
        "event_meta_value": ["meta_value"],
        "tag": ["tag"],
        "tag_key": ["tag_key"],
        "tag_value": ["tag_value"],
        "visitor_id": 12345,
	    "session_id": 12345
    },
    // ...
]
```
:::

### Creating/Updating a View

This endpoint creates a new view or updates an existing view. It updates an existing view if the ID is set.

`POST /api/v1/view`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "Jk49fgm38",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "A5kgYzK14m",
    "user_id": "94jO3jDM2",
    "name": "My View",
    "from": "2022-01-02",
    "to": "2022-03-04",
    "from_time": "14:56",
    "to_time": "15:07",
    "period": 5,
    "compare": null, // previous, year, custom
    "compare_from": null, // date
    "compare_to": null, // date
    "compare_weekday": true,
    "path": ["/sample/path"],
    "entry_path": null,
    "exit_path": null,
    "pattern": null,
    "language": null,
    "country": null,
    "city": null,
    "referrer": null,
    "referrer_name": null,
    "os": null,
    "browser": null,
    "platform": null,
    "screen_class": null,
    "utm_source": null,
    "utm_medium": null,
    "utm_campaign": null,
    "utm_content": null,
    "utm_term": null,
    "event": ["event"],
    "event_meta_key": ["meta_key"],
    "event_meta_value": ["meta_value"],
    "tag": ["tag"],
    "tag_key": ["tag_key"],
    "tag_value": ["tag_value"],
    "visitor_id": 12345,
    "session_id": 12345
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "Jk49fgm38",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "A5kgYzK14m",
    "user_id": "94jO3jDM2",
    "name": "My View",
    "from": "2022-01-02",
    "to": "2022-03-04",
    "from_time": "14:56",
    "to_time": "15:07",
    "period": 5,
    "compare": null, // previous, year, custom
    "compare_from": null, // date
    "compare_to": null, // date
    "compare_weekday": true,
    "path": ["/sample/path"],
    "entry_path": null,
    "exit_path": null,
    "pattern": null,
    "language": null,
    "country": null,
    "city": null,
    "referrer": null,
    "referrer_name": null,
    "os": null,
    "browser": null,
    "platform": null,
    "screen_class": null,
    "utm_source": null,
    "utm_medium": null,
    "utm_campaign": null,
    "utm_content": null,
    "utm_term": null,
    "event": ["event"],
    "event_meta_key": ["meta_key"],
    "event_meta_value": ["meta_value"],
    "tag": ["tag"],
    "tag_key": ["tag_key"],
    "tag_value": ["tag_value"],
    "visitor_id": 12345,
    "session_id": 12345
}
```
:::

### Deleting a View

This endpoint deletes a view.

`DELETE /api/v1/view?id=Jk49fgm38`

## Managing Organizations

### Listing Organizations

This endpoint lists all organizations the user belongs to or is the owner of.

`GET /api/v1/organization`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "Jk49fgm38",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "user_id": "oOD28xa97",
        "name": "Organization",
        "member": 4,
        "domains": 5,
        "themes": 6,
        "role": "Owner",
        "can_edit": true
    },
    // ...
]
```

Can edit will be set to true if a Pirsch Plus subscription is active and the current user is the owner of the organization.
:::

### Creating an Organization

This endpoint creates a new organization.

`POST /api/v1/organization`

::: details EXAMPLE REQUEST
```JSON
{
    "name": "Organization"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "Jk49fgm38",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "user_id": "oOD28xa97",
    "name": "Organization",
    "member": 4,
    "role": "Owner",
    "can_edit": true
}
```
:::

### Updating an Organization

This endpoint updates an existing organization.

`PUT /api/v1/organization`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "Jk49fgm38",
    "name": "New Name"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "Jk49fgm38",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "user_id": "oOD28xa97",
    "name": "New Name",
    "member": 4,
    "role": "Owner",
    "can_edit": true
}
```
:::

### Deleting an Organization

This endpoint deletes an organization. If `delete_domains` is set to `true`, all domains belonging to this organization will also be deleted! Otherwise they will be removed from the organization.

`DELETE /api/v1/organization?id=Jk49fgm38&delete_domains=true`

### Setting a Default Theme

This endpoint will set the default theme for given organization. The default theme is pre-selected when new websites are added to the organization.

`PUT /api/v1/organization/theme`

::: details EXAMPLE REQUEST
```JSON
{
    "organization_id": "Jk49fgm38",
    "theme_id": "93ODk5o1sL"
}
```
:::

### Listing Domains

This endpoint will list all domains belonging to an organization.

`GET /api/v1/organization/domain?id=Jk49fgm38`

::: details EXAMPLE RESPONSE
```JSON
[
    // domains
]
```
:::

### Adding a Domain

This endpoint adds an existing domain to an organization.

`POST /api/v1/organization/domain`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "Jk49fgm38",
    "domain_id": "93ODk5o1sL"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    // domain
}
```
:::

### Removing a Domain

This endpoint removes a domain from given organization.

`DELETE /api/v1/organization/domain?id=Jk49fgm38&domain_id=93ODk5o1sL`

### Adding Auto-Join Hostnames

This endpoint will add a hostname to automatically join members using an email address with the hostname for sign up.

`POST /api/v1/organization/autojoin`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "Jk49fgm38",
    "auto_join": ["example.com"]
}
```
:::

### Removing an Auto-Join Hostname

This endpoint will remove a hostname from the auto-join list.

`DELETE /api/v1/organization/autojoin?id=Jk49fgm38&auto_join=example.com`

## Managing Themes

Themes can either belong to a user or an organization. They are also used on domains to overwrite settings.

### Creating/Updating/Copying a Theme

This endpoint creates, updates, or copies a theme.

`POST /api/v1/theme`

::: details EXAMPLE REQUEST
```
FormData:

logo_light: File
logo_dark: File
favicon: File
data: JSON {
    "id": "Jk49fgm38",
	"copy_id": null,
	"domain_id": null,
	"organization_id": null,
	"name": "My Theme",
	"settings": {
        // key value pairs
    }
}
```

If neither the `domain_id` nor the `organization_id` are set, the theme will be created for the user.
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "Jk49fgm38",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "user_id": "93ODk5o1sL",
    "organization_id": null,
    "name": "My Theme",
    "settings": {
        // key value pairs
    },
    "is_default": false
}
```
:::

### Listing Themes

This endpoint lists themes for the user, an organization, a subdomain, or a custom domain. If `include_organizations` is set to `true`, the list will contain all themes the user has directly or indirectly access to.

```
GET /api/v1/theme
GET /api/v1/theme?include_organizations=true
GET /api/v1/theme?organization_id=Jk49fgm38
GET /api/v1/theme?subdomain=sub
GET /api/v1/theme?domain=my-domain.com
```

::: details EXAMPLE RESPONSE
```JSON
[
    // themes
]
```
:::

### Deleting a Theme

This endpoint deletes a theme. If `keep_settings` is set to `true`, the settings will be applied to the domains the themes is used in before deletion.

`DELETE /api/v1/theme?id=Jk49fgm38&keep_settings=true`

### Deleting a Theme File

This endpoint will delete a theme file for a them or a domain. The file can either be `logo_light`, `logo_dark`, or `favicon`.

```
DELETE /api/v1/theme/file?theme_id=Jk49fgm38&file=logo_light
DELETE /api/v1/theme/file?domain_id=93ODk5o1sL&file=favicon
```

## Importing Data from Google Universal Analytics, Plausible, Fathom

### Getting an Import Job

These endpoints returns the import job, if any, for the specified domain, no matter if they are for Google Analytics, Plausible, or Fathom. The type can be `ga`, `plausible`, or `fathom`.

`GET /api/v1/import?domain_id=A5kgYzK14m`
`GET /api/v1/google/import/job?domain_id=A5kgYzK14m`

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "Jk49fgm38",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "A5kgYzK14m",
    "type": "ga",
	"google_user_id": "...",
	"google_user_email": "...",
	"domain": null,
    "from": null,
	"to": null
}
```
:::

### Canceling an Import Job

These endpoints cancels the import job for given domain, no matter if they are for Google Analytics, Plausible, or Fathom.

`DELETE /api/v1/import?domain_id=A5kgYzK14m`
`DELETE /api/v1/google/import/job?domain_id=A5kgYzK14m`

### Listing Google Analytics Profiles

This endpoint lists available profiles (views) for the connected Google Account.

`GET /api/v1/google/import/profile?domain_id=A5kgYzK14m`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "name": "Name",
        "id": "..."
    },
    // ...
]
```
:::

### Starting the Import (Google Analytics)

This endpoint starts the import after connecting the dashboard to your Google account.

`POST /api/v1/google/import`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
    "property": "<GA view ID>",
    "from": "2022-01-01",
    "to": "2022-08-01"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "Jk49fgm38",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "A5kgYzK14m",
    "type": "ga",
	"google_user_id": "...",
	"google_user_email": "...",
	"domain": "<GA view ID>",
    "from": "2022-01-01",
	"to": "2022-08-01"
}
```
:::

### Starting the Import (Plausible, Fathom)

This endpoint starts the import for Plausible and Fathom. The body is multi-part encoded to include the zip file.

`POST /api/v1/import/fathom`
`POST /api/v1/import/plausible`

::: details EXAMPLE REQUEST
```
domain="A5kgYzK14m"
file=<data>
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "Jk49fgm38",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "A5kgYzK14m",
    "type": "plausible",
	"google_user_id": "",
	"google_user_email": "",
	"domain": "",
    "from": "",
	"to": ""
}
```
:::

## Billing

### Usage

This endpoint returns the total usage for a selected period or the current billing cycle, including page views for deleted domains. `from` and `to` are optional and can be left blank, in which case the current billing cycle will be used.

If there are more than 50 dashboards on an account, this endpoint will return only one result called *All*.

API clients require the scope *statistics* to use this endpoint.

`GET /api/v1/billing?from=2023-11-01&to=2023-11-12`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "domain": {
            "id": "Jk49fgm38",
            // ...
        },
        "page_views": 42
    },
    // ...
]
```
:::
