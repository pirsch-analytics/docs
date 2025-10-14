# Embedding the Dashboard

You can embed the dashboard using an iframe, allowing you to display statistics on another website or inside an application.

## Embedding the Dashboard

To embed the dashboard publicly, without requiring authentication, you need to make your dashboard public or create an access link on the **Access** settings page. Embedding the dashboard privately is also possible, but any visitors to it will see the login screen until they are authenticated.

![Access Settings](../static/advanced/embed-access.png)

Copy the URL or access link and paste it into the `src` attribute of the iframe. The URL can be found below the **Public Dashboard** toggle.

```HTML
<iframe src="https://dev.pirsch.io/?domain=pirsch.io&interval=14d&ui=hide"
    width="1200"
    height="800"
    style="border-width: 0;"></iframe>
```

In this example, we set the width and height of the iframe and removed the border. The URL has some additional parameters (`?domain=...`). You can copy these from your regular dashboard URL if you want to add a filter.

To embed the dashboard with authentication required, simply use our main dashboard URL (`https://dashboard.pirsch.io`).

```HTML
<iframe src="https://dashboard.pirsch.io/"></iframe>
```

## UI Options

There are some optional URL parameters to modify the user interface. Add these to the URL to apply them (e.g. `https://dev.pirsch.io/?domain=pirsch.io&ui=hide`).

* `ui=hide` will hide the Pirsch header and footer, leaving you with a cleaner dashboard
* `mode=dark` or `mode=light` sets the dark or light mode for the dashboard. This will override the user's system settings
* `lang=ja` will set the dashboard language. Provide an ISO code. Currently supported are: en, de, es, fr, nl, it, pt, ja
