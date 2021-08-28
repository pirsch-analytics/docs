---
title: "General"
date: 2021-05-27
draft: false
weight: 2
description: "Manage your websites settings."
---

## Changing the Subdomain

You can change the subdomain for public access by entering a new one and pressing *Save*. Note that the subdomain needs to be available and some subdomains are reserved.

## Email Reports

Send email reports to yourself or external recipients every week, two weeks, three weeks, or once per month. To add email addresses, click on *Add Reports*, enter the recipients and the preferred interval. The report will look something like this:

![Email Report](/dashboard/email-report.png)

Please make sure you only add recipients who want to receive reports.

## Timezone

The timezone can be set on a per-domain basis. It will be used to display times and dates on the dashboard and to filter the results.

Please note that your personal timezone (from the [account settings]({{<ref "account/account-settings.md">}}) page) will only be used to pre-select a timezone when adding *new* domains. This ensures that you can show whatever timezone you desire on public dashboards or use the one best suited for your customers when creating a website for them.

## Grouping Pages

Pirsch supports two ways to group page statistics. The default is to use the path without any parameters, like `/my/page`). You can change it to group pages by the title instead. This can be useful if you use dynamically generated pages, like `/my/article?id=123`. The two options cannot be mixed. If you use the second option, make sure you sent the page title for every page view (pirsch.js does this automatically). We recommend using the human-readable paths (the default), as they are more user-friendly.

## Search Console

The integration can be used to connect your dashboard to Google Search Console. After activation, it will show a list of keywords on the dashboard visitors use to find your website. We use the minimal amount of data required to connect to your account. This includes your user ID, email address, and a refresh token. You can remove Pirsch from your account by navigating to the [Account Permissions](https://myaccount.google.com/permissions) page for your Google account.

Before you can use the integration, add your website to Search Console and verify that you are the owner of your domain. Afterwards, navigate back to the Pirsch dashboard settings page and follow these steps:

1. click on *Continue with Google*, this will redirect you to login with the Google account you would like to use to connect
2. select the account that has access to your property on Google Search Console ![Site Selection](/dashboard/settings-gsc-accounts.png)
3. grant access to your Search Console data ![Site Selection](/dashboard/settings-gsc-permissions.png)
4. confirm the choices on the next screen ![Site Selection](/dashboard/settings-gsc-confirmation.png)
5. after you have been redirected back to the settings page, select the website you would like to pull data from. The list will only show **verified** sites ![Site Selection](/dashboard/settings-gsc-integration.png)
6. navigate to the dashboard and check if you see a new panel *Keywords* with the data from the Search Console

In case you don't see any data, please wait a few hours. The data on Search Console is not updated in real-time, and it might take a while before you see the results.

In case you would like to remove the integration, click on *Unlink Account*.

## Export to CSV

You can export your data for the past 12 months. Click on *Export Data to CSV*, select the statistics you would like to export, start date, end date, and click on *Create CSV File* to begin the download. The statistics are separated into individual CSV files and bundled within a zip archive. Event metadata cannot be exported.

![CSV Export](/dashboard/csv-export.png)
