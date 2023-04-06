# Troubleshooting

This is a collection of methods to test if your Pirsch integration is working properly. If you're missing something, please don't hesitate to reach out to our [support](mailto:support@pirsch.io).

## Making Sure the Snippet Is Installed

Before testing other troubleshooting methods, make sure the snippet is installed on your website if you use the [website integration](/get-started/frontend-integration).

1. Visit your website.
2. View the source code of your website. You can do this by pressing `Cmd + U` on Mac or `Ctrl + U` on Windows and Linux. Alternatively you can right-click anywhere and click **View Source Code** from the context menu.
3. Search for `pirsch.js` (using `Cmd + F` on Mac or `Ctrl + F` on Windows and Linux). You should be able to find the snippet like in the screenshot below. The `data-code` attribute must match the integration code from the [settings page](/get-started/frontend-integration#resetting-the-identification-code).

![Pirsch Snippet](../static/get-started/pirsch-snippet.png)

## Testing the Snippet Integration

To test the script, navigate to your website and open the network tab of the developer tools in your browser (usually F12 or `Ctrl/Command + Shift + I`). Search for 'hit' and make sure you get a 200 response code in the status column.

![Developer Tools](../static/get-started/network-tab.png)

If you don't, check the identification code and the domain you configured. Also, make sure you didn't send the **Do Not Track** (DNT) HTTP header or the `disable_pirsch` option in your localStorage.

## Testing the Servers-side Integration

To test the [server-side integration](/get-started/backend-integration), log any errors returned from the Pirsch API that don't have the HTTP status codes 200 (ok) or 401 (unauthorized). The body of the answer will contain error and validation messages.

```
{
    "validation": {
        "field": "error message"
    },
    "error": [
        "error message"
    ]
}
```

You can simply log the whole body or parse it and just log parts of it. Here is an example from our JavaScript SDK.

```js
client.hit(client.hitFromRequest(request)).catch(error => {
    // Something went wrong, check the error output.
    console.error(error);
});
```

If you don't see any errors and there is still no statistics on your dashboard appearing. Make sure all fields in [the request](/api-sdks/api#sending-page-views) are correct.

We block certain IP addresses, so if your service is behind a load balancer or proxy, make sure it's properly forwarded to your server, or otherwise we'll receive your servers IP address instead of the visitors IP address. For example, most reverse proxies will provide the real visitor IP address in the `X-Forwarded-For` header. Our SDKs help you to handle these situations.

## Visits Are Not Appearing on the Dashboard

If you don't see your visits appearing on your dashboard immediately, don't worry. There is usually a small delay of a few seconds as we buffer page visits before writing them to the database.

In case you don't see your visits appearing after a small delay, make sure you didn't [disable Pirsch](/get-started/frontend-integration#ignoring-your-own-page-views), have an adblocker active, or modified your DNT or User-Agent headers. In rare cases, your page views might be blocked by our bot filter. Try a different device on a different network in that case.
