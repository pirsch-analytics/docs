# Embedding the Dashboard

You can embed your dashboard using an iframe, allowing you to display your statistics on another website or inside an application.

## Embedding Your Dashboard

To embed your dashboard, you need to make your dashboard public or create an access link on the **Access** settings page.

![Access Settings](../static/advanced/embed-access.png)

Copy the URL or access link and paste it into the `src` attribute of the iframe. The URL can be found below the **Public Dashboard** toggle.

```HTML
<iframe src="http://dev.pirsch.io/?domain=pirsch.io&interval=14d&ui=hide"
    width="1200"
    height="800"
    style="border-width: 0;"></iframe>
```

In this example, we have set the width and height of the iframe and removed the border. The URL has some additional parameters (`?domain=...`). You can copy these from your regular dashboard URL if you want to add a filter.

## UI Options

There are additional parameters to modify the user interface.

* `ui=hide` will hide the Pirsch header and footer, leaving you with a cleaner dashboard
* `mode=dark` or `mode=light` sets the dark or light mode for the dashboard. This will override the user's system settings
