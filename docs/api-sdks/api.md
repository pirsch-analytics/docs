# API

This document describes the API endpoints used to interact with Pirsch. The easiest way to get started is to use one of the client SDKs. If you're looking for how to integrate Pirsch into your backend to monitor traffic, please see the [server-side integration](/get-started/backend-integration).

::: info
Please note that the examples do not necessarily show correct data. IDs from a request may not match the response. You should also be careful not to confuse IDs in their context. Fields are often just called **id**, but represent different objects.
:::

## Creating a Client

Clients are used to access the API. You will need one if you choose to use the [server-side integration](/get-started/backend-integration) or if you want to access your data from an external application.

To create a new client, navigate to the **Integration Settings** or **Account Settings** page and click **Add Client**. Select the type, scope and enter a description. A Client created on the **Account Settings** page can access **everything** and has essentially the same permissions as you.

The scopes define the client's capabilities. You can create a read-only client by deselecting all write operations.

The type can be either **oAuth** or **Access Key**. An oAuth client requires you to [get an access token](/api-sdks/api#getting-an-access-token) before you can make any other requests. The **Access Key** type can be used for write-only operations. It uses only the client secret to make requests and doesn't require you to request an oAuth token first, which is useful for stateless applications such as a PHP client that cannot reuse an access token for multiple page views.

![Clients](../static/api-sdks/create-client.png)

The dialogue that pops up shows the unique client ID and the secret you need to store. Think of the secret as a password. Once the dialogue is closed, there is no way to retrieve the secret. If you lose your secret, you will need to create a new client.

![Clients](../static/api-sdks/settings-client.png)

## Error Handling

In case of an error, Pirsch returns a JSON object in the body describing the issue and what you can do about it, along with a meaningful HTTP status code. Errors have the following structure.

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
* `error` lists general errors, like when an object could'nt be found. There usually is only one error message

## Getting an Access Token

In order to make requests to the API, you must first obtain an access token. The token must be sent with each request in the `Authorisation` header in the format `Bearer <token>`. If you receive a status code of 401 (unauthorised), you must create a new token and try again. The `expires_at' timezone is set to UTC.

Client IDs and secrets can be created from the **Integration Settings** page or from the **Account Settings** page. Domain clients are created for a specific domain and can only access and manipulate the domain for which they have been created. User clients have more rights and can access all domains that the user has access to (with the same rights, viewer or admin).

Access keys (starting with `pa_`) can only be used to send data (page views, events and keep-alive sessions) and don't require a client ID or need to be refreshed. Treat both client secrets and individual access tokens as passwords and store them securely.

The examples for the other endpoints in this document omit the header.

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
    "url":              "https://example.com/full/url?including=parameters",
    "ip":               "123.456.789.0",
    "dnt":              "DNT header (optional)",
    "user_agent":       "User-Agent header",
    "accept_language":  "Accept-Language header (optional)",
    "title":            "Page title (optional)",
    "referrer" :        "Referer header (optional)",
    "screen_width":     1920,
    "screen_height":    1080
}
```
:::

One small tweak you can make is to check the `DNT` (Do Not Track) header before sending the request. Check if the header is set to `1`, if true you can ignore the request, otherwise send it.

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

## Sending an Event

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
    "_metadata":        "event_meta is a single dimension object of scalar values (strings, numbers, and booleans)."
    "event_meta": {
        "key":             "value",
        "metadata fields": "are optional"
    },
    "_hit":             "The fields below are the same as for hits."
    "url":              "https://example.com/full/url?including=parameters",
    "ip":               "123.456.789.0",
    "dnt":              "DNT header (optional)",
    "user_agent":       "User-Agent header",
    "accept_language":  "Accept-Language header (optional)",
    "title":            "Page title (optional)",
    "referrer" :        "Referer header (optional)",
    "screen_width":     1920,
    "screen_height":    1080
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

## Keeping a Session Alive

This endpoint is used to **manually** keep sessions alive. A session is normally reset if no request (hit or event) is sent within a 30 minute timeframe. This feature can be used to extend a session indefinitely. It's not recommended to use this for regular websites, but can be useful for tracking applications or other custom software.

`POST https://api.pirsch.io/api/v1/session`

::: details EXAMPLE REQUEST
```JSON
{
    "ip":               "123.456.789.0",
    "dnt":              "DNT header (optional)",
    "user_agent":       "User-Agent header"
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

::: details FILTER OPTIONS
| Parameter | Required | Example | Format/Description |
| - | - | - | - |
| id | yes | A5kgYzK14m | The domain ID. Use the list endpoint to get the domain ID for the client. |
| from | yes | 2021-05-08 | YYYY-MM-DD |
| to | yes | 2021-05-15 | YYYY-MM-DD |
| tz | no | Europe/Berlin | The time zone. If not set, the default time zone for the dashboard is used. |
| start | no | 600 | Queries data for the past seconds (10 minutes in this example). The date range filters is ignored if set. The maximum is one hour (3600 seconds). |
| scale | no | week | The scale to group results. Can either be day (default), week, month, or year. |
| path | no | /home | The page path. |
| entry_path | no | /home | The entry page path. |
| exit_path | no | /yte | The exit page path. |
| pattern | no | (?i)^\\/path/[^\\/]+$ | A [regular expression](https://github.com/google/re2/wiki/Syntax) to filter and group pages. |
| event | no | Button clicked | The name of an event to filter for. |
| event_meta_key | no | Clicks | The event meta key to filter for. This field is used to break down a single event. |
| meta_(key) | no | `meta_key0=value0&meta_key1=value1` | The event metadata key and values to filter for. Multiple keys can be set by prefixing them using `meta_` and appending them to the URL. Only events with all key-value pairs is returned. |
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
| limit | no | 20 | Limits the number of results, note that this is hard limited to 100. |
| include_avg_time_on_page | no | true | Set to true, to include the average time on page when reading page statistics. |
| sort | no | visitors | Sort results by given field. This is only available for pages, entry/exit pages, referrers, UTM statistics, conversion goals, events, demographics, and device statistics. |
| direction | no | desc | Sort results in ascending (asc) or descending (desc) order. This is only available for pages, entry/exit pages, referrers, UTM statistics, conversion goals, events, demographics, and device statistics. |
| search | no | /home | Search the primary field for given string (contains). For pages this is the path, for browsers the browser name, and so on. This is only available for pages, entry/exit pages, referrers, UTM statistics, conversion goals, events, demographics, and device statistics. |
:::

### Getting the Domain ID

Before you can make any requests, you must know the domain ID for the client. Make a request to the following endpoint and store the ID for the domain. Note that the domain is returned in an array. The endpoint normally returns all the domains a user has access to, but in this case it always has an entry (unless there is a permission error, in which case it is empty).

`GET /api/v1/domain`

::: details EXAMPLE RESPONSE
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
        "timezone": "Europe/Berlin",
	    "group_by_title": false,
	    "active_visitors_seconds": 600,
        "user_role": ""
    }
]
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

This endpoint returns the total number of visitors, views, sessions, bounces, and bounce rate. The difference from the Visitors endpoint (see below) is that the results are not grouped by day. Manually summing visitors for multiple days gives a different result because returning visitors are counted multiple times.

`GET /api/v1/statistics/total`

::: details EXAMPLE RESPONSE
```JSON
{
    "visitors": 42,
    "views": 56,
    "sessions": 48,
    "bounces": 23,
    "bounce_rate": 0.4791
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
        "bounce_rate": 0.4791
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

`pattern` is the regex pattern stored for the conversion goal, which can be used as the `pattern` parameter in the filter. path_pattern` is the path pattern as configured by the user in the dashboard. The `pattern` is generated from this.

:::

### Events

This endpoint lists all events and their metadata keys. You can use the event metadata endpoint to get the values for the event and a key.

`GET /api/v1/statistics/events`

::: details EXAMPLE RESPONSE
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
:::

### Event Metadata

This endpoint breaks down the event meta keys and values for a single event. You must filter for an event name and meta key in order for this to work.

`GET /api/v1/statistics/event/meta`

::: details EXAMPLE RESPONSE
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
    "time_spent_growth": 0.45
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
            "path": "/home",
            "visitors": 42
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
        "bounce_rate": 0.4791
    },
    {
        "hour": 1,
        "visitors": 29,
        "views": 52,
        "sessions": 21,
        "bounces": 19,
        "bounce_rate": 0.3219
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
        "country": "jp"
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

## Filter Options

The following endpoints return available filtering options for a time period. For brevity, only one example request and response is given.

::: details FILTER OPTIONS
```
GET /api/v1/statistics/options/utm/source
GET /api/v1/statistics/options/utm/medium
GET /api/v1/statistics/options/utm/campaign
GET /api/v1/statistics/options/utm/content
GET /api/v1/statistics/options/utm/term
GET /api/v1/statistics/options/referrer/name
GET /api/v1/statistics/options/page
GET /api/v1/statistics/options/referrer
GET /api/v1/statistics/options/event
GET /api/v1/statistics/options/country
GET /api/v1/statistics/options/city
GET /api/v1/statistics/options/language
```
:::

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

## Managing Domains

Domains can be managed by creating a user client (on the Account Settings page).

### Creating a Domain

This endpoint adds a new domain.

`POST /api/v1/domain`

::: details EXAMPLE REQUEST
```JSON
{
    "hostname": "example.com",
    "subdomain": "example",
    "timezone": "Europe/Berlin"
}
```
:::

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "A5kgYzK14m",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "user_id": "04jmfg0",
    "hostname": "example.com",
    "subdomain": "example",
    "identification_code": "...",
    "public": false,
    "google_user_id": null,
    "google_user_email": null,
    "gsc_domain": null,
    "new_owner": null,
    "timezone": "Europe/Berlin",
    "group_by_title": false,
    "user_role": "Owner"
}
```
:::

### Deleting a Domain

This endpoint deletes a domain.

`DELETE /api/v1/domain?id=A5kgYzK14m`

### Listing Domains

This endpoint is described in the [Statistics section](/api-sdks/api#getting-the-domain-id). The only difference is that it returns all domains if you are using a user client.

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

### Showing Active Visitors in the Page Title

This endpoint toggles whether or not to display active visitors in the page title (tab).

`POST /api/v1/user/active`

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
        "description": "..."
    },
    // ...
]
```

The code can be used to create a URL with read-only access to a domain. To do that, replace `<subdomain>` and `<code` for the domain in the following URL: `https://<subdomain>.pirsch.io/?access=<code>`
:::

### Creating an Access Link

This endpoint creates a new access link.

`POST /api/v1/domain/link`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "A5kgYzK14m",
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
    "domain_id": "A5kgYzK14m",
    "code": "...",
    "description": "..."
}
```
:::

### Updating an Access Link

This endpoint updates an existing access link.

`PUT /api/v1/domain/link`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
    "description": "..."
}
```
:::

### Deleting an Access Link

This endpoint deletes an access link.

`DELETE /api/v1/domain/link?id=0DJ0mo934`

## Managing Members and Permissions

### Listing Members

This endpoint lists all members.

`GET /api/v1/member?id=A5kgYzK14m`

::: details EXAMPLE RESPONSE
```JSON
[
    {
        "id": "A5kgYzK14m",
        "def_time": "2021-05-22T10:11:12.123456Z",
        "mod_time": "2021-05-22T10:11:12.123456Z",
        "user_id": "pzy1bjD1lv",
        "domain_id": "A5kgYzK14m",
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

This endpoint invites new members to a domain via email. New members have the **Viewer** role.

`POST /api/v1/member`

::: details EXAMPLE REQUEST
```JSON
{
    "id": "A5kgYzK14m",
    "emails": ["member@foo.com", "member@bar.com" /* ... */]
}
```

`id` is the domain ID.
:::

### Updating the Role of a Member

This endpoint updates a single member's role. Valid roles are **Viewer** and **Admin** (the **Owner** role requires a domain transfer).

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

This endpoint removes a member from a domain.

`DELETE /api/v1/member?id=0DJ0mo934`

## Managing Alternative Domains

Alternative domains must be created if you are sending statistics to multiple dashboards or creating rollup views.

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

This endpoint creates a new alternate domain for a Wwebsite.

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

## Managing snippets

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
        "scope_domains": "w"
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
    "scope_domains": "w"
}
```
:::

The type can either be `oauth` or `token`. `oauth` will create an oAuth client with a client ID and secret that can be used to read and write data. The `token` type is read-only and typically used to send statistics.

Scopes can grant read or write access. The table below shows the possible values for available scopes.

| Scope | Read | Write |
| - | - | - |
| hit | | x |
| event | | x |
| statistics | x | |
| domains | x | x |

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
    "scope_domains": "w"
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
    "scope_domains": "w"
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
        "next_report": "2021-05-22T10:11:12.123456Z"
    },
    // ...
]
```
:::

### Creating Email Reports

This endpoint creates a new email report.

`POST /api/v1/report`

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934",
    "emails": ["member@foo.com", "member@bar.com"],
    "interval": 1 // weeks
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
    "interval": 4 // weeks
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
    "next_report": "2021-05-22T10:11:12.123456Z"
}
```
:::

### Deleting an Email Report

This endpoint deletes an email report.

`DELETE /api/v1/report?id=A5kgYzK14m`

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
        "path_pattern": "...", // regex
        "pattern": "/checkout/**",
        "visitor_goal": 123, // or null if unset
        "cr_goal": 1.23, // or null if unset
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

::: details EXAMPLE REQUEST
```JSON
{
    "domain_id": "0DJ0mo934",
    "name": "...",
    "path_pattern": "/checkout/**",
    "visitors": 123, // 0 to pass
    "cr": 1.23, // 0 to pass
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
    "path_pattern": "...", // regex
    "pattern": "/checkout/**",
    "visitor_goal": 123, // or null if unset
    "cr_goal": 1.23, // or null if unset
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
    "path_pattern": "/checkout/**",
    "visitors": 123, // 0 to pass
    "cr": 1.23, // 0 to pass
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
    "path_pattern": "...", // regex
    "pattern": "/checkout/**",
    "visitor_goal": 123, // or null if unset
    "cr_goal": 1.23, // or null if unset
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
        "period": 5,
        "path": ["/sample/path"],
        "entry_path": null,
        "exit_path": null,
        "path_pattern": null,
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
        "event": null,
        "event_meta_key": null,
        "event_meta_value": null,
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
    "domain_id": "A5kgYzK14m",
    "name": "My View",
    "public": true,
    "overwrite": true,
    "from": "2022-01-02",
    "to": "2022-03-04",
    "period": 5,
    "path": ["/sample/path"],
    "entry_path": null,
    "exit_path": null,
    "path_pattern": null,
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
    "event": null,
    "event_meta_key": null,
    "event_meta_value": null,
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
    "period": 5,
    "path": ["/sample/path"],
    "entry_path": null,
    "exit_path": null,
    "path_pattern": null,
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
    "event": null,
    "event_meta_key": null,
    "event_meta_value": null,
}
```
:::

### Deleting a View

This endpoint deletes a view.

`DELETE /api/v1/view?id=Jk49fgm38`

## Importing Data from Google Universal Analytics

### Getting an Import Job

This endpoint returns the import job, if any, for the specified domain.

`GET /api/v1/google/import/job?domain_id=A5kgYzK14m`

::: details EXAMPLE RESPONSE
```JSON
{
    "id": "Jk49fgm38",
    "def_time": "2021-05-22T10:11:12.123456Z",
    "mod_time": "2021-05-22T10:11:12.123456Z",
    "domain_id": "A5kgYzK14m",
	"google_user_id": "...",
	"google_user_email": "...",
	"domain": null,
    "from": null,
	"to": null
}
```
:::

### Canceling an Import Job

This endpoint cancels the import job for given domain.

`DELTE /api/v1/google/import/job?domain_id=A5kgYzK14m`

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

### Starting the Import

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
	"google_user_id": "...",
	"google_user_email": "...",
	"domain": "<GA view ID>",
    "from": "2022-01-01",
	"to": "2022-08-01"
}
```
:::
