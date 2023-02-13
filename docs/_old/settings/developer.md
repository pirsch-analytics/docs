---
title: "Developer"
date: 2022-11-26
draft: false
weight: 5
description: "Manage integrations and other development related settings."
---

## JavaScript Snippet

Displays the snippet for the [website integration]({{<ref "get-started/frontend-integration.md">}}).

## Resetting the Identifcation Code

The identification code is used for the JavaScript snippet which must be embedded on your page if you decide to use the [website integration]({{<ref "get-started/frontend-integration.md">}}). Usually, you don't need to change it, but should your identification code get hijacked, you can reset it here. Note that you need to update all pages containing the snippet after you reset it.

## Additional Domains

Additional domains are required if you want to send statistics to multiple dashboards or create rollup views. A Pirsch dashboard will only accept traffic from its configured domain and identification code. If the origin differs, you can add an additional domain to accept requests.

Below are the two use-cases covered. It's also possible to combine the two and create rollup views while also sending the statistics to multiple dashboards.

> Note that duplicated page views and events count towards your monthly limit.

### Creating a Rollup View

Let's say you have your top-level domain *example.com* and a subdomain *sub.example.com* and you would like to track both websites on a single dashboard. In that case, create a dashboard for *example.com* and add an additional domain *sub.example.com* (wildcards with asterics * also work). Now you can add the JS snippet to both sites using the same identification code.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="example-com-identification-code-here"></script>
```

### Sending Statistics to Multiple Dashboards

The second use-case for additional domains is to send statistics to multiple dashboards. This way, you can create rollup views for two websites that each have their own dashboard. Each dashboard you send traffic to requires an additional domain. If you make an additional request to *rollup.example.com* from *example.com* for example, you need to add *example.com* to your *rollup.example.com* dashboard.

After you have configured the additional domain, you can send statistics to *rollup.example.com* from *example.com* like this.

```html
<script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" 
    id="pirschjs" 
    data-code="example-com-identification-code-here"
    data-domain="rollup.example.com"></script>
```

To send statistics to more than one additional dashboard, you can comma-separate the list, like `data-domain="rollup.example.com,my-website.com"`.

## Clients

Clients are used to access the [Pirsch API]({{<ref "api-sdks/_index.md">}}). You will need one if you decide to use the [backend integration]({{<ref "get-started/backend-integration.md">}}) or to access your data from an external application.

To create a new client, click *Add Client*, select the type, enter a description, and select scopes. Scopes define what capabilities the client has. You can create a client with read-only access by unchecking all the write operations for example. The type can be either *oAuth* or *Access token*. An oAuth client is the default and requires you to [request an access token]({{<ref "api-sdks/api.md#getting-an-access-token">}}) before you can make other requests. The *Access token* type can be used to make write-only requests. It only uses the client secret to make requests and doesn't require you to request an oAuth access token, which is useful for stateless applications, like a PHP client that cannot reuse an access token for multiple page views.

![Clients](/dashboard/create-client.png)

The dialog popping up will show the unique client ID and secret, which you need to save. Treat the secret like a password. Once the dialog is closed, there is no way to view the secret again. Should you lose the secret, you will have to create a new client.

![Clients](/dashboard/settings-client.png)

## Disable Scripts

You can disable the option to send page views and events via the JavaScript snippets. This will deny any requests made by browsers.
