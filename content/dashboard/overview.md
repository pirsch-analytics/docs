---
title: "Overview"
date: 2021-09-25
draft: false
weight: 1
description: "Get an overview over the dashboard."
---

Pirsch provides a simple, yet powerful dashboard for your website statistics. This article gives an overview of all of its parts and how to use the filter.

## Navigation

On top you will find the navigation. The Pirsch logo will bring you back to the dashboard. You can add a new domain, manage the settings of your currently active website, access resources, and manage your account or log out in the top right corner.

![Navigation](/dashboard/navigation.png)

## Menu

Right below the navigation you will find the website selection, the active visitor count, and the time range filter.

Should you have added more than one website, you can switch between them by clicking on the domain. The dashboard will automatically reload and show the statistics for the new page. The selection works on the settings page too.

To see which pages are viewed right now, click on the active visitors. This will show all pages that have been opened in the past 10 minutes. Note that the number of open pages might be higher than the total visitor count, as they can switch pages within the time period.

![Active Visitors](/dashboard/active-visitors.png)

The time range is set to one week by default. To change it, click on the time range and select a different one from the dropdown, or enter dates. The selection will be saved, so that you can compare different websites for example and still have it in place when you come back later.

![Menu](/dashboard/menu.png)

## Panels

Below the menu, you will find the panels showing different statistics. Some of the panels can be opened to show detailed statistics. To do that, click on the expand icon in the top right corner of the panel. Tables in the detailed view can be sorted by column. Simply click on one of the columns to sort them in ascending or descending order, or to remove the sorting.

![Visitors](/dashboard/visitors.png)

### Page Views, Unique Visitors, and Sessions

The first three panels show the page views, unique visitors, and sessions. If you click on one of them you can enlarge the graph. The panels include the growth rate relative to the previous time range (the past week when the filter is set to the past 7 days for example) and are colored in green, red, or yellow depending on if they have increased, decreased, or remained the same.

Page views and unique visitors are self-explanatory. Sessions tells you the number of recurring visitors for the day, corresponding to a 30-minute time frame.

### Bounce Rate, Average Session Duration, and Unique Visitors Today

The next three panels show the bounce rate, average session duration, and the unique visitor count for today. The bounce rate shows how many visitors have left your website after the landing page. The average session duration is the time visitors spent on your website. If someone bounces, they won't appear in this statistics. The unique visitor count for today works like the unique visitor graph above, but shows how many visitors were on your website at which time of the day.

### Pages, Referrers, Countries, ...

The following panels show various statistics regarding unique visitors.

*Pages* shows how many visitors have visited a single page. Entry and exit pages are the pages visitors use to enter or leave your website. They can be helpful to identify issues with specific sites. When a lot of visitors leave on your checkout page, you might have an issue there.

*Referrers* list all websites a visitor came from. *[UTM parameters]({{<ref "dashboard/utm.md">}})* help you to track marketing campaigns or gain more detailed insight into referrering websites.

*[Conversion Goals]({{<ref "dashboard/conversion-goals.md">}})* list custom created visitor and conversion rate goals.

*Cities* will be displayed when filtering for a country.

A panel will only display the top 10 results, but you can enlarge it to see all results and more details. The *Screen Sizes* panel is only available if you have embedded the [JavaScript snippet]({{<ref "get-started/frontend-integration.md">}}). The [backend integration]({{<ref "get-started/backend-integration.md">}}) does not collect this metric.

![Panels](/dashboard/panels.png)

### Google Keywords From the Search Console

In case you have enabled the Google Search Console integration on the [settings page]({{<ref "settings/general.md">}}) the panel will show the number of clicks, impressions, CTR, and the average search rank for keywords visitors use to find your website on Google.

![Search Console](/dashboard/search-console.png)

## Filters

Filters are stackable. You can select the time range, as described above, and filter by clicking on anything. To select a page for example, click on one of the entries below *Pages*. This also works while the panel is enlarged. After you have selected a page, the dashboard will update itself and show statistics for the page you have selected. To clear all filters, click on the close icon in the green bar at the top or remove filters individually.

![Filter](/dashboard/filter.png)
