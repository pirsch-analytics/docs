---
title: "Backend Integration"
date: 2020-12-12
draft: false
weight: 2
description: "Learn on how to integrate Pirsch into your backend using our API and client SDKs."
---

## Add Pirsch to Your Backend

The backend integration is the recommended way to integrate Pirsch into your website, as it cannot be blocked by the browser. Instead of relying on a script, you will make an [API]({{< ref "api-sdks/api.md" >}}) request to monitor traffic.

## Create a Client

To get started, you first need to create a client ID and secret.

1. open the dashboard and navigate to the *Settings* page for your website
2. under the *Client* section, click *Add Client* ![Add Client](/integration/backend-client.png)
3. enter a description and click *Save* ![Client Creation](/integration/backend-create-client.png)
4. this will open a new dialog showing a client ID and secret. Copy and store them in a secure place ![Client ID and Secret](/integration/backend-client-id-secret.png)

## Monitor Traffic

The example below shows how you can make the API requests required to get an access token and send a page hit. This is sufficient for most websites. For full reference, please visit the [API]({{< ref "api-sdks/api.md" >}}) documentation.

First, you need to gain an access token used to authenticate other requests. You need to do this before you make the first page hit request and everytime you receive a HTTP status code 401 (unauthorized) to refresh the access token.

```Bash
POST https://api.pirsch.io/api/v1/token

{
    "client_id": "<client_id>",
    "client_secret": "<client_secret>"
}
```

This will return an access token like this.

```Bash
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI...",
    "expires_at": "2020-12-12T00:11:39.903607271Z"
}
```

To monitor traffic, make sure you send a request to Pirsch everytime someone visits a page. How you do this depends on the programming language and framework you're using. Here is what a request could look like.

```Bash
POST https://api.pirsch.io/api/v1/hit
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI...

{
    "url":              "https://example.com/full/url?including=parameters",
    "ip":               "123.456.789.0",
    "cf_connecting_ip": "CF-Connecting-IP header (optional)",
    "x_forwarded_for":  "X-Forwarded-For header (optional)",
    "forwarded":        "Forwarded header (optional)",
    "x_real_ip"         "X-Real-IP header (optional)",
    "user_agent":       "User-Agent header",
    "accept_language":  "Accept-Language header (optional)",
    "referrer" :        "Referer header (optional)",
}
```

As you can see, you need to send the visitors IP, full URL, User-Agent header, and a few more headers. While only the IP, URL, and User-Agent are required, we recommend to send as much of these fields as possible, as they will improve the quality of the analytics data. Don't worry, we don't store personal information like the IP address. To learn more, please read the [details on privacy]({{< ref "privacy.md" >}}).
