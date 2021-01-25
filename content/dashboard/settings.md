---
title: "Settings"
date: 2021-01-25
draft: false
weight: 3
description: "Manage your websites settings and access."
---

To manage your website settings, log in to the dashboard and visit the settings page from the navigation.

## Access

There are multiple ways to manage access to your websites statistics. They always refer to the currently active domain. To give the same person access to two websites for example, you need to add them to both separately.

### Public Access

The *Public Access* and *Access Links* section both give anyone access to your dashboard.

*Public Access* will make your dashboard public to anyone on the subdomain you have chosen when creating the website. An example for this is our live demo on [pirsch.pirsch.io](https://pirsch.pirsch.io/), where the first *pirsch* in the domain is replaced by the one you have configured.

*Access Links* can be used to generate a link which allows anyone who has it to read your dashboard. The advantage over the *Public Access* is that you can delete links to deny access, without interrupting anyone who has a different link.

### Private Access

If you don't want to send out links or make your dashboard public to anyone, you can invite members instead. Click *Invite Member* to add new members to your website and enter all email addresses you would like to invite. The invited members will have to create an account for Pirsch if they don't already have one and accept the invitation.

After the members have joined, they will be able to view all statistics without modifing settings. You can change the member role to give them administrative access to your dashboard, including:

* managing members (not including themselves or you, the owner)
* managing access links
* resetting the identification code
* managing clients

To remove a member, just click on the trash icon.

![Access Management](/dashboard/settings-access.png)

## Email Reports

Send email reports to yourself or external recipients every week, two weeks, three weeks, or once per month. To add email addresses, click on *Add Reports*, enter the recipients and the preferred interval. The report will look something like this:

![Email Report](/dashboard/email-report.png)

Please make sure you only add recipients who want to receive reports.

## Changing the Subdomain

You can change the subdomain for public access by entering a new one and pressing *Save*. Note that the subdomain needs to be available and some subdomains are reserved.

## Resetting the Identifcation Code

The identification code is used for the JavaScript snippet which must be embedded on your page if you decide to use the [website integration]({{< ref "get-started/frontend-integration.md" >}}). Usually, you don't need to change it, but should your identification code get hijacked, you can reset it here. Note that you need to update all pages containing the snippet should you reset it.

## JavaScript Snippet

The snippet for the [website integration]({{< ref "get-started/frontend-integration.md" >}}). This is just here for your convenience.

## Clients

Clients are used to access the [Pirsch API]({{< ref "api-sdks/_index.md" >}}). You will need one if you decide to use the [backend integration]({{< ref "get-started/backend-integration.md" >}}) or to access your data from an external application.

To create a new client, click *Add Client* and enter a description. The next dialog will show the unique client ID and secret, which you should save and treat like a password. Once the dialog is closed, there is no way to view the secret again and you will have to create a new client.

![Clients](/dashboard/settings-client.png)

## Export to CSV

You can export your data for up to the past 12 months. Click on *Export Data to CSV* and select the start date, end date, and the statistics you would like to export. Clicking on *Create CSV File* will start the download. The statistics are separated into individual CSV files and bundled within a zip archive.

![CSV Export](/dashboard/csv-export.png)

## Delete Your Domain

At the bottom of the page you can delete your domain. This action will delete all statistics, access to the dashboard, and free up the subdomain. Note that deleting a domain is permanent, we won't keep any of your data.
