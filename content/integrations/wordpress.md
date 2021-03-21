---
title: "WordPress"
date: 2021-03-21
draft: true
weight: 3
description: "Learn how to integrate Pirsch into wordpress."
---

## Using the Plugin (Backend Integration)

The plugin provides an easy way to integrate Pirsch into WordPress. It doesn't use JavaScript and works from your server. This is the [recommended approach]({{< ref "get-started/backend-integration.md" >}}). For the script integration, see below.

*WIP*

![WordPress Plugin](/integration/wordpress.png)

## Installing the Script (Frontend Integration)

To add the JavaScript snippet on your WordPress website, install the "Insert Headers and Footers" plugin. Navigate to the settings page of the plugin and paste the snippet inside the "header" section and save.

The snippet can be found on the settings page of your [dashboard]({{< ref "dashboard/settings.md" >}}).

## Permalink Settings

WordPress uses IDs to identify pages by default. This will show all pages on "/" or "/index.php" on the Pirsch dashboard, making it impossible to see which pages were actually visited. Therefore, we recommend changing the [permalink settings](https://wordpress.org/support/article/settings-permalinks-screen/).

1. log into your WordPress dashboard
2. navigate to settings -> permalinks from the left menu
3. set something else than "plain" or define a custom structure

Another advantage of this is, that your visitors will more easily recognize pages and find them later.
