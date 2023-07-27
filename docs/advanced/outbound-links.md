# Outbound Link Tracking

Tracking outbound links is a common task for website owners. You can track how many times an external URL has been clicked, what page the clicks occurred on, and filter your dashboard accordingly. Pirsch allows you to automate this task by placing a JavaScript snippet on your website.

::: info
Tracking outbound link clicks counts toward your monthly billable page views.
:::

## Adding Outbound Link Tracking

Tracking outbound link clicks requires adding the `pirsch-extended.js` script to your website. If you have installed the regular `pirsch.js` and/or `pirsch-events.js` scripts that track page views and events, you need to replace them with the extended script. The extended script combines the functionality of the other scripts, including the tracking of [file downloads](/advanced/file-downloads) and [404 error pages](/advanced/not-found-tracking).

Navigate to the settings page in the dashboard and select the **Integration** tab. Copy the code snippet for your domain and add it to the `head' section of each page you want to track outbound links on. Here is a simple example of what it will look like. You can use the advanced options on the settings page to customize the snippet.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch-extended.js"
    id="pirschextendedjs"
    data-code="zddEQ4e6QGDno9GCe6dofGgWARPEyJWt"></script>
```

The script will also track file downloads by default. If you don't want this behavior, you can disable it by adding the `data-disable-downloads' parameter.

## Analyzing Outbound Link Clicks on Your Dashboard

External link clicks are tracked as events. By default, they are displayed as **Outbound Link Click**. Expanding the event will show you the external links that your visitors clicked.

![Outbound Links](../static/advanced/outbound-links.png)

Click an item in the details panel to filter the dashboard. The **Event Pages** panel lists all pages where the link was clicked.

![Outbound Link Pages](../static/advanced/outbound-link-pages.png)

You can rename the event if you wish by adding the `data-outbound-link-event-name` parameter to the script snippet. Here is an example that changes the name to `Outbound`.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch-extended.js"
    id="pirschextendedjs"
    data-code="zddEQ4e6QGDno9GCe6dofGgWARPEyJWt"
    data-outbound-link-event-name="Outbound"></script>
```

## Ignoring Links

You can ignore individual links by setting either the `pirsch-ignore' HTML parameter or the `pirsch-ignore' CSS class. Clicking on the links below won't trigger an outbound link event.

```html
<a href="https://example.com" pirsch-ignore>Outbound Links</a>
<a href="https://example.com" class="pirsch-ignore">Outbound Links</a>
```
