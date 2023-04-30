# Website Integration

Our JavaScript snippet is the easiest way to integrate pirsch into your website. If you don't want to load JavaScript on your website, take a look at our [server-side integration](/get-started/backend-integration).

::: info
Looking for code? Check out our [demo repository](https://github.com/pirsch-analytics/demo) on GitHub!
:::

## Adding Pirsch to Your Website

After creating your account, you can add Pirsch to your website.

1. Open the dashboard and click on **Add Domain** in the menu.
2. Enter the hostname of your website (such as **example.com**), the subdomain, and select a time zone.
3. Click on **Add Domain**.
4. Copy and paste the JavaScript snippet into the `<head>` section of your website.

![Code Snippet](../static/get-started/add-domain-snippet.png)

And you're done! Your website is now sending page views to Pirsch.

Note that only page views for the hostname you enter will be accepted. A pageview for **sub.example.com** won't be accepted if you've configured **example.com**. They are considered completely different websites and you will need to add a new dashboard or [additional domain](/advanced/domains-rollup) for them.

You can also create [roll-up views](/advanced/domains-rollup) to combine data from multiple websites.

The script will also track programmatic URL changes by default. This is useful if your website is a SPA (single-page application) or if you use anchors. You can disable this behavior by adding the `data-disable-history` parameter to the script. This also works for the `pirsch-extended.js` script.

## Testing the Integration

Please refer to the [troubleshooting article](/get-started/troubleshooting).

## Including and Excluding Pages

The snippet provides a very flexible way of including or excluding pages. You can exclude one or more pages by specifying the `data-exclude` attribute. The content is a list of regular expressions used to filter pages.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="YOUR_IDENTIFICATION_CODE"
    data-exclude="\/exact\/match,\/exclude\/page\/(en|de)\/.*"></script>
```

This example will match the page `/exact/match` and any page starting with `/exclude/page/en/` or `/exclude/page/de/`.

Please always [validate](https://regex101.com/) your expressions before using them and make sure you don't see any errors in the browser console. Special regex characters must be escaped. For a simple single page filter use a pattern like `\/your\/page`.

`data-include` can be used to whitelist pages. In the case of whitelisting, only pages that match a pattern in the list will send a page view. The blacklist still applies.

## Enabling/Disabling Certain Features

It's possible to enable or disable certain features of the scripts. To enable or disable a feature, simply add an attribute to the script tag.

* `data-disable-query` will remove all query parameters from the URL, including UTM parameters.
* `data-disable-referrer` removes the referrer
* `data-disable-resolution` removes the screen resolution (width and height).
* `data-disable-history` disable tracking programmatic URL changes as page views (like PWAs for example).
* `data-disable-page-views` disable collecting page views (`pirsch-extended.js` only).
* `data-disable-outbound-links` disable tracking outbound link clicks (`pirsch-extended.js` only).
* `data-disable-downloads` disable tracking file downloads (`pirsch-extended.js` only).
* `data-enable-sessions` enable [session extension](/advanced/sessions) (`pirsch-extended.js` only).

Here is an example:

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="YOUR_IDENTIFICATION_CODE"
    data-disable-query></script>
```

## Ignoring Your Own Page Views

You can disable this integration by setting the DNT (Do Not Track) header to `1` in your browser, or by adding a value called `disable_pirsch` to your local storage.

For the latter option, open the developer tools (usually F12 or `Ctrl + Shift + I`) in your browser and navigate to the **web storage** tab. Click on **local storage** and add a new value `disable_pirsch` and `1` as the value. After reloading the page, no page views or events (if you also use the event script) should be sent to Pirsch.

## Testing Pirsch Locally

The scripts will ignore any requests made on localhost. If you want to override this behaviour, e.g. for testing, you can add the `data-dev` attribute. The host names must match. If you are testing on localhost, rewrite the hostname with the `data-dev` attribute like this

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="YOUR_IDENTIFICATION_CODE"
    data-dev="example.com"></script>
```

In this case, the hostname you've configured on the Dashboard is `example.com`. So you need to add `data-dev="example.com"` to rewrite the hostname.

## Resetting the Identification Code

Your website is identified by the hostname from which the request is made and an identification code. The identification code must be placed within the JavaScript snippet. If you ever need to recreate the code, go to the Settings page for your site and generate a new one. You'll then need to replace the old code.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="YOUR_IDENTIFICATION_CODE"></script>
```
