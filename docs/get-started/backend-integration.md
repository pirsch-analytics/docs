# Server-side Integration

This guide assumes that you have already added a domain to your dashboard. If you haven't, please read the [Website integration article](/get-started/frontend-integration).

## Adding Pirsch to Your Backend

Backend integration is the recommended way to integrate Pirsch into your website as it cannot be blocked by the browser. Instead of relying on a script, you make an [API](/api-sdks/api) request to monitor traffic.

## Creating a Client

To get started, you will first need to create a Client ID and a Secret.

1. open the dashboard and navigate to the *Settings* page for your site
2. under the *Client* section, click *Add Client* ![Add Client](../static/get-started/backend-client.png)
3. enter a description and click *Save* ![Client Creation](../static/get-started/backend-create-client.png)
4. this will open a new dialogue with a client ID and secret. Copy these and save them in a safe place ![Client ID and Secret](../static/get-started/backend-client-id-secret.png)

## Monitoring Traffic

The example below shows how to make the API requests needed to get an access token and send a page request. This should be sufficient for most websites. For a full reference, see the [API](/api-sdks/api) documentation.

You must first obtain an access token, which is used to authenticate other requests. You need to do this before making your first page request and every time you receive an HTTP status code 401 (unauthorised) to update the access token

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

To monitor traffic, make sure you send a request to Pirsch every time someone visits a page. How you do this depends on the programming language and framework you're using. Here is what a request might look like.

```Bash
POST https://api.pirsch.io/api/v1/hit
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI...

{
    "url":              "https://example.com/full/url?including=parameters",
    "ip":               "123.456.789.0",
    "user_agent":       "User-Agent header",
    "accept_language":  "Accept-Language header (optional)",
    "referrer" :        "Referer header (optional)",
}
```

As you can see, you need to send the visitor's IP, full URL, User-Agent header and a few other headers. Although only the IP, URL and User-Agent are required, we recommend that you send as many of these fields as possible as they improve the quality of the analytics data. Don't worry, we don't store any personal information such as your IP address. To find out more, please read the [privacy details](/privacy).
