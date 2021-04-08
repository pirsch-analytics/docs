---
title: "Developer Settings"
date: 2021-04-08
draft: false
weight: 5
description: "Manage integrations and other development related settings."
---

## JavaScript Snippet

The snippet for the [website integration]({{< ref "get-started/frontend-integration.md" >}}). This is just here for your convenience.

## Resetting the Identifcation Code

The identification code is used for the JavaScript snippet which must be embedded on your page if you decide to use the [website integration]({{< ref "get-started/frontend-integration.md" >}}). Usually, you don't need to change it, but should your identification code get hijacked, you can reset it here. Note that you need to update all pages containing the snippet should you reset it.

## Clients

Clients are used to access the [Pirsch API]({{< ref "api-sdks/_index.md" >}}). You will need one if you decide to use the [backend integration]({{< ref "get-started/backend-integration.md" >}}) or to access your data from an external application.

To create a new client, click *Add Client* and enter a description. The next dialog will show the unique client ID and secret, which you should save and treat like a password. Once the dialog is closed, there is no way to view the secret again and you will have to create a new client.

![Clients](/dashboard/settings-client.png)