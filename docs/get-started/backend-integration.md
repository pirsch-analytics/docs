# Server-side Integration

This guide assumes that you already created a dashboard for your website on Pirsch. If you didn't, please read the [website integration article](/get-started/frontend-integration).

::: info
Looking for code? Check out our [demo repository](https://github.com/pirsch-analytics/demo) on GitHub!
:::

## Adding Pirsch to Your Backend

The server-side integration is the **recommended** way to integrate Pirsch into your website as it cannot be blocked by the browser. Instead of relying on JavaScript, you'll make a HTTP [API](/api-sdks/api) request to track traffic.

## Creating a Client

First, you need to create an **access key** or **client ID and secret**. We recommend using an access key, as that reduces the number of requests your server needs to make to our service.

1. Open the dashboard and navigate to the **Settings** page for your site
2. Under the **Integration** section and **Clients**, click **Add Client**
3. Select **Access Key**, enter a description and click **Create Client** ![Client Creation](../static/get-started/backend-create-client.png)
4. This will open a new dialogue with the secret. Copy and save it in a safe place ![Client ID and Secret](../static/get-started/backend-access-key.png)

## Monitoring Traffic

The example below shows how to make the API requests needed to get an access token and send a page request. This should be sufficient for most websites. For a full reference, see the [API](/api-sdks/api) documentation. We also offer a range of [SDKs](/api-sdks/sdks) to help you with the integration.

### Getting an Access Token

::: info
Requesting an access token is only required if you created a **client ID and secret**. If you're using an **access key** (recommended), you can skip this step.
:::

You need to fetch a new access token before making your first request and every time you receive a HTTP status code 401 (unauthorised).

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

### Tracking Page Views

To start tracking, send a page view everytime someone visits a page on your website. How you do this depends on the programming language and framework you're using. We recommend creating a middleware added to your router to handle it automatically for each page view.

If you created an access key, you can directly use that instead of the access token (`eyJhbGciOiJSUzI1NiIsInR5cCI...`) in the example below.

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

As you can see, you need to send the visitor's IP, full URL, User-Agent header and a few other headers. Although only the IP, URL and User-Agent are required, we recommend that you send as many of these fields as possible as they improve the quality of the analytics data.

Don't worry, we don't store the IP address. To find out more, please read the [privacy article](/privacy).
