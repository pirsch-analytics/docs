---
title: "Embedding the Dashboard"
date: 2022-06-23
draft: false
weight: 6
description: "Learn how you can embed your dashboard on another website using an iframe."
---

You can embed your dashboard on another website using an iframe, allowing you to showcase your statistics or integrate them into an application.

## Embedding Your Dashboard

To embed your dashboard, you first need to make your dashboard public or create an access link.

Navigate to the access settings page and toggle the *Public Dashboard* option or click on *Add Access Link*. When creating an access link, chose a name that you will recognize later.

![Access Settings](/dashboard/embed-access.png)

The last step is to add your public dashboard URL or access link to an iframe. Copy the URL/access link and place it inside the `src` attribute of the iframe. The URL is displayed below the *Public Dashboard* toggle, the access link is displayed after creation.

```HTML
<iframe src="http://dev.pirsch.io/?domain=pirsch.io&interval=14d&ui=hide"
    width="1200"
    height="800"
    style="border-width: 0;"></iframe>
```

In this example, we set the width and height of the iframe and removed the border. The URL has some additional parameters (`?domain=...`). You can copy these from your regular dashboard URL in case you would like to add filter options.

## UI Options

There are additional parameters to modify the dashboard UI.

* `ui=hide` will hide the Pirsch header and footer, so you get a clean dashboard
* `mode=dark` or `mode=light` set the dark or light mode for the dashboard. This overwrites the user's system settings
