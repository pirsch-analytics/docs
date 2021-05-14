---
title: "API"
date: 2020-12-12
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

To make requests to the API, you need to get an access token first. The token must be send with every request in the `Authorization` header in the format `Bearer <token>`. If you receive a status code 401 (unauthorized), you need to create a new access token and try again.

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

```Bash
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
